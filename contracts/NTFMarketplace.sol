// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

//INTERNAL IMPORT FOR NFT OPENZIPLINE

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itmesSold;

    uint256 listingPrice = 0.0015 ether;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    event idMarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );
    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "nur der Besitzer des Marketplace kann die Preise aender"
        );
        _;
    }

    constructor() ERC721("NFT Metavarse", "MYNFT") {
        owner == payable(msg.sender);
       
    }
    function updateListingPrice(uint256 _ListingPrice)
        public
        payable
        onlyOwner
        
    {
        listingPrice = _ListingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // Let create "CREAT NFT TOKEN FUNCTION"

    function createToken(string memory tokenURI, uint256 price)
        public
        payable
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarektItem(newTokenId, price);

        return newTokenId;
    }

    //CREATING MARKET ITEMS
    function createMarektItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Der preis muss mindenstens 1 sein");
        require(
            msg.value == listingPrice,
            "Der preis muss gleich mit der listing Price"
        );

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );
        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId, address(this), owner, price, false);
    }

    // FUNCTION FOR RESALE TOKEN
    function ReSellToken(uint256 tokenId, uint256 price) public payable {
        require(
            idMarketItem[tokenId].owner == msg.sender,
            "nur der Besitzer des Tokens kann diesen Vorgang durchfeuhren"
        );
        require(
            msg.value == listingPrice,
            "Der preis muss gleich mit der listing Price"
        );

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itmesSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    //FUNCTION CRATEMARKETSALE

    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idMarketItem[tokenId].price;

        require(
            msg.value == price,
            "Bitte geben Sie die Preisvorstellung an, damit der Kauf abgeschlossen werden kann."
        );

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0));

        _itmesSold.increment();

        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    //GETTING UNSOLD NFT DATA

    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itmesSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;

                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //PURCHASE ITEM
    function fetchMyNFT() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
    //SINGLE USER ITEMS
    function fetchItemListed() public view returns(MarketItem[] memory){
      uint256 totalCount = _tokenIds.current();
      uint256 itemCount = 0;
      uint256 currentIndex = 0;

      for (uint256 i = 0; i < totalCount; i++) {	
        if(idMarketItem[i + 1].seller == msg.sender){
          itemCount += 1;
        }
      }
      MarketItem[] memory items = new MarketItem[](itemCount);
      for(uint256 i = 0; i < itemCount; i++){
        if(idMarketItem[i+1].seller == msg.sender){
          uint256 currentId = i +1;

          MarketItem storage currentItem = idMarketItem[currentId];
          items[currentIndex]= currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }
}
