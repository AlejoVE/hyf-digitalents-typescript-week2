const axios = require('axios').default;
const colors = require('colors');
type Question = {
    "id": string,
    "question": string,
    "difficulty": string,
    "category": string
    "tags": string[]
    "difficultyValue": number
}

// Fetch a set of questions from https://the-trivia-api.com/api/questions?limit=5
// Filter out any questions with tag "film"
// Sort them according to the difficulty
// Log the output to the user

const fetchQuestion = async (): Promise<void> => {
    const res = await axios('https://the-trivia-api.com/api/questions?limit=5')
    // const data = await res.json()
    const data: Question[] = res.data
    const filteredData: Question[] = data.filter(q => !q.tags.includes('film'))

    const arr: Question[] = []

    // Add difficultyValue to each question.
    filteredData.forEach(($question: Question) => {

        let { difficulty, ...rest } = $question;

        let difficultyValue: number = 0;
        switch (difficulty) {
            case "hard":
                difficultyValue = 3
                arr.push({ difficulty, ...rest, difficultyValue, })
                break;
            case "medium":
                difficultyValue = 2
                arr.push({ difficulty, ...rest, difficultyValue })
                break;
            case "easy":
                difficultyValue = 1
                arr.push({ difficulty, ...rest, difficultyValue })
                break;
            default:
                difficultyValue = 1
                arr.push({ difficulty, ...rest, difficultyValue })
                break;
        }

    })
    const sortedArray: Question[] = arr.sort((a: Question, b: Question) => a.difficultyValue - b.difficultyValue)

    sortedArray.forEach(({ question, difficulty }) => {
        console.log(`\n${colors.cyan(`${question}`).bold} || ${colors.magenta(`Difficulty: ${difficulty}`).italic}\n`)
    })
}

fetchQuestion()
// Sample Output:
// Who succeeded Winston Churchill when he resigned in 1955?
// Which author wrote 'The Left Hand of Darkness'?
// Who was the first female American astronaut?



