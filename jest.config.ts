const consfig = {
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["next/babel"] }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ["node_modules", ".next"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1"
  }
}

export default consfig;