[![Netlify Status](https://api.netlify.com/api/v1/badges/4d60dcc4-33a1-45ec-b417-013a1a0933e5/deploy-status)](https://app.netlify.com/sites/chema22r/deploys)
[![CodeQL](https://github.com/Chema22R/portfolio/actions/workflows/codeql.yml/badge.svg)](https://github.com/Chema22R/portfolio/actions/workflows/codeql.yml)
[![MIT License](https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667)](LICENSE)

# Portfolio
This application is the main page of my server. From here you can access some of my personal projects, as well as view my resume.

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
|- .gitignore
|- LICENSE
|- package-lock.json
|- package.json
|- README.md
```
