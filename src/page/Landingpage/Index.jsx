import React, { Component } from 'react'
import Container from './Component/Container'
import Navbar from './Component/Navbar'
import style from './LandingPage.module.css'

export default class Index extends Component {
  render() {
    return (
      <div className={style.container}>
        <Navbar />
        <Container />
      </div>
    )
  }
}
