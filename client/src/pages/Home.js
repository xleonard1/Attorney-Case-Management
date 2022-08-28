import React from 'react';
import JumboTron from '../components/Jumbotron/index'
import Features from '../components/Features/index'
import Highlights from '../components/Highlights'
import {BsFillFileEarmarkTextFill, BsFillPenFill, BsFillFilePersonFill, BsFillWalletFill, BsBookHalf } from "react-icons/bs";

const appItems = [
 {
   id: 1,
   name: "Client Intake Forms",
   icon: <BsFillFileEarmarkTextFill />
 },
 {
   id: 2,
   name: "eSignature",
   icon: <BsFillPenFill /> 
 },
 {
   id: 3.,
   name: "Document Management",
   icon: <BsBookHalf />
 },
 {
   id: 4,
   name: "Client Portal",
   icon: <BsFillFilePersonFill />
 },
 {
   id: 5,
   name: "Billing and Invoicing",
   icon: <BsFillWalletFill  />
 }
]

export default function Home () {
  return (
      <div className="container">
        <JumboTron />
        <div className='features' style={{marginTop: '80px', marginBottom: '100px'}}>
        <Features appItems = {appItems}/>
        </div>
        <div className='highlights' style={{marginTop: '80px', marginBottom: '100px'}}>
        <Highlights />
        </div>
      </div>
  )
}