import React from 'react';
import JumboTron from '../components/Jumbotron/index'
import Card from '../components/Features/index'

const appItems = [
 {
   id: 1,
   name: "Client Intake Forms",
 },
 {
   id: 2,
   name: "eSignature"
 },
 {
   id: 3.,
   name: "Document Management"
 },
 {
   id: 4,
   name: "Client Portal"
 },
 {
   id: 5,
   name: "Billing and Invoicing"
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