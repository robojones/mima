/**
 * Returns a value between min and max.
 * @param {?number} min - The mimimum value. 
 * @param {number} x - This value gets returned if it is between the min an max.
 * @param {?number} [max] - The maximum value.
 * @returns {number}
 */
function mima(min, x, max) {
  x = parse(x, 'x', true)
  min = parse(min, 'min')
  max = parse(max, 'max')

  if (!(min === null || max === null) && min > max) {
    throw new TypeError('min is bigger than max')
  }

  if (min !== null) {
    x = Math.max(x, min)
  }

  if (max !== null) {
    x = Math.min(x, max)
  }

  return x
}

/**
 * Parses the value.
 * @param {*} value
 * @param {string} name - The name of the variable.
 * @param {boolean} [required] - It can not be null or undefined.
 * @returns {?number}
 */
function parse(value, name, required) {
  if (!required && (value === null || value === undefined)) {
    return null
  }

  if (isNaN(value)) {
    throw new TypeError(`${name} must be a number` + !required && ' or null/undefined')
  }

  return +value
}

module.exports = mima
