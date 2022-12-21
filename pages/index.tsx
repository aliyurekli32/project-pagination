import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

import Carousel from '../components/Carousel';
import { useEffect } from 'react';

const Home: NextPage = () => {
  // const Button = classed('button', 'btn bg-green-500 text-white');
  const numberId=12345;
  const getUser=async()=>{
    

    const userData= await fetch(`https://api.github.com/users?since=${numberId}`).then(res=>res.json()).then(data=>console.log(data))

  }
  useEffect(() => {
   
 generalRequest("GET")
  }, []);

  const generalRequest=async(method:string)=> {
    const url = "https://api.github.com/users?since=12";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    console.log(`${method}`);
    if(method==="GET"){

    }
    
     const data=await fetch(url, )
      .then((response) => {
        console.log(response);
        // 1. check response.ok
        if (response.ok) {
          console.log(response.json());
          
          return response.json();
        }
        return Promise.reject(response); // 2. reject instead of throw
      })
      .then((json) => {
        // all good, token is ready
        console.log(json);
      })
      .catch((response) => {
        console.log(response.status, response.statusText);
        // 3. get error messages, if any
        // response.json().then((json: any) => {
        //   console.log(json);
        // })
      });
  }
  
 
  return (
    <>

    </>
  )
}

export default Home
