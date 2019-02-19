# Tech Talks

[![Netlify Status](https://api.netlify.com/api/v1/badges/a3805f52-026b-49d3-b254-487f9a009df7/deploy-status)](https://app.netlify.com/sites/tech-talks/deploys)

## Usage

Install the dependencies with yarn

```bash
yarn install
```

Then run the project with the following command

```bash
yarn dev # Run in development mode
```

To use in production mode you need to build and run it with

```bash
yarn build # Build the application
yarn start # Run it with the built files
```

To use a a static website (eg. when deploying in Netlify) after the production build export it with

```bash
yarn export # Statically export the site
```
