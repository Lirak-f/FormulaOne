import React from "react"
import cs from "classnames"

//styles
import "./Button.scss"
import { Icon } from "../Icon/Icon"

export const Button = (props: any) => {
  const classNames = cs("Button", props.className)
  return (
    <div className={classNames}>
      <button className="Button__details">Details</button>
      <Icon className="Button__icon" icon="arrow" />
    </div>
  )
}
