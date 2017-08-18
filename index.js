function mima(x, min, max) {
  x = parse(x, 'x')
  min = parse(min, 'min', x)
  max = parse(max, 'max', x)

  if (max < min) {
    throw new TypeError('max is bigger than min')
  }

  x = Math.max(x, min)
  x = Math.min(x, max)

  return x
}

function parse(value, name, defaultValue) {
  if (defaultValue !== undefined && (value === null || value === undefined)) {
    return defaultValue
  }

  if (isNaN(value)) {
    throw new TypeError(`${name} must be a number`)
  }

  return +value
}

module.exports = mima
