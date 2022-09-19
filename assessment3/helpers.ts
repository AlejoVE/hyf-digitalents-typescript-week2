const colors = require('colors');
import axios from 'axios';

import { Question } from "./types";

// A better way fo manage the error in the catch?
const fetchQuestions = async (): Promise<Question[]> => {

    try {
        const res = await axios('https://the-trivia-api.com/api/questions?limit=5');
        const data: Question[] = res.data;
        const filteredData: Question[] = data.filter(q => !q.tags.includes('film'));
        return filteredData;
    } catch (error) {
        console.log(error)
        return [{
            id: '',
            category: '',
            question: '',
            difficulty: '',
            tags: [''],
            difficultyValue: 1
        }]
    }

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

const displayQuestions = (questions: Question[]): void => {
    questions.forEach(({ question, difficulty }) => {
        console.log(`${colors.cyan(`${question}`).bold} || ${colors.magenta(`Difficulty: ${difficulty}`).italic}\n`);
    })
}

export {
    sortByDifficulty,
    fetchQuestions,
    displayQuestions
};