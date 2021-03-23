import React from "react"

//photo
import photo from "../../assets/images/driverphoto.svg"
import city from "../../assets/images/Image 4.svg"
import helmet from "../../assets/images/Image 3.svg"
//components
import { BackButton } from "../../components/shared/BackButton/BackButton"
import { Link } from "react-router-dom"
//styles
import "./DriverDetails.scss"

export const DriverDetails = () => {
  return (
    <div className="DriverDetails">
      <Link to="/">
        <BackButton className="DriverDetails__backbutton" />
      </Link>
      <div className="DriverDetails__content">
        <div className="DriverDetails__championtitle">
          <p className="DriverDetails_year">2011</p>
          <p className="DriverDetails_title">Champion</p>
          <img
            className="DriverDetails_driverphoto"
            alt="driverphoto"
            src={photo}
          />
          <p className="DriverDetails__information">
            <p className="DriverDetails_number">44</p>
            <p className="DriverDetails_name">Lewis Hamilton</p>
            <img className="DriverDetails_city" src={city} alt="city" />
          </p>
          <img className="DriverDetails_helmet" src={helmet} alt="helmet" />
        </div>
        <div className="DriverDetails__informationtable">
          <table>
            <tr>
              <th>Team</th>
              <td>Mercedes</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>United Kingdom</td>
            </tr>
            <tr>
              <th>Podiums</th>
              <td>159</td>
            </tr>
            <tr>
              <th>Points</th>
              <td>3636</td>
            </tr>
            <tr>
              <th>Grand Prix Entered</th>
              <td>260</td>
            </tr>
            <tr>
              <th>World Championships</th>
              <td>6</td>
            </tr>
            <tr>
              <th>Highest race finish</th>
              <td>(x90)</td>
            </tr>
            <tr>
              <th>Highest grid position</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Date of birth</th>
              <td>07/01/1985</td>
            </tr>
            <tr>
              <th>Place of birth</th>
              <td>Stevenage,England</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
