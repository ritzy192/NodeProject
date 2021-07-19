console.log('js file new');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;
  fetch('http://localhost:3000/weather?address=' + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) return console.log(data.error);

        console.log(data.forcast);
        console.log(data.location);
      });
    }
  );
});
