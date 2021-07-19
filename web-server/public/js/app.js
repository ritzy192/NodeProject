console.log('js file new');
fetch('http://localhost:3000/weather?address=jammu').then((response) => {
  response.json().then((data) => {
    if (data.error) return console.log(data.error);

    console.log(data.forcast);
    console.log(data.location);
  });
});
