# goit-react-hw-02-feedback
npx create-react-app .

Open your package.json and add a homepage field for your project:

"homepage": "https://myusername.github.io/my-app",

npm install --save gh-pages

"scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build",

npm run deploy

npm install --save prop-types

npm install --save-dev prettier husky lint-staged 

.prettierc.json { "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi": true, "singleQuote": true, "trailingComma": "all", "bracketSpacing": true, "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always" }

 .lintstagedrc { "src//*.{json,css,scss,md}": ["prettier --write"], "src//*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] } 
 
 .huskyrc { "hooks": { "pre-commit": "lint-staged" } }
