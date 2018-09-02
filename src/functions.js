const functions = {
    add: (num1, num2) => {
        if (typeof (num1) === "number" && typeof (num2) == "number") {
            return num1 + num2;
        }
        return null;
    }
};

module.exports = functions;