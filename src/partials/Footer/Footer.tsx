import React from "react"

//styles
import "./Footer.scss"
import { Icon } from "../../components/shared/Icon/Icon"

export const Footer = () => {
  return (
    <div className="Footer">
      <Icon className="Footer__logo" icon="logo-black" />
      <div className="Footer__signature">
        <Icon className="Footer_logokutia" icon="Group 2" />
        <p className="Footer_kutia">DESIGNED BY KUTIA</p>
      </div>
    </div>
  )
}
