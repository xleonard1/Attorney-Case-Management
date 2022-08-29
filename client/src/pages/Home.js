import React from 'react';
import JumboTron from '../components/Jumbotron/index'
import Features from '../components/Features/index'
import Highlights from '../components/Highlights'
import appItems from '../utils/items'




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