import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

import Carousel from '../components/Carousel';
import { useEffect, useState } from 'react';


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
   
 getUser(Math.ceil(Math.random()*10000))
  }, []);

  data.length >0 ? console.log(data) : "";
  const handlePage=(e,i=0)=>{
    if(i!==0){
      setPage(i)
    }
    if(e.target.value==="Before" && page>1){
        setPage(page-1)
    }else if(e.target.value==="Next" && page<30){
      setPage(page-0+1)
    }
    
    if(e.target.value < 27 && typeof +(e.target.value) === 'number' && !(isNaN(Number(e.target.value)))){
      
      setPage(e.target.value)
    }
      
  }
 
  return (
    <>
  <div className='mt-24' ></div>

    <div className='container text-center p-5' >
    

    <div className="btn-group">
    <button onClick={(e)=>handlePage(e)} value="Before" className="btn">Before</button>
   {page<30 && <button onClick={(e)=>handlePage(e)} value={+page} className="btn">{+page}</button>} 
   {page<29 && <button onClick={(e)=>handlePage(e)} value={+page+1} className="btn">{+page+1}</button>} 
   {page<28 && <button onClick={(e)=>handlePage(e)} value={+page+2} className="btn">{+page+2}</button>} 
    
    <div className="dropdown !rounded-none">
  <label tabIndex={0} className="btn !rounded-none ">...</label>
  <ul tabIndex={0} className="dropdown-content  !rounded-none menu shadow bg-base-100 overflow-scroll h-40 w-16 block">
   {pageNumbers.map((i)=>{
    return(
        <li ><a  onClick={(e)=>handlePage(e,i)}  >{i}</a></li>
    
      
    )
   })}
    
  </ul>
</div>
        
    
    <button onClick={(e)=>handlePage(e)} value={+totalPage} className="btn">{+totalPage}</button>
    <button onClick={(e)=>handlePage(e)} value="Next" className="btn">Next</button>
  </div>
    </div>
 
    </>
  )
}

export default Home
