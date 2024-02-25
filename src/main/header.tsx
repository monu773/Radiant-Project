import React from "react";
import "../style/header.sass";
import { CiSearch } from "react-icons/ci";

const header = () => {
  return (
    <div className="header">
      <div className="main_content">
        <div className="search_box">
            <CiSearch fontSize={24} style={{position: "absolute", left: "2%"}} />
            <input className="search_bar" type="text" />
        </div>
          <h2 className="header_text">Categories</h2>
          <h2 className="header_text">Website Builders</h2>
          <h2 className="header_text">Today's deals</h2>
      </div>
    </div>
  );
};

export default header;
