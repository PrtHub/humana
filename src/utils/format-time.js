export function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
   
    let period = "AM";

    if (hours > 12) {
      hours -= 12;
      period = "PM";
    } else if (hours === 0) {
      hours = 12;
    }

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes} ${period}`;
  }