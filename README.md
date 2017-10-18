# DEPRECATED - no longer actively maintained

---

## NHS.UK Beta
# Connecting to services in-browser design work

This repo is for the design work for the nhs.uk beta work looking at connecting to services. To see it in action have a look at its [Heroku instance](http://cts-design-beta.herokuapp.com/)

Previous work on the service was done using the Alpha styling and kit. Github repo here. [Heroku instance here](http://connecting-to-services-design.herokuapp.com/).

## Tech driving this work

This work is created using the nhs.uk prototype kit, itself adapted from the [GOV.UK prototyping kit.](https://github.com/alphagov/govuk_prototype_kit).

It's built on the [Express](http://expressjs.com/) framework and contains code adapted from these GOV.UK resources:

- [GOV.UK template](https://github.com/alphagov/govuk_template)
- [GOV.UK front end toolkit](https://github.com/alphagov/govuk_frontend_toolkit)
- [GOV.UK elements](https://github.com/alphagov/govuk_elements)

## Requirements

#### [Node v4.x.x](http://nodejs.org/)

You may already have it, try:

```
node --version
```

Your version needs to be at least v0.10.0.

If you don't have Node, download it here: [http://nodejs.org/](http://nodejs.org/).

## Getting started

Install Node.js (see requirements)

#### Clone this repo

```
git clone https://github.com/nhsalpha/nhs_prototype_kit.git

```

#### Swap to the app's directory

Using the shell/terminal window:

```
cd gp-screens-prototype
```


#### Install dependencies

```
npm install
```

This will install folders containing programs described by the package.json file to a folder called `node_modules`. You mayb get some `deprecated` notices and `warning` several times. The app should install OK, returning the directory tree of the app if successul.

#### Run the app

```
node start.js
```

Go to [localhost:5000](http://localhost:5000) in your browser.

#### Hot reload

Any code changes should update in the browser without you restarting the app.

The app recompiles app/assets/stylesheets/application.scss everytime changes are observed.

## Documentation

Find out how to work with the prototyping application.

* [Getting started](docs/getting-started.md) (Read this first)
* [Creating routes](docs/creating-routes.md)
* [Making pages](docs/making-pages.md)
* [Writing CSS](docs/writing-css.md)
* [Deploying (getting your work online)](docs/deploying.md)

This project is built on top of Express, the idea is that it is straightforward to create simple static pages out of the box. However, you're not limited to that - more dynamic sites can be built with more understanding of Express. Here's a good [Express tutorial.](http://code.tutsplus.com/tutorials/introduction-to-express--net-33367)
# connecting-to-services-design-beta
