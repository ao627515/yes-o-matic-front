import { App } from "./services/app.js";


document.addEventListener('DOMContentLoaded', () => {
  // const bgContainer = document.querySelector('.bg-container');
  // const requestContainer = document.querySelector('.request-container');
  // const mediaContainer = document.querySelector('.media-container');
  // const requestTextContainer = document.querySelector('.request-text-container');
  // const requestButtonContainer = document.querySelector('.request-button-container');
  // const requestText = document.getElementById('request-text');
  // const yesButton = document.getElementById('yes-button');
  // const noButton = document.getElementById('no-button');
  // console.log(mediaContainer);

  const app = new App();
  app.init();
  app.run();
});