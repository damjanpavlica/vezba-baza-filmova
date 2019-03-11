const prikaz = document.getElementById('prikaz')
const kriterij = document.getElementById('kriterij')

fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    // TODO: renderovati prikaz
  })

kriterij.addEventListener('input', function() {
  console.log(kriterij.value);
  // TODO: renderovati nov prikaz
})
