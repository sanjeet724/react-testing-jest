class State {
    initialState = {
        tasks: [
            {
                id: 1,
                text: "Go to the gym",
                status: "OK"
            },
            {
                id: 2,
                text: "Start investing",
                status: "NOK"
            },
            {
                id: 3,
                text: "Find your passion",
                status: "NOK"
            }
        ],
        toAdd: {
            text: "",
            placeholder: "What do you want to do ?"
        }
    };
};

export default State;