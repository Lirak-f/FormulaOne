import React from "react"
//components
import { Button } from "../shared/Button/Button"
//styles
import "./SeasonResults.scss"

export const SeasonResults = () => {
  return (
    <div className="SeasonResults">
      <p className="SeasonResults__winners">Winners</p>
      <table className="SeasonResults__table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>NATIONALITY</th>
            <th>TEAM</th>
            <th>POINTS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lewis Hamilton</td>
            <td>British</td>
            <td>Mercedes</td>
            <td>205</td>
            <td>
              <Button className="SeasonResults__button" />
            </td>
          </tr>
          <tr>
            <td>Lewis Hamilton</td>
            <td>British</td>
            <td>Mercedes</td>
            <td>205</td>
            <td>
              <Button className="SeasonResults__button" />
            </td>
          </tr>
          <tr>
            <td>Lewis Hamilton</td>
            <td>British</td>
            <td>Mercedes</td>
            <td>205</td>
            <td>
              <Button className="SeasonResults__button" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
