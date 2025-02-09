import { describe, expect, it } from '@jest/globals'
import { addComplex, multiplyComplex, subtractComplex } from '../src/complex'

describe('complex Number Operations', () => {
  it('addComplex adds two complex numbers correctly', () => {
    const result = addComplex({ real: 1, imag: 2 }, { real: 3, imag: 4 })
    expect(result).toEqual({ real: 4, imag: 6 })
  })

  it('subtractComplex subtracts two complex numbers correctly', () => {
    const result = subtractComplex({ real: 5, imag: 6 }, { real: 3, imag: 2 })
    expect(result).toEqual({ real: 2, imag: 4 })
  })

  it('multiplyComplex multiplies two complex numbers correctly', () => {
    const result = multiplyComplex({ real: 1, imag: 2 }, { real: 3, imag: 4 })
    expect(result).toEqual({ real: -5, imag: 10 })
  })
})
