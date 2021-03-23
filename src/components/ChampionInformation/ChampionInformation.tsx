import React, { useEffect, useState } from "react"

//components
import { Button } from "../shared/Button/Button"
import { Table } from "../shared/Table/Table"
import { Link } from "react-router-dom"
//styles
import "./ChampionInformation.scss"
//API
import * as API from "../../api/Seasons"

interface Props {
  param: string
}

export const ChampionInformation = (props: Props) => {
  // console.log(props.param)
  useEffect(() => {
    getChampion()
  }, [props.param])
  async function getChampion() {
    try {
      const res = await API.getChampion(props.param)
      const results = res.MRData.RaceTable.Races[0].Results[0]
      // console.log(results)
      setData([
        {
          Name: results.Driver.givenName + " " + results.Driver.familyName,
          Nationality: results.Constructor.nationality,
          Team: results.Constructor.name,
          Points: results.points
        }
      ])
    } catch (e) {}
  }
  const [data, setData] = useState([
    {
      Name: "",
      Nationality: "",
      Team: "",
      Points: ""
    }
  ])
  // console.log(data)
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
