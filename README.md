# OTS React.JS - DJango Web Application (UNTESTED)
This repository servers as a template for creating React.JS - Django Web Applications. Note that the Django <strong>SECRET_KEY</strong> is being exposed here. Please create an entirely new project when starting your actual project.

![Sample Solution Architecture](https://github.com/peanutsee/reactjs-django-boilerplate/blob/main/Sample%20Solution%20Architecture.png)

## File system

Tree below shows the file system for the more important files for this application.

```
project_root
|_frontend
    |_src
        |_App.js
        |_index.js
        |_store.js
        |_Components
        |_Actions
        |_Reducers
        |_Constants
        |_Screens
    |_public
        |_index.html
    |_package.json
    |_.gitignore
|_backend
    |_manage.py
    |_backend
        |_settings.py
        |_urls.py
    |_base
        |_views.py
        |_urls.py
        |_models.py
        |_admin.py
    |_requirements.txt
|_pyenv

```

## Usage

1. Set Up
2. Running the Application

### Set Up

Clone this repository to your local computer

```bash
git clone https://github.com/peanutsee/reactjs-django-boilerplate.git
```

Start Python <a href="https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/">virtual environment</a> in the directory you cloned the repository to

```bash
virtualenv pyenv
```

Start virtual environment

```bash
cd pyenv/Scripts
activate
```

Download dependencies in requirements.txt

```bash
cd backend
pip install -r requirements.txt
```

Download dependencies in package.json

```bash
cd frontend
npm install
```

### Running the Application

Start Python virtual environment

```bash
cd pyenv/Scripts
activate
```

Start backend server

```bash
cd backend
python manage.py runserver
```

Start frontend server (separate terminal/command promopt)

```bash
npm run start
```

## Good Practices
Save backend dependencies in requirements.txt
```bash
pip freeze >> requirements.txt
```
Save frontend dependencies in package.json (installation)
```bash
npm install --save <PACKAGE_NAME>
```
Save frontend dependencies in package.json (when you forget to --save during installation)
```bash 
npm init
```

## Authors
- [Darryl See Wei Shen](https://github.com/peanutsee)