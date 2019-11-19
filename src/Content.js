import React, { Component } from 'react';
import ActivityItem from "./ActivityItem";

export default class Content extends Component {
    render() {
    const {activities} = this.props;
        return (
          <div className="content">
              <div className="link"></div>
              {/* timeline item */}
              {activities.map((activity) => (
                  <ActivityItem activity={activity} />
              ))}
          </div>  
        );
    }
}