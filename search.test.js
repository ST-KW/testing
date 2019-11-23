const search = require("./search.js")

describe("Search", () => {
    it("Returns 4 and the names with query 'on'.", function() {
        const result = search("on")
        expect(result).toHaveLength(4)
        expect(result).toEqual([
            { name: "Tyrion", age: 32 },
            { name: "Jon", age: 16 },
            { name: "Brandon", age: 10 },
            { name: "Theon", age: 16 }
        ])
    })
    it("The search is case insensitive.", function() {
        const result = search("ed")
        expect(result).toHaveLength(1)
        expect(result).toEqual([{ name: "Eddard", age: 41 }])
    })
    it("When no query is given an empty array is returned.", function() {
        const result = search("")
        expect(result).toEqual([])
    })
    it("When nothing is found an empty array is returned.", function() {
        const result = search("st")
        expect(result).toEqual([])
    })

    it("When a falsy value is given an empty array is returned.", function() {
        expect(search(null)).toEqual([])
        expect(search(undefined)).toEqual([])
        expect(search(NaN)).toEqual([])
        expect(search(0)).toEqual([])
        expect(search("")).toEqual([])
        expect(search(false)).toEqual([])
    })

    it("Numbers and booleans return an empty array.", function() {
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
