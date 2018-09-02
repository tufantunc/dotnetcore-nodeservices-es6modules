// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import WeatherCardTemplate from './WeatherCardTemplate';

const dummyData = [
    {
        cityName: 'Ankara',
        detail: 'Cloudy',
        highValue: 19,
        lowValue: 15
    },
    {
        cityName: 'Izmir',
        detail: 'Sunny',
        highValue: 28,
        lowValue: 22
    }
];

const cards = [];

dummyData.forEach(item => {
    cards.push(WeatherCardTemplate(item));
});

const weatherCardsContainer = document.getElementById('weathercards');

setTimeout(() => {
    cards.forEach(card => {
        weatherCardsContainer.innerHTML += card;
    });
}, 3000);