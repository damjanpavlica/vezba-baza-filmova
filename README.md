# Vezba: Baza filmova

Napraviti Front-end aplikaciju koja koristi Baza filmova API: 
https://github.com/skolakoda/baza-filmova-api. 

Aplikacija treba da ima 3 strane:

- Naslovna (staticna stranica za dobrodoslicu)
- Pretraga
- Dodaj film

Za strukturu stranice i prikaz filmova koristiti CSS grid.

## Naslovna

Staticna stranica sa dobrodoslicom i opstim podacima.

**Bonus:** Prikazati 5-6 poslednje dodatih filmova.

## Pretraga

Filmove je potrebno ucitati sa API-ja, a dok se ceka ucitavanje prikazati animirani ucitavac (*loader*). Na stranici se inicijalno prikazuju svi filmovi, a kada posetilac zapocne pretragu, onda se prikazuju samo rezultati.

Na stranici se nalazi jedno input polje, pomocu kojeg se filmovi pretrazuju po nazivu. Takodje je potrebno da stranica ima nekoliko dugmica, koje ce sortirati filmove:

- Po godini uzlazno
- Po godini silazno
- Po nazivu uzlazno
- Po nazivu silazno

**Bonus:** da korisnik unese koliko ce mu se rezultata najvise prikazati.

## Dodaj film

Na stranici za dodavanje filma se nalazi jedna forma sa tri input polja:

- naziv
- godina
- URL slike

Sva tri polja su obavezna, a kada se popuni URL slike, potrebno je prikazati sliku (*preview*) na samoj stranici, pre nego sto se podaci posalju serveru. Ako je sve u redu, pritiskom na dugme podaci se salju serveru.

**Bonus:** Da se HTTP POST zahtev radi preko Javascripta, i da se prikazuje odgovor servera, bez osvezavanja stranice.

## Film info

Kada se u rezultatima pretrage klikne na bilo koji film, otvara se pojedinacna stranica sa informacijama o datom filmu, i komentarima ukoliko ih ima na serveru. Treba napraviti posebnu HTML stranicu, kojoj cemo prosledjivati id filma preko URL parametra. Prilikom otvaranja stranice, iz Javascripta je potrebno ucitati podatke sa servera o trazenom filmu i prikazati ih. Alternativno, mozete napraviti modal.

**Bonus:** prikazati jos neku informaciju o filmu, sa Open Movie Database API-ja. Npr:

```
http://www.omdbapi.com/?t=Rocky&plot=full&apikey=xxxxxx
```

Ako ima vise filmova pod istim nazivom, potrebno je navesti i godinu:

```
http://www.omdbapi.com/?t=Matrix&y=1999&plot=full&apikey=xxxxxx
```

Da bi link radio potrebno je da se registrujete za `apikey` na http://www.omdbapi.com/

Takodje je moguce pronaci podatke i na Wikipedija API, ali neki nazivi, poput Titanika imaju vise znacenja:

https://en.wikipedia.org/w/api.php?action=query&titles=Ko%20to%20tamo%20peva&prop=extracts&format=json&redirects

## Administratorska ovlascenja

Dodati opciju da je moguce ulogovati se kao admin (koristiti bilo koju lozinku) nakon cega se u uglu svakog filma pokazuje dugme `x`, koje brise film iz baze pomocu DELETE zahteva. Biti pazljiv sa brisanjem, jer se podaci iz baze bespovratno brisu!

**Bonus:** Takodje, administrator ima mogucnost da edituje svaki postojeci film, odnosno da mu menja naziv, godinu, sliku i slicno. Za ovo se moze napraviti posebna stranica, na kojoj ce biti formular za izmenu postojecih podataka u filmu.

## Notifikacije

Implementirati push notifikacije, poput standarnih notifikacija na Facebook-u i drugim drustvenim mrezama, koje ce obavestiti korisnika da je novi film dodat. Sledeci Javascript uspostavlja vezu sa serverom preko web socket protokola, nakon cega nas obavestava kada neko doda novi film:

```js
const ws = new WebSocket('ws://baza-filmova.herokuapp.com')

ws.addEventListener('message', e => {
  console.log(e.data) // TODO: prikazati notifikaciju u headeru
})
```

## Paginacija

Bonus je dodati paginaciju, da prikazuje 10-20 filmova po stranici. Kad se klikne na dugme 1, prikaze se prvih deset, kad se klikne na dugme 2, prikaze se narednih deset, i tako dalje.

## Radovi

- https://github.com/MilosAksic/Movie-database
- https://betman87.github.io/Baza-filmova/
- https://b-b90.github.io/baza-filmova/index.html
- https://github.com/B0jan93/Movie-Database
- https://stefancvetincanin.github.io/movie-database/
- https://github.com/mutko/search-movies
- https://github.com/mrakaconi/movie_database
