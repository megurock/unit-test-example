export default class DateUtils {
  /**
   *
   *  @param year: The full year.
   *  @param month: The month number (1 for January, 2 for February, and so on).
   *  @return The number of days in the month; 28 through 31.
   */
  public static getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate()
  }

  /**
   *
   *  @param year: The full year.
   *  @return true if the year is a leap year, otherwise false.
   */
  public static isLeapYear(year: number) {
    return DateUtils.getDaysInMonth(year, 2) === 29
  }
}
