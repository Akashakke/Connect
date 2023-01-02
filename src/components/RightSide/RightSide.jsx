import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ProfileModal from "../ProfileModal/ProfileModal";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to={'../home'}>
        <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/address-blue-casa-circle-home-house-local-icon-45797.png' alt="" />
        </Link>
        
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}
          >
          
        Share
      </button>
      <ShareModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
    </div>
  );
};

export default RightSide;