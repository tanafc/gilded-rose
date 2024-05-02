import { describe, it, expect } from "vitest"
import { myFunction } from "./GildedRose.js"

describe("Default test", () => {
  it("should work", () => {
    const result = myFunction()

    expect(result).toBe(true)
  })
})
