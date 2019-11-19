import React, { Component } from 'react';
import Header from './Header'
import Content from "./Content";
import  "./App.css";


export default class  extends Component {

  render() {
    const activities = [
      {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
          id: 1, name: 'Nate',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
      },
      {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
          id: 2, name: 'Ari',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
       },
      ]
    return (
      <div className="demo">
      <div className="notificationsFrame">
        <div className="panel">
        {/* content goes here */}
        <Header title="Your Timeline"/>
        
        <Content activities={activities} />
        </div>
        </div>
      </div>
    );
  }
}