[![Build Status](https://travis-ci.org/ConCode/FreeFootie.png?branch=master)](https://travis-ci.org/ConCode/FreeFootie)

Join the conversation [here](https://groups.google.com/forum/#!forum/coding-with-a-conscience)

Prequisites:
* [nodejs](http://nodejs.org/)
* gulp (npm package, globally installed)
* [mongodb](http://mongodb.org/)

Starting work on this project is easy. You just need to install the prereqs for your chosen OS. After that, just follow the steps below:

    git clone https://github.com/ConCode/FreeFootie
    cd FreeFootie
    npm install
    mongod
    gulp init
    gulp server

Note: We've recently switched to gulp. You may have to re-run npm install and
get your head around the new, improved build system

Oh, and you'll have to start mongod however you normally do on your system

###Structure
This nodejs application has its components split between client and server. Files found in the client directory
have to do with what is actually loaded and rendered by the browser. This means html, javascript (angular components), etc.
The server directory contains all the backend systems such as the REST api handling, database interactions, etc.

The http server is started and configured in server.js. Setting things like port numbers can be done in settings.json.

###Pages

#### Admin:

- /admin (Dashboard, management portal)
- /admin/game/:id (Game details)
- /scheduler (Create games for league play)
- /admin/team (Administer the teams)

#### Ref:

- /ref (Dashboard)

#### Debugging

If you need to debug the solution, use [node-inspector](https://github.com/node-inspector/node-inspector).
Since gulp spawns nodemon as a second process, you can't simply run `node-debug gulp`.
If you are trying to debug something in the build system, you can just use:

    node-debug /usr/local/bin/gulp init

If, however, you are testing the server, you need to run it explicitly. The server requires
some environment variables to be set. As a result, use the `env` command like:

    env NODE_SERVER_PORT=3000 NODE_PUBLIC_DIRECTORY=.tmp node-debug server.js

If you're on Windows, I have no idea. Sorry. Also keep in mind that if your default browser
is something other than Chrome, the debug sequence doesn't work. Set your default to Chrome
and you will be fine.
