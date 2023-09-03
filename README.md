
# Programming Challenge Project with Ionic and Vue.js

This is a programming challenge project where I created an application using Ionic and Vue.js to list movies from an API and allow access to the details of each movie. Below are the steps to initialize and run the project.

## Project Initialization

### Step 1: Clone the Repository
1. Open your terminal or command line.
2. Navigate to the folder where you want to store the project.
3. Run the following command to clone the repository:

   ```bash
   git clone <REPOSITORY_URL>
   ```

### Step 2: Install Dependencies
1. Navigate to the project folder:

   ```bash
   cd project-name
   ```

2. Install the project dependencies using npm:

   ```bash
   npm install
   ```
3. Install the ionic CLI with npm:

   ```bash
   npm install -g @ionic/cli
   ```
### Step 3: Run the Application in Development Mode
1. Run the following command to start the application in development mode:

   ```bash
   ionic serve
   ```

2. This will automatically open the application in your default web browser. If it doesn't, open a browser and navigate to the address: `http://localhost:8100`.

### Step 4: Explore the Application
1. In the application, in the registration tab, you will see a form with some Ionic components.
2. In the movies tab, you should see a list of movies on the main page extracted from a movies API.
3. Click on a movie to access its details, where you can view more detailed information about the movie.


## Things to Improve

#### 1. Create a Service Class
- Consider creating a new service class where all the calls to external APIs used by the application can be centralized. This will help manage data retrieval more efficiently.

#### 2. Create a MovieDetails view instead of a component
- Change the MovieDetails component to a MovieDetails view, adding this route to the router.

#### 3. Apply Styling
- Enhance the visual appeal of the application by adding styles to make it more aesthetically pleasing. Consider using CSS frameworks or custom stylesheets to improve the user interface.

#### 4. Date Formatting
- Improve the date formatting to ensure that dates are displayed in an Australian format.

#### 5. Refine the MovieList Component
- Refine the MovieList component code. 

#### 6. Data Validation
- Implement data validation for user input in forms to ensure that only valid data is processed.

