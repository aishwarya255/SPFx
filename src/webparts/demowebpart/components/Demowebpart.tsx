import * as React from 'react';
import  './Demowebpart.module.scss';
import { IDemowebpartProps } from './IDemowebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

import * as Add2Calendar from "add2calendar"
import 'add2calendar/css/add2calendar.css'
import { render } from 'react-dom/cjs/react-dom.development';
import './index.css';


export default class Demowebpart extends React.Component<IDemowebpartProps, {}> {
   componentDidMount () {
   
    const singleEvent = new Add2Calendar({
      title: 'Event Title',
      start: 'May 17, 2021 09:00',
      end: 'May 17, 2021 10:00',
      location: 'India, Kerala',
      description: 'Event description'
    })
   
    singleEvent.createWidget('#single-normal')
  }


  render(){
     

    
  return (

    <div>
        
    <div className='boder1'>
    <div className="title">Event_Management</div>
    <div className="title1">Chose your favourite calendar</div>
    <div className='boder'>
    <div id ="single-normal"></div>
    </div></div>
  
    </div>   
);
   }
  }








 


