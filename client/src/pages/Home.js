import React from 'react';
import JumboTron from '../components/Jumbotron/index'
import Card from '../components/Features/index'
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
        <Card appItems = {appItems}/>
      </div>
  )
}