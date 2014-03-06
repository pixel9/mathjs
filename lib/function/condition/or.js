module.exports = function (math) {
  /**
   * Logical OR two values
   *
   *     x || y
   *     or(x, y)
   *
   * For matrices, the function is evaluated element wise.
   *
   * @param  {Number | BigNumber | Boolean | Complex | Unit | String | Array | Matrix} x
   * @param  {Number | BigNumber | Boolean | Complex | Unit | String | Array | Matrix} y
   * @return {Number | BigNumber | Complex | Unit | String | Array | Matrix} res
   */
  math.or = function or(x, y) {
    if (arguments.length != 2) {
      throw new math.error.ArgumentsError('or', arguments.length, 2);
    }

    return !!(x || y);
  };
};
