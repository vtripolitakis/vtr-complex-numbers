import type { ComplexNumber } from '../src/types'
import { describe, expect, it } from '@jest/globals'
import { addComplex, multiplyComplex, subtractComplex } from '../src/complex'

describe('complex Number Operations', () => {
  it('addComplex adds two complex numbers correctly', () => {
    const num1: ComplexNumber = { real: 1, imag: 2 }
    const num2: ComplexNumber = { real: 3, imag: 4 }
    const result = addComplex(num1, num2)
    expect(result).toEqual({ real: 4, imag: 6 })
  })

  it('subtractComplex subtracts two complex numbers correctly', () => {
    const num1: ComplexNumber = { real: 5, imag: 6 }
    const num2: ComplexNumber = { real: 3, imag: 2 }
    const result = subtractComplex(num1, num2)
    expect(result).toEqual({ real: 2, imag: 4 })
  })

  it('multiplyComplex multiplies two complex numbers correctly', () => {
    const num1: ComplexNumber = { real: 1, imag: 2 }
    const num2: ComplexNumber = { real: 3, imag: 4 }
    const result = multiplyComplex(num1, num2)
    expect(result).toEqual({ real: -5, imag: 10 })
  })
})
