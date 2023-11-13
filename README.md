to run this application: 

FrontEnd

Clone the Repository:
Open a terminal or command prompt.
Navigate to the directory where you want to clone the repository.
Run the following command to clone the repository:
     git clone <repository-url>
     ```
Install Dependencies:
Navigate to the cloned repository's directory.
Run the following command to navigate to the frontend directory:
     cd OmnevoCardGame\client
     ```
Run the following command to install the required dependencies:
     npm install
     ```
Configure Backend URL:
Open the src/config.js file in the frontend directory.
Update the API_BASE_URL constant to the URL where your backend is running. By default, it is set to http://localhost:5000.
Save the changes.
Run the Application:
Run the following command to start the frontend application:
     npm start
     ```
The application will start and open in your default web browser at http://localhost:3000.

Test the Application:
Interact with the frontend application in your web browser.
Use the provided user interface to perform actions and communicate with the backend API.
That's it! You have successfully set up and started the React frontend application. You can now use the application to interact with the backend API and test its functionality.

Please note that this guide assumes you have the necessary prerequisites installed, such as Node.js and npm. If you encounter any issues during the setup process, make sure to check the documentation or troubleshooting guides specific to your operating system and development environment.

______________________________

Backend:


1. Clone the Repository:
   - Open a terminal or command prompt.
   - Navigate to the directory where you want to clone the repository.
   - Run the following command to clone the repository:

     ```
     git clone <repository-url>
     ```

2. Install Dependencies:
   - Navigate to the cloned repository's directory : \OmnevoCardGame\client
   - Run the following command to install the required dependencies:

     ```
     dotnet restore
     ```

3. Set up the Database:
   - Open the `appsettings.json` file in the project's root directory.
   - Update the connection string in the `DefaultConnection` section to point to your SQLite database file. By default, it uses the `app.db` file in the project's root directory.
   - Save the changes.

4. Apply Migrations:
   - Open a terminal or command prompt.
   - Navigate to the project's root directory.
   - Run the following command to apply the database migrations:

     ```
     dotnet ef database update
     ```

   This command will create the necessary tables in your SQLite database.

5. Run the Application:
   - Run the following command to start the backend application:

     ```
     dotnet run
     ```

   The application will start and listen for incoming requests on the specified port (usually `https://localhost:5001`).

6. Test the Application:
   - Open a web browser or use an API testing tool (e.g., Postman).
   - Send HTTP requests to the running backend application to test its functionality.

That's it! You have successfully set up and started the backend application. You can now interact with the API endpoints and test the functionality.

Please note that this guide assumes you have the necessary prerequisites installed, such as .NET Core SDK and SQLite. If you encounter any issues during the setup process, make sure to check the documentation or troubleshooting guides specific to your operating system and development environment.


