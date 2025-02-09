# Complex Number Library

A simple library for working with complex numbers.

## Installation

```bash
npm install complex-number-library
```
## API

### `addComplex(a, b)`

Adds two complex numbers.

```javascript
const { addComplex } = require('complex-number-library')

const num1 = { real: 2, imag: 3 }
const num2 = { real: 1, imag: 4 }

const sum = addComplex(num1, num2)
console.log(`Sum: ${sum.real} + ${sum.imag}i`)
```

### `subtractComplex(a, b)`

Subtracts the second complex number from the first.

```javascript
const { subtractComplex } = require('complex-number-library')

const num1 = { real: 2, imag: 3 }
const num2 = { real: 1, imag: 4 }

const difference = subtractComplex(num1, num2)
console.log(`Difference: ${difference.real} + ${difference.imag}i`)
```

### `multiplyComplex(a, b)`

Multiplies two complex numbers.

```javascript
const { multiplyComplex } = require('complex-number-library')

const num1 = { real: 2, imag: 3 }
const num2 = { real: 1, imag: 4 }

const product = multiplyComplex(num1, num2)
console.log(`Product: ${product.real} + ${product.imag}i`)
```
