import { describe, it, expect } from "vitest"
import { GildedRose, Item } from "./GildedRose.js"

describe("Gilded Rose", () => {
  const itemNames = ["Apple", "Sulfuras, Hand of Ragnaros", "Aged Brie", "Backstage passes to a TAFKAL80ETC concert"]

  for (let name of itemNames) {
    for (let sellIn = 0; sellIn <= 10; sellIn++) {
      for (let quality = -2; quality <= 51; quality++) {
        const item = new Item(name, sellIn, quality)

        it("works", () => {
          const gildedRose = new GildedRose([item])

          const items = gildedRose.updateQuality()

          expect(items[0]).toMatchSnapshot()
        })
      }
    }
  }
})
