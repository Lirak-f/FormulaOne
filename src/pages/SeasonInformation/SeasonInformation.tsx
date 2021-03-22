import React from "react"
import { ChampionInformation } from "../../components/ChampionInformation/ChampionInformation"
//styles
import "./SeasonInformation.scss"
import { SeasonResults } from "../../components/SeasonResults/SeasonResults"
import { Footer } from "../../partials/Footer/Footer"

export const SeasonInformation = () => {
  return (
    <div className="SeasonInformation">
      <ChampionInformation />
      <SeasonResults />
    </div>
  )
}
