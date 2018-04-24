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
```javascript
function validateUser(password) {
    const superPassword = '1'
    if (password == superPassword) {

    }
}
```
