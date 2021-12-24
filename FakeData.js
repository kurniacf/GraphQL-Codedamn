const UserList = [
    {
        id: 1,
        name: "Kurnia",
        username: "Kurnia",
        age: 19,
        nationality: "INDONESIA",
        friends: [
            {
                id: 2,
                name: "Mail",
                username: "Mail",
                age: 22,
                nationality: "MALAYSIA",
            },
            {
                id: 5,
                name: "Asta",
                username: "AstaSlayer",
                age: 15,
                nationality: "JAPAN",
            },
        ]
    },
    {
        id: 2,
        name: "Mail",
        username: "Mail",
        age: 22,
        nationality: "MALAYSIA",
    },
    {
        id: 3,
        name: "Messi",
        username: "Messi10",
        age: 34,
        nationality: "ARGENTINA",
        friends: [
            {
                id: 2,
                name: "Mail",
                username: "Mail",
                age: 22,
                nationality: "MALAYSIA",
            },
        ]
    },
    {
        id: 4,
        name: "Gabriel",
        username: "GabsJ",
        age: 27,
        nationality: "BRAZIL",
    },
    {
        id: 5,
        name: "Asta",
        username: "AstaSlayer",
        age: 15,
        nationality: "JAPAN",
    },
];

const MovieList = [
    {
        id: 1, 
        name: "Avengers Endgame", 
        yearOfPublication: 2019,
        isInTheaters: false,
    },
    {
        id: 2, 
        name: "Spiderman No Way Home", 
        yearOfPublication: 2021,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Venom Let There Be Carnage", 
        yearOfPublication: 2021,
        isInTheaters: false,
    },
    {
        id: 4, 
        name: "Kingsman", 
        yearOfPublication: 2021,
        isInTheaters: true,
    },
    {
        id: 5,
        name: "Venom", 
        yearOfPublication: 2018,
        isInTheaters: false,
    },
    {
        id: 6,
        name: "The Avengers", 
        yearOfPublication: 2012,
        isInTheaters: false,
    },
];

module.exports = {UserList, MovieList};