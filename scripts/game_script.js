/*
 *
 * This is a tic-tac-toe game
 * The game features: 3x3, 4x4, and 5x5 boards
 * The game features single player and multiplayer modes
 * The selected board size and mode are injected into the HTML and saved in local storage
 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const footerHML = `
    <p>&copy; <span id="year"></span> JG. All rights reserved.</p>
    <p>Created with <span class="heart">❤</span> by <a href="https://github.com/Johnnie" target="_blank" rel="noopener noreferrer">Johnnie</a></p>
    `;
  const footerElement = document.querySelector("footer");
  footerElement.innerHTML = footerHML;
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});
