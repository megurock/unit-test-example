import { describe, expect, test } from '@jest/globals'
import DateUtils from './DateUtils'

describe('DateUtils', () => {
  test('getDaysInMonth', () => {
    expect(DateUtils.getDaysInMonth(2023, 1)).toBe(31)
    expect(DateUtils.getDaysInMonth(2023, 2)).toBe(28)
    expect(DateUtils.getDaysInMonth(2024, 1)).toBe(31)
    expect(DateUtils.getDaysInMonth(2024, 2)).toBe(29)
  }),
    test('isLeapYear', () => {
      expect(DateUtils.isLeapYear(2023)).toBeFalsy()
      expect(DateUtils.isLeapYear(2024)).toBeTruthy()
    })
})
