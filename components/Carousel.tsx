import React from "react";
import {pic_ctn} from  "../styles/Carousel.js";
import { css, cx } from '@linaria/core';

const Carousel = () => {
  
  
  return <>
  <div className={cx(pic_ctn)}>
    <img src="https://picsum.photos/600/400?t=1" alt="" />
    <img src="https://picsum.photos/600/400?t=2" alt="" />
    <img src="https://picsum.photos/600/400?t=3" alt="" />
    <img src="https://picsum.photos/600/400?t=4" alt="" />
    <img src="https://picsum.photos/600/400?t=5" alt="" />
  </div>
  </>;
};

export default Carousel;
