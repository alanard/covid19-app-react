import React, { Component } from 'react'
import style from '../LandingPage.module.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className={style.navbar}>
        <div className={style.brandTitle}><span>C</span>ovid</div>
        <div className={style.item}>
          <div className={style.content}>Home</div>
          <div className={style.content}>About</div>
          <div className={style.content}>Appointment</div>
          <div className={style.content}>Blog</div>
          <div className={style.content}>Contact</div>
        </div>
      </div>
    )
  }
}
