# Academic Website

This is a personal academic website built using [Next.js](https://nextjs.org/), marking my first project with this framework. The website showcases various sections such as a Hero section, Research, Teaching, and CV pages, designed to provide a comprehensive overview of a academic profile and professional achievements.

## (Upcoming) Features

- **Hero Section:** A visually engaging introduction section highlighting key information about the person.
- **Research Page:** Dedicated to showcasing academic research, publications, and ongoing projects.
- **Teaching Page:** Contains information about teaching experiences, courses taught, and other educational contributions.
- **CV Page:** A detailed curriculum vitae outlining the academic and professional background.
- **Reusable Components:** Common components like buttons, headers, and footers are reused across the website to maintain consistency.
- **Backend:** The project is designed to be extendable with a Pocketbase backend where content can be added or updated in a user-friendly and secure way. This would enable the client (or admin) to manage the website’s content easily through a secure dashboard, without needing to manually modify the code.


## How to Run

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/wimthomzik/academicwebsite.git
   ```

2. Install dependencies:
   
    ```bash
    npm install
    ```

3. Start the development server:
   
    ```bash
    npm run dev
    ```

The website will be available at http://localhost:3000.

## Technologies Used

- **[Next.js](https://nextjs.org/):** A React framework for building optimized, server-rendered web applications. It provides file-based routing, which is used in this project to handle navigation between different pages like the research, teaching, and CV sections.
- **React:** Used for creating reusable components that are shared across the website.
- **CSS:** For styling the different sections of the website.
- **JavaScript/TypeScript:** Strongly-typed language used for better developer experience and code safety.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework used for rapid UI development and custom styling.
