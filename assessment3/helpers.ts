import axios from 'axios';

import { Question } from "./types";

const fetchQuestions = async (): Promise<Question[]> => {
    const res = await axios('https://the-trivia-api.com/api/questions?limit=5');
    const data: Question[] = res.data;
    const filteredData: Question[] = data.filter(q => !q.tags.includes('film'));
    return filteredData;
}

const sortByDifficulty = (questions: Question[]): Question[] => {
    const arr: Question[] = [];

    // Add difficultyValue to each question.
    questions.forEach(($question: Question): void => {

        let { difficulty, ...rest } = $question;

        let difficultyValue: number = 0;

        switch (difficulty) {
            case "hard":
                difficultyValue = 3;
                break;
            case "medium":
                difficultyValue = 2;
                break;
            case "easy":
                difficultyValue = 1;
                break;
            default:
                difficultyValue = 1;
                break;
        }

        arr.push({ difficulty, ...rest, difficultyValue });
    })

    return arr.sort((a: Question, b: Question) => a.difficultyValue - b.difficultyValue);
}

export {
    sortByDifficulty,
    fetchQuestions
};