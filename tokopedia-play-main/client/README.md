# How to Run

Before running the application locally, make sure you have the following prerequisites installed on your machine:

- **Node.js:** Ensure you have Node.js installed. You can download it from the [official website](https://nodejs.org/en/download).

- **Git:** Install Git on your machine if you haven't already. You can download it from the [official website](https://git-scm.com/downloads).

Now, follow the steps below to run the API on your local environment:

1. Clone the repository:

   ```bash
   git clone https://github.com/4ken/tokopedia-play.git
   ```

2. Move to project directory:

   ```bash
   cd tokopedia-play/client
   ```

3. Install all required dependencies:

   ```bash
   npm install
   ```

Before running the application, you need to set up the environment variables:

1. Open the `.env` file and configure your own environment variables:

   ```
   BASE_API_URL=http://localhost:3000
   ```

   Replace `http://localhost:3000` with the URL of your API.

Once all the preparations have been made, you will be able to run the application locally:

Start the server:

```bash
npm run dev
```
