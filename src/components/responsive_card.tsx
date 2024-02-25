import React from 'react'
import "../style/responsive_card.sass";
import MainImage from "../../public/main.png"

const responsive_card = () => {
  return (
      <div className='responsiveCard_body'>
        <div className='image_box'>
            <img src={MainImage.src} alt="" />
        </div>
        <div className='secondary_box'>
            <div className='tag_box'>
                <div className='tag'>20% Off</div>
                <div className='tag'>Limited time</div>
            </div>
            <div className='title'>Webbuilder 1</div>
            <p className='second_title'>Computer  Modern clasic with wix support</p>
            <div className='price_box'><p className='price'>$39.96</p><p className='second_price'>$49.96</p><p className='third_price'>(20% Off)</p></div>
            <button>View Deal</button>
        </div>
      </div>
  )
}

export default responsive_card
