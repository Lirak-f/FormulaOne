import React, { useEffect, useState } from "react"
//components
import { Table } from "../shared/Table/Table"
import { transformData } from "../../lib/helpers/transformData"

//styles
import "./SeasonResults.scss"
import * as API from "../../api/Seasons"

interface Props {
  param: string
}

export const SeasonResults = (props: Props) => {
  const [data, setData] = useState([
    {
      name: "",
      points: "",
      nationality: "",
      team: ""
    }
  ])
  // console.log(data)
  useEffect(() => {
    getChampion()
  }, [props.param])

  async function getChampion() {
    try {
      const res = await API.getChampion(props.param)
      const results = res.MRData.RaceTable.Races[0].Results

      const transformedData = transformData(results)
      // console.log(transformedData)
      // console.log(results)
      setData(transformedData)
    } catch (e) {}
  }

  return (
    <div className="SeasonResults">
      <p className="SeasonResults__winners">Winners</p>
      <Table className="SeasonResults__table" button data={data} />
    </div>
  )
}

{
  /*<table className="SeasonResults__table">*/
}
{
  /*  <thead>*/
}
{
  /*    <tr>*/
}
{
  /*      <th>NAME</th>*/
}
{
  /*      <th>NATIONALITY</th>*/
}
{
  /*      <th>TEAM</th>*/
}
{
  /*      <th>POINTS</th>*/
}
{
  /*      <th></th>*/
}
{
  /*    </tr>*/
}
{
  /*  </thead>*/
}
{
  /*  <tbody>*/
}
{
  /*    <tr>*/
}
{
  /*      <td>Lewis Hamilton</td>*/
}
{
  /*      <td>British</td>*/
}
{
  /*      <td>Mercedes</td>*/
}
{
  /*      <td>205</td>*/
}
{
  /*      <td>*/
}
{
  /*        <Button className="SeasonResults__button" />*/
}
{
  /*      </td>*/
}
{
  /*    </tr>*/
}
{
  /*    <tr>*/
}
{
  /*      <td>Lewis Hamilton</td>*/
}
{
  /*      <td>British</td>*/
}
{
  /*      <td>Mercedes</td>*/
}
{
  /*      <td>205</td>*/
}
{
  /*      <td>*/
}
{
  /*        <Button className="SeasonResults__button" />*/
}
{
  /*      </td>*/
}
{
  /*    </tr>*/
}
{
  /*    <tr>*/
}
{
  /*      <td>Lewis Hamilton</td>*/
}
{
  /*      <td>British</td>*/
}
{
  /*      <td>Mercedes</td>*/
}
{
  /*      <td>205</td>*/
}
{
  /*      <td>*/
}
{
  /*        <Button className="SeasonResults__button" />*/
}
{
  /*      </td>*/
}
{
  /*    </tr>*/
}
{
  /*  </tbody>*/
}
{
  /*</table>*/
}
