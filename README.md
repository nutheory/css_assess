# Front-end Engineering Challenge

### LIVE on Heroku ... https://css-assessment.herokuapp.com/
 
 ## Setup 
 - git clone 
 - npm i 
 - Start server: npm run start-server
 - Start dev: npm run start-dev 
 - Browse to http://localhost:5000

## Main Tooling

 - Typescript
   > Im a fan of explicit interfaces to communicate developer intent and make sure
   > people are really thinking carefully with a language that was built
   > for sloppiness. Plus it beats denoting private methods with underscores
 - React 
   > Its the cleanest framework out there. Its not the Kitchen-sink solution (Angular), its got a massive and    
   > active community building off its foundation and its new hooks are so clean.
 - Socket.io 
 - Webpack 
 - Express

#### Testing
 - Jest
 - Enzyme
 - Sinon

#### Styling
 - TailwindCSS 
	> CSS in JS is awesome. Rapid prototyping of styles with great
	> defaults that works great for component composition as your project
	> grows and get more defined.

#### Code Standards
 - ESLint
 - Prettier

## Description of the project
As the stream feeds orders down to the client each incoming order gets grouped by ID
with the most recent status as active and inactive statuses get pooled into a history
attribute on the order object. You can access the order history with the link in the
upper right corner of the card. You can edit the status in-place and see your edit
reflected immediately in the order info and history.

The filter responds to both the keyboard and pointer, just delete the text to "show all". If 
you enter a number into the "Sec" field in the header you will see a "Ready to go" area in 
the list that will populate with "COOKED" items as needed.


### Thank you for your consideration.
