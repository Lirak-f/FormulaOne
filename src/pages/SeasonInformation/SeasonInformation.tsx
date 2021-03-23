import React from "react"
import { ChampionInformation } from "../../components/ChampionInformation/ChampionInformation"
//styles
import "./SeasonInformation.scss"
//components
import { SeasonResults } from "../../components/SeasonResults/SeasonResults"
export interface Props {
  match: { params: { season: string } }
}
export const SeasonInformation = (props: Props) => {
  const param = props.match.params.season
  return (
    <div className="SeasonInformation">
      <ChampionInformation param={param} />
      <SeasonResults param={param} />
      {/*<Table />*/}
    </div>
  )
}
