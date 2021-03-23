import React, { useEffect, useState } from "react"
//components
import { Table } from "../shared/Table/Table"

//styles
import "./SeasonResults.scss"

export const SeasonResults = () => {
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
      },
      {
        Name: "Lewis Hamilton",
        Nationality: "British",
        Team: "Bangalore",
        Points: "205"
      },
      {
        Name: "Lewis Hamilton",
        Nationality: "British",
        Team: "Bangalore",
        Points: "205"
      }
    ])
  }, [])
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
