[![Netlify Status](https://api.netlify.com/api/v1/badges/4d60dcc4-33a1-45ec-b417-013a1a0933e5/deploy-status)](https://app.netlify.com/sites/personalwebserver/deploys)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Chema22R/personal-web-server.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Chema22R/personal-web-server/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Chema22R/personal-web-server.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Chema22R/personal-web-server/context:javascript)
[![MIT License](https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667)](LICENSE)

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

## Directory Structure
```
|- /.dependabot
    |- ...
|- /.github
    |- ...
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
    |- package-lock.json
    |- package.json
    |- webpack.config.js
    |- webpack.dev.js
    |- webpack.prod.js
|- _config.yml
|- .gitignore
|- LICENSE
|- package-lock.json
|- package.json
|- README.md
```
