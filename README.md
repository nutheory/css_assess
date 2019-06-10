# Front-end Engineering Challenge

### LIVE on Heroku ... https://css-assessment.herokuapp.com/
 
 ## Setup 
 - git clone 
 - npm i 
 - Start server: npm run start-server
 - Start dev: npm run start-dev 
 - Browse to http://localhost:5000

## Main Tooling w/ reasons for use

 - Typescript
   > Im a fan of explicit interfaces to communicate developer intent and make sure
   > people are really thinking carefully with a language that was built
   > for sloppiness. Plus it beats denoting private methods with underscores.
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
	> CSS in JS is awesome. Provides rapid prototyping of styles with great
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

The filter responds to both the keyboard and pointer, just delete the text to "show all". The timer in the "prepared within" area on the left side of the order list can be edited to change the TTL time of prepared orders in that section.


### Thank you for your consideration.
