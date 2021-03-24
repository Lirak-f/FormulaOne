import { apiRequest } from "./Api"

export interface SeasonsResponse {
  MRData: {
    SeasonTable: {
      Seasons: [
        {
          season: string
        }
      ]
    }
  }
}
export interface ChampionResponse {
  MRData: {
    RaceTable: {
      Races: [
        {
          Results: [
            {
              Constructor: { nationality: string; name: string }
              Driver: {
                givenName: string
                familyName: string
                driverId: string
                dateOfBirth: string
                nationality: string
              }
              points: string
              position: string
              number: string
              grid: string
            }
          ]
        }
      ]
    }
  }
}
// export interface DriverDetails {
//   MRData: {
//     DriverTable: {
//       Drivers: [
//         {
//           givenName: string
//           familyName: string
//           dateOfBirth: string
//           permanentNumber: string
//         }
//       ]
//     }
//   }
// }

// export const getDriverDetails = async (driverId: string) =>
//   apiRequest<undefined, DriverDetails>("get", "drivers/" + driverId + ".json")

export const getChampion = async (season: string) =>
  apiRequest<undefined, any>("get", season + "/5/results.json?limit=3")
// export const getQualifyingResults = async (season: string, driverId: string) =>
//   apiRequest<undefined, any>(
//     "get",
//     season + "/drivers/" + driverId + "/qualifying.json"
//     // "2008/drivers/alonso/qualifying.json"
//   )
export const getSeasons = async () =>
  apiRequest<undefined, SeasonsResponse>(
    "get",
    "seasons.json?limit=10&offset=59"
  )
