const axios = require('axios');

const functions = {
    add: (num1, num2) => {
        if (typeof (num1) === "number" && typeof (num2) === "number") {
            return num1 + num2;
        }
        return null;
    },
    getUserName: () => axios.get('https://jsonplaceholder.typicode.com/users/2')
        .then(res => res.data.name)
        .catch(err => "error")
};

module.exports = functions;