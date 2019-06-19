# Front-end Engineering Dashboard Challenge
 
 ## Setup 
 - git clone 
 - npm i 
 - Start server: npm run start-server
 - Start dev: npm run start-dev 
 - Browse to http://localhost:5000

## Tooling

 - Typescript
 - React 
 - Socket.io 
 - Webpack 
 - Express

#### Testing
 - Jest
 - Enzyme
 - Sinon

#### Styling
 - TailwindCSS 

#### Code Standards
 - ESLint
 - Prettier

## Description of the project
As the stream feeds orders down to the client each incoming order gets grouped by ID
with the most recent status as active and inactive statuses get pooled into a history
attribute on the order object. You can edit the status in-place and see your edit
reflected immediately in the order info and history.

The filter responds to both the keyboard and pointer, just delete the text to "show all". The timer in the "prepared within" area on the left side of the order list can be edited to change the TTL time of prepared orders in that section.

