# Personal Web Server
This application is the front page of my personal server, in which users can access my personal projects, as well as view my curriculum.

Check out a real example of the application from [here](http://chema22r.duckdns.org).

## Setup and Run
1. Download the source code
2. Install the node modules executing `npm i` from inside the *client* folder
3. Execute one of the following commands from inside the *client* folder
    - `npm start` to run the application in live-reload mode (development)
    - `npm run build` to build the application (production)

## Directories Structure
```
|- /client
    |- /src
        |- /app
        |- /assets
            |- /favicons
            |- /icons
            |- /images
            |- /style
        |- index.html
        |- index.js
    |- package.json
    |- webpack.config.js
    |- webpack.dev.js
    |- webpack.prod.js
|- .gitignore
|- LICENSE
|- README.md
```