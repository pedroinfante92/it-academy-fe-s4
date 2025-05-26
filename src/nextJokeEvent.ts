import  { joke, button, output } from "./main"
import { fetchData } from "./fetch"
import type { JokeRandom, JokeNorris } from "./interfaces"


let toggle = true;

export function nextJoke(): void {
    button.addEventListener('click', async () => {
        if (toggle) {
          const jokeNorris = await fetchData<JokeNorris>('https://api.chucknorris.io/jokes/random')
          joke.innerText = jokeNorris.value
          output.innerText = ""
        } else {
          const jokeRandom = await fetchData<JokeRandom>('https://icanhazdadjoke.com/')
          joke.innerText = jokeRandom.joke
          output.innerText = ""
        }
          toggle = !toggle;
      });
}


