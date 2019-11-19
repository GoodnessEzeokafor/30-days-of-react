import React, { Component } from 'react';

export default class ActivityItem  extends Component {
    render() {
        const {activity} = this.props;
        return (
                <div className="item">
                <div className="avatar">
                    <img 
                        alt={activity.text}
                        src={activity.user.avatar} />
                        {activity.user.name}
                </div>
                <span className="time">
                    {activity.timestamp}
                </span>
                <p>{activity.text}</p>
                <div className="commentCount">
                    {activity.comments.length}
                </div>
              </div>
              
        );
    }
}