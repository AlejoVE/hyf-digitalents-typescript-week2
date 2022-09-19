import { Question } from "./types";
import { sortByDifficulty, fetchQuestions, displayQuestions } from "./helpers";

const init = async (): Promise<void> => {
    console.clear();
    const questions: Question[] = await fetchQuestions();
    const formattedData: Question[] = sortByDifficulty(questions);
    displayQuestions(formattedData)
}

init();

// Output:
// According to the Christmas song what did my true love give to me on the fifth day of Christmas? || Difficulty: easy
// Who wrote "The Hobbit"? || Difficulty: easy
// In which country is the city of Shenzhen? || Difficulty: easy
// From which part of the world do squashes originate? || Difficulty: medium
// Which author wrote 'On Paths of Life'? || Difficulty: hard



