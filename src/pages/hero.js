import React, { useState } from 'react'
import data from "../data.js"
import Button from '../components/Button'
import Header from '../components/Header'
import "./hero.css"

const Hero = () => {
    const [pageData,setPageData] = useState(0)

    const nextPage = ()=>{
            setPageData((prev)=>prev + 1)
    }

    const prevPage = ()=>{
            setPageData((prev)=>prev - 1)
    }
  return (
    <section id='hero'>
        <Header/>
        <div className='hero__img'>
            <img src={data[pageData].imgUrl} alt='furniture'/>
        </div>
        <div className='hero__text'>
            <h1 className='margin__top__2'>{data[pageData].title}</h1>
            <p className='margin__top__2'> {data[pageData].content}
            </p>
            <Button className = 'margin__top__2'/>
        </div>
        <div className='slider'>
            <button onClick={prevPage} disabled = {pageData=== 0}>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
            </button>
            <button onClick={nextPage} disabled = {pageData >=data.length-1}>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
            </button>
        </div>
    </section>
  )
}

export default Hero
