import { describe, expect, test } from '@jest/globals'
import GeomUtils from './GeomUtils'

describe('GeomUtils', () => {
  test('getDistance', () => {
    expect(GeomUtils.getDistance([-1, -1], [2, 3])).toBe(5)
    expect(GeomUtils.getDistance([3, 5], [3, 5])).toBe(0)
    expect(GeomUtils.getDistance([8, 6])).toBe(10)
  })
})
