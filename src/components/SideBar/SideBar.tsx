import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
//API
import * as API from "../../api/Api"
//styles
import "./SideBar.scss"
//icons
import { Icon } from "../shared/Icon/Icon"
import { NavLink } from "react-router-dom"

interface SeasonsResult {
  season: string
}

export const SideBar = () => {
  let history = useHistory()
  console.log(history.location.pathname)

  const [data, setData] = useState<SeasonsResult[]>([])
  useEffect(() => {
    CheckAPI()
  }, [])

  const CheckAPI = async () => {
    try {
      const res = await API.getSeasons()
      const result = res.MRData.SeasonTable.Seasons
      setData(result)
    } catch (e) {}
  }

  return (
    <div className="SideBar">
      {history.location.pathname === "/" ? history.push("2009") : ""}
      <Icon className="SideBar__logo" icon="logo" />
      <p className="SideBar__f1championships">F1 CHAMPIONSHIPS</p>
      <p className="SideBar__years">YEARS</p>
      <ul className="SideBar__list">
        {data?.map((season, index: number) => (
          <NavLink
            key={index}
            activeClassName={"SideBar__arrow"}
            to={`/${season.season}`}
          >
            {/*{console.log(`/${season.season}`)}*/}
            <li className="SideBar__list_item">{season.season}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}
