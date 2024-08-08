Project Title:
# Maids-Task Using Angular 17

## Overview

This project is a dynamic user dashboard built as part of a task for a job interview. The application demonstrates advanced Angular (7+) features, including state management, custom directives, observables, caching, and user interface enhancements. The dashboard provides functionalities like paginated user lists, a search feature, and detailed user pages and implementing SSR.

## Features
- **SSR**: Implementing SSR to increase SEO and preformance of the application .
- **Pagination**: Display a list of users with paginated navigation.
- **Search Functionality**: Instant search field to find users by ID.
- **User Details Page**: View detailed information of selected users with a back navigation.
- **State Management**: Utilize NgRx for efficient state handling.
- **Custom Directives**: Implement custom directives for enhanced UI interactions.
- **Observables**: Manage asynchronous operations using RxJS.
- **Caching**: Implement caching to optimize performance and reduce redundant HTTP requests.
- **Loading Bar**: Display a loading indicator during network requests.
- **Styling & Animations**: Apply proper styling and animations for a polished UI.
- **Themes**: Implementing two themes and switching between them by header's buttons.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Soly01/maids-task.git
2- Navigate to the project directory:

cd maids-task

3- Install the dependencies:

npm install

4- Run the application:

ng serve

5- Open a web browser and navigate to http://localhost:4200/.

```markdown
## Usage

1. **Pagination**: Use the pagination controls at the bottom to navigate through the list of users.
2. **Search**: Enter a user ID in the search field at the top to quickly find a user.
3. **View Details**: Click on a user's card to view their detailed information.
4. **Navigation**: Use the back button on the details page to return to the main user list.


## API Endpoints

- **User List**: `https://reqres.in/api/users?page={page}`
- **User Details**: `https://reqres.in/api/users/{id}`

## Technologies Used

- **Angular (17)**: Framework for building the user dashboard.
- **NgRx**: State management.
- **RxJS**: Handling asynchronous operations.
- **PrimeNG**: UI components library.
- **TypeScript**: Programming language used.
- **HTML & SCSS**: Markup and styling.

```
## Project Structure

The project is organized into the following directories and files:

```plaintext
src/
├── app/
│   ├── components/                   # folder for different UI sections
│   │   ├── cards                         # Component for list of users
│   │       ├── cards.component.html            # cards component 
│   │       ├── cards.component.scss            # cards component 
│   │       ├── cards.component.ts              # cards component 
│   │   ├── cards-details                 # Component for user details 
│   │       ├── cards-details.component.html    # cards-details component 
│   │       ├── cards-details.component.scss    # cards-details component 
│   │       ├── cards-details.component.ts      # cards-details component 
│   ├── core                             
│   │   ├── directives                    # folder for directives
│   │        ├── overlay.directive.ts           # directive for showing the span and icon 
│   │   ├── interface                     # folder for interface
│   │        ├──  user.interface.ts             # interface for data types
│   │   ├── pipe                          # folder for pipes
│   │        ├── search.pipe.ts                 # pipe for search in user list
│   │   ├── services                      # folder for services
│   │        ├── cards.service.ts               # service for returning http request
│   ├── shared                            # folder for shared components
│       ├── header/                       # Component for header
│   │        └── header.component.html          # header component
│   │        └── header.component.scss          # header component
│   │        └── header.component.ts            # header component
│       ├── skeleton/                     # Component for skeleton-loader 
│   │        └── skeleton.component.html        # skeleton component
│   │        └── skeleton.component.scss        # skeleton component
│   │        └── skeleton.component.ts          # skeleton component
│   ├── store/                            # NGRX Store
│   │        └── user.actions.ts               # NGRX actions
│   │        └── user.effects.ts               # NGRX effects
│   │        └── user.reducer.ts               # NGRX reducer
│   │        └── user.selectors.ts             # NGRX selectors
│   ├── app.component.html               # Root component template
│   ├── app.component.scss               # Root component styles
│   ├── app.component.ts                 # Root component
│   ├── app.server.config.ts             # Main application module
│   ├── app.config.ts                    # Main application module
│   ├── app.routes.ts                    # Routing configuration
├── assets/                        # Images, fonts, and other static assets
├── favicon.ico/                   # Application favicon
├── index.html/                    # index
├── main.server.ts/                # SSR Server
├── main.ts/                       # Main
├── styles.scss/                   # Global Styles
├── themes.scss/                   # themes
├── .editorconfig/                 # editorconfi
├── .gitgnore/                     # gitgnore
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript configuration 
└── angular.json                   # Angular CLI configuration
├── README.md                      # Project documentation
├── server.ts                      # Server


