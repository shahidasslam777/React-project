import React from 'react'
import './headercss.css';

export default function header() {
  return (
    <div>
        <div className="navbar">
            <div className="nav-logo">
                <div className="logo"></div>
            </div>
            <div className="nav-add">
                <a href="/about"><p className="add-first">ABOUT US</p></a>
            </div>
            <div className="nav-add">
                <p className="add-first">CAREER</p>
            </div>
            <div className="nav-add">
                <p className="add-first">LOCATIONS</p>
            </div>
            <div className="nav-add">
                <p className="add-first">SERVICS</p>
            </div>
            <div className="nav-add">
                <p className="add-first">PORTFOLIO</p>
            </div>
            <div className="button">
                <button >CONTACT US</button>
            </div>
        </div>
    </div>
  )
}
