### Weekly Planner

A simple app for scheduling your week, according to your topics of interest. Want to be consistent in your study or exercise? Plan in advance. It takes the thought out of the matter, gives you structure and has allowed me to keep on top of my priorities. This project also serves as a technological playground, an experimental saunter through modern tools and techniques. The project is likely to change significantly in it's implementation and tools used - but the problem it serves to tackle will remain.

![Weekly Planner Screenshot](https://monosnap.com/file/u2XZ0Y174chSWtHuF4a0VJFe4yTZi5.png)

#### So, what's in the box?

The project consists of two key components at the moment: a thin API and a client side application.
The Front End app is written in `AngularJS`, the backend using the lightweight `RailsAPI`.

A `ReactJS` implementation is on the cards, followed with a React Native implementation


##### Requirements

The following set-up assumes you are already set up with:

* Ruby 2
* NodeJS
* MySQL


#### Set up


##### Back-end

1. Enter the back-end folder `cd back-end`
2. `bundle install` to install all Gems
3. Run `rake db:create` to create the database, tables, and to populate with data


##### Front-end

1. Enter the front-end folder `cd front-end`
2. `npm install` to install Node package dependencies


#### Running the app

1. Run `rails server` in back-end folder to start API server
2. Run `grunt server` in front-end folder to start web app server
3. Visit `http://localhost:8282`
