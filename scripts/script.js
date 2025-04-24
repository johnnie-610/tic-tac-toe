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

    const gameButton = document.getElementById("game-button");
    gameButton.addEventListener("click", function () {
        window.location.href = "/pages/game.html"; // Redirect to game
    })
});