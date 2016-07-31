# socket-scale-demo

This is a demo socket api with on-demand-scalability.

## Running

### Local

To run on current machine: `npm install && npm start`

To run dockerized & scalable version: `docker-compose up -d`

Then to scale socket api run: `docker-compose scale api=3` for 3 processes.

### Docker Cloud

First log in with docker cli (`docker login`) with your docker hub user/password.
