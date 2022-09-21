# Portfolio

This project contains application built in VueJS for my personal portfolio purposes.

I use it to practice creating applications in Vue and at the same time to present my skills and experience.

The latest released version is accessible at https://thewituch.netlify.app/.

## Few words about

The original plan for creating this portfolio was to go through the full process - from design in Figma to application development.\
However, I decided to let go of the design process (lack of inspiration) and proceed directly to the implementation process.

As a website design, I used a ready-made theme (https://www.free-css.com/free-css-templates/page270/marvel) from the Internet and treated it as a visual guideline on how the target product should look like and behave.

I wrote the entire application in VueJS **myself from scratch.**

## Project scope

The purpose of the project, which is the practice of creating applications in VueJS, made me clarify the functional areas that I want to include in the application. So far it is:

<details><summary>Click to expand</summary>

- [ ] Tame power of Vue:
  - [x] options API
  - [x] composition API
  - [x] reactivity
  - [x] events
  - [ ] routing (sub-pages for each of my projects)
  - [x] component slots with data passing (scoped slots)
  - [ ] automated tests
  - [ ] (optional) state management (state store)
  - [ ] (optional) asynchronous components
  - and other when needed.

- [ ] Build an application:
  - [x] `RWD` compliant
  - [x] using `BEM` methodology for styling components
  - [ ] as installable `PWA`
  - [ ] with a detachable window that maintains reactivity
  - [ ] connected to backend service
  - [ ] with multilingual content support

- [X] Style with `SASS`:
  - [x] lay a code structure and import order that allows to combine global styles with Vue in-component styles
  - [x] combine styles with all `Bootstrap` functionalities
  - [x] develop theming system for parameter of any type (eg. colors, font sizes)
</details>

## Getting Started

First, just clone this repository. You will need an instance of [Node.JS](https://nodejs.org/) installed for the following steps.

### Project setup

A freshly downloaded project requires the installation of the libraries used in it, so run:
```
npm install
```

When the installation process is complete, the project is ready to run. Command bellow starts development server which compiles and hot-reloads for development:
```
npm run serve
```

When everything is ready, the project should be compiled to a minimalist version ready to be placed on the server:
```
npm run build
```

