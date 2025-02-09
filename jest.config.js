module.exports = {
  transform: {
    '^.+\\.ts$': 'babel-jest', // Use babel-jest for .ts files
    '^.+\\.tsx$': 'babel-jest', // If you are using TSX files
  },
  testEnvironment: 'node', // If you are using Node.js environment for testing
}
