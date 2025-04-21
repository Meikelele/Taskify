import { v4 as uuidv4 } from 'uuid';

const mockData = [
    {
        id: uuidv4(),
        title: "IN PROGRESS",
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Learn Git'
            },
            {
                id: uuidv4(),
                title: 'Drink a glass of water'
            },
        ]
    },
    {
        id: uuidv4(),
        title: "COMPLETED",
        tasks: [
            {
                id: uuidv4(),
                title: 'Buy a new car'
            },
            {
                id: uuidv4(),
                title: 'Paint the room'
            }
        ]
    },
    {
        id: uuidv4(),
        title: "IN REVIEW",
        tasks: [
            {
                id: uuidv4(),
                title: 'Go on a workout'
            }
        ]
    },
    {
        id: uuidv4(),
        title: "TO DO",
        tasks: [
            {
                id: uuidv4(),
                title: 'Pay for the rent'
            }
        ]
    }
];

export default mockData;
