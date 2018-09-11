const State = {
    _initialState: {
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
                text: "Learn JEST",
                status: "OK"
            },
            {
                id: 4,
                text: "Buy Apple Watch 4",
                status: "NOK"
            },
            {
                id: 5,
                text: "Dev talk on JEST",
                status: "NOK"
            }
        ],
        toAdd: {
            text: "",
            placeholder: "What do you want to do ?"
        }
    },
    getInitialState() {
        return this._initialState;
    }
};

module.exports = State;

