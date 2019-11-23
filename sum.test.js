const sum = require("./sum.js")

describe("sum", () => {
    it("returns the sum of 1 and 1", function() {
        const result = sum(1, 1)
        expect(result).toBe(2)
    })

    it("returns the sum of 13 and 23", function() {
        const result = sum(13, 23)
        expect(result).toBe(36)
    })

    it("returns the sum of 0.5 and 2", function() {
        const result = sum(0.5, 2)
        expect(result).toBe(2.5)
    })

    it("returns the sum of 0.5 and 0.1", function() {
        const result = sum(0.5, 0.1)
        expect(result).toBe(0.6)
    })

    it("returns the sum of -0.23 and 0.1", function() {
        const result = sum(-0.23, 0.1)
        expect(result).toBe(-0.13)
    })

    it("works with numbers as strings", function() {
        const result = sum("7", "3")
        expect(result).toBe(10)
    })

    describe("edge cases", () => {
        it("works when 1st parameter is null", () => {
            const result = sum(null, 23)
            expect(result).toBe("First Parameter must be a number.")
        })

        it("works when 2nd parameter is null", () => {
            const result = sum(42, null)
            expect(result).toBe("Second Parameter must be a number.")
        })

        it("works with MAX- and MIN_SAFE_INTEGER", () => {
            const result = sum(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
            expect(result).toBe(0)
        })
    })
})
