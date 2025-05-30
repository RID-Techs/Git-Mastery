const currentTime = document.querySelector("#currentTime")
const firstFunc = () => {
  const date = new Date();
  const getDay = date.getDay();
  const getMonth = date.getMonth();
  const getYear = date.getFullYear();
  console.log(`Today is day ${getDay} of month ${getMonth + 1} in the year ${getYear}`);
  console.log(`Current time is: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  const hello = () => {
    const now = new Date();
    const showTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`;
    currentTime.textContent = `Hello, the current time is: ${showTime}`;
  }
  setInterval(hello, 1000);
  console.log(`Current date and time: ${date}`);
}
firstFunc();