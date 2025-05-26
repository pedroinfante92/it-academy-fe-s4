
import { form, joke, reportedJokes, output } from "./main"
import type { Score } from "./types"
import type { ReportJokes } from "./interfaces"


export function setupFormSubmitListener(): void {
  form.addEventListener('submit', function (event: SubmitEvent): void {
    event.preventDefault()

    const date = new Date().toISOString()

    const formElement = event.target as HTMLFormElement

    const ratingInput = formElement.elements.namedItem('ratingJoke') as HTMLInputElement

    if (ratingInput) {
      const valueInput = parseInt(ratingInput.value) as Score

      const existingJoke = reportedJokes.find((j) => j.joke === joke.innerText)

      if (existingJoke) {
        existingJoke.score = valueInput
        existingJoke.date = date
        output.innerText = 'Rating updated'
      } else {
        reportedJokes.push({
          joke: joke.innerText,
          score: valueInput,
          date: date,
        } as ReportJokes)
        output.innerText = 'Rating added'

      }

      console.log(reportedJokes)
    }
  })
}
  