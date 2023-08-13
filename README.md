<br/>
<p align="center">
  <h3 align="center">Library Management System - Frappe Assessment</h3>

  <p align="center">
    "Empower Your Library with Librarry: Seamlessly Manage, Effortlessly Organize!"
    <br/>
    <br/>
    <a href="https://github.com/NakulPrasad/Library-Management"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/NakulPrasad/Library-Management">View Demo</a>
    .
    <a href="https://github.com/NakulPrasad/Library-Management/issues">Report Bug</a>
    .
    <a href="https://github.com/NakulPrasad/Library-Management/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/NakulPrasad/Library-Management/total) ![Contributors](https://img.shields.io/github/contributors/NakulPrasad/Library-Management?color=dark-green) ![Issues](https://img.shields.io/github/issues/NakulPrasad/Library-Management) ![License](https://img.shields.io/github/license/NakulPrasad/Library-Management) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Authors](#authors)

## About The Project

Effortlessly manage your library with **Librarry**, a modern library management system designed for librarians.<br>
Keep your collection organized, handle member records, and facilitate seamless transactions. <br>
<br> ![Screen Shot](https://github.com/NakulPrasad/Library-Management/assets/96919039/b6e178d4-3a4f-4fd1-a5f4-797d2ebad6b9)
### _Librarry features:_


* **_Books Management_**:    &nbsp; &nbsp; Easily maintain, update, and track books with essential details.<br>

* **_Members Management:_**  &nbsp;Keep member profiles and outstanding dues in check.<br>

* **_Debt Control:_**        &nbsp;&nbsp;Ensure financial stability with a Rs. 500 debt limit per member.<br>

* **_Transactions:_**        &nbsp;Smoothly process book issuance and returns.<br>

* **_Search:_**              &nbsp; &nbsp; &nbsp;Quickly locate books by title or author.<br>




## Built With

_**Frontend:**_ &nbsp;React, Material UI, HTML, CSS <br>
**_Backend:_** &nbsp;Node.js, Express.js, MongoDB, Mongoose <br>

## Screen Shots
Homepage: <br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/77364d29-d9c2-4216-87e8-83867166c68e)
Transaction:<br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/a5e6d35a-e02f-4179-bcb4-cc49fd2e5841)
Members: <br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/fa209ed9-c201-4414-acdb-f06eec3f84c5)
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo

```sh
https://github.com/NakulPrasad/Library-Management.git
```
2. Install NPM packages

```sh
cd server
npm install --prefix client
npm install
```
3. Create .env file
File should be root of 'server' folder
```
#ADD FOLLOWING

REACT_APP_BASE_URL = "http://localhost:80/"
```
4. Create .env.local
Database File : /server/data/index.js
```
#ADD FOLLOWING

MONGO_URL = "mongodb+srv://{user}:{password}@{database}.5qdwl8g.mongodb.net/library?retryWrites=true&w=majority"
PORT = 80
NODE_ENV = "production"

```
5. RUN

```
npm start
```
OR
```
npm run dev
```






## Contributing



### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

* **[Nakul Prasad Mahato](https://github.com/NakulPrasad)** - *IMSc. Mathematics & Computing Student* - *BIT Mesra*

