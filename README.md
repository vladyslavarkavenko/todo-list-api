### Simple Todo App REST API (Node, Express, Sequelize)

#### Install locally
`yarn install` \
`yarn run migrate:up`

#### Run locally
`yarn start`

#### To run database locally
`docker run --name simple-todo-app -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres`

#### Possible improvements
* Merge mark completed/uncompleted methods
* Add graceful shutdown
* Dockerize application
* Setup production env (scripts, configs, etc.)
* Implement refresh token functionality
* Pagination for todos