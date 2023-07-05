# To create a folder named express_app and move inside the folder using the following commands.
mkdir express_app
cd express_app

# Now, create a file named app.js as follows.


// import and create an express app
const express = require('express');
const app = express()
  
// message as response
msg = "Hello world! this is nodejs in a docker container.."
// create an end point of the api
app.get('/', (req, res) => res.send(msg));
  
// now run the application and start listening
// on port 3000
app.listen(3000, () => {
    console.log("app running on port 3000...");
})


# Now, initialize the node project using the following command.
npm init

This will add the package.json file, which holds information about our projects like scripts, dependencies, and versions. 
  It will ask for the package’s name, version, and many others (you can go with defaults by pressing ENTER).


  Install the express library and add it to the package.json file as a dependency.
npm install --save express

# Install a tool called nodemon that automatically restarts the node application when it detects any changes.
npm install --save nodemon

We are explicitly adding these dependencies to our package.json file to download them when we run this application inside a docker container.

# Add a script to the scripts part of the package.json file to run the application with nodemon. The file contents will be as follows:

{
  "name": "docker-example",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.12"
  }
}


# At this stage, we can run our application on our local system using the following command:
npm run start
But actually, we want to dockerize this application. For that, we need to create an image by providing information like which runtime we need, the port the app will use, and the files needed that are available on our local system.

# Create a Dockerfile that contains all the information about the image that will run the application. The docker software understands this special file, and it is used to build an image.

  FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]


# Explanation:

The FROM takes the name of the base image to use optionally with its version.
WORKDIR states the directory that holds the files of the application in the container.
COPY command copies the package.json file to the app directory.
The RUN command runs the provided command to install all the dependencies mentioned in the package.json file.
Then COPY is used to copy the rest of the files to the app directory in the container.
Finally, we provide the script to run the application.
The folder structure after creating all the required files is as follows:

# Finally, use this command to build the image we will run in our docker container.
docker build -t docker-container-nodejs .
The command uses the flag -t to specify the name of the image, and then we have to give the address where. Then, our Dockerfile is situated; since we are in the directory while running the commands, we can use the period, which stands for the current directory.

# Confirm that the image has been created.
docker images

# To run the docker container with this image, use the following command.
docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs
The above command runs a docker container. The flag -p is used to map the local port 8000 to the container’s port 3000 where our application is running. The -v flag is used to mount our application files into the app directory of the container. It also needs the image name that we want to run in our container, which is, in this case, docker-container-nodejs that we created in step 9.

#  Visit this address localhost:8000, and our express application will return the following response.

  # Conclusion
In this article, we learned about Docker containers, images, and their benefits. Then we learned how to create an image that will run on a docker container. Finally, we created a small Express application to demonstrate how to run an application using Node.js running in a docker container.
