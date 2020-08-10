module.exports = {
    '@typescript-eslint/indent': ['error', 4],
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'jsdoc/check-indentation': ['error'],
    'jsdoc/check-param-names': ['error'],
    'jsdoc/check-tag-names': ['error'],
    'jsdoc/check-types': 0,
    'jsdoc/implements-on-classes': 0,
    'jsdoc/newline-after-description': ['error', 'never'],
    'jsdoc/no-types': ['error', { 'contexts': ['any'] }],
    'jsdoc/no-undefined-types': 0,
    'jsdoc/require-description': ['error'],
    'jsdoc/require-jsdoc': ['error', {
        'checkGetters': true,
        'checkSetters': true,
        'publicOnly': {
            'esm': true,
            'cjs': true,
            'window': true,
        },
        'require': {
            'ClassDeclaration': true,
            'FunctionDeclaration': true,
            'MethodDefinition': true,
        }
    }],
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'no-console': 1,
    'no-underscore-dangle': 0,
};