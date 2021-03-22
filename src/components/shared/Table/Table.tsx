import React from "react"

//components
import { Button } from "../../shared/Button/Button"
import { Link } from "react-router-dom"
//styles
import "./Table.scss"

export const Table = (props: any) => {
  const getKeys = () => {
    return Object.keys(props.data[0])
  }

  const getHeader = () => {
    let keys = getKeys()
    return (
      <>
        {keys.map((key: any, index: any) => {
          return <th key={key}>{key.toUpperCase()}</th>
        })}
        {props.button && <th> </th>}
      </>
    )
  }
  const RenderRow = (props: any) => {
    return props.keys.map((key: any, index: any) => {
      return <td key={props.data[key]}>{props.data[key]}</td>
    })
  }

  const getRowsData = () => {
    let items = props.data
    let keys = getKeys()
    return items.map((row: any, index: any) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
          {props.button ? (
            <td>
              <Link to="drivers/alonso">
                <Button className="button" />
              </Link>
            </td>
          ) : null}
        </tr>
      )
    })
  }
  return (
    <table className={props.className}>
      <thead>
        <tr>{getHeader()}</tr>
      </thead>
      <tbody>{getRowsData()}</tbody>
    </table>
  )
}
