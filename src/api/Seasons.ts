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
              Driver: { givenName: string; familyName: string }
              points: string
            }
          ]
        }
      ]
    }
  }
}
export const getChampion = async (season: string) =>
  apiRequest<undefined, ChampionResponse>(
    "get",
    season + "/5/results.json?limit=3"
  )
export const getSeasons = async () =>
  apiRequest<undefined, SeasonsResponse>("get", "seasons.json?limit=10")
