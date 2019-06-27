# Cisco Webex Teams Workshop

## Requirements

- Webex Teams Desktop Client - [Download][WTD]
- Webex Teams Account - [Sign up][WTSU]. Only If you don't have one already.

## What is Cisco Webex Teams

Cisco Webex Teams is a simple, secure collaboration platform where you can get things done from anywhere in the world. And **Webex Teams API**s are keys to helping developers digitize businesses.

### Webex Teams Desktop Client

1. Give me your email address associated with your new Webex Teams Account
2. Login into your Webex Teams Desktop Client

### Webex Teams Desktop Client Exercise

The goal of this exercise is to familiarize yourself with the Webex Teams desktop client.

 1. You will need a nice profile picture of yourself to add to this account!
 2. Create a **1:1** space with me [@akoushke] and enter:  `Hello Arash, I'm having lot of fun!`.
 3. Create a *space* with your neighbor on your left; *title: your name + your neighbor's name*
 4. Say `hi` to your neighbor.
 5. You neighbor will need to say `hi` back.
 6. Say something to your neighbor and delete the message right away.
 7. Remove your neighbor from the space.
 8. Take a screenshot from the space and send it to me. If you don't know how to take a screenshot on a Mac book, *GOOGLE*!
 9. After my confirmation, remove yourself from the space.
 10. Back to the `General` space, answer the question using a thread.
 11. Send a fun GIF into the General space.
 12. Use the following template to send a message into the `General` space. For this action item, You will need  the `markdown` feature. Make sure to practice this in a different **test space** and come up with the final output in the `General` space.
        ### Your Name in H3
        - Your favorite movie. e.g. `The Dark Knight Rises`
        - Your favorite actor/actress. e.g. `Heath Ledger`
        - Your favorite singer/band. e.g. `Lukas Graham`
        - One unpopular opinion. e.g. `GOT series are overrated.`
        - Fun Fact, e.g. `I play soccer thrice a week.`
        - [Share either LinkedIn/Fb/Twitter/Instagram account here][MYLINKEDIN].
13. Congrats, You are now a Webex Teams Professional user!

## What is an API

API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.

For instance, a picture below demonstrates a great example of communication between many applications:

![alt text][devnet-img]

as you can see, Application developer.cisco.com is able to interact via **API** with Github, Google, Facebook, Cisco, Webex Meeting, Webex Teams to log the user in or to *authenticate the user*.

### Cisco Webex Teams API

developer.webex.com provides a well-oriented documentation to familiarize the developers with the API. The portal also allows developers to use with the API within itself, which is called a playground. We will now dive more into the portal.

### Webex Teams API via Portal Exercise

The goal of this exercise is to familiarize yourself with the Webex Teams API.

1. To get started, go to [developer.webex.com][DEV_PORTAL].
2. Make sure to login.
3. Read up to `Methods & Content Types` section on this [page][DEV_PORTAL_GET_STARTED].
4. Find your personal token and save it somewhere.
5. On the left-side of portal, look for **API Reference** section.
6. Click on **Messages**.
7. Let's send a message to the `General` space using the playground. Click on `Create a Message`
8. `General` RoomID is `Y2lzY29zcGFyazovL3VzL1JPT00vMzNlMmExYTAtYTFkNC0xMWU5LThjYjUtZmIzMTdlYjY1YWY1`
9. Send a message to the space now. Share something about yourself.
10. Send another **markdown formatted** message to the space now. Share something about yourself.
11. A little bit more challenging action item; Delete the regular text message that you just sent into the `General` space without using the desktop client. Direct message me on the desktop client, if you need more hints.
12. Get details about yourself under `People` section. Find your ID and save it with your personal token. Try to understand what each field represents. **Read the documentation thoroughly**.
13. Find my work phone number and Direct message it to me.
14. Now add yourself to this space:....
15. Now remove yourself from the space.

