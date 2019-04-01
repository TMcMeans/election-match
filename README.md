# Election Match

(insert screenshot of app logo here)

Election Match is a basic app that matches users to nearby elections based on their address. When the user submits an address form, the address is translated into OCD-IDs or [Open Civic Data division identifiers](https://opencivicdata.readthedocs.io/en/latest/data/datatypes.html), and then used to query the Democracy Works Elections API for upcoming elections in the user's area. Any elections returned are displayed for the user.

## ⚙️ Initial Setup

OS X & Linux:

After cloning this repo type the following commands into your terminal:

```sh
npm install
npm start
```

To view tests, quit your server (cmd + c) and type the following commands into your terminal:

```sh
npm test
```

## Features

The user is presented with an address form.
(insert screenshot of above feature)

The user submits the form and their address is translated into some OCD-IDs. The Democracy Works Election API is queried for upcoming elections in their area.
(insert screenshot of above feature)

The user's view updates to display any elections returned by the API.
(insert screenshot of above feature)

## Future Iterations

Planned enhancements include:

- (insert potential enhancement here)

## 🏗 Tech Stack List

- React
- React Router 4

## 📥 How To Contribute

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/thingamajig`)
3. Commit your changes (`git commit -am 'Added a cool doodad!'`)
4. Push to the branch (`git push origin feature/thingamajig`)
5. Create a new Pull Request

## 🚀 Core Contributors

**Tanjie Mcmeans**
Github:[https://github.com/TMcMeans](https://github.com/TMcMeans/)
