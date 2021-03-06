# Step by Step Server

1. npm init === package.json file
2. server.js === main source for server
3. npm i -D concurrently json-server
   concurrently ==> server restart
   json-server ==> json database source
4. npm i express mssql nodemon
   express and mssql ==> server to sql interpreter
   nodemon ==> restart server
5. check services in server(windows 10 mssql, browser,express)
6. package.json --->
   "scripts": {
   "start": "node server.js",
   "server": "nodemon server.js"
   },
7. when running both server and client.
   additional in scripts server package.json

   "client": "npm start --prefix client",
   "clientinstall": "npm install --prefix client",
   "json-server": "json-server --watch tbldata.json --port 5000",
   "dev": "concurrently \"npm run server\" \"npm run client\""

8. npm install @material-ui/lab (for select search)
   optional:

9. npm install tedious (new)
10. optional -- npm install dotenv (env variables)
11. create git ignore file in server work station

# Step by step Client

cd client

1. npx create-react-app
2. npm install react-router-dom
3. npm install @material-ui/core @material-ui/icons
4. create pages (Home, about)
5. create navigation (NavRouter)
6. add , "proxy": "http://localhost:5000" in the last line of
   client/package.json file
7. npm run dev

# Add ons

1. npm install react-data-export --save; (table to excel)
link docu = https://www.npmjs.com/package/react-data-export
a. npm install xlsx --save (missing in node_modules)
<!--  testing pa lang
2. npm install --save react-toastify
   -->

# Step by Step Git Repository

git repository

1. open git bash exe
2. cd ( go to directory folder using git cmd)
   cd c:\ProjectsReact
   cd ReactSamples
3. git init
4. git remote add origin (Get Link in github.com account in repository)
5. git -v
6. git remote -v
7. git add .
8. git commit -m "Name of the File"
9. git push origin master
10. git reset ----> to undo changes in add
11. git status ----> check current commits

git bash update instructions

1. open git bash exe
2. cd ( go to directory folder using git cmd)
   cd c:\ReactVS\Node-React-1.0
3. git status
4. git add .
5. git commit -m "Description of changes"
6. git status (check updates)
7. git push origin master
8. git remote rm origin -- add version and renew link in github.
9. git config --get remote.origin.url ----- check current github url


#additional for folders commit error 
1. git rm -rf --cached /the/new/directories
2. git add .
