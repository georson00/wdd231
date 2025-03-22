const copyrightSymbol = '&copy;';

const currentDate = new Date();
const year = currentDate.getFullYear();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1
const fullDate = `${month}/${day}/${year}`;

const hours = currentDate.getHours()
const minutes = currentDate.getMinutes()
const seconds = currentDate.getSeconds()
const fullTime = `${hours}:${minutes}:${seconds}`

document.querySelector('#currentYear').textContent =  year;
document.querySelector('#copyright').innerHTML = copyrightSymbol;
document.querySelector('#lastModified').textContent = `Last Modified: ${fullDate} ${fullTime}`;