# Neighbourhood

This is a full stack project generated with Angular 10 and Django 3.

# Description

Neighbourhood project is a web application that allows you to be in the loop about what's happening in your neighbourhood.

User's can share posts which relates to them and the neighbourhood is kept updated by reading various posts. The user needs to be registered in order to use the application. A user can only be in one neighbourhood at a time and s/he can also change to another when moving out. 

The user can only see the posts, businesses or access the services e.g health care only from his or her neighbourhood. 

# Technologies Used

1. Python 3
2. Angular 10
2. Git
3. Django3
4. Bootstrap
5. Google fonts
6. HTML
7. CSS
8. Postres

# Features

A normal authenticated user can be able to:
    a) Sign in to the application to start using it.
    b) Set up a profile which contains:
        - My name 
        - My location 
        - My neighborhood name 
    c) Find a list of different businesses in my neighborhood.
    d) Find Contact Information for the emergency services e.g health department, in his/her 
       neighborhood.
    e) Create Posts that will be visible to everyone in my neighborhood.
    f) Change My neighborhood when I decide to move out.
    g) Users can only belong to one neighborhood at a time.
    h) Only view details of a single neighborhood.

The neighbourhood administrator can be able to:
    i)  Add information about neighborhoods for example: Add businesses, health care centers etc.
    ii) Perform all the operations of a normal user.

The system administrator can be able to:
    - Create neighborhoods
    - Delete neighborhoods 
    - Edit neighborhood information
    - See all users
    - Change user statuses: Either from neighborhood admin to regular user, or the opposite.
    - Remove users.

# Setup Installation

- Clone or download and unzip the repository from github 

### BACKEND

a. Create and activate virtualenv.
b. Install required packages
pip install -r backend/requirements.txt.
c. Setup
cd backend copy settings.py.txt to settings.py and update the db credentials.(If you are using SQLLite)
d. Setup database
python manage.py migrate
e. Run the server
python manage.py runserver
f. Check if the application is running correctly
g. Create a superuser for the admin backend
python manage.py createsuperuser
h. Login as superuser

### FRONTEND

a. Install the latest version of the node.
b. Install Angular CLI.
d. Run the project in development mode.

### Deployment

To deploy to Netlify, follow the following steps:
    a) Login to Netlify and Click the Add A New Project if you are just starting out.
    b) Be sure to push your repo to GitHub and link Netlify to Github.
    c) Authorize Netlify.
    d) Select Your Repository.
    e) Configure Your Settings: Make sure your publish directory is where your public site files are placed after building the site (e.g. dist) and your build command is whatever you run to build the site (e.g. npm run build). Then click the Deploy site button to continue.
    f) Build Your Site. 

## Contributors
1. Dorcas Cherono
2. Kiptoo Kennedy
3. Silvia Kago
4. Susan Kariuki
5. Hassan Juma

## Known Bugs
There are no known bugs.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/DorcasToto/Neighborhood-Frontend/blob/master/LICENSE)

© [DorcasToto](https://github.com/DorcasToto)

:satisfied: