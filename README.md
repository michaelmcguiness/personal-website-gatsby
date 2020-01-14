# personal-website
* Source: https://www.youtube.com/watch?v=Jdez-Nl2RHY
## Client
* Create React App inside client folder (npx create-react-app my-app) and move all of the contents of "my-app" to client repo (can then delete "my-app" repo)

## Server
* Use Express application generator to create application skeleton in server (npx express-generator express)
* Node.js is a runtime environment that lets you execute code outside the browser which allows us to make SQL queries and other requests
* NPM is the node package manager.  Allows us to install, remove and update third party libraries (prewritten code)
* Express is the actual server code that is executed by node.  Express code is executed by the node environment.
* cors library helps communication between the React App and the Express server.  We will do this through a proxy in the React app.  Without this we would receive a Cross Origin Resource error in the browser.
* helmet is a security library that updates http headers. This library will make our http requests mroe secure
* pg is the main library we will use to communicate with our psql database. Without this library, communication with the database will not be possible.