# Unvalidated Input
Let's test our unvalidated input field
1. `npm i`
2. Look around
3. Run your server `npm start`
4. Open up your browser
- As a developer, I'm telling my user to insert a number of rows that I want the data to be controlled by, and on the front-end I'm telling the user that this is a number not a string. But my front end is easily manipulated! So it's easily screwed.

5. Copy the page source, copy it and run it externally changing the `check` function so that it doesn't make it's check, this way the server is recieving unexpected input
