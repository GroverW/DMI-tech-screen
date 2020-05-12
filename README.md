# Project Title

Dovenmuehle - Tech Screen

## Tech Screen Requirements

The application's Server should:
- [x] Utilize a Node / Express server
- [x] Contain an array of strings
- [x] Have one endpoint to fetch all strings
- [x] Have one endpoint to prepend a new string to the array

The application's Client should:
- [x] Have one page to display all strings stored on server (/all-strings)
- [x] Have one page with UI to input a string and send to server (/all-strings/new)
- [x] Allow a user to navigate between the two pages
- [x] Not be fully styled, but should be laid out in a meaningful way

The application must leverage:
- [x] React Router
- [x] Redux
- [x] Redux Saga
- [x] Reselect
- [x] Styled Components - Use at least one styled component. The component must have a prop passed into the Styled Componenet for conidtional rendering
- [x] Unit Tests - Write tests for one container. (Full test coverage is not required.)

## Project Overview

### Primary Components, Containers, and Back-end Routes and Components

```
app                       # Wrapping folder for front-end
├── containers
│   ├── App               # Routes
│   ├── HomePage          # Landing Page
│   ├── LanguageProvider  # Provider for switching locales
│   ├── Strings           # Shared actions, constants, reducer, selectors
│   │   ├── AddNewString  # Posts new string to back-end
│   │   └── AllStrings    # Loads strings from back-end
│   └── Themes            # Actions, constants, ... for setting themes
└── components
    ├── Navbar            # Header for all pages
    └── NeweStringForm    # Controlled form for adding strings

server                    # Wrapping folder for back-end
├── middlewares
│   └── stringValidationMiddlewares   # Rules and server-side validation
├── api                               # Folder for back-end routes
│   └── strings                       # GET and POST routes for Strings    
├── models                            # Folder for back-end models
│   └── string                        # String model
└── config                            # Contains db array
```

### Technologies Used

1. React for frontend view
2. Styled-components for maintaining component styles
3. Redux-saga w/ Reselect and Immer for managing state
4. Redux-saga for managing API calls and handling dispatches
5. Axios for making API calls
6. Node / Express back-end
7. Express-validator for validating and sanitizing back-end data

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* Make that you have Node.js v8.15.1 and npm v5 or above installed. 
* No database required.

### Installing

Simply clone this repository

```
git clone git@github.com:GroverW/DMI-tech-screen.git
```

Then, from inside the root directory run

```
npm install
```

And you should be good to go!

## Running the tests

To run unit-tests - from the root directory, run the following command:
```
jest
```

## Built With

* [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) - Project Scaffolding
* [Node Packet Manager](https://www.npmjs.com/) - Dependency Management

## Authors

* **Will Grover** - [GroverW](https://github.com/GroverW)

## License

This project is licensed under the MIT license, Copyright (c) 2019 Maximilian
Stoiber. For more information see `LICENSE.md`.
