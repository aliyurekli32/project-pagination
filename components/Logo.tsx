import React from "react";
import { styled } from "@linaria/react";
import { css, cx } from "@linaria/core";


const Logo = () => {
  
  return (<>
      <Logom>
        
      <div className={"pelogo max-lg:!hidden"}>İrfan Yüreklİ</div>
      <div className={"pelogo lg:!hidden"}>İY</div>
      <div className={"loader1"}></div>
      <div className={"loader2"}></div>
      <div className={"loader3"}></div>
      <div className={"loader4"}></div>
      </Logom>
 
      {/*  */}
    
 
    
  </>)
};

export default Logo;
const Logom=styled.div`


display:block;
position:absolute;
top:50%;
left:5%;
width:234px;
height:34px;
margin-left:-17px;
margin-top:-17px;
background-color: transparent;
/*   overflow:hidden; */
transition:background-color 500s;
cursor:pointer;


.pelogo{
display: block;
position: absolute;
left: 2px;
top: 2px;
width: 230px;
height: 30px;
/* background: #34324b; */
border-radius: 5px;
/* background: -moz-linear-gradient(-45deg, #34324b 0%, #161222 100%);
background: -webkit-linear-gradient(-45deg, #34324b 0%,#161222 100%);
background: linear-gradient(135deg, #34324b 0%,#161222 100%); */
background-size: contain;
font-family: Trebuchet MS, sans-serif;
font-size: 25px;
font-weight: bold;
color: #3ebffa;
text-align: center;
line-height: 33px;
}



/*Pretty complex animation, so each side needs its own @keyframes.*/

@keyframes slide1{
50%{width:232px; margin-left:0;}
100%{margin-left:232px;}
}

@keyframes slide2{
50%{height:32px; margin-top:0;}
100%{margin-top:32px;}
}

@keyframes slide3{
50%{width:232px; margin-right:0;}
100%{margin-right:232px;}
}

@keyframes slide4{
50%{height:32px; margin-bottom:0}
100%{margin-bottom:32px;}
}

@media only screen and (max-width: 1024px) {
  width: 34px;
  left:50%;
  .pelogo{
    width: 30px;  
  }
  @keyframes slide1{
50%{width:32px; margin-left:0;}
100%{margin-left:32px;}
}
@keyframes slide3{
50%{width:32px; margin-right:0;}
100%{margin-right:32px;}
}
}

.loader1{
display:block;
position:absolute;
background-color:#3ebffa;
left:2px; top:0; height:2px; width:0; 
animation: slide1 2s linear forwards infinite 
}
.loader2{
display:block;
position:absolute;
background-color:#3ebffa;
right:0; top:2px; width:2px; height:0; animation:slide2 2s linear forwards infinite; animation-delay:1s
}
.loader3{
display:block;
position:absolute;
background-color:#3ebffa;
right:2px; bottom:0; height:2px; width:0; animation:slide3 2s linear forwards infinite
}
.loader4{
display:block;
position:absolute;
background-color:#3ebffa;
left:0; bottom:2px; width:2px; height:0; animation:slide4 2s linear forwards infinite; animation-delay:1s
}


`; 

