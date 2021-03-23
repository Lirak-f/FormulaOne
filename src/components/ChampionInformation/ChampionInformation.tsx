import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//components
import { Button } from "../shared/Button/Button"
import { Table } from "../shared/Table/Table"
//styles
import "./ChampionInformation.scss"

export const ChampionInformation = () => {
  const [data, setData] = useState<any>([
    { Name: "Abc", Age: 15, Location: "Bangalore" }
  ])
  useEffect(() => {
    setData([
      {
        Name: "Lewis Hamilton",
        Nationality: "British",
        Team: "Bangalore",
        Points: "205"
      }
    ])
  }, [])
  return (
    <div className="ChampionInformation">
      <p className="ChampionInformation__year">2011</p>
      <p className="ChampionInformation__champion">Champion</p>
      <Table data={data} className="ChampionInformation__table" />
      <Link to="/drivers/alonso">
        <Button className="ChampionInformation__button" />
      </Link>
    </div>
  )
}
