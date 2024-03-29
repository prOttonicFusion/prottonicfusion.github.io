// Configured in accordance with
// https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/#2-creating-a-configuration-file-for-jest

module.exports = {
    testEnvironment: 'jsdom',
    testRunner: 'jest-jasmine2',
    transform: {
        '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'babel-jest',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
    },
    testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
    transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
    globals: {
        __PATH_PREFIX__: '',
    },
    setupFiles: ['<rootDir>/loadershim.js'],
    watchPathIgnorePatterns: ['\\.gql\\.json$'],
    watchPlugins: ['gatsby-plugin-testing/jest-plugin'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'mdx'],
    fakeTimers: {
        enableGlobally: false,
    },
    testEnvironmentOptions: {
        url: 'http://localhost',
    },
}
