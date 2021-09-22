# React Storybook
Example UI Library built in react and using storybook

## Instructions

### Running Locally

1. `npm install`
2. `npm start`
3. Visit <http://localhost:4000/>

### Running Storybook
1. `npm run storybook`

### Running a release

Make sure you are on the `master` branch before running a release.

1. `npm run build`
2. Commit any changes to the built binaries in the `dist` folder
3. Bump the version number `npm version patch`
4. Push to github
5. In github, tag this release in the following format: `v0.0.x`

### Using This Library

1. Update package version number in your target application
`"react-storybook": "git+ssh://git@github.com/ashdown/react-storybook.git#v0.0.x"`
2. `npm install`

## Links

* [App running locally](http://localhost:4000/)
* [Staging Environment](http://somewhere.com/)

