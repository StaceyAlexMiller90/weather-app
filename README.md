# weather-app

## App Demo

[Live version](https://weather-app-stacey.netlify.app/)

![](/src/assets/weather-app.gif)

## Project setup

1. Clone the app

```

git clone git@github.com:StaceyAlexMiller90/weather-app.git

```

2. cd into project

```

cd weather-app

```

3. install dependencies

```

npm install

```

4. Start development server

```

npm run serve

```

### Features

- A user should be able to enter the name of a city and a 2-letter country code. The application will look up the weather forecast of that city.
- Searchable select drop down for alpha 2 country code for better user experience
- - Would like to add autocomplete for cities at a later date to improve user experience further
- Error handling, when user enters an incorrect city name, a message appears to double check
- When the user clicks search, the application shows the average forecasted temperature of the next 10 days
- It also displays the temperature for the next 7 days with the day of the week listed and the corresponding temperature.
- The background has a gradient where the end point is the color attached to the average temperature on the next 10 days.
- Weather live reloads every hour

### Tech used

- Vue JS
- Vuex state management using modules
- Typescript
- WeatherBit API

### Libraries

- vue-cool-select package for dropdown
- moment for date formatting
