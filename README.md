# Birthdays

## Run on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Run locally

### Prerequisites

* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* Postgres (e.g. [Postgres.app](https://postgresapp.com))
* Node v6.11.x
* `$ npm install` runs OK

### Database setup

* Create a file named `.env` in the root of the project. In the file, `DATABASE_URL` should contain a url for your Postgres server in the format `postgres://username:password@host:port/databasename` e.g.

> ```
> DATABASE_URL=postgres://joebloggs:@localhost:5432/birthdays_development
> ```

* Create the database `$ heroku local:run node_modules/.bin/sequelize db:create`
* Migrate the database `$ heroku local:run ./node_modules/.bin/sequelize db:migrate`
* Load seed data `$ heroku local:run ./node_modules/.bin/sequelize db:seed:all`

### Web server

* Specify a PORT number in the `.env` file e.g.

> ```
> PORT=3000
> ```

Start the local server `$ heroku local -f Procfile.dev`

![Celebrities](./grab.png)