Now that you learned a bit about the API, let's try it on Postman.

#### Postman
Install Postman and create an account with them. What is `Postman`? Google *What is Postman*?

1. Install Postman.
2. Create an account; see if you can hook it up with your github account.
3. Get your account details using the Postman now.
   ![post-man-me][postman-me]
4. Now, get my account detials. You will need my  **personId** [Y2lzY29zcGFyazovL3VzL1BFT1BMRS80N2MzMmQwYi0wNDQ0LTQ2MGQtOGJjZS0yMjY1YjUwMWFhYzU] for the endpoint 
https://api.ciscospark.com/v1/people/personId.

We will need this tool to test our code later.

## Our First NodeJS Application

Before creating our first NodeJS application, we need to setup some tools. But before that, let's learn some important concepts on a very high-level to help us understand what the heck we are about to do.

### What is NodeJS

Node JavaScript - AKA NodeJS, is one way to execute code on a computer. It is simply a **JavaScript** runtime. Also **JavaScript** is a high-level, interpreted programming language that most web developer use these days. we need a language to *write* our application with,and we picked **JavaScript**. We also need something to *run* our application on and this is where **NodeJS** comes in. NodeJS will run out JavaScript application. I found these articles very helpful to read if you are interested in learning more about [JavaScript](https://www.hostinger.com/tutorials/what-is-javascript) and [NodeJS](https://stackabuse.com/learn-node-js-a-beginners-guide/). As we start coding, we learn more and more about these technologies.


### Let's Get to it!

First we need to setup some accounts and install some softwares on our computers.

#### Git and Github

According to this super detailed [article](https://hackernoon.com/understanding-git-fcffd87c15a3), `Git` is a type of version control system (VCS) that makes it easier to track changes to files. For example, when you edit a file, git can help you determine exactly what changed, who changed it, and why. And `Github` is a website for hosting projects that use git.

- Create an account on `Github` on github.com. **Profile Picture is a must!**
- Click [here](https://github.com/akoushke/TeamsWorkShop) to access our main repository again.
- Click on `Fork` button on top right corner.
- Save the URL somewhere, or have the tab open.

 #### Glitch

We are going to use `Glitch` to edit and host our application.

- Sign into `Glitch` using your `Github` credentials (Oh Mighty! Integration between `Glitch` and `Github`).
- Profile picture!
- New Project.
- Clone from Git Project.
- Paste your forked repository URL in there.


#### Create a bot

Now that you have successfully set up your accounts and have access to the project, let's go ahead and create a bot on the [Webex Teams Developer Portal](developer.webex.com).

- Login
- Click on your profile picture
- Click on `My Webex Teams Apps`
- Create a new App
- Pick `Bot`
- Fill out the inputs accordingly and pick a picture for your bot - be creative.
- Your Bot's ID and access token are important. save them somewhere. or leave the tab open. You are going to need them both later.

#### Implement a bot

Before you start coding, let's look at our directory structure:

 ```
 |-- images/
 |-- node_modules/
 |-- src 
 |    |-- helpers 
 |           |-- messages.js
 |           |-- people.js
 |    |-- routers
 |           |-- rooms.js
 |           |-- webhooks.js
 |           |-- people.js
 |-- bot.js
 |-- constants.js
 |-- index.js
 |-- package.json
 |-- package-lock.json
 |-- README.md
 ```
        
       


[DEV_PORTAL_GET_STARTED]: <https://developer.webex.com/docs/api/getting-started>
[DEV_PORTAL]: <developer.cisco.com>
[MYLINKEDIN]: <https://www.linkedin.com/in/arash-koushkebaghi-9b1701a4/>
[WTD]: <https://www.webex.com/team-collaboration.html>
[WTSU]: <https://www.webex.com/pricing/free-trial.html?sp=wt>
[devnet-img]: <./images/devnetLogin.png> 
[postman-me]: <./images/postman-people-me.png> 
