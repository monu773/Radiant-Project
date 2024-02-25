import React from "react";
import "../style/main_content.sass";
import NavHeader from "@/components/nav_header";
import CardBody from "@/components/card";
import ResponsiveCard from "@/components/responsive_card";

const main_content = () => {
  return (
    <div className="main_contentBody">
      <NavHeader />
      <CardBody
        point={false}
        offer_name="Best Choice"
        cardNo="1"
        main_title="WixPro 72-Inch Responsive Website Builder-"
        text1="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        text2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        rating_no="9.8"
        rating_star="5"
        rating_name="Exceptional"
        image_name="Builder 1"
      />
       <CardBody
        point={false}
        offer_name="Best Value"
        cardNo="2"
        main_title="WixPro 72-Inch Responsive Website Builder-"
        text1="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        text2="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
        rating_no="9.5"
        rating_star="4.5"
        rating_name="Excellent"
        image_name="Builder"
      />
       <CardBody
        point={false}
        cardNo="3"
        main_title="WixPro 72-Inch Responsive Website Builder-"
        text1="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        text2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        rating_no="9.3"
        rating_star="5"
        rating_name="Exceptional"
        image_name="Builder 1"
      />
       <CardBody
        point={true}
        cardNo="4"
        main_title="WixPro 72-Inch Responsive Website Builder-"
        text1="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        text2=""
        rating_no="9.1"
        rating_star="4"
        rating_name="Very Good"
        image_name="CDK"
      />
      <h1 className="heading2">Related deals you might like for</h1>
      <div className="secondary_cardBox">
        <ResponsiveCard />
        <ResponsiveCard />
        <ResponsiveCard />
      </div>
      <div className="signUp_box">
        <p>Sign up and get exclusive special deals</p>
        <div className="sign_inside">
          <input className="signUp_input" type="text" />
          <div className="sign_button">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default main_content;
