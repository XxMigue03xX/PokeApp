# PokeApp

Frontend project developed during the Academlo bootcamp.
It consumes the public PokeAPI and provides a responsive interface to explore Pokémon, filter them by name or type, and view detailed information for each one.
This project was built as a learning exercise focused on React fundamentals, routing, API consumption, reusable components, and state management patterns.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Usage](#usage)
- [Screenshots or Evidence](#screenshots-or-evidence)
- [Notes](#notes)
- [Limitations](#limitations)
- [Status](#status)
- [Author](#author)

## Features
- Pokémon list visualization using data from PokeAPI
- Filter by Pokémon name and type
- Detailed Pokémon view with full stats on dynamic routes
- Protected routes with a simple name-based access flow
- Dynamic visual styles based on Pokémon type
- Responsive layout for desktop and mobile
- Simple pagination for browsing large result sets
- Reusable React components and list rendering

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Libraries / Services**
- Axios
- React Router
- PokeAPI
- Netlify

**Architecture / Patterns**
- React Context API
- Custom Hooks
- Reusable components
- Conditional rendering
- List rendering

**Tools**
- npm
- Git
- GitHub

## Project Structure
- `src/api`: API consumption through a shared Axios instance
- `src/assets`: Static assets such as images and visual resources
- `src/components`: Reusable UI components
- `src/context`: Global state management with React Context
- `src/hooks`: Custom hooks such as pagination logic
- `src/pages`: Main application views/pages
- `src/router`: Route definitions and navigation flow
- `src/services`: Requests built on top of the shared Axios instance
- `src/main.jsx`: Application entry point

## How to Run

### Prerequisites
- Node.js installed
- npm installed
- Git installed

### 1. Clone the repository
```bash
git clone [REPOSITORY URL]
cd PokeApp
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the project

```bash
npm run dev
```

### 4. Open / test the project

Open your browser and visit:

```bash
http://localhost:5173
```

You can test:

* the registration flow by entering a name
* protected routes
* filtering by name or type
* pagination
* responsive behavior using browser developer tools

## Usage

1. Open the application in the browser.
2. Enter your name to access the protected Pokédex flow.
3. Browse the Pokémon list and use filters by name or type.
4. Open any Pokémon card to view its detailed stats page.
5. Test the interface on different screen sizes if desired.

## Screenshots or Evidence

* Live demo: [pokeapp-miguelgaravito.netlify.app](https://pokeapp-miguelgaravito.netlify.app/)

## Notes

* This project was created as part of the Academlo bootcamp as a frontend learning exercise.
* The repository focuses on demonstrating React fundamentals such as routing, protected routes, API consumption, context usage, pagination, and reusable components.
* `npm audit` may report vulnerabilities related to legacy dependency versions used in the original learning setup. At the time of writing, fixing them automatically would require major version upgrades that may introduce breaking changes, so they were not prioritized for this portfolio version.

## Limitations

* The route protection is educational and simple; it is not a real authentication system.
* The project depends on a third-party public API, so availability and response structure are external factors.
* Some dependencies come from the original bootcamp setup and were not aggressively upgraded to avoid unnecessary breakage in a stable portfolio version.
* No automated tests were added to this project.

## Status

Completed bootcamp project, currently kept as a portfolio and learning repository.

## Author

**Miguel Garavito**

* Portfolio: [miguelgaravito.netlify.app](https://miguelgaravito.netlify.app/)
* LinkedIn: [linkedin.com/in/miguel-ángel-garavito-camargo](https://co.linkedin.com/in/miguel-%C3%A1ngel-garavito-camargo)

## License

This project is for educational and portfolio purposes.