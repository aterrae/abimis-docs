# Abimis - Now you're coding with power

![Dependencies Status](https://david-dm.org/aterrae/abimis.svg)

## Requirements
To get started with Abimis you have to get some basic tools ready, these are:
- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com) (yeah, you can also use the NPM installer but Yarn is cooler 🐱)

## Getting started
First things first let's get our dependencies ready!
To do so open your command line and type:
```bash
cd your-project-path
```
Now install all your dependencies!
```bash
yarn
```
or
```bash
npm install
```
Now you can start compiling everything, to do so you have to run the command:
```bash
yarn start
```
or
```bash
npm start
```
This will start the watch task that'll compile all your files and take care of your project.
When you are ready to get a distribution copy of your work just type:
```bash
yarn dist
```
or
```bash
npm run dist
```

## Other Commands

###### Favicons

This will start the favicons task that will generate a favicon set based on the master file you provide.
More info on that in the [Abimis docs favicons page](https://abimis.aterrae.com/docs/favicons)
```bash
yarn favicons
```
or
```bash
npm run favicons
```

## Packages

Abimis provides some packages that you can get to change your project layout.
Some come with other tools integration (e.g. React integration is supported with the **abimis-react-boilerplate** package), others come with templates and utilities to simplify your project kickstart.
To get a package run the following command:
```bash
yarn get --package=package-name
```
or
```bash
npm run get --package=package-name
```
The package name that you provide to the command is the same as the repo name of the package you want to get but without the `abimis` prefix. (e.g. to get the **abimis-landing** package you run `npm run get -- -landing`)

## Multiple Projects
When you are working with more than a project that share a lot of assets and code, keeping them into separated repos could end up into quite the hassle. Abimis comes with a solution for this problem by providing support for multiple projects in a single instance of the framework.
This comes in the form of some tasks and modifications that allow you to run more than a website with the same Abimis instance.

To run more than a project using your Abimis installation just do the following:

1. Duplicate the `settings.json`, `settings-txt.json` and `settings-favicon.json` and rename them all changing **settings** to **project-name**</br></br>
e.g.</br>
`settings.json` -> `project-name.json`</br>
`settings-txt.json` -> `project-name-txt.json`</br>
`settings-favicon.json` -> `project-name-favicon.json`
2. Duplicate the src folder and rename it into **project-name**
3. Open the `project-name.json` file and change all instances of `src` into `project-name` and all instances of `dist` into `dist-project-name`

After you have set up your new project you can use all the usual Abimis commands by adding a single parameter to the command.

```bash
yarn start --project=project-name
```

or

```bash
npm start --project=project-name
```

You can also install any Abimis component by adding the same project parameter like this.

```bash
yarn get --package=package-name  --project=project-name
```

or

```bash
npm run get --package=package-name  --project=project-name
```

The `project-name` parameter is also required in every other Abimis command.

**N.B.**

When using multiple projects you can also rename the base `settings.json` file names and the `src` folder name into whatever you like, but by doing this all the Abimis commands will always require the `project-name` parameter.

## Addendum
Abimis supports and recommends the usage of the following patterns and tools to improve consistency when developing your project, you are free to choose weather or not to use them but we think that taking your time to learn more about them can make the difference. 😉

##### [EditorConfig](http://editorconfig.org)
EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.
Abimis uses editor config to make sure that all of its code is following the same indentation and style rules. If your editor doesn't support it natively you can download the plugin on their website. Here are the plugins for the editors we enjoy the most.

- [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)
- [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime#readme)
- [Notepad ++](https://github.com/editorconfig/editorconfig-notepad-plus-plus#readme)

---
Have fun with Abimis! The best front-end framework on the 🌍 and beyond 😉

Made with plenty of ❤️ by two guys from the **Aterrae** team in Rubano (Padova), Italy

Copyright © 2017 Aterrae | Digital Growth.
