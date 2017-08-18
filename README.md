# mima - make sure that a number is between min and max

[![Build Status](https://travis-ci.org/robojones/mima.svg?branch=master)](https://travis-ci.org/robojones/mima)
[![Test Coverage](https://codeclimate.com/github/robojones/mima/badges/coverage.svg)](https://codeclimate.com/github/robojones/mima/coverage)
[![Issue Count](https://codeclimate.com/github/robojones/mima/badges/issue_count.svg)](https://codeclimate.com/github/robojones/mima)

## Install

```bash
npm i mima
```

## mima(min, x, max)

If `x` is smaller than `min` then `min` is returned.
If `x` is between `min` and `max` then `x` is returned.
If `x` is bigger than `max` then `max` is returned.

## Example

```javascript
const mima = require('mima')

mima(0, -100, 1) // 0
// because -100 is smaller than 0

mima(0, 1, 2) // 1
// because 1 is between 0 and 2

mima(0, 0.3, 1) // 0.3
// because 0.3 is between 0 and 1

mima(5, 100, 10) // 10
// because 100 is bigger than 10
```
