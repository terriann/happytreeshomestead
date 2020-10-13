# Happy Trees Homestead

This is a simple site, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) that uses [Bootstrap 4](https://getbootstrap.com/) for a CSS framework.

This project is setup for easy deploying for hosting on Github Pages, perfect for when you're just squatting a landing page cause you're a domain hoarder.

## Installation

1. Clone this repo `git clone`
2. Run `npm install` to install dependencies
3. Run `npm start` to launch dev site [http://localhost:3000/](http://localhost:3000/)

## Scripts

| Script           | Description                                                     | Additional Documentation                       |
|------------------|-----------------------------------------------------------------|------------------------------------------------|
| `npm start`      | Will run the local development server                           | [Create React App](./docs/create-react-app.md) |
| `npm run build`  | Will build the production site code to the `./build/` directory | [Create React App](./docs/create-react-app.md) |
| `npm run deploy` | Will run build and deploy the build to the `gh-pages` branch    |                                                |
| `npm test`       | Runs tests (_not fully implemented_)                            | [Create React App](./docs/create-react-app.md) |

## Deploy Details

This repo is setup to deploy to the `gh-pages` branch for hosting using the domain name defined in `/public/CNAME`.

Run the deploy NPM command to run a production build and push that to the `gh-pages` branch immediately.

```bash
npm run deploy
```

### DNS Configuration

Additional resources on DNS configuration & domain setup:

- [GitHub - Configuring a custom domain for your GitHub Pages site](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Cloudflare - Redirect root to www](https://community.cloudflare.com/t/redirect-example-com-to-www-example-com/78348)

## Debugging / FAQ

### Github Pages Deploy Gotcha (WSOD)

If the build isn't running on the deployment environment, and you see a white screen of death (WSOD) it may be due to a mismatch in whether the URL is accessing the project in a sub directory and if at access URL matches the directory structure defined in `/package.json` under the key `homepage`.

For example if there is no domain defined in CNAME and you try to access the repo via `https://user.github.io/repo-name` then you'll need to use `'homepage': 'https://user.github.io/repo-name'` then when the CNAME is setup from the DNS provider. When the deploy is setup with the domain name you'll need to deploy a new build with updated `homepage` key.

### `npm run build` fails to minify

This section has moved here: [facebook.github.io/create-react-app/docs/troubleshooting](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
