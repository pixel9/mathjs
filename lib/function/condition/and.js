module.exports = function (math) {
  /**
   * Logical AND two values
   *
   *     x && y
   *     and(x, y)
   *
   * For matrices, the function is evaluated element wise.
   *
   * @param  {Number | BigNumber | Boolean | Complex | Unit | String | Array | Matrix} x
   * @param  {Number | BigNumber | Boolean | Complex | Unit | String | Array | Matrix} y
   * @return {Number | BigNumber | Complex | Unit | String | Array | Matrix} res
   */
  math.and = function and(x, y) {
    if (arguments.length != 2) {
      throw new math.error.ArgumentsError('and', arguments.length, 2);
    }

    return !!(x && y);
  };
};
