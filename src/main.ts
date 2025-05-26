import type { JokeRandom, ReportJokes, Weather } from "./interfaces"
import { setupFormSubmitListener } from "./submitEvent"
import { nextJoke } from "./nextJokeEvent"
import { fetchData } from "./fetch"
import { weatherIcons } from "./weatherIcons"

const temperature = document.getElementById('temperature') as HTMLSpanElement
const weatherIcon = document.getElementById('weatherIcon') as HTMLSpanElement
export const reportedJokes: ReportJokes[] = [];
export const form = document.querySelector('form') as HTMLFormElement;
export const button = document.querySelector('button') as HTMLButtonElement
export const joke = document.getElementById('jokeText') as HTMLParagraphElement
export const output = document.getElementById('output') as HTMLDivElement




(async () => {
    const weather = await fetchData<Weather>('https://api.open-meteo.com/v1/forecast?latitude=41.38&longitude=2.16&current_weather=true')
    temperature.innerText = `${weather.current_weather.temperature.toString()}ºC`
    weatherIcon.innerText = weatherIcons[weather.current_weather.weathercode]
    setupFormSubmitListener()
    nextJoke()
  })();
  
(async () => {
    const jokeRandom = await fetchData<JokeRandom>('https://icanhazdadjoke.com/')
    joke.innerText = jokeRandom.joke
})();


