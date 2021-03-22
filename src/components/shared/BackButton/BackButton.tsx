import React from "react"
import cs from "classnames"

//styles
import "./BackButton.scss"
import { Icon } from "../Icon/Icon"

export const BackButton = (props: any) => {
  const classNames = cs("BackButton", props.className)
  return (
    <div className={classNames}>
      <Icon className="BackButton__icon" icon="arrow" />
      <button className="BackButton__back">Back</button>
    </div>
  )
}
