# CS465-fullstack
CS-465 Full Stack Development with MEAN

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Express HTML is a web application framework for Node.js on the server side.  It provides various features for developing web servers and APIs.  In Express we can set up routes and controllers, handle http requests to interact with databases like MongoDB.  JavaScript is the language that works on both the client-side and server-side to create features for user interactions in applications and more.  Single-Page Application resides on the client side and is a one page web application that reacts to user interaction with the UI in real time.   
Why did the backend use a NoSQL MongoDB database?
The decision to use a NoSQL MongoDB database seems to be the flexibility of storing non structured data.  The type of data in our collections seems to be diverse, with an unrestricted data storage, data ca be queried faster.  

Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON comes from JavaScript, but it is used to exchange data between the client side and server side.  When a http request is made from user through the application to the server side, the server side sends a JSON data format and then gets parsed on the client side and updates the User interface.
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
To improve functionality we essentially turned the web application from a static HTML to handle bar templates.  In assignment two, we refactor common functionality such as headers and footers into partials.  When developers make changes or updates in one place, and those changes will be made across multiple pages that include the partial.

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Methods like HTTP request interact with the server and it includes GET to retrieve data, POST to submit and process data, PUT to update data, or DELETE to remove data, and more.  Endpoints can be used to access specific files and make edits using the methods.  We use the method to login as security in order to make changes to the application.  Using Postman I was able to make an account and use it to log in to the application.  Without the proper credentials, I was not able to make any edits or add trips.  

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has helped me learn how to create and develop appealing UI for web applications.  Using frameworks such as express.js and angular.js I learned about what it takes to develop the client side and server side to create an interactive application.  Using this skills, can help me in my career as a web developer if needed.  As far as my job now I can use the skills to troubleshoot issues relating to the code by knowing where to look.  


