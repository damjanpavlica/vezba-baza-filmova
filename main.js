const prikaz = document.getElementById('prikaz')
const kriterij = document.getElementById('kriterij')

let sviFilmovi = []

function render(niz) {
  let sablon = ''
  for (let i = 0; i < niz.length; i++) {
    sablon += `<h3>${niz[i].naziv}</h3>`
  }
  prikaz.innerHTML = sablon
}

fetch('https://baza-filmova.herokuapp.com/filmovi/')
  .then(res => res.json())
  .then(data => {
    sviFilmovi = data
    render(data)
  })

kriterij.addEventListener('input', function() {
  // TODO: da bude neosetljivo na velika i mala slova
  const rezultati = sviFilmovi.filter(film => film.naziv.includes(kriterij.value))
  render(rezultati)
})
