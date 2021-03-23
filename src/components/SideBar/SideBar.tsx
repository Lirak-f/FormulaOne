import React from "react"

//styles
import "./SideBar.scss"
//icons
import { Icon } from "../shared/Icon/Icon"

export const SideBar = () => {
  return (
    <div className="SideBar">
      <Icon className="SideBar__logo" icon="logo" />
      <p className="SideBar_f1championships">F1 CHAMPIONSHIPS</p>
      <p className="SideBar_years">YEARS</p>
      <ul className="SideBar_list">
        <li className="SideBar_list_item">2009</li>
        <li className="SideBar_list_item">2010</li>
        <li className="SideBar_list_item SideBar_arrow">2011</li>
      </ul>
    </div>
  )
}
