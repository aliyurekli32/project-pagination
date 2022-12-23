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
    

    const userData= await fetch(`https://api.github.com/users?since=${numberId}&per_page=90`).then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err))

  }
  const totalPage=data.length/3;
  
  let pageNumbers:number[]=[];
  for(let i=0;i<(data.length/3);i++){
    pageNumbers=[...pageNumbers,i+1]
  }
  useEffect(() => {
   console.log('object');
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
    
    if(e.target.value < 31 && typeof +(e.target.value) === 'number' && !(isNaN(Number(e.target.value)))){
      
      setPage(e.target.value)
    }
      
  }
 const filteredData=data.filter((item,index)=>{
  if((page-1)*3===index || ((page-1)*3)+1===index || ((page-1)*3)+2===index){
    return item
  }
});
console.log(filteredData);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  return (
    <>
  <div className='mt-24' ></div>

    <div className='container text-center p-5' >
      <div>
      {filteredData.map((i:any)=>{
      return(<>
              <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='w-[400px] h-[400px]' src={i.avatar_url} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title mx-auto uppercase">{i.login}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
      </>)
    })}
      </div>
    

    <div className="btn-group">
    <button onClick={(e)=>handlePage(e)} value="Before" className="btn">Before</button>
   {page<30 && <button onClick={(e)=>handlePage(e)} value={+page} className="btn bg-red-900 hover:bg-red-700">{+page}</button>} 
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
        
    
    <button onClick={(e)=>handlePage(e)} value={+totalPage} className={`btn ${page===30 ? "bg-red-900 hover:bg-red-700" : ""}`}>{+totalPage}</button>
    <button onClick={(e)=>handlePage(e)} value="Next" className="btn">Next</button>
  </div>
    </div>
 
    </>
  )
}

export default Home
