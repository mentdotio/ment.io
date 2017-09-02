# ment.io
Get free mentoring and offer to mentor subjects you care about.

## Development

### Requirements

You'll need a few globals, namely 'npm' or 'yarn' -- both a node package managers, we use Yarn but
you're free to use either! However, you'll use NPM to install Yarn (of course..)

- [Node](https://nodejs.org) (version > 8.2 for best results)
- Postgres (version > 9.5; we recommend using the [Postgres App](http://postgresapp.com/))
- [Yarn](https://yarnpkg.com)/[NPM](https://www.npmjs.com)

The web app was bootstrapped using [create-react-app], but you won't need that to run it---only
a recent version of Node.

### Get started

Web - go to the `/app` directory and run `yarn start`
Server - go to `/server` and run `yarn start`

## Technology Stack

| Library        | Description    | Role |
| :------------- | :------------- | :--- |
| [Apollo Client](https://github.com/apollographql/apollo-client) | Feature rich GraphQL client | fetching and caching data [client] |
| [React Apollo](https://github.com/apollographql/react-apollo) | Bindings for React and GraphQL | [client] |
| [Postgraphile](https://www.graphile.org) | Generates a GraphQL API based on Postgres schema | API [server] |
| [mattes/migrate](https://github.com/mattes/migrate) | A CLI for generating and running database migrations | DB [server] |


[create-react-app]: 'https://github.com/facebookincubator/create-react-app'