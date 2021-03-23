import React, { useEffect, useState } from "react"
//components
import { Table } from "../shared/Table/Table"

//styles
import "./SeasonResults.scss"
import * as API from "../../api/Seasons"
interface Props {
  param: string
}
interface Data {}
export const SeasonResults = (props: Props) => {
  const [data, setData] = useState([
    {
      Name: "Lewis Hamilton",
      Nationality: "British",
      Team: "Bangalore",
      Points: "205"
    }
  ])
  useEffect(() => {
    getChampion()
  }, [props.param])
  async function getChampion() {
    try {
      const res = await API.getChampion(props.param)
      const results = res.MRData.RaceTable.Races[0].Results
      console.log(results)
      // setData([
      //   {
      //     Name:
      //     Nationality:
      //     Team:
      //     Points:
      //   }
      // ])
      // setData(results)
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
