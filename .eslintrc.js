module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "quotes": ["error", "double"],
        "no-unreachable": ["error"],
        "no-dupe-keys": ["error"],
        "default-case": ["error"],
        "default-case-last": ["error"],
        "curly": ["error"],
        "no-eval": ["error"],
        "no-fallthrough": ["error"],
        "no-global-assign": ["error"],
        "array-bracket-spacing": ["error", "never"],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "block-spacing": ["error"],
        "func-call-spacing": ["error", "never"],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", { "beforeColon": false }],
        "brace-style": ["error", "stroustrup", { "allowSingleLine": false }],
        "@typescript-eslint/naming-convention": [ 
            "error",
            { selector: "variable", format: ["camelCase", "PascalCase"] }, 
            { selector: "function", format: ["camelCase", "PascalCase"] }, 
            { selector: "method", format: ["camelCase"] }, 
            { selector: "property", format: ["camelCase"] }, 
            { selector: "accessor", format: ["camelCase"] }, 
            { selector: "enumMember", format: ["UPPER_CASE"] }, 
            { selector: "class", format: ["PascalCase"] }, 
            { selector: "interface", format: ["PascalCase"] }, 
            { selector: "typeAlias", format: ["PascalCase"] }, 
            { selector: "enum", format: ["PascalCase"] }, 
            { selector: "parameter", format: ["camelCase"] }, 
            { selector: "variable", modifiers: ["const"], format: ["camelCase", "PascalCase", "UPPER_CASE"] }, 
        ],
        "@typescript-eslint/type-annotation-spacing": [ 
            "error",
            { before: true, after: true }
        ]
    }
}