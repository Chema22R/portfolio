[![Netlify Status](https://api.netlify.com/api/v1/badges/4d60dcc4-33a1-45ec-b417-013a1a0933e5/deploy-status)](https://app.netlify.com/sites/personalwebserver/deploys)
[![dependencies Status](https://david-dm.org/chema22r/personal-web-server/status.svg)](https://david-dm.org/chema22r/personal-web-server)
[![devDependencies Status](https://david-dm.org/chema22r/personal-web-server/dev-status.svg)](https://david-dm.org/chema22r/personal-web-server?type=dev)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Chema22R/personal-web-server.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Chema22R/personal-web-server/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Chema22R/personal-web-server.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Chema22R/personal-web-server/context:javascript)

# Personal Web Server
This application is the front page of my personal server, in which users can access my personal projects, as well as view my curriculum.

Check out a real example of the application from [here](https://chema22r.com).

## Setup and Run
1. Download the source code
2. Install the node modules executing `npm run i`
3. Execute one of the following commands to build the application
    - `npm run build` (production)
    - `npm run build-dev` (development)
4. The build code can be found in `./client/dist`

## Directories Structure
```
|- /client
    |- /src
        |- /app
            |- ...
        |- /assets
            |- /favicons
                |- ...
            |- /icons
                |- ...
            |- /images
                |- ...
            |- /style
                |- ...
        |- index.html
        |- index.js
    |- package.json
    |- webpack.config.js
    |- webpack.dev.js
    |- webpack.prod.js
|- .gitignore
|- LICENSE
|- package.json
|- README.md
```