const monthIndx = new Date().getMonth();
const monthEl = document.querySelector('.name-month');
const fullDateEl = document.querySelector('.day');
const daysEl = document.querySelector('.days');
const lastDay = new Date(new Date().getFullYear(), monthIndx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndx, 1).getDay() - 1;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

monthEl.innerText = months[monthIndx];
fullDateEl.innerText = new Date().toDateString();

let days = '';

for (let index = firstDay; index > 0; index--) {
  days += `<div class="empty"></div>`;
}

for (let index = 1; index < lastDay; index++) {
  if (index === new Date().getDate()) {
    days += `<div class="today">${index}</div>`;
  }
  days += `<div>${index}</div>`;
}

daysEl.innerHTML = days;
