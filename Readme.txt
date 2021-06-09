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
	Prethodno, ova je aplikacija bila u Beta inačici (verziji), i to zbog toga što je funkcionalnost takozvanog "upravljanja događajima" (event management) nedostajala.
	Za razliku od te inicijalne inačice, ova (naravno) ima tu mogućnost!
	Uz pomoć Googleove FireBase baze podataka, događajima se može upravljati; drugim riječima, oni se mogu dodati (čak i više njih na isti dan) i brisati, te uređivati (mijenjati).
		Klikom na gumb za dodavanje događaja, pojavljuje se overlay sa formom putem koje bi se novi događaj dodao u aplikaciju; moguće je i dodavanje više događaja na isti dan.
			Uređivanje događaja
				Klikom na već dodani događaj kojeg se želi urediti, pojavljuje se overlay sa formom gdje su već popunjeni poznati podaci o odabranom događaju; zatim se mogu izmijeniti neki od podataka o događaju, te kliknulo na gumb za spremanje promjena
			Brisanje događaja
				Isto kao i uređivanje, samo što se – ovdje – ne bi izmijenili nikakvi podaci o događaju, već bi se samo kliknulo na gumb za brisanje
	Crveni X gumb bi, naravno, služio izlasku iz aplikacije; no to bi možda bilo malo teško – ako ne i komplicirano – za implementirati ovdje, zbog čega nema nikakve funkcionalnosti iza sebe.


Link na javni GitHub prototip:	https://github.com/esaric6/CalendaReact.git