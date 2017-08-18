const assert = require('assert')

describe('mima', function () {
  const mima = require('.')

  it('should round values bigger than max to max', function () {
    assert.strictEqual(mima(2, 0, 1), 1)
  })

  it('should round values smaller than min to min', function () {
    assert.strictEqual(mima(-1, 0, 1), 0)
  })

  it('should not change values between min and max', function () {
    assert.strictEqual(mima(0.5, 0, 1), 0.5)
  })

  it('should return the value if min and max are undefined/null', function () {
    assert.strictEqual(mima(0.5), 0.5)
  })

  it('should throw if max < min', function () {
    assert.throws(() => {
      mima(0, 1, 0)
    })
  })

  it('should throw if x is not a number', function () {
    assert.throws(() => {
      mima('cat')
    })
  })

  it('should throw if min is not a number', function () {
    assert.throws(() => {
      mima(0, 'cat')
    })
  })

  it('should throw if max is not a number', function () {
    assert.throws(() => {
      mima(0, 0, 'cat')
    })
  })
})
