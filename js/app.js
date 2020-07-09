// Select the Elements
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

// Classes names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

// Show todays date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-GB', options);