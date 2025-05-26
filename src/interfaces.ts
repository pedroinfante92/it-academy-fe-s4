import type { Score } from "/types"

export interface JokeRandom {
    id: string
    joke: string
  }
  
 export interface JokeNorris {
    id: string
    value: string
  }

 export interface ReportJokes {
    joke: string
    score: Score
    date: string
  }

  export interface Weather {
    current_weather : {
      temperature: number
      weathercode: number
    }
  }