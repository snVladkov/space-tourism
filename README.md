# Space tourism website

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor's challanges help you improve your skills by building projects. They provide you with all the requirements and assets for the project, creating a realisitc development workflow.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Notes](#notes)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- [Chalange Solution](https://www.frontendmentor.io/solutions/space-tourism-website-with-react-and-sass-H1cYGtzpd)
- [Live Site](https://optimistic-mestorf-ace26b.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Motion](https://www.framer.com/motion/) by [Framer](https://www.framer.com/) - an animation library for React

### Notes

- I used `create-react-app` to create the boilerplate code
- For switching between pages I implemented `react-router` which uses the `<Route/>` and `<NavLink/>` components for navigating between pages. Every page is a single functional component since they're all fairly simple in their structure. 
- For the internal data changes of each page I used the `useState` hook to manage the state and a data.json file which simulates a response from an API call. 
- Thanks to `framer-motion` I was able to add some nice animations for the page load and the mobile menu toggle.
- For deployment I used [Netlify](https://www.netlify.com/)

## Author

- Frontend Mentor - [@snVladkov](https://www.frontendmentor.io/profile/snVladkov#content)
- Github - [@snVladkov](https://github.com/snVladkov)
