# Feeling Mindful Technologies Website

This repository hosts the official website for Feeling Mindful Technologies.

## Overview

This website serves as the online presence for Feeling Mindful Technologies, showcasing our mission, values, and the innovative solutions we provide.

## Development

The website is built using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).

### Getting Started

To run this project locally:

1.  Clone the repository:
    ```bash
    git clone https://github.com/prokizzle/feeling-mindful-website.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd feeling-mindful-website
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

## Deployment

This website is deployed using GitHub Pages. The deployment is automated using the `gh-pages` npm package.

To deploy the website, run the following command:
```bash
npm run deploy
```

This will build the React app and push the contents of the `dist` directory to the `gh-pages` branch.

## Custom Domain

The website is configured to use the custom domain `feelingmindful.com`.
A `CNAME` file is included in the `public` directory to facilitate this.
For the custom domain to work correctly, ensure the appropriate DNS records are configured with the domain registrar, pointing to GitHub Pages, and that the GitHub Pages settings are configured to use the `gh-pages` branch.