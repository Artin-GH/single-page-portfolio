# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)
- **Bonus**: Add your own details (image, skills, projects) to replace the ones in the design

### Screenshot

![](./screenshots/screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [PostCSS](https://postcss.org/) - JavaScript tool for css


### What I learned

I learned `How to create flexible elements that keep their aspect ratio (4:3, 16:9, etc.) when resized`:

```html
<div class="container"> 
  <div class="text">Some text</div> <!-- If you want text inside the container -->
</div>
```
```css
.container {
  background-color: red;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
}

/* If you want text inside of the container */
.text {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
```
Above code belongs to [w3schools](https://www.w3schools.com/).

### Useful resources

- [How TO - Aspect Ratio](https://www.w3schools.com/howto/howto_css_aspect_ratio.asp) - This w3schools howto helped me to learn how to maintain the aspect ratio of an element with CSS.
- [Example resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate) - This tutorial showes the usage of the `filter: hue-rotate` in css.

## Author

- GitHub - [@Artin-GH](https://github.com/Artin-GH/)
- Frontend Mentor - [@Artin-GH](https://www.frontendmentor.io/profile/Artin-GH)
- Telegram - [@RTn_GH](https://t.me/RTn_GH)


Please like and star the project on the `GitHub` and `Frontend Mentor` if you like it. ✨💛
