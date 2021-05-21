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

## Project practices

### Language

Using TypeScript and maintaining proper type annotations is not optional in this project.

### Testing

* All functionality should be developed as unit tested with Jest suites.
* View components shall be snapshot tested.
* Test failures will fail project build.

### Code formatting

* Automatic linting should be the standard.
* Failed linting will fail project build.

#### Tools

`npm run lint` to do full lint checkup for project
`npm run prettyfy` to do possible automatic fixes to linting

#### VS Code

To enable automatic lint upon save, set following in your `.vscode/settings.json`

```
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
}
```

### Semantic commit messages

We use semantic commits as guideline in how to organize our commits. This allows us to keep a tidy and readable commit history with to-the-point commits and clear intent. This is adapted from https://sparkbox.com/foundry/semantic_commit_messages.

Commit messages are prefixed with a category having a certain intent, such as `feat: add cancel button to main submit form` or `fix: address rounding error in sums with numerically inaccurate sources`. The following table explains the format and intent.

|Prefix|Intent|
|------|------|
|feat|Actual feature addition or change. The commit which actuates a planned change, removal or improvement. Should contain necessary related changes to test suites. Should coincide with the topic of a Jira task or related issue.|
|fix|A change which addresses a faulty implementation, or bug. Should contain necessary related changes to test suites.|
|ref|A refactoring commit which does not change the functionality of whatever it touches. Should be a change that is theoretically free or regression risk and passes unit tests just as before. Refactorings required for a feature or a fix should be made in a preceding commit. Split your work so that `feat` and `fix` commits come separately for the changing functionality changes.|
|chore|A commit not directly related to the programming of the project. Changes to build pipelines, project configuration and other plumbing.|
|style|Pure code formatting changes with no effect whatsoever on functionality or structure. Keep normal changes to code styled by applying automatic linting by project standards upon save or at least before creating commits.|
|test|All changes purely involving test suites, when not related to a `feat`, `fix` or `ref`.|
|doc|Commit contains only documentation changes.|