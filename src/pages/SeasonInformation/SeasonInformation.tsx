import React from "react"
import { ChampionInformation } from "../../components/ChampionInformation/ChampionInformation"
//styles
import "./SeasonInformation.scss"
//components
import { SeasonResults } from "../../components/SeasonResults/SeasonResults"

export const SeasonInformation = () => {
  return (
    <div className="SeasonInformation">
      <ChampionInformation />
      <SeasonResults />
      {/*<Table />*/}
    </div>
  )
}
