# NASA - A Picture of the Day

Each day a different image or photograph of our fascinating universe is featured, some along with a brief explanation written by a professional astronomer.

Created a catalog of images from NASA. The application uses three different NASA API's:

**1.** ASOP (A Picture of the Day) - every day a new picture with an explanation is uploaded.

**2.** EPIC (Earth Polychromatic Imaging Camera) - Random picture from the set of the day is displayed.

**3.** Mars Rover Photos - This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars. The application randomly chooses one picture from the set of the day, if there is any.

The application has filters on the main page to separate pictures by API and date gap. Every picture is clickable and when clicking on a picture a separate page for that specific picture is displayed in full-scale and with details.

<div class="button-group">
  <a href="https://jaakal.github.io/nasa-apod/" class="button">Live Version</a> |
  <a href="#screenshot" class="button">Screenshot</a> |
  <a href="#getting-started" class="button">Getting Started</a> |
  <a href="#available-scripts" class="button">Available Scripts</a> |
  <a href="#built-with" class="button">Built With</a> |
  <a href="#assets" class="button">Assets</a> |
  <a href="#authors" class="button">Authors</a> |
  <a href="#license" class="button">License</a>
</div>

## Screenshot

![Screenshot of the webpage](src/images/screenshot.png)

## Getting Started

Clone the repository into your local computer.

### Installing

First you'll have to install the newest version of [Node](https://nodejs.org/en/download/). Then move into the project main directory on the console and follow the instructions below. 

Install all the necessary packages:

```
$ npm install
```

To be sure, that npm is able to run scripts, lets set the `ignore-scripts` configuration key to false:

```
$ npm config set ignore-scripts false
```

> You can find the scripts in the `package.json` file in the `scripts` section.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [JavaScript](https://www.javascript.com/) - Programming language used
* [HTML](https://en.wikipedia.org/wiki/HTML) - Hypertext Markup Language
* [SCSS](https://sass-lang.com/) - Sassy CSS
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - Cascading Style Sheets
* [VS Code](https://code.visualstudio.com/) - The code editor used

## Assets

* [Eclipse](https://loading.io/spinner/eclipse/-eclipse-ring-circle-rotate) - Loader animation used
* [NASA APIs](https://api.nasa.gov/) - APIs used

## Authors

👤 **Jaak Kivinukk**

<a href="https://github.com/Jaakal" target="_blank">

  ![Screenshot Image](src/images/jaak-profile.png) 

</a>

- Github: [@Jaakal](https://github.com/Jaakal)
- Twitter: [@JKivinukk](https://twitter.com/JKivinukk)
- Linkedin: [Jaak Kivinukk](https://www.linkedin.com/in/jaak-kivinukk)
- Email: [jaak.kivinukk@gmail.com](jaak.kivinukk@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details