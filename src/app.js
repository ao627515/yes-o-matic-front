import { App } from "./services/app.js";

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.run();
});