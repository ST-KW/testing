function sum(a, b) {
    if (isNaN(parseFloat(a))) {
        return "First Parameter must be a number."
    }

    if (isNaN(parseFloat(b))) {
        return "Second Parameter must be a number."
    }

    const result = parseFloat(a) + parseFloat(b)
    return result
}

// allow to use the function sum from other modules or test this function
module.exports = sum
