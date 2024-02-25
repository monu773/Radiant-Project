import React from "react";
import "../style/card.sass";
import MainImage from "../../public/main.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { GrTrophy } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { IoMdStarHalf } from "react-icons/io";

interface cardProps {
  cardNo: string;
  offer_name?: string;
  main_title: string;
  text1: string;
  text2: string;
  rating_no: string;
  rating_star: string;
  image_name: string;
  point?: boolean;
  rating_name: string;
}

const card = (props: cardProps) => {
  const {
    cardNo,
    offer_name,
    text1,
    text2,
    rating_no,
    rating_star,
    point,
    image_name,
    main_title,
    rating_name
  } = props;
  return (
    <div className="card_body">
      {offer_name && (
        <div className="card_offer">
          {offer_name == "Best Value" ? (
            <IoDiamondOutline fontSize={20} style={{ marginRight: "6px" }} />
          ) : (
            <GrTrophy fontSize={20} style={{ marginRight: "6px" }} />
          )}
          {offer_name == "Best Value" ? "Best Value" : "Best Choice"}
        </div>
      )}
      <div className="card_no">{cardNo}</div>
      <div className="card_image">
        <img src={MainImage.src} alt="" />
        <p>{image_name}</p>
      </div>
      <div className="card_mainContent">
        <div>
          <p>
            <span className="text_bold">{main_title}</span>
            {text1}
          </p>
          <p className="main_high" style={{ fontWeight: 700 }}>
            Main highlights
          </p>
          {text2 && <p style={{ paddingLeft: "20px" }}>{text2}</p>}
          {point && (
            <div className="points_table">
              <div className="inside_points">
                <div className="inside_rating">9.9</div>
                <p>building responsive</p>
              </div>
              <div className="inside_points">
                <div className="inside_rating">8.9</div>
                <p>Cool</p>
              </div>
              <div className="inside_points">
                <div className="inside_rating">8.9</div>
                <p>Docs</p>
              </div>
            </div>
          )}
        </div>
        {point && (
          <div>
            <p style={{ fontWeight: 400, marginBottom: "10px" }}>
              Why we love it
            </p>
            <div className="circle_content">
              <div className="circle_box">
                <IoMdCheckmark color="#0855A1" />
              </div>
              Documentation
            </div>
            <div className="circle_content">
              <div className="circle_box">
                <IoMdCheckmark color="#0855A1" />
              </div>
              Easy Use
            </div>
            <div className="circle_content">
              <div className="circle_box">
                <IoMdCheckmark color="#0855A1" />
              </div>
              Out of box
            </div>
          </div>
        )}
        <p className="show_more">
          Show more
          <MdOutlineKeyboardArrowDown
            fontSize={20}
            style={{ marginLeft: "6px" }}
          />
        </p>
      </div>
      <div className="card_rating">
        <div className="rating_box">
          <h1>{rating_no}</h1>
          <p>{rating_name}</p>
          <p className="star_box">
            {rating_star === "5" ? (
              <>
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
              </>
            ) : rating_star === "4" ? (
              <>
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <CiStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
              </>
            ) : (
                <>
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStar
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
                <IoMdStarHalf
                  fontSize={11}
                  color="#FFB80F"
                  style={{ marginRight: "1px" }}
                />
              </>
            )}
          </p>
        </div>
        <button>View</button>
      </div>
    </div>
  );
};

export default card;
