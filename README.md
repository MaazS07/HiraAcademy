

---


## HiraAcademy Internship Shortlisting Project

## Author
Maaz Saboowala  
Dwarkadas J. Sanghvi College of Engineering

This project is a part of the internship shortlisting process for HiraAcademy. The task was to create a frontend application that fetches data from an API containing information about books, and then display this information on separate pages for each book.



## Project Overview

The project consists of two main components:

1. **GetBooks Page:** This page displays a list of all books fetched from the provided API. Each book is represented as a card containing its title. Users can click on a book title to navigate to its details page.

   BookDetails Page:This page displays detailed information about a specific book. Information such as the book's title, ISBN, page count, and authors are displayed. Users can access this page by clicking on a book title from the GetBooks page.


![Project Screenshot](HiraAcademy\maaz_frontend\src\assets\bookdetails.png)

![Project Screenshot](HiraAcademy\maaz_frontend\src\assets\getbook.png)


## Technologies Used

- React.js: The project is built using React.js, a popular JavaScript library for building user interfaces.

- Axios: Axios is used to make HTTP requests to fetch data from the API.

- React Router: React Router is used for client-side routing, allowing navigation between different pages of the application.

- Chakra UI: Chakra UI is used for styling components, providing a consistent and visually appealing design.

## How to Run the Project

1. Clone this repository to your local machine using `git clone`.

2. Navigate to the project directory in your terminal.

3. Install dependencies by running `npm install`.

4. Start the development server by running `npm start`.

5. Open your browser and go to `http://localhost:5173` to view the application.

## Project Structure

```
├── public/                # Static files
│   ├── index.html         # HTML template
├── src/                   # Source files
│   ├── components/        # React components
│   │   ├── GetBooks.js    # Component for displaying list of books
│   │   ├── BookDetails.js # Component for displaying details of a book
│   ├── stylesheets/       # CSS and styling files
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point for React application
├── README.md              # Project README file
```

## Additional Notes

- Make sure you have a stable internet connection to fetch data from the provided API.

- The application is designed to be responsive and should work well on different screen sizes.

- If you encounter any issues or have any feedback, please feel free to raise an issue or contact the me .

---
