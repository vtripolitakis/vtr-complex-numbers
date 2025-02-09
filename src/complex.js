export function addComplex(a, b) {
  return { real: a.real + b.real, imag: a.imag + b.imag }
}
export function subtractComplex(a, b) {
  return { real: a.real - b.real, imag: a.imag - b.imag }
}
export function multiplyComplex(a, b) {
  return {
    real: a.real * b.real - a.imag * b.imag,
    imag: a.real * b.imag + a.imag * b.real,
  }
}
