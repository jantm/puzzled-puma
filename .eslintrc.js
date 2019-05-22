module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "browser": true,
        "es6": true,
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "no-param-reassign": ["error", { "props": false }],
        "react/jsx-filename-extension": [ 1,
            {
                "extensions": [ ".js", ".jsx" ],
            }
        ]
    },
};
