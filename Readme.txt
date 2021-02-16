Fakultet Informatike u Puli	(fipu.unipu.hr)


Kolegij:	Programsko inženjerstvo (ntankovic.unipu.hr/pi)

Mentori:	doc. dr. sc. Nikola Tanković (ntankovic.unipu.hr)
			Toni Starčić, univ. bacc. inf.


Naziv aplikacije:	Kalendar (JavaScript, React + Moment)

Sastav tima:		Ema Šarić (0303061848)


KRATKI OPIS APLIKACIJE:
	Ova aplikacija – izrađena uz pomoć JavaScript-ovih biblioteka React i Moment – je prvenstveno namijenjena svakodnevnim korisnicima, ali i onima kojima je kalendar od suštinske važnosti. 
	Također je korištena i Reactova biblioteka Styled, koja omogućava stiliziranje Reactovih komponenti putem CSS-a.
	Dizajn kalendara je, sam po sebi, bio inspiriran dizajnom kalendara iz Appleovih operacijskih sustava poput MacOSa. 
	Kalendar je, također, lokaliziran na hrvatski format datuma.

KRATKI OPIS FUNKCIONALNOSTI:
	Moglo bi se reći da je ova aplikacija u Beta iteraciji (verziji), otkako je funkcionalnost takozvanog “upravljanja događajima” (event management) – koja podrazumijeva dodavanje, uređivanje i brisanje jednog (ali i više) događaja u (i iz) kalendar(a) – je još uvijek u izradi (WiP).
		Klikom na gumb za dodavanje događaja, pojavio bi se overlay sa formom putem koje bi se novi događaj dodao u aplikaciju; moguće bi bilo i dodavanje više događaja.
			Uređivanje događaja
				Kliknulo bi se na već dodani događaj kojeg se želi urediti, nakon čega bi se također pojavio overlay sa formom gdje su već popunjeni poznati podaci o odabranom događaju; zatim bi se izmijenili neki od podataka o događaju, te kliknulo na gumb za spremanje promjena
			Brisanje događaja
				Isto kao i uređivanje, samo što se – ovdje – ne bi izmijenili nikakvi podaci o događaju, već bi se samo kliknulo na gumb za brisanje
	Crveni X gumb bi, naravno, služio izlasku iz aplikacije; no to bi možda bilo malo teško – ako ne i komplicirano – za implementirati ovdje, zbog čega nema nikakve funkcionalnosti iza sebe.


Link na javni GitHub prototip:	https://github.com/esaric6/CalendaReact.git