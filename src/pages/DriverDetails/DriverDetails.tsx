import React, { useEffect, useState } from "react"

//photo
import photo from "../../assets/images/driverphoto.svg"
import city from "../../assets/images/Image 4.svg"
import helmet from "../../assets/images/Image 3.svg"
//components
import { BackButton } from "../../components/shared/BackButton/BackButton"
import { Link } from "react-router-dom"
//styles
import "./DriverDetails.scss"
import * as API from "../../api/Seasons"

interface Props {
  match: {
    params: {
      driverId: string
      season: string
    }
  }
}

export const DriverDetails = (props: Props) => {
  const season = props.match.params.season
  const param = props.match.params.driverId
  // console.log(param)
  useEffect(() => {
    // getDriverDetails()
    getChampion()
  }, [])
  const [data, setData] = useState({
    name: "",
    dateOfBirth: "",
    permanentNumber: ""
  })
  // async function getDriverDetails() {
  //   try {
  //     const res = await API.getDriverDetails(param)
  //     const results = res.MRData.DriverTable.Drivers[0]
  //     // console.log(res)
  //     setData({
  //       name: results.givenName + " " + results.familyName,
  //       dateOfBirth: results.dateOfBirth,
  //       permanentNumber: results.permanentNumber
  //     })
  //   } catch (e) {}
  // }

  async function getChampion() {
    try {
      const res = await API.getChampion(season)
      console.log(res)
      const results = res.MRData.RaceTable.Races[0].Results[0]
      // const nav = results.Driver.driverId
      console.log(results)
      setChamp([
        {
          Name: results.Driver.givenName + " " + results.Driver.familyName,
          Nationality: results.Constructor.nationality,
          Team: results.Constructor.name,
          Points: results.points,
          driverId: results.Driver.driverId,
          Number: results.number,
          grid: results.grid,
          dateOfBirth: results.Driver.dateOfBirth
        }
      ])
    } catch (e) {}
  }
  const [champ, setChamp] = useState([
    {
      Name: "",
      Nationality: "",
      Team: "",
      Points: "",
      driverId: "",
      Number: "",
      grid: "",
      dateOfBirth: ""
    }
  ])
  console.log(champ)
  return (
    <div className="DriverDetails">
      <Link to="/">
        <BackButton className="DriverDetails__backbutton" />
      </Link>
      <div className="DriverDetails__content">
        <div className="DriverDetails__championtitle">
          <p className="DriverDetails_year">{season}</p>
          <p className="DriverDetails_title">Champion</p>
          <img
            className="DriverDetails_driverphoto"
            alt="driverphoto"
            src={photo}
          />
          <div className="DriverDetails__information">
            <p className="DriverDetails_number">{champ[0].Number}</p>
            <p className="DriverDetails_name">{champ[0].Name}</p>
            <img className="DriverDetails_city" src={city} alt="city" />
          </div>
          <img className="DriverDetails_helmet" src={helmet} alt="helmet" />
        </div>
        <div className="DriverDetails__informationtable">
          <table>
            <tbody>
              <tr>
                <th>Team</th>
                <td>{champ[0].Team}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{champ[0].Nationality}</td>
              </tr>
              <tr>
                <th>Podiums</th>
                <td> </td>
              </tr>
              <tr>
                <th>Points</th>
                <td>{champ[0].Points} </td>
              </tr>
              <tr>
                <th>Grand Prix Entered</th>
                <td> </td>
              </tr>
              <tr>
                <th>World Championships</th>
                <td> </td>
              </tr>
              <tr>
                <th>Highest race finish</th>
                <td> </td>
              </tr>
              <tr>
                <th>Highest grid position</th>
                <td>{champ[0].grid} </td>
              </tr>
              <tr>
                <th>Date of birth</th>
                <td>{champ[0].dateOfBirth} </td>
              </tr>
              <tr>
                <th>Place of birth</th>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
