const persons = [
    { name: "Eddard", age: 41 },
    { name: "Catelyn", age: 40 },
    { name: "Daenerys", age: 16 },
    { name: "Tyrion", age: 32 },
    { name: "Jon", age: 16 },
    { name: "Brandon", age: 10 },
    { name: "Sansa", age: 13 },
    { name: "Arya", age: 11 },
    { name: "Theon", age: 16 },
    { name: "Davos", age: 49 },
    { name: "Jaime", age: 36 },
    { name: "Samwell", age: 17 },
    { name: "Cersei", age: 36 },
    { name: "Brienne", age: 32 }
]

function search(query) {
    //!varName filters all falsy inputs like: null, 0, NaN, undefined and "".

    // same as: if (!query || typeof query === "boolean" || !isNaN(parseFloat(query))) {
    if (!query || typeof query !== "string") {
        return []
    }
    return persons.filter(person => {
        // person = { name: 'XXX', age: 123 }
        if (person.name.toLowerCase().includes(query.toLowerCase())) {
            return true
        } else {
            return false
        }
    })
}

module.exports = search
