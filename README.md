# Model Function Library workbench/prototype

Created with react-static generator version 3.5.7, using typescript template. This project is the test and prototyping platform for a Luonnonvarakeskus (Natural Resources Institute Finland) user interface for browsing and managing a Model Function Library. This is a library of computational models usable in a simulator setting.

## Getting started

You need local Node.js to run or build the project. Choose either direct Node.js installation or use nvm, which allows managing multiple Node.js version. We default to Node.js version 14 in this project. `npm` command should come bundled with the Node.js installation.

* `nvm-windows` from https://github.com/coreybutler/nvm-windows. Note that this program requires administrator privileges to install and further when installing Node.js. Take care to install the program into a location accessible by your normal user.
* `nvm` for Linux/Macintosh from https://github.com/nvm-sh/nvm
* `Node.js` for any platform from https://nodejs.org/en/download/

### Usage

`npm install` on the first run and after dependency changes to refresh project package dependencies. 

Call `npm run start` to launch the project in hot-reload developer mode. The site is then accessible via http://localhost:3000.

Call `npm run build` to generate the production release into the `dist` directory. Contents of this directory can be published on a target web server to serve the app. 

## Project structure

|File/Dir|Purpose|
|--------|-------|
|static.config.js|React Static entry point. Defines data sources in the static build for specific routes.|
|index.tsx|Technical entry point wrapping the React App|
|App.tsx|Actual React App entry point|
|src/pages|Web page modules X.tsx - accessible as `http://<hostname>/X`|
|src/containers|React components supposed to be used as technical view wrappers (plumbing for state management)|
|src/components|Pure React view components|
|public|Directory with contents to be published as-is to host root directory|
|types|TypeScript type definitions|