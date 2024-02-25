import React from "react";
import "../style/nav_header.sass";
import { CiCircleCheck } from "react-icons/ci";
import { GoInfo } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const nav_header = () => {
  return (
    <div className="main_navBody">
      <h1 className="nav_title">Best Website builders in the US</h1>
      <hr />
      <div className="nav_textBody">
        <div className="nav2">
          <h3 className="nav_text"><CiCircleCheck fontSize={20} style={{marginRight: '6px'}} />Last Updated - February 22, 2020</h3>
          <h3 className="nav_text"> <GoInfo fontSize={20} style={{marginRight: '6px'}} />Advertising Disclosure</h3>
        </div>
        <h3 className="nav_text">Top Relevant <MdOutlineKeyboardArrowDown fontSize={20} style={{marginLeft: '6px'}} />
</h3>
      </div>
      <hr />
      <div className="nav_tag">
        <div className="tag_name">Tools</div>
        <div className="tag_name">AWS Builder</div>
        <div className="tag_name">Start Build</div>
        <div className="tag_name">Build Supplies</div>
        <div className="tag_name">Tooling</div>
        <div className="tag_name">BlueHosting</div>
      </div>
      <div className="nav_link">
        <p>Home &gt;</p>
        <p>Hosting for all &gt;</p>
        <p>Hosting &gt;</p>
        <p>Hosting6 &gt;</p>
        <p>Hosting5</p>
      </div>
    </div>
  );
};

export default nav_header;
