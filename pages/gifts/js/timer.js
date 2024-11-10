const daysContainer = document.querySelector('.journey__days');
const hoursContainer = document.querySelector('.journey__hours');
const minutesContainer = document.querySelector('.journey__minutes');
const secondsContainer = document.querySelector('.journey__seconds');

export const timerToNewYear = () => {
  const currentDate = new Date();

  // let currentDateUTC = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());

  const newYearsDate = new Date('2025-01-01T00:00:00');

  const timeUntilNewYears = newYearsDate - currentDate;

  const days = Math.floor(timeUntilNewYears / (1000 * 3600 * 24));
  const hours = Math.floor((timeUntilNewYears / (1000 * 3600)) % 24);
  const minutes = Math.floor((timeUntilNewYears / (1000 * 60)) % 60);
  const seconds = Math.floor((timeUntilNewYears / (1000)) % 60);

  daysContainer.innerHTML = days;
  hoursContainer.innerHTML = hours;
  minutesContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;
}
