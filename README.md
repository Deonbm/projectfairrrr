
Data sharing b/w components in React

-state lifting:lifting state ti its parent such tht it can share state between its child using props
-redux:to avoid props drilling while sharing the data between components,avoid props drilling
-context API-use context to share data between components, avoid props drilling

-------------------------------------------
CONTEXT-API
-------------------------------------------
-providing centralized way to manage state across components
-share specific info:(like state or function) with multiple components without props drilling 

-steps
     -creating a context:creating a context using createContext() hook
     -provide the context: use provider of context, so that it helps to provide data to component
     -consuming the context:



-------------------------------------------
MONGODB -DATABASE
-------------------------------------------

SQL
------

-Relational/SQL RDBMS
-Store data in table with rows & column
-uses fixed scheme
-optimised for complex join and transactions
-support rch set of data types
-ACID(Atomicity,consistency,isolation,rurability)
-Uses traditional business app


MONGODB
-------
-Document Oriented / NoSQL DB
-Store data as collection of JSON Documents
-Uses dynamic schema
-optimized for scalability and performance
-limited set of data types 
-CAP(Consistence,Durability,Partition Tolerance)
-Used in bigdata and real time applications


-CRUD OPERATIONS
----------------

-To read all documents from a colllection: find()
-To get single document from a collection: findOne({key:value})
-To insert single document to a collection:insertOne({key:value})
-To insert more than one document to a collection:insertMany([{key:value},{key:value},{key:value},...])
-To display total count of documents in a collection:countDocuments()
-To limit count of document read from collection: limit(number)
-To sort data :sort(condition)-- 1-ascending
                                   -1-descending

-To skip data while reading documents                                   






Aggregation:used to join multiple common result 

     collection_name.aggregate(*syntax)
     {
      $lookup:{
        from:<.collection to join>
        eg:projects,

        localField:<field from the input document>
        eg:email,

        foreignField:<field from the document for collection>eg:"userId",
        as:<output array field>eg:projects
      }

     }



-----------------------------------
NODE JS - SERVER/BACKEND
-----------------------------------

-run time environment + js library

-features
     -extremly fast
     -can handle asynchronous operations
     -Single threaded with event loop
     -Highly scalable
     -open source

-Node js global objects
      -it can be accessed any where from your node app without exporting/importing
              eg: console.log(),setTimeOut()

-node module system: a file is considered as module in node,to access data from one file 
it has to export from there, and before using it in another file it should be imported there

        to import file:require('module name/path')
        to export file:module.export/exports

-built-in modules in node

       -file system module(fs):handling file related event 
       -http:used to create webserver
       -https:used to create webserver
       -crypto:providing tools like hashing,encryption etc
       -events:works with eventEmitter
       -process: used to provide info about currently running process in node app
               - environmental variable:used to hold configuration/confidental information regarding
                 the project,to access ev through out the app use 'process.env.variable_name'
       -node js packages:used to resolve common problem
         -install packages via npm
         -it adds package.json,package-lock.json and node_modules in your application

-Back-end concepts:
        --client-server architecture 
        --REST API
        -CRUD OPERATION(Create(POST),Read(GET),Update(PUT),Delete(DELETE))
        -CORS(Cross Origin Resource Sharing) protocol must be enabled in the server       

-----------------------------
EXPRESS -Node js framework
-----------------------------

1.Used in client server architecture as web server
2.Steps to create server using express
       -create a folder for back-end
       -create package.json using the command 'npm init -y'
       -update package.json "script" value as "start":"node index.js" instead of test
       -install packages for creating express server

            -express: npm i express 
            -cors: npm i cors 
            -dotenv:npm i dotenv
       -create .env file 
       -create .gitignore file 
       -create index.js file to define express server
       -import dotenv,cors and express
       -create server using express
         -use cors in express server
         -use json parser in express server
         -create server for server app
         -run the server at the port

3.Create rutes in express server
       -create a folder
         -create a js file inside the folder
         -import express library
         -create an object of Router class of express:router object is capable of 
          defining route for the app
         -export router from the file
         -import in index.js file 
         -use router in pfServer

4.create a controller folder to define to solve client request


--------------------------------------------------------
MONGOOSE - Object Data Model(ODM) for Node.js
--------------------------------------------------------

-install mongoose using :npm i mongoose

JSON WEBTOKEN- JWT
------------------
-library used for authentication in client-server request
-used to securely transfer information over the web
-generate token if login success
          -token cration using jwt:use sign(payload,password)
          -payload: it is the data that we want to store inside token
          -password: can be any data that has to define in .env file

MIDDLEWARE-node.js
------------------

Used to control request response cycle in server before resolving a request server can perform any task
(authorisation,data format changing etc) using middleware
-middleware are function with 3 arguments they are request,result,next

        -request:Will give you client request
        -result:Object will give you response form server
        -next: Method used to control request

-middleware can be two types

       -application specific middleware:middleware will active for all client request
       -router specific middleware:middleware will active for selected client request 

-verify token using jsonwebtoken
       -using verify(token,password)method, if token verify return response else error


MULTER-middle ware for handling multipart/form dat in node js
-------------------------------------------------------------

-install multer using: npm i multer
-multer adds body and file key to request object
-multer can be used to define storage space for uploading file

-to handle multipart or form data request using multer
       
       -create js file
       -import multer
       -create a 'upload' folder inside server folder for storing upload files
       -define multer storage object in js file 