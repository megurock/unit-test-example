type Point = [number, number]

export default class GeomUtils {
  public static getDistance([x1, y1]: Point, [x2, y2]: Point = [0, 0]) {
    if (x1 === x2 && y1 === y2) return 0
    //
    const distX = x2 - x1
    const distY = y2 - y1
    return Math.sqrt(distX ** 2 + distY ** 2)
  }
}
