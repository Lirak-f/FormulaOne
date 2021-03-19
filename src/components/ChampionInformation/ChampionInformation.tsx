import React from "react"

//components
import { Button } from "../shared/Button/Button"
//styles
import "./ChampionInformation.scss"

export const ChampionInformation = () => {
  return (
    <div className="ChampionInformation">
      <p className="ChampionInformation__year">2011</p>
      <p className="ChampionInformation__champion">Champion</p>
      <table className="ChampionInformation__table">
        <tr>
          <th>NAME</th>
          <th>NATIONALITY</th>
          <th>TEAM</th>
          <th>POINTS</th>
        </tr>
        <tr>
          <td>Lewis Hamilton</td>
          <td>British</td>
          <td>Mercedes</td>
          <td>205</td>
        </tr>
      </table>
      <Button className="ChampionInformation__button" />
    </div>
  )
}
