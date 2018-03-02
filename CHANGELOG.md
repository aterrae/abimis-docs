# Changelog

## v0.7.0 (October 27, 2017)

### Updated

- Abimis now supports multiple projects
- Dependencies

## v0.6.0 (June 26, 2017)

### Added

- CSScomb is now supported with custom settings

### Updated

- Moved from Browserify to Webpack
- Moved from Gulp-HB to Iungo
- Unified all error tasks into a single one
- Get task now also supports abimis_components

### Removed

- Moved away from libs.js and app.js files in favour of a single JS file

## v0.5.1 (June 9, 2017)

### Added

- Server Redux task

### Updated

- NODE_ENV now manages both development and production states
- NODE_ENV variable now flows down through Browserify
- Get task now also supports devDependencies installation

### Removed

- Unused dependency

## v0.5.0 (April 25, 2017)

### Added

- Meow! Yarn joined the party =^•ω•^=
- Get uses Yarn when possible
- Get shell commands now support Windows

### Updated

- Moved CSSnano from Gulp to postCSS plugin
- Moved TXT settings to a dedicated file

### Removed

- It's time for us to part ways. Let us know how your life is going without us. We've loved you little Bower

## v0.4.1 (March 25, 2017)

### Fixed

- Moved the package installation method from the install reserved keyword to a free keyword

## v0.4.0 (March 25, 2017)

### Updated

- The package management has been generalized, dropping the custom command for each package in favor of a general command

## v0.3.3 (March 20, 2017)

### Added

- React project initialization with dedicated task

### Updated

- A fresh installation of the Abimis framework now comes as a pureJS framework

### Removed

- React boilerplate

## v0.3.2 (March 16, 2017)

### Updated

- Favicons generation now uses RFG

## v0.3.1 (March 11, 2017)

### Added

- Favicons generation from settings-favicons.json data
- Notification icons

### Updated

- Moved meta tags into partial
- Dependencies

## v0.3.0 (March 9, 2017)

### Added

- Humans.txt and Robots.txt generation from settings.json data
- DoIUse SASS check

### Updated

- NPM script commands
- Moved settings from .yml to .json
- Converted useless settings.json arrays into variables
- Splitted gulpfile.babel.js into tasks files
- Splitted dev/dist tasks
- Moved from babel-preset-es2015 to babel-preset-env
- Script extension from .jsx to .js
- Small improvements

### Removed

- Babel unused plugin
- UnCSS module for gulp

## v0.2.0 (February 16, 2017)

### Added

- Object Assign support for older browsers
- UnCSS module for gulp
- Support to Animate-SASS
- More examples

### Updated

- React and Redux example names
- Settings.yml variable names

### Removed

- Babel polyfill

### Fixed

- Placeholder style

## v0.1.0 (March 13, 2016)

### Added

- Started Development.
