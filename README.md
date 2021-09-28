# Work-feelings

 [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This project intends to provide employees a safe space to share how they are feeling. This is accomplished through expressing how they are feeling with an emoji and a diary log. Employees can track theirs and others day-to-day feelings and view a history log of everyones emotions.

It is a great way to build trust and feel vulnerable with each other. This app would also enable everyone in an organization to monitor everyone's mental health and provide additional help to those that are currently struggling, whether that’s asking how they are doing to picking up some of their work tasks to meeting up with them to talk.

![alt text](https://github.com/utor2021/Work-feelingsfeature/readme/assets/img/work-feelings.png)

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [Questions](#questions)

## User Story
```
AS a concerned business owner
I WANT to ensure that my employees enjoy working for my organization and feel comfortable approaching me with any mental health concerns, and offer a safe space for them to share how they are feeling.
SO THAT I can maintain a healthy and productive work environment
```

## Acceptance Criteria
```
GIVEN the ability to login to the application
WHEN a the user signs up/logs in
THEN they are given the opportunity to log their current mood as well as view their team’s and their own historical entries
GIVEN a check in page utilizing a spectrum of emotions represented by emojis and a text field for a diary
WHEN the user selects an emotion and submits
THEN the answer is logged to a database, along with an optional section for a diary entry
WHEN the answer is logged to a database
THEN they can view their answer as part of their dashboard historical entries
GIVEN dashboard historical entries
WHEN a user would like to delete or update a entry
THEN they are able to via a edit/delete button from their dashboard

```

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. All dependencies are already present in the ```package.json```file, including bcrypt, connect-session-sequelize, dotenv, express, express-handlebars,express-session, handlebars", mysql2, sequelize, and nodemon.

Finally, the program can first be seeded by running ```npm seeds``` then run by entering ```npm start``` into the command line.

## Usage
1. Go to deployed link via Heroku (found below)
2. Create a new user
3. Login using that new user information
4. Go to "Check In!" (or "Work Feeling") and submit the emoji and write a diary log that describes how you are feeling today.
5. Go to your "Dashboard". Here, you can view your status history.
6. In your Dashboard, you can also edit or delete statuses.
7. In the "View Your Team" tab, you view historical logs of your departments statuses by date.
8. Hit the "Logout" button when you wish to logout.

## License
This application is rendered under MIT

## Contributors
To contribute to Work-feelings, clone this repo locally and commit your code on a separate branch.
  
Contributors:

<a href="https://github.com/utor2021/Work-feelings/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=utor2021/Work-feelings" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Tests
![GitHub license](https://img.shields.io/badge/test-100%25-success)

## Technology Used
HTML
•	CSS
•	Javascript
•	JQuery
•	JSON
•	Node.js
•	Moment.js
•	Express
•	Express-session
•	Dotenv
•	JawsDB
•	MySQL2
•	Sequelize
•	Restful API
•	JQuery UI
•	Handlebars
•	Express Handlebars
•	nodemon
•	Bootstrap
•	Heroku
•	Insomnia

## Questions
Our Github username is utor2021, which can be accessed here https://github.com/utor2021/Work-feelings.

This app is deployed through Heroku, which can be accessed here https://Work-feelings.herokuapp.com/

You can reach us at utor2021@gmail.com with additional questions.
