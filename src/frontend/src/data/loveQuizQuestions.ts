export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
}

export const questions: QuizQuestion[] = [
    {
        question: "When did we meet?",
        options: [
            "14th Feb 2024",
            "7th May 2024",
            "1st Jan 2024",
            "You were born knowing me"
        ],
        correctAnswer: 1
    },
    {
        question: "Where was our first date?",
        options: [
            "A cafe",
            "A movie theatre",
            "Riverfront",
            "In my dreams"
        ],
        correctAnswer: 2
    },
    {
        question: "What was my first gift to you?",
        options: [
            "Chocolate",
            "Teddy",
            "Flower showpiece",
            "My heart"
        ],
        correctAnswer: 2
    },
    {
        question: "What do you like about me the most?",
        options: [
            "My looks",
            "My brain",
            "My humour",
            "Everything"
        ],
        correctAnswer: 3
    },
    {
        question: "When did I propose you to be my girlfriend?",
        options: [
            "14th Feb",
            "4th June",
            "1st July",
            "Every day since we met"
        ],
        correctAnswer: 1
    }
];

