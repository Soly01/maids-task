Project Title:
# Angular Quiz: Dynamic User Dashboard

## Overview

This project is a dynamic user dashboard built as part of a task for a job interview. The application demonstrates advanced Angular (7+) features, including state management, custom directives, observables, caching, and user interface enhancements. The dashboard provides functionalities like paginated user lists, a search feature, and detailed user pages.

## Features

- **Pagination**: Display a list of users with paginated navigation.
- **Search Functionality**: Instant search field to find users by ID.
- **User Details Page**: View detailed information of selected users with a back navigation.
- **State Management**: Utilize NgRx for efficient state handling.
- **Custom Directives**: Implement custom directives for enhanced UI interactions.
- **Observables**: Manage asynchronous operations using RxJS.
- **Caching**: Implement caching to optimize performance and reduce redundant HTTP requests.
- **Loading Bar**: Display a loading indicator during network requests.
- **Styling & Animations**: Apply proper styling and animations for a polished UI.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/angular-user-dashboard.git
2- Navigate to the project directory:

cd angular-user-dashboard

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

## Code Structure

The project is structured as follows:

- **src/app**: Contains all the Angular components, services, and modules.
  - **components**: Contains the user list, user details, and search components.
  - **services**: Contains the `CardsService` for handling HTTP requests and caching.
  - **store**: Contains NgRx store setup for state management.
  - **directives**: Contains custom directives used in the project.
  - **models**: Contains TypeScript interfaces for the project.
- **assets**: Contains static assets like images.
- **styles**: Global styles and theming for the application.


## API Endpoints

- **User List**: `https://reqres.in/api/users?page={page}`
- **User Details**: `https://reqres.in/api/users/{id}`

## Technologies Used

- **Angular (17)**: Framework for building the user dashboard.
- **NgRx**: State management.
- **RxJS**: Handling asynchronous operations.
- **PrimeNG**: UI components library.
- **Angular Material**: Additional UI components.
- **TypeScript**: Programming language used.
- **HTML & CSS**: Markup and styling.

```
Project Structure:

src/
app/
components/ (Components for different UI sections)
quiz.component.ts
user-list.component.ts
user-details.component.ts
search-bar.component.ts
loading-bar.component.ts (Optional for visual feedback)
... (Other components as needed)
services/ (Services for data access and manipulation)
user.service.ts
models/ (Data models for users)
user.model.ts
app.module.ts (Main application module)
app.component.ts (Root component)
app.routing.module.ts (Routing configuration)
app.component.html (Root component template)
app.component.css (Root component styles)
assets/ (Images, fonts, and other static assets)
README.md (Project documentation)
package.json (Project dependencies)
tsconfig.json (TypeScript configuration) (Optional if using custom settings)
angular.json (Angular CLI configuration) (Optional if not using default settings)

