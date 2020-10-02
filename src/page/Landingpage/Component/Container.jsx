import React, { Component } from 'react'
import style from '../LandingPage.module.css'
export default class Container extends Component {
  render() {
    return (
      <div>
        {/* ContainerOne */}
        <div className={style.ContainerOne}>
          <div className={style.brandOrganize}>Organize</div>
          <div className={style.imageOrganize}>
            <img src="../../../../public/asset/" alt="" />
          </div>
        </div>

        {/* ContainerTwo */}
        <div className={style.ContainerTwo}>

        </div>

        {/* ContainerThree */}
        <div className={style.ContainerThree}>

        </div>

        {/* ContainerFour */}
        <div className={style.ContainerFour}>

        </div>

        {/* ContainerFive */}
        <div className={style.ContainerFive}>

        </div>

        {/* ContainerSix */}
        <div className={style.ContainerSix}>

        </div>
      </div>
    )
  }
}
