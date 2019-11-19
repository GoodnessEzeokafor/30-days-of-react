import React, { Component } from 'react';

export default class  extends Component {
    render() {
        return (
            <div className="header">
                {/* <div className="fa fa-more"></div>
                 */}
                 <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                 </div>
                <span className="title">{this.props.title}</span>
                <input 
                type="text"
                className="searchInput"
                placeholder="Search ..."/>
                <div className="fa fa-search searchIcon"></div>
            </div>           
        );
    }
}