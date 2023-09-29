import React from 'react'
import FruitsCard from './FruitsCard'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import strawberry_img from "../Image/f1.png"
import apple_img from "../Image/f8.png"
import banana_img from "../Image/f9.png"
import pine_img from "../Image/f6.png"

export default function Fruits() {
  return (
    <div className='mb-5' >
      <span  className='d-flex justify-content-between mb-5 '>

        <h3 className='ms-lg-5 ps-lg-4 '>Fresh Fruits For You</h3>
        <Link to="/product" className='me-lg-5 pe-lg-4 text-danger fw-bold  mt-3 text-decoration-none' >Sell more item</Link>
      </span>
        <div className='d-flex justify-content-center flex-wrap'>
        <FruitsCard title="strawberry" category={"Fruits"} price={200} image={strawberry_img}/>
        <FruitsCard title="Banana" category={"Fruits"} price={50} image={banana_img}/>
        <FruitsCard title="Apple" category={"Fruits"} price={100} image={apple_img}/>
        <FruitsCard title="Pomegr.." category={"Fruits"} price={300} image={pine_img}/>
        </div>
    </div>
  )
}


// const DIV = styled.div`
//   @media screen {
    
//   }
// `