const assert = require('assert')

describe('mima', function () {
  const mima = require('..')

  it('should round values bigger than max to max', function () {
    assert.strictEqual(mima(-1, 2, 1), 1)
  })

  it('should round values smaller than min to min', function () {
    assert.strictEqual(mima(1, -1, 2), 1)
  })

  it('should not change values between min and max', function () {
    assert.strictEqual(mima(-1, 1, 2), 1)
  })

  it('should return the value if min and max are undefined/null', function () {
    assert.strictEqual(mima(null, 0.5, null), 0.5)
  })

  it('should ignore min if it is undefined/null', function () {
    assert.strictEqual(mima(null, -1, 1), -1)
    assert.strictEqual(mima(null, 2, 1), 1)
  })

  it('should ignore max if it is undefined/null', function () {
    assert.strictEqual(mima(2, 1, null), 2)
    assert.strictEqual(mima(-1, 1, null), 1)
  })

  it('should throw if min is not a number', function () {
    assert.throws(() => {
      mima('cat', 0, 0)
    })
  })

  it('should throw if x is not a number', function () {
    assert.throws(() => {
      mima(0, 'cat', 0)
    })
  })

  it('should throw if max is not a number', function () {
    assert.throws(() => {
      mima(0, 0, 'cat')
    })
  })

  it('should throw if min is bigger than max', function () {
    assert.throws(() => {
      mima(2, 1, -1)
    })
  })
})
