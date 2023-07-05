## Documentation
# What’s is and image and container

A Docker image packs up the application and environment required by the application to run, and a container is a running instance of the image

An image is an instruction file with all the reps and config required to run a program

Container - an instance of an image runs a program

A Docker image is a file that contains all the files necessary to run an application. This includes all of the operating system files, as well as application code and any required supporting libraries. A Docker container is a Docker image that has been started.

An image
- [ ] Cut down os
- [ ] Third party libraries
- [ ] Application files
- [ ] Env variables 
- [ ] 
A Container
- [ ] Is just a process
- [ ] Can be stopped & restarted
- [ ] Provides an isolated environment


MANAGING PROCESS DOCKER
these commands are essential

ps 
the word (bash) - takes cmd in Linus for exec

sleep 3 - prompt sleep for 3seconds

kill 38
(38) is the id seen using ps cmd 

_______________________________
MANAGING USER

Useradd - managing user
usermod
userdel - delete user

NOTE: USING ANY OF THESE
$useradd
$usermod  has different option of
_______________________________________
￼![binx22binbinusrsbinnologin](https://github.com/olawaleoyg/mosh_docker/assets/130187654/f6096b18-5c92-4db5-9561-303a2fb88df4)

usermod  -s /bin/bash john
cat /etc/passwd 


Checking for the password

____________________________________
LOGIN AS JOHN INSTEAD ROOT
Docker ps (to see the running container)
docker exec 2f848383 bash (pick the container id)


>>>>>>>>>
￼
docker exec  2f848383 bash (if nothing happen then ad -it to interact)

Docker exec -it  2f848383 bash (to login as root)
￼
The image shows how I log in from root to the user name

The user cannot access some file except as root user,
The image below shows that when I try to shadow the etc folder, permission was denied
￼
Also	 only root can add a new user or group to the system

adduser is different from useradd, adduser interact with you as you add the user name, password, full name, room number, etc


Managing groups
_____________________________
groupadd yournamechoice

cat /etc/group

Add user to the group

Usermod -G yournamechoice John
Grep John /etc/passwd

- To se what you have created
- Groups John
- To see if its added

FILE PERMISSION
____________________________

drwxr - if letter start with d - directory
If start with - its a file
<img width="619" alt="Screenshot 2023-07-05 at 10 49 24" src="https://github.com/olawaleoyg/mosh_docker/assets/130187654/6117ce6f-09c4-44d7-8011-59f856580079">

 -rw-r—r  —

￼
￼
