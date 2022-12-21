import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

import Carousel from '../components/Carousel';
import { useEffect, useState } from 'react';
import { isString } from 'util';

const Home: NextPage = () => {
  // const Button = classed('button', 'btn bg-green-500 text-white');
  
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  const getUser=async(numberId:number)=>{
    

    const userData= await fetch(`https://api.github.com/users?since=${numberId}`).then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err))

  }
  const totalPage=data.length;
  
  let pageNumbers:number[]=[];
  for(let i=0;i<data.length;i++){
    pageNumbers=[...pageNumbers,i+1]
  }
  useEffect(() => {
   
 getUser(Math.ceil(Math.random()*100000))
  }, []);

  data.length >0 ? console.log(data) : "";
  const handlePage=(e)=>{
    console.log( page);
    
    if(e.target.value < 27 && typeof +(e.target.value) === 'number' && !(isNaN(Number(e.target.value)))){
      
      setPage(e.target.value)
    }
      
  }
 
  return (
    <>


    <div className='container text-center m-5 p-5' >
    

    <div className="btn-group">
    <button onClick={(e)=>handlePage(e)} value="Before" className="btn">Before</button>
    <button onClick={(e)=>handlePage(e)} value={+page} className="btn">{+page}</button>
    <button onClick={(e)=>handlePage(e)} value={+page+1} className="btn">{+page+1}</button>
    <button onClick={(e)=>handlePage(e)} value={+page+2} className="btn">{+page+2}</button>
    <button onClick={(e)=>handlePage(e)} className="btn ">...</button>
    <button onClick={(e)=>handlePage(e)} value={+totalPage} className="btn">{+totalPage}</button>
    <button onClick={(e)=>handlePage(e)} value="Next" className="btn">Next</button>
  </div>
    </div>
 
    </>
  )
}

export default Home
