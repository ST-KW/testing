const { search, searchByAge } = require("./search.js")

//Testing the search function

describe("Search", () => {
    xit("Returns 4 and the names with query 'on'.", function() {
        const result = search("on")
        expect(result).toHaveLength(4)
        expect(result).toEqual([
            { name: "Tyrion", age: 32 },
            { name: "Jon", age: 16 },
            { name: "Brandon", age: 10 },
            { name: "Theon", age: 16 }
        ])
    })
    xit("The search is case insensitive.", function() {
        const result = search("ed")
        expect(result).toHaveLength(1)
        expect(result).toEqual([{ name: "Eddard", age: 41 }])
    })
    xit("When no query is given an empty array is returned.", function() {
        const result = search("")
        expect(result).toEqual([])
    })
    xit("When nothing is found an empty array is returned.", function() {
        const result = search("st")
        expect(result).toEqual([])
    })

    xit("When a falsy value is given an empty array is returned.", function() {
        expect(search(null)).toEqual([])
        expect(search(undefined)).toEqual([])
        expect(search(NaN)).toEqual([])
        expect(search(0)).toEqual([])
        expect(search("")).toEqual([])
        expect(search(false)).toEqual([])
    })

    xit("Numbers and booleans return an empty array.", function() {
        expect(search(true)).toEqual([])
        expect(search(false)).toEqual([])
        expect(search(1)).toEqual([])
        expect(search(23)).toEqual([])
        expect(search(42)).toEqual([])
        expect(search(-3)).toEqual([])
        expect(search(Infinity)).toEqual([])
        expect(search(0.4)).toEqual([])
    })
})

//Testing the searchByAge function

describe("Search by age", () => {
    it("The younger operator works.", function() {
        const result = searchByAge(16, "younger")
        expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "age": 10,
          "name": "Brandon",
        },
        Object {
          "age": 13,
          "name": "Sansa",
        },
        Object {
          "age": 11,
          "name": "Arya",
        },
      ]
    `)
    })
    it("The older operator works.", function() {
        const result = searchByAge(40, "older")
        expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "age": 41,
          "name": "Eddard",
        },
        Object {
          "age": 49,
          "name": "Davos",
        },
      ]
    `)
    })
    it("The exact operator works.", function() {
        const result = searchByAge(32, "exact")
        expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "age": 32,
          "name": "Tyrion",
        },
        Object {
          "age": 32,
          "name": "Brienne",
        },
      ]
    `)
    })
    it("No operator results in an error message.", function() {
        const result = searchByAge(23)
        expect(result).toEqual(
            "Unknown operator. Please use younger, older or exact."
        )
    })
    it("Unknown operators results in an error message.", function() {
        const result = searchByAge(23, "ex4ct")
        expect(result).toEqual(
            "Unknown operator. Please use younger, older or exact."
        )
    })
    it("When there's no result (exact age 23) an empty array is returned.", function() {
        const result = searchByAge(23, "exact")
        expect(result).toEqual([])
    })
})
