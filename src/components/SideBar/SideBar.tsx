import React from "react"

//styles
import "./SideBar.scss"
//icons
import { Icon } from "../shared/Icon/Icon"

export const SideBar = () => {
  return (
    <div className="SideBar">
      <Icon className="SideBar__logo" icon="logo" />
      <p className="SideBar__f1championships">F1 CHAMPIONSHIPS</p>
      <p className="SideBar__years">YEARS</p>
      <ul className="SideBar__list">
        <li className="SideBar__list_item">2009</li>
        <li className="SideBar__list_item">2010</li>
        <li className="SideBar__list_item SideBar__arrow">2011</li>
      </ul>
    </div>
  )
}
