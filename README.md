# Vezba: Baza filmova

Napraviti Front-end aplikaciju koja koristi Baza filmova API: 
https://github.com/skolakoda/baza-filmova-api. 

Aplikacija treba da ima 3 strane:

- Naslovna (staticna stranica za dobrodoslicu)
- Pretraga
- Dodaj film

Za strukturu stranice i prikaz filmova koristiti CSS grid.

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

Kada se u rezultatima pretrage klikne na bilo koji film, otvara se pojedinacna stranica sa informacijama o datom filmu, i komentarima ukoliko ih ima na serveru. 

**Bonus:** prikazati jos neku informaciju o filmu, sa nekog javnog API-ja ili Wikipedije. Npr:

https://en.wikipedia.org/w/api.php?action=query&titles=Ko%20to%20tamo%20peva&prop=extracts&format=json&redirects

## Admin view

Dodati opciju da je moguce ulogovati se kao admin (koristiti bilo koju lozinku) nakon cega se u uglu svakog filma pokazuje dugme `x`, koje brise film iz baze pomocu DELETE zahteva. Biti pazljiv sa brisanjem, jer se podaci iz baze bespovratno brisu!

## Push notifikacije

Implementirati push notifikacije, poput standarnih notifikacija na Facebook-u i drugim drustvenim mrezama, koje ce obavestiti korisnika da je novi film dodat. Sledeci Javascript uspostavlja vezu sa serverom preko web socket protokola, nakon cega nas obavestava kada neko doda novi film:

```
const ws = new WebSocket('ws://baza-filmova.herokuapp.com')

ws.addEventListener('message', e => {
  console.log(e.data) // TODO: prikazati notifikaciju u headeru
})
```
