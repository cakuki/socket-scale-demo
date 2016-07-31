# socket-scale-demo

This is a demo socket api with on-demand-scalability.

## Testing

You can run tests in your local by `npm test`.

## Running

### Local

To run on current machine: `npm install && npm start`

To run dockerized & scalable version: `docker-compose up -d`

Then to scale socket api run: `docker-compose scale api=3` for 3 processes.

### Docker Cloud

First log in with docker cli (`docker login`) with your docker hub user/password.

With [docker-cloud cli](https://docs.docker.com/docker-cloud/installing-cli/#/install) you can create and run the stack with `docker-cloud up` command.

You can list stacks by `docker-cloud stack ls` and services `docker-cloud service ps`.

To scale socket api service just run `docker-cloud service scale api N` with N replaced with number of processes you want. It just works!
