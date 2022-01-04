# Overview

daily-HUD(Heads Up Display) is a daily dashboard for the crypto trader on-the-go. Using dailyHUD, you can get all of the information you need to start your day, in one convenient spot.

# Table of Contents

- [About this project](#about)
- [User Stories](#userstories)
- [Technologies](#technologies)
- [Links](#links)
- [Installation](#install)

<hr />
<br />

# About the Project <a name="about"></a>

daily-HUD is a fully rendered, interactive, mobile first app that allows users to learn more about the weather, details about different cryptocurrencies, and the current state of the fear-and-greed index. This project was an exercise in:

- Mobile First Methodology
- Pixel Perfect Design Implementation
- Making API calls to 3 seperate sources for data
- Securely passing API keys to their sources
- Rendering conditional styling to the user based upon user input
- Proper use of useState and useEffect Hooks
- CSS custom properties & CSS modules in React
- Semantic naming conventions
- Flexbox
- CSS Grid
- React.js

## Home Page

### Mobile Preview

![Mobile Gif](https://raw.githubusercontent.com/CrowdedAstronaut/daily-hud/main/src/assets/gifs/daily-hud.gif)

### Desktop Preview

![Desktop Preview](https://raw.githubusercontent.com/CrowdedAstronaut/daily-hud/main/src/assets/images/daily-HUD-desktop-home-screen.png)
(The Desktop view is in development.)
</br>

# User Stories <a name="userstories"></a>

### As a user of daily-HUD, I would like to be able to:

- View the optimal layout depending on their device's screen size
- See different data visuializations depending on the states for interactive elements
- View the weather data by geolocation and by zipcode
- View the current price and the 24 hour trend in Bitcoin, Ethereum, and Cardano
- View the current state of the Fear & Greed index which is updated dynamically one time daily.

</br>
# Technologies <a name="technologies"></a>

<table>
  <tbody>
    <tr>
      <td>Front End Languages</td>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
        <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
    <tr>
      <td>Frameworks & Libraries</td>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
      </td>      
    <tr>
      <td>Design</td>
      <td>
        <img alt="Sketch" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
      </td>
    </tr>
    <tr>
      <td>Utilities</td>
      <td>
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <td>Workflow</td>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
        <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/>
        <img alt="Slack" src="https://img.shields.io/badge/Slack-%23026AA7.svg?&style=for-the-badge&logo=Slack&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>
          <img alt="Netlify" src="https://img.shields.io/badge/Netlify-100000?style=for-the-badge&logo=netlify&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>

<hr />
<br />

## Installation <a name="install"></a>

```shell
Download the repo using git
git clone https://github.com/CrowdedAstronaut/daily-hud.git
```

Navigate into the site's directory and install dependencies.

```shell
   cd daily-HUD/
yarn install
```

Start the Server.

```shell
yarn start
```

**Open the source code and start editing!**
Your site is now running at `http://localhost:3000`!

### Links

- GitHub URL: [Github](https://github.com/CrowdedAstronaut/daily-hud)
- Live Site URL: [Live Site](https://daily-hud.netlify.app/)
