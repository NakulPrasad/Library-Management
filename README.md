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
    <a href="https://librarry.azurewebsites.net">View Demo</a>
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
* [Screenshots](#screen-shots)
* [Contributing](#contributing)
* [Authors](#authors)

## About The Project

Effortlessly manage your library with **Librarry**, a modern library management system designed for librarians.<br>
Keep your collection organized, handle member records, and facilitate seamless transactions. <br>
<br> ![Screen Shot](https://github.com/NakulPrasad/Library-Management/assets/96919039/b6e178d4-3a4f-4fd1-a5f4-797d2ebad6b9) 
<br>
<p  align="center">
<a href="https://librarry.azurewebsites.net" >View Live</a></p>

### _Librarry features:_


* **_Books Management_**:    &nbsp; &nbsp; Easily maintain, update, and track books with essential details.<br>

* **_Members Management:_**  &nbsp;Keep member profiles and outstanding dues in check.<br>

* **_Debt Control:_**        &nbsp;&nbsp;Ensure financial stability with a Rs. 500 debt limit per member.<br>

* **_Transactions:_**        &nbsp;Smoothly process book issuance and returns.<br>

* **_Search:_**              &nbsp; &nbsp; &nbsp;Quickly locate books by title or author.<br>

* **_import:_**              &nbsp; &nbsp; &nbsp;Import books from Frappe API.<br>



## Built With

_**Frontend:**_ &nbsp;React, Material UI, HTML, CSS <br>
**_Backend:_** &nbsp;Node.js, Express.js, MongoDB, Mongoose <br>

## Screen Shots
#### Book Management: _Maintain, Update, and Track books._ <br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/77364d29-d9c2-4216-87e8-83867166c68e)
<br>

#### Members Management: _Add, Edit and delete member details_ <br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/fa209ed9-c201-4414-acdb-f06eec3f84c5)
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/e05f773f-4f18-4731-a69f-57cb1999ee04)
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/15be4a88-9dd8-499b-9cc1-ae054b5df16b)
<br>

#### Debt Control: _Limit debt to Rs. 500 per member_ <br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/a1cde818-6464-4861-ab19-726f269b3d4a)
<br>

#### Transactions: _Shows member's email, book Issued and outstanding debt_ <br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/a5e6d35a-e02f-4179-bcb4-cc49fd2e5841)
<br>

#### Search: _Search Books by title, authors and publisher_ <br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/78497899-9645-462a-abef-9b8ddf0892ba)
<br>

#### Import: _Import Books by using ISBN form API_ <br>
![image](https://github.com/NakulPrasad/Library-Management/assets/96919039/535de333-89e8-4360-8149-88de8678bdb8)
<br>

#### Few ISBN's To test **Import** Functionality
* 0306810700 : Hannibal Crosses the Alps: The Invasion of Italy & the Second Punic War
* 0763608041 : Alice's Adventures in Wonderland
* 0451200268 : Devil's Embrace (Devil  #1)
* 0060546573 : Three Rotten Eggs (The Hamlet Chronicles  #5)
* 0859652769 : Ewan McGregor: From Junkie to Jedi
* 0879100230 : The Season: A Candid Look at Broadway
* 0449001172 : Wartime Lies
* 1593080115 : Robinson Crusoe
* 0553380176 : Wouldn't Take Nothing for My Journey Now
* 0425164179 : One is the Loneliest Number (Tom Clancy's Net Force Explorers  #3)
* 1400051738 : The Ruby Ring
* 0802141447 : Monster: The Autobiography of an L.A. Gang Member
* 1401212026 : Doom Patrol  Vol. 5: Magic Bus
* 0307274977 : Buried Child
* 1560978007 : Big Baby
* 014303751X : The Communist Manifesto (Great Ideas)
* 0425110427 : Team Yankee
* 1932416137 : How We Are Hungry: Stories
* 0345461584 : Sliding Scales (Pip & Flinx #10)
* 0099595818 : CivilWarLand in Bad Decline

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
3. Create .env file <br/>
File should be root of 'server' folder
```
#ADD FOLLOWING

REACT_APP_BASE_URL = "http://localhost:80/"
```
4. Create .env.local<br/>
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

