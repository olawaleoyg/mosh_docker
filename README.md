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

￼_______________________________
MANAGING USER

Useradd - managing user
usermod
userdel - delete user
![binx22binbinusrsbinnologin](https://github.com/olawaleoyg/mosh_docker/assets/130187654/9d8d0eaa-8463-4997-949d-b1440c04f00d)

￼
NOTE: USING ANY OF THESE
$useradd
$usermod  has different option of

_______________________________________

usermod  -s /bin/bash john
cat /etc/passwd 


Checking for the password

____________________________________
LOGIN AS JOHN INSTEAD ROOT
Docker ps (to see the running container)
docker exec 2f848383 bash (pick the container id)


>>>>>>>>>
>>>>>>>>>![1527 deploy sh](https://github.com/olawaleoyg/mosh_docker/assets/130187654/aaaed44f-5699-47ae-a9df-9186223d2ed4)

￼
docker exec  2f848383 bash (if nothing happen then ad -it to interact)

Docker exec -it  2f848383 bash (to login as root)
![Screenshot 2023-07-04 at 13 55 49](https://github.com/olawaleoyg/mosh_docker/assets/130187654/49ca10e1-5c6a-4d29-8b49-dabe8dead103)

￼
The image shows how I log in from root to the user name

The user cannot access some file except as root user,
The image below shows that when I try to shadow the etc folder, permission was denied

![john@ac7f1ec6c8a9S cat etcshadow](https://github.com/olawaleoyg/mosh_docker/assets/130187654/1b8e7aeb-8450-4636-88ec-8d6c3757bbaf)

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

 -rw-r—r  —
![Screenshot 2023-07-04 at 13 55 49](https://github.com/olawaleoyg/mosh_docker/assets/130187654/aefefb6e-70e1-4774-a734-33b29b92b43f)
![1527 deploy sh](https://github.com/olawaleoyg/mosh_docker/assets/130187654/147d4f0c-19bd-4d69-896c-fee9e4e3b6c3)

￼
￼

￼
