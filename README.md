# server-vulnerabilities
A research about server security, with more specification, what are the holes that a server could have, and how to handle those correctly

![sword](https://media2.giphy.com/media/srguZuM639q5W/giphy.gif)

## What does every developer want?
 > All I want is as easy as `npm install no-bugs --save`

 > I'm dreaming of a day where I don't have to overthink how will I protect my code.

 > I truely believe in a day where developers won't ever worry about security in their code. I do, this day will come.

 > Honestly I started to hate my users because of how much I fear them. So I'm planning to make all my coming projects a **SOLID BRICK WALL THAT NO ONE CAN INTERACT WITH**

## What is the solution?
 There is no apparent solution.

 That's **IT** don't wait for the prophet of code, there is **NO SOLUTION**

## Then what should I do?
There's plenty you can do:
1. You can write code today just like yesterday.
2. You can write code today after you've done some research on how to hack yesterday's code.

> Note: If you didn't do your research, someone else will, but he won't be solving your bugs...

## Then what should I practically do?
This article isn't a lot useful right? *okayyyyyy*. lets dig in!

![dig in](https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/giphy.gif)

What makes your web server vulnerabile?

### 1. Un-validated Input (The Piece You Can't Patch Up)
**NEVER TRUST YOUR USERS**
So you're expecting your user to input their username, and then you check your database for that username, but wait, some users had entered an SQL statement in your `username` field. You weren't expecting that were you? That's called SQL injection, where you send concatenated strings to your database, thinking that the user would comply with your requirements.
Check this example:
[Unvalidated Input](https://github.com/NoureldeanSaed/server-vulnerabilities/tree/master/unvalidated-input)


### 2. Cookie Poisoning
![Poison cookies](https://i.imgur.com/3bZBrVR.png)
We know that a cookie is something stored by your browser and sent to your server with **each** request, and your server uses that cookie for A, B and C. But what happens when your users aren't the best thing there is in the market?
**NEVER TRUST YOUR USERS**
Some of your users will attempt to manipulate your cookies. So you'd better be prepared.
#### What can you do?
![How to encrypt your cookie](https://i.imgur.com/K3yvhGu.png)

### 3. SQL Injection
#### A. `1=1` Always is true
Lets say:
```javascript
module.exports = (id, cb) => {
  const queryText = `SELECT * FROM users WHERE user_id = ${id}`
  dbConnection.query(queryText, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
}
```
Now this `id` we have is only brought by the server, from the client, so what if the client decided to insert `100 OR 1=1;` for an integer? Lets see how will the query look like as a whole:
```SQL
SELECT * FROM users WHERE user_id = 100 OR 1=1;
```
Which is basically just give me all the users the server has.

#### B. `""=""` Always is true
Lets say:
```javascript
const { username, password } = getUserInput();
const queryText = `SELECT * FROM users WHERE name="${username}" AND password="${password}"`
module.exports = (username, password, cb) => {
  dbConnection.query(queryText, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
}
```

but what if our user decided suddenly to input `" OR ""="` for username and password? Lets see how will the query look like.
```SQL
SELECT * FROM users WHERE name="" OR ""="" AND password="" OR ""="";
```

And it doesn't take lots of creativity to get what you want from a database once you're in.

### 4. Improper Error Handling
![](https://i.giphy.com/media/Rov6QSZGBQgNO/giphy.webp)

For you as a developer, error messages help you out to detect what went wrong. This could go the same for a hacker, he could have great aid by the error messages that are sent along with your unhandled errors. Modify error messages so that they are not clear for any user to understand nor extract info out of.

### Resources
[web-server-vulnerabilities-defense-in-depth-strategy-squid-proxy](https://www.giac.org/paper/gsec/3729/web-server-vulnerabilities-defense-in-depth-strategy-squid-proxy/105970)
[Unvalidated_Input_TOlzak](http://www.infosecwriters.com/text_resources/pdf/Unvalidated_Input_TOlzak.pdf)
[Examples for web hacks](https://www.kb.cert.org/vuls/)
[Awesome Giphys](https://giphy.com)
