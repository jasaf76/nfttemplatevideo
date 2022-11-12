import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//----IMPORT ICONS------------
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
// INTERNAL IMPORT
import Style from "Navbar.module.css";
import { Discover, HelpCenter, Notification, Profile, Sidebar } from "./index";
import { Button } from "../componentindex";
import images from "../../img";

const Navbar = () => {
  //---UseState--------------------COMPONENTS--------------------------------
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Hilfe Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };
  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setProfile(false);
      setDiscover(false);
      setHelp(false);
    } else {
      setNotification(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="NFT Suchen" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        //END OF LEFT SECTION___
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/*DISCOVER MENU*/}
            <p
              onClick={(e) => {
                openMenu(e);
              }}>
              Discover
            </p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* HelpCenter MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Hilfe Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* NOTIFICATIONS */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>
          {/*CREATE BUTTON SECTION___*/}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Erstellen" />
          </div>
          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Styles.navbar_container_right_profile}
              />
              {profile && <Profile/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;