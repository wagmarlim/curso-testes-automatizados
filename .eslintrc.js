module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'it': true,
        'describe': true,
        'beforeEach': true,
        'afterEach': true,
        'beforeAll': true,
        'afterAll': true,
        'expect': true,
        'jest': true
    },
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 4],
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'operator-linebreak': ['error', 'after'],
        'comma-dangle': ['error', 'never']
    }
};
