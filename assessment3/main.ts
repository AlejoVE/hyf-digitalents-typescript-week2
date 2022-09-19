const colors = require('colors');

import { Question } from "./types";
import { sortByDifficulty, fetchQuestions } from "./helpers";

// Fetch a set of questions from https://the-trivia-api.com/api/questions?limit=5
// Filter out any questions with tag "film"
// Sort them according to the difficulty
// Log the output to the user

const init = async (): Promise<void> => {

    console.clear();

    const questions: Question[] = await fetchQuestions();
    const formattedData: Question[] = sortByDifficulty(questions);

    formattedData.forEach(({ question, difficulty }) => {
        console.log(`${colors.cyan(`${question}`).bold} || ${colors.magenta(`Difficulty: ${difficulty}`).italic}\n`);
    })
}

init();

// Output:
// According to the Christmas song what did my true love give to me on the fifth day of Christmas? || Difficulty: easy
// Who wrote "The Hobbit"? || Difficulty: easy
// In which country is the city of Shenzhen? || Difficulty: easy
// From which part of the world do squashes originate? || Difficulty: medium
// Which author wrote 'On Paths of Life'? || Difficulty: hard



