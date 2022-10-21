# Install React App without create-react-app

Description: Starting project for rect applications without creating npx create-react-app. More control what you want and what you need
Type: General

## 1. Prerequisites

You should get similar output, probably in different versions

```bash
node -v
```

v16.14.2

```bash
npm -v
```

8.5.5

## 2. Initialization git

```bash
git init
```

## 3. Create files and directories

You must create `src` directory for your source code and `.gitignore` file for ignoring the git push. The content `.gitignore` file should be like

```bash
node_modules/
.DS_Store
.cache/
dist/
.env
coverage/
.vscode/
.parcel-cache
```

## 4. Install prettier as developer dependency

Also, good step is to have **prettier** extension in your **vscode**

```bash
npm i -D prettier
```

## 5. Create .prettierrc file

You must create `.prettierrc` file in root directory of your folder with this content. Of course, it can be set by your preferences.

```bash
{
  "semi": true,
  "printWidth": 160,
  "useTabs": true,
  "tabWidth": 2,
  "singleQuote": true
}
```

## 6. Install eslint

eslint helps you with your code quality. Also, is very often used in react code.

```bash
npm i -D eslit eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

You should have output like this

```bash
npm i -D eslit eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

added 247 packages, and audited 249 packages in 7s

75 packages are looking for funding
  run `npm fund` for details
```

And your `package.json` file should look like this

```bash
{
  "name": "ReactStart",
  "version": "1.0.0",
  "description": "Starting project for rect applications without creating npx create-react-app. More control what you want and what you need",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/zrebec/react-taskmanager.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/zrebec/react-taskmanager/issues"
  },
  "homepage": "https://github.com/zrebec/react-taskmanager#readme",
  "devDependencies": {
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-react": "^7.31.10",
    "eslit": "^6.0.0",
    "prettier": "^2.7.1"
  }
}
```

Of course, versions would be different

### 6.1 Create file .eslintrc.json

The next step should be create `.eslintrc.json` file with content similar like this

```bash
{
	//the order of the "extends" array matters.
	"extends": [
		"eslint:recommended", //loads all of the eslint:recommended rules including white space rules.
		"plugin:import/errors", //https://www.npmjs.com/package/eslint-plugin-import
		"plugin:react/recommended", //https://www.npmjs.com/package/eslint-plugin-react
		"plugin:jsx-a11y/recommended", //https://www.npmjs.com/package/eslint-plugin-jsx-a11y
		"prettier" //turns off the eslint white space rules and other rules it knows how to handle specifically.
	],
	"plugins": ["react", "jsx-a11y", "import"],
	"rules": {
		"react/prop-types": 0, //turns off props types '0' means turn off
		"react/react-in-jsx-scope": 0 //turns off requiring to import react in every file
	},
	"parserOptions": {
		"ecmaVersion": 2021, //use the most modern version
		"sourceType": "module", //we will be using ES modules
		"ecmaFeatures": {
			"jsx": true //we will be using JSX
		}
	},
	"env": {
		//describe the environment this code will run in
		"es6": true, //eslint won't throw error if we try to use es6 methods like map() or reduce().
		"browser": true, //eslint won't throw error if we use fetch() or the window object
		"node": true //eslint won't throw errors if we try to access things in a node environment like `global` or `proces`.
	},
	"settings": {
		"react": {
			"version": "detect" //tels eslint to look at the package.json and figure it out
		}
	}
}
```

## 7. Install react and react-dom

Finally, we can install `react` and `react-dom` to our project

```bash
npm i react react-dom
```

Output would be like this

```bash
npm i react react-dom

added 3 packages, and audited 252 packages in 1s

75 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## 8. Install server

Server could be different but now we will be using `parcel`

```bash
npm i -D parcel
```

Output should be like this one

```bash
npm i -D parcel
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility

added 138 packages, and audited 390 packages in 15s

141 packages are looking for funding
  run `npm fund` for details
```

Ignore the warn, parcel using probably older version of `stable` but it’s only developer dependency as you can see

### 8.3 Install additional good dependencies

We absolutely should install `babel` package which are translating JavaScript to more browser support

```bash
npm i -D @babel/core @babel/preset-react
```

After that we should create file `.babelrc` which allow us to configure the babel. For basic configuration and hello world in react it’s enough to configure it like this

```bash
{
	"presets": [
		[
			"@babel/preset-react",
			{
				"runtime": "automatic"
			}
		]
	]
}
```

In later we can use advanced configuration

### 8.2 Edit the package.json

We installed the server, but we must run it with `npm` command. So, we should replace `test` in our `package.json` file to the run the server. Just replace line with `test` with this one:

```bash
"dev": "parcel src/index.html"
```

## 9. Create project files

In `src` directory we can finally create 3 basic files for our project. `index.html` `index.js` and `App.js`

The initial content of this file should be something like this

`index.html`

```bash
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>React config demo</title>
	</head>
	<body>
		<div id="root"></div>
		<script src="index.js" type="module"></script>
	</body>
</html>
```

`index.js`

```bash
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

`App.js`

```
function App() {
	return (
		<>
			<h1>Hello, world!</h1>
			<p>This is a basic structre for your staring project</p>
		</>
	);
}

export default App;
```

## 10. Finally run the projct

After that we can run the project

```bash
npm run dev
```

If we see the output like this

```bash
npm run dev

> react-taskmanager@1.0.0 dev
> parcel src/index.html

Server running at http://localhost:1234

@parcel/transformer-babel: Parcel includes transpilation by default. Babel config .babelrc contains only redundant presets. Deleting it may significantly improve build performance.

  /home/zrebec/projects/react-taskmanager/.babelrc:4:4
    3 |     [
  > 4 |       "@babel/preset-react",
  >   |       ^^^^^^^^^^^^^^^^^^^^^
    5 |       {
    6 |         "runtime": "automatic"

  💡 Delete .babelrc
  📝 Learn more: https://parceljs.org/languages/javascript/#default-presets

✨ Built in 278ms
```

Everything is OK but this represents that we have new version of parcel server which includes babel transpilation in default. Then we can remove delete the whole content of our `.babelrc` file and keep the basic structure like this

`.babelrc`

```bash
{}
```
