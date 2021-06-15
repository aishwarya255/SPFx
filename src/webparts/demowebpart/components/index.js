
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Add2Calendar from "add2calendar"
import React from 'react'
import 'add2calendar/css/add2calendar.css'
import { render } from 'react-dom/cjs/react-dom.development';


export default class Add2CalendarComponent extends React.Component {
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

    render() {
    return (
      <div id="single-normal"></div>
    );
  }
}

render(
  <div className='boder1'>
  <div className="title">Event_Management</div>
  <div className="title1"><marquee direction="right">Chose your favourite calendar</marquee></div>
  <div className='boder'>
<Add2CalendarComponent /></div></div>,document.querySelector('#root')); 


  
 



