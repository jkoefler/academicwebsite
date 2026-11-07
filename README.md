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

## Deploy to the web server

The deployment script uses Cyberduck CLI (`duck`) and the SSH key at
`~/.ssh/hetzner`. On a new laptop, install Node.js, run `npm ci` in this
repository, install the uploader with `brew install duck`, and make sure that
the SSH key is present and readable. Keep the private key outside the repository.

From the repository, run:

```bash
./upload.sh --check     # Check prerequisites and list the server; no upload
./upload.sh --dry-run   # Build and preview commands; no server connection
./upload.sh             # Build and publish to /public_html
```

The script also works when launched by its full path from another directory.
If your key is stored elsewhere, set `DEPLOY_IDENTITY_FILE` when running it:

```bash
DEPLOY_IDENTITY_FILE="$HOME/.ssh/another-key" ./upload.sh --check
```

An ordinary deployment stops on errors, checks the exported files, and uploads
assets before HTML and `.htaccess`. It overwrites matching files and preserves
other remote files, including old hashed assets. Removed pages therefore need
to be cleaned up separately. This is an in-place upload, so an interrupted
transfer can leave a mixture of versions; fix the error and rerun the script.

The root `.htaccess` serves exported routes such as `/research` from their
matching `.html` files and uses `404.html` for missing pages. It replaces the
old `/subdirectory` placeholder in `htaccess copy`.

## Technologies Used

- **[Next.js](https://nextjs.org/):** A React framework for building optimized, server-rendered web applications. It provides file-based routing, which is used in this project to handle navigation between different pages like the research, teaching, and CV sections.
- **React:** Used for creating reusable components that are shared across the website.
- **CSS:** For styling the different sections of the website.
- **JavaScript/TypeScript:** Strongly-typed language used for better developer experience and code safety.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework used for rapid UI development and custom styling.
