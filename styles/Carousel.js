import { css, cx } from '@linaria/core';

export const pic_ctn=css`

    position: relative;
    width: 40%;
    height: 400px;
    margin-top: 1vh;
    z-index: 2;
  
  
  img {
    position: absolute;
    top: 0;
    left: calc(80%);
    opacity: 0;
    animation: display 20s infinite;
  }
  
  img:nth-child(2) {
    animation-delay: 4s;
  }
  img:nth-child(3) {
    animation-delay: 8s;
  }
  img:nth-child(4) {
    animation-delay: 12s;
  }
  img:nth-child(5) {
    animation-delay: 16s;
  }
  @keyframes display {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }
    10% {
      transform: translateX(0);
      opacity: 1;
    }
    20% {
      transform: translateX(0);
      opacity: 1;
    }
    30% {
      transform: translateX(-100px);
      opacity: 0;
    }
    100% {
      transform: translateX(-100px);
      opacity: 0;
    }
  }

`;  
  
  
  