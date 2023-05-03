//Find the timezones of :

//    Anchorage (USA)
//    Reykjavik (Iceland)
//    Saint-Petersburg (Russia)

//And display the date and time of these cities along with the time and date of Brussels.

const DateElement = document.getElementById("DateElement");

function showingDate() {
  const today = new Date();
  const options = {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

DateElement.innerText = today.toLocaleDateString("fr-FR", options);
}

//Update in real time
showingDate();
//update every second
setInterval(showingDate, 1000);



const DateAnchorage = document.getElementById("DateAnchorage");

function showingDateAnchorage() {
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "America/Anchorage" // Spécifie le fuseau horaire.
    };

    const today = new Date().toLocaleString("fr-FR", options);
    DateAnchorage.innerText = today;
}


showingDateAnchorage();
setInterval(showingDateAnchorage, 1000);





const DateReykjavik = document.getElementById("DateReykjavik");

function showingDateReykjavik() {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Atlantic/Reykjavik",
  };

  const today = new Date().toLocaleString("fr-FR", options);
  DateReykjavik.innerText = today;
}
showingDateReykjavik();
setInterval(showingDateReykjavik, 1000);





const DateSaintPetersburg= document.getElementById("DateSaintPetersburg");

function showingDateSaintPetersbourg() {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Moscow",
  };

  const today = new Date().toLocaleString("fr-FR", options);
  DateSaintPetersburg.innerText = today;
}
showingDateSaintPetersbourg();
setInterval(showingDateSaintPetersbourg, 1000);





