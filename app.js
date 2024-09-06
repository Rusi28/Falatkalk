// Szénhidráttartalom adatbázis
const carbData = {
    "Bárány, juhhús (sovány)": { carbs: 0.3, kCal: 200, protein: 19.7 },
    "Békacomb": { carbs: 2.9, kCal: 119, protein: 24.2 },
    "Birka (közepes)": { carbs: 0.3, kCal: 316, protein: 16.9 },
    "Borjú": { carbs: 0.3, kCal: 123, protein: 19.5 },
    "Borjúmáj": { carbs: 3, kCal: 140, protein: 20 },
    "Csiga, éti": { carbs: 0.2, kCal: 82, protein: 17.6 },
    "Csirkecomb": { carbs: 0.5, kCal: 136, protein: 20.9 },
    "Csirkemáj": { carbs: 1, kCal: 119, protein: 17 },
    "Csirkemell filé": { carbs: 0.5, kCal: 109, protein: 24.7 },
    "Csirkeszív": { carbs: 1, kCal: 153, protein: 16 },
    "Csirkezúza": { carbs: 0, kCal: 94, protein: 18 },
    "Csontvelő": { carbs: 0, kCal: 849, protein: 3 },
    "Fácán": { carbs: 0.5, kCal: 111, protein: 22.3 },
    "Fogoly": { carbs: 0.4, kCal: 97, protein: 20.5 },
    "Fürj, comb": { carbs: 1.2, kCal: 132, protein: 19.6 },
    "Fürj, mell": { carbs: 1.1, kCal: 119, protein: 22.8 },
    "Galamb": { carbs: 1.2, kCal: 130, protein: 19.6 },
    "Kacsa, pecsenye": { carbs: 0.4, kCal: 191, protein: 19 },
    "Kacsamáj": { carbs: 4, kCal: 136, protein: 19 },
    "Kagyló": { carbs: 6.5, kCal: 82, protein: 9 },
    "Kappan": { carbs: 0.4, kCal: 167, protein: 19.3 },
    "Liba, hízott": { carbs: 0.2, kCal: 392, protein: 16 },
    "Liba, pecsenye": { carbs: 0.3, kCal: 203, protein: 18.5 },
    "Libamáj": { carbs: 6, kCal: 133, protein: 16 },
    "Marha lapocka": { carbs: 0.6, kCal: 147, protein: 21 },
    "Marha szegy": { carbs: 0.5, kCal: 263, protein: 16 },
    "Marha tarja": { carbs: 0.6, kCal: 140, protein: 20 },
    "Marha, bélszín": { carbs: 0.6, kCal: 121, protein: 19 },
    "Marha, felsál": { carbs: 0.6, kCal: 249, protein: 17 },
    "Marha, hátszín, lapos": { carbs: 0.6, kCal: 231, protein: 15 },
    "Marha, hátszín, magas": { carbs: 0.6, kCal: 240, protein: 19 },
    "Marha, hátszín, puha": { carbs: 0.6, kCal: 249, protein: 19.7 },
    "Marhamáj": { carbs: 4, kCal: 135, protein: 20 },
    "Nutria": { carbs: 0.5, kCal: 185, protein: 20.8 },
    "Nyúl, házi": { carbs: 0.4, kCal: 162, protein: 21 },
    "Nyúl, vad": { carbs: 0.5, kCal: 106, protein: 23 },
    "Őz": { carbs: 0.4, kCal: 105, protein: 20.8 },
    "Pulyka": { carbs: 0.4, kCal: 174, protein: 20.5 },
    "Pulykamáj": { carbs: 0, kCal: 128, protein: 18 },
    "Pulykaszív": { carbs: 0, kCal: 140, protein: 17 },
    "Pulykazúza": { carbs: 0, kCal: 111, protein: 19 },
    "Rák": { carbs: 2.2, kCal: 77, protein: 14.9 },
    "Sertés csülök": { carbs: 0.3, kCal: 337, protein: 16 },
    "Sertés dagadó": { carbs: 0.3, kCal: 441, protein: 12 },
    "Sertés lapocka": { carbs: 0.3, kCal: 295, protein: 17.5 },
    "Sertéscomb, karaj": { carbs: 0.4, kCal: 163, protein: 21 },
    "Sertésmáj": { carbs: 3, kCal: 134, protein: 21 },
    "Sertésszív": { carbs: 1, kCal: 118, protein: 17 },
    "Szarvas": { carbs: 0.6, kCal: 123, protein: 20.7 },
    "Tyúk": { carbs: 0.4, kCal: 140, protein: 19 },
    "Vaddisznó, színhús": { carbs: 0.4, kCal: 112, protein: 21.6 },
    "Vadkacsa": { carbs: 0.5, kCal: 124, protein: 22.7 },
    "Amur": { carbs: 0.2, kCal: 145, protein: 18 },
    "Busa": { carbs: 0.6, kCal: 94, protein: 18 },
    "Fogas": { carbs: 0.2, kCal: 86, protein: 19 },
    "Harcsa": { carbs: 0.2, kCal: 280, protein: 17.5 },
    "Hekk": { carbs: 0, kCal: 89, protein: 20.2 },
    "Hering, olajos": { carbs: 0.7, kCal: 382, protein: 15.9 },
    "Hering, paradicsomos": { carbs: 0.8, kCal: 217, protein: 18.9 },
    "Kaviár": { carbs: 4.6, kCal: 274, protein: 26 },
    "Lazac": { carbs: 0.2, kCal: 213, protein: 20 },
    "Pisztráng": { carbs: 0.2, kCal: 116, protein: 21.5 },
    "Ponty (nyurga)": { carbs: 0.1, kCal: 101, protein: 16 },
    "Ponty (tükör)": { carbs: 0.1, kCal: 146, protein: 15.8 },
    "Szardínia, olajos": { carbs: 0.3, kCal: 292, protein: 22.5 },
    "Tengeri hal": { carbs: 1.2, kCal: 86.9, protein: 19.4 },
    "Tőkehal, filé": { carbs: 1.2, kCal: 89, protein: 19.4 },
    "Tonhal": { carbs: 1.2, kCal: 86, protein: 19.4 },
    "Bivalytej": { carbs: 1.8, kCal: 349, protein: 5.8 },
    "Joghurt, 0%": { carbs: 4.6, kCal: 32.9, protein: 3.4 },
    "Joghurt, gyümölcsös": { carbs: 10.3, kCal: 74, protein: 3.5 },
    "Juhtej": { carbs: 5, kCal: 113, protein: 6.1 },
    "Juhtúró (bryndza)": { carbs: 2, kCal: 281, protein: 17 },
    "Kancatej": { carbs: 6.7, kCal: 42, protein: 2.1 },
    "Kecsketej": { carbs: 4.7, kCal: 70, protein: 3.6 },
    "Kefír (sovány)": { carbs: 4.6, kCal: 34, protein: 3.4 },
    "Krémjoghurt": { carbs: 4.6, kCal: 80, protein: 3.4 },
    "Sovány túró": { carbs: 3.8, kCal: 76.1, protein: 14.1 },
    "Sűrített tej, cukrozatlan": { carbs: 9.8, kCal: 139, protein: 7 },
    "Sűrített tej, cukrozott": { carbs: 54.9, kCal: 325, protein: 8.5 },
    "Tehéntej, 0,1%": { carbs: 5.3, kCal: 35.7, protein: 3.4 },
    "Tehéntej, 1,5%": { carbs: 5.3, kCal: 50, protein: 3.4 },
    "Tehéntej, 2,8%": { carbs: 5.3, kCal: 62, protein: 3.4 },
    "Tehéntej, homogénezett, pasztőrözött": { carbs: 5.3, kCal: 69, protein: 3.4 },
    "Tehéntúró, félzsíros": { carbs: 3.7, kCal: 147, protein: 16.2 },
    "Tehéntúró, sovány": { carbs: 3.8, kCal: 78, protein: 14.1 },
    "Tehéntúró, zsíros": { carbs: 3.5, kCal: 201, protein: 17.9 },
    "Tej, csokoládés": { carbs: 11, kCal: 72, protein: 3.2 },
    "Tej, kakaós (sovány)": { carbs: 11.4, kCal: 66, protein: 3.5 },
    "Tej, kávés (Ice coffee)": { carbs: 13, kCal: 82, protein: 3.5 },
    "Tejföl, 12%": { carbs: 4, kCal: 137.6, protein: 3.4 },
    "Tejföl, 20%": { carbs: 3.9, kCal: 216, protein: 3.3 },
    "Tejkrém (cukrozott, sűrített)": { carbs: 55.5, kCal: 327, protein: 8.5 },
    "Tejpor, sovány": { carbs: 50.3, kCal: 373, protein: 36 },
    "Tejpor, zsíros": { carbs: 37, kCal: 507, protein: 25.5 },
    "Tejszín": { carbs: 3.9, kCal: 208.8, protein: 3.3 },
    "Tejszínhab": { carbs: 3, kCal: 302, protein: 2.6 },
    "Tejszínhab, ízesített": { carbs: 11, kCal: 297, protein: 2.3 },
    "Fürjtojás": { carbs: 0.7, kCal: 154, protein: 12.5 },
    "Tojás": { carbs: 0.6, kCal: 164, protein: 13.5 },
    "Tojásfehérje": { carbs: 0.8, kCal: 57.1, protein: 12.5 },
    "Tojásfehérje, szárított": { carbs: 4, kCal: 320, protein: 73.4 },
    "Tojáspor": { carbs: 5.2, kCal: 578, protein: 44.7 },
    "Tojássárgája": { carbs: 0.6, kCal: 338, protein: 15 },
    "Anikó": { carbs: 1.8, kCal: 349, protein: 24.2 },
    "Boci, ízesített": { carbs: 1.5, kCal: 285, protein: 11.5 },
    "Camembert “Bakony”": { carbs: 1.5, kCal: 308, protein: 21.5 },
    "Camembert “Tihany”": { carbs: 1.4, kCal: 391, protein: 18.2 },
    "Camping": { carbs: 1.7, kCal: 321, protein: 16.5 },
    "Derby": { carbs: 1.6, kCal: 285, protein: 16.7 },
    "Edámi": { carbs: 1.7, kCal: 362, protein: 26.2 },
    "Ementáli (Pannónia)": { carbs: 1.5, kCal: 394, protein: 27.8 },
    "Göcseji": { carbs: 1.4, kCal: 314, protein: 22.2 },
    "Karaván, füstölt tömbsajt": { carbs: 1.9, kCal: 353, protein: 22.3 },
    "Krém fehérsajt": { carbs: 1.4, kCal: 252, protein: 13.4 },
    "Mackó, kenhető": { carbs: 2, kCal: 310, protein: 16.7 },
    "Márvány": { carbs: 2, kCal: 366, protein: 20 },
    "Mozzarella": { carbs: 2, kCal: 300, protein: 22 },
    "Parenyica": { carbs: 1.5, kCal: 396, protein: 26 },
    "Parmezán": { carbs: 1.6, kCal: 385, protein: 26.8 },
    "Sovány sajt": { carbs: 1.7, kCal: 291, protein: 29.6 },
    "Trappista": { carbs: 1.6, kCal: 381, protein: 27.7 },
    "Barna kenyér": { carbs: 50.6, kCal: 249, protein: 8.5 },
    "Búza (mag, teljes búzaliszt)": { carbs: 66.2, kCal: 347, protein: 14.4 },
    "Búzacsíra": { carbs: 42, kCal: 349, protein: 25 },
    "Búzadara": { carbs: 73.4, kCal: 349, protein: 9.4 },
    "Búzakorpa": { carbs: 51, kCal: 322, protein: 15 },
    "Búzapehely": { carbs: 66, kCal: 339, protein: 12 },
    "Durumtészta": { carbs: 75.1, kCal: 379, protein: 14 },
    "Fehér kenyér": { carbs: 52.3, kCal: 255, protein: 8.3 },
    "Félbarna kenyér": { carbs: 47.9, kCal: 246, protein: 9.8 },
    "Graham kenyér": { carbs: 54, kCal: 272, protein: 10.1 },
    "Kenyér": { carbs: 54.5, kCal: 262, protein: 10 },
    "Kifli (sós, tejes)": { carbs: 58, kCal: 308, protein: 10 },
    "Köles": { carbs: 73, kCal: 378, protein: 11 },
    "Korpás zsemle": { carbs: 21.2, kCal: 110, protein: 4.1 },
    "Kukoricacsíra": { carbs: 19, kCal: 476, protein: 18.8 },
    "Kukoricaliszt, -dara": { carbs: 70.2, kCal: 347, protein: 9.6 },
    "Kukoricapehely": { carbs: 83, kCal: 377, protein: 7.7 },
    "Liszt": { carbs: 70.4, kCal: 344, protein: 13.5 },
    "Penne tészta": { carbs: 75.1, kCal: 379, protein: 14 },
    "Quinoa": { carbs: 64, kCal: 368, protein: 14 },
    "Rizs": { carbs: 77.5, kCal: 344, protein: 8 },
    "Rizsliszt": { carbs: 79.4, kCal: 359, protein: 6.9 },
    "Rozskenyér": { carbs: 53.6, kCal: 261, protein: 8.1 },
    "Rozsliszt, RL 60": { carbs: 72.8, kCal: 337, protein: 7.5 },
    "Rozsliszt, RL 125": { carbs: 66.6, kCal: 327, protein: 9.3 },
    "Rozspehely": { carbs: 66, kCal: 322, protein: 9 },
    "Spagetti": { carbs: 75.1, kCal: 379, protein: 14 },
    "Tápióka": { carbs: 22, kCal: 129, protein: 2 },
    "Tészta, 2 tojásos": { carbs: 75.1, kCal: 379, protein: 14 },
    "Tészta, 4 tojásos": { carbs: 72.9, kCal: 392, protein: 15 },
    "Tészta, 8 tojásos (házi)": { carbs: 69.2, kCal: 400, protein: 17 },
    "Vizes zsemle": { carbs: 57, kCal: 278, protein: 8 },
    "Zabpehely": { carbs: 64.3, kCal: 386, protein: 14.4 },
    "Zsemlemorzsa": { carbs: 73.3, kCal: 342, protein: 10.2 },
    "Avokádó": { carbs: 9, kCal: 160, protein: 2 },
    "Bab (fagyasztott, előfőzött)": { carbs: 28, kCal: 160, protein: 9.8 },
    "Bab (fagyasztott)": { carbs: 29, kCal: 167, protein: 10.8 },
    "Bab (száraz)": { carbs: 57.9, kCal: 338, protein: 22.3 },
    "Babkonzerv": { carbs: 27, kCal: 156.5, protein: 11 },
    "Brokkoli": { carbs: 2.1, kCal: 23.4, protein: 3.3 },
    "Brokkoli (fagyasztott)": { carbs: 2, kCal: 29, protein: 4 },
    "Burgonya, nyári": { carbs: 18.4, kCal: 88, protein: 2.5 },
    "Burgonya, téli": { carbs: 20, kCal: 92, protein: 2.5 },
    "Burgonyakocka (fagyasztott)": { carbs: 14.7, kCal: 69, protein: 1.9 },
    "Burgonyapüré por": { carbs: 80, kCal: 369, protein: 8.4 },
    "Cékla": { carbs: 5.9, kCal: 31, protein: 1.3 },
    "Ceruzabab (fagyasztott)": { carbs: 4.8, kCal: 31, protein: 2.5 },
    "Csemegeuborka": { carbs: 2.6, kCal: 59, protein: 0.6 },
    "Csiperkegomba": { carbs: 3.3, kCal: 38.6, protein: 5.9 },
    "Csiperkegomba (szeletelt, fagyasztott)": { carbs: 1.4, kCal: 16, protein: 2.3 },
    "Cukkini": { carbs: 5.3, kCal: 30, protein: 1.5 },
    "Cukkini (fagyasztott)": { carbs: 1.4, kCal: 12, protein: 1.3 },
    "Cukorborsó (fagyasztott)": { carbs: 6.2, kCal: 41, protein: 3.6 },
    "Fejes saláta": { carbs: 2, kCal: 17, protein: 1.4 },
    "Fokhagyma": { carbs: 26.3, kCal: 137, protein: 6.8 },
    "Gyöngyhagyma": { carbs: 8.3, kCal: 39, protein: 1.2 },
    "Káposzta": { carbs: 5.7, kCal: 31, protein: 1.6 },
    "Káposzta (savanyított)": { carbs: 3.4, kCal: 20, protein: 1.1 },
    "Káposzta (vörös)": { carbs: 5.7, kCal: 32, protein: 1.7 },
    "Karalábé": { carbs: 6.9, kCal: 39, protein: 2.1 },
    "Karalábé (fagyasztott)": { carbs: 4.6, kCal: 27, protein: 1.7 },
    "Karfiol": { carbs: 3.9, kCal: 29, protein: 2.4 },
    "Kelbimbó": { carbs: 6.1, kCal: 51, protein: 4.9 },
    "Kelkáposzta": { carbs: 4.3, kCal: 34, protein: 3.6 },
    "Kínai kel": { carbs: 2, kCal: 67, protein: 1.2 },
    "Kovászos uborka": { carbs: 1.9, kCal: 13, protein: 0.7 },
    "Kukorica": { carbs: 23.6, kCal: 131, protein: 4.7 },
    "Kukorica (morzsolt, fagyasztott)": { carbs: 17.1, kCal: 102, protein: 6.7 },
    "Laskagomba": { carbs: 6, kCal: 39, protein: 1.9 },
    "Laskagomba (fagyasztott)": { carbs: 5.8, kCal: 37, protein: 1.7 },
    "Lencse": { carbs: 60, kCal: 353, protein: 26 },
    "Lilahagyma": { carbs: 8.3, kCal: 39, protein: 1.2 },
    "Olívabogyó": { carbs: 6.5, kCal: 224, protein: 0.2 },
    "Padlizsán": { carbs: 4.8, kCal: 27, protein: 1.3 },
    "Paprika": { carbs: 3, kCal: 19.5, protein: 1.2 },
    "Paprika (csípős, fagyasztott)": { carbs: 9.3, kCal: 54, protein: 2.1 },
    "Paprika (piros, fagyasztott)": { carbs: 5.4, kCal: 30, protein: 1.4 },
    "Paprika (sárga, fagyasztott)": { carbs: 4.7, kCal: 27, protein: 1.4 },
    "Paprika (zöld, fagyasztott)": { carbs: 4.2, kCal: 24, protein: 1.4 },
    "Paprika, pritamin": { carbs: 8.6, kCal: 57, protein: 3.4 },
    "Paradicsom": { carbs: 4, kCal: 22, protein: 1 },
    "Paradicsom (fagyasztott)": { carbs: 3.7, kCal: 23, protein: 1.1 },
    "Paradicsom, sűrített": { carbs: 20, kCal: 111, protein: 5 },
    "Paradicsompüré": { carbs: 20, kCal: 109, protein: 5 },
    "Paraj (spenót, fagyasztott)": { carbs: 2.5, kCal: 97, protein: 2.6 },
    "Paraj (spenót)": { carbs: 1.8, kCal: 20, protein: 2.3 },
    "Petrezselyem gyökér": { carbs: 5.9, kCal: 29, protein: 1.2 },
    "Petrezselyem zöldje": { carbs: 9.8, kCal: 62, protein: 4.4 },
    "Póréhagyma": { carbs: 5.9, kCal: 37, protein: 2.2 },
    "Póréhagyma (fagyasztott)": { carbs: 6.3, kCal: 38, protein: 2.2 },
    "Retek": { carbs: 2.2, kCal: 15, protein: 1.2 },
    "Sárgaborsó": { carbs: 53.1, kCal: 321, protein: 21.7 },
    "Sárgarépa": { carbs: 8.1, kCal: 39, protein: 1.2 },
    "Sárgarépa (fagyasztott)": { carbs: 10.4, kCal: 52, protein: 1.7 },
    "Snidling": { carbs: 6.3, kCal: 37, protein: 2.2 },
    "Sóska": { carbs: 2.3, kCal: 24, protein: 2.4 },
    "Sóska (fagyasztott)": { carbs: 0.4, kCal: 10, protein: 1.5 },
    "Spárga": { carbs: 1.8, kCal: 17, protein: 2 },
    "Sütőtök": { carbs: 16.5, kCal: 80, protein: 1.5 },
    "Szója (extrudált, teljes őrlemény)": { carbs: 22.1, kCal: 480, protein: 41.6 },
    "Szója (granulátum, kocka)": { carbs: 18.3, kCal: 451, protein: 45 },
    "Szójaliszt, (extrahált, zsírtalanított)": { carbs: 33.4, kCal: 336, protein: 47.3 },
    "Tök": { carbs: 6.1, kCal: 31, protein: 1.1 },
    "Tök (gyalult, fagyasztott)": { carbs: 2.9, kCal: 16, protein: 0.8 },
    "Uborka": { carbs: 1.7, kCal: 12, protein: 1 },
    "Újhagyma": { carbs: 6.3, kCal: 37, protein: 2.2 },
    "Vargánya": { carbs: 1.3, kCal: 38, protein: 6.4 },
    "Vargánya (szárított)": { carbs: 31.5, kCal: 303, protein: 38.3 },
    "Vegyes savanyúság": { carbs: 2.4, kCal: 14, protein: 0.8 },
    "Vöröshagyma": { carbs: 8.3, kCal: 39, protein: 1.2 },
    "Vöröshagyma (fagyasztott)": { carbs: 7.4, kCal: 37, protein: 1.4 },
    "Zellergumó": { carbs: 5, kCal: 28, protein: 1.4 },
    "Zöldbab": { carbs: 6.8, kCal: 40.3, protein: 2.6 },
    "Zöldbab (konzerv)": { carbs: 4.3, kCal: 26, protein: 1.6 },
    "Zöldborsó": { carbs: 14, kCal: 87.6, protein: 7 },
    "Zöldborsó (fagyasztott)": { carbs: 15, kCal: 92, protein: 6.5 },
    "Zöldborsó (zsenge, fagyasztott)": { carbs: 12, kCal: 77, protein: 5.7 },
    "Zöldsaláta": { carbs: 2, kCal: 16, protein: 1.4 },
    "Áfonya": { carbs: 14, kCal: 57, protein: 0.7 },
    "Alma, aszalt": { carbs: 55.4, kCal: 242, protein: 1.4 },
    "Alma, befőtt": { carbs: 20.2, kCal: 85, protein: 0.3 },
    "Alma, jonatán": { carbs: 7, kCal: 33.2, protein: 0.4 },
    "Ananász, karika": { carbs: 12, kCal: 55.9, protein: 0.4 },
    "Ananász, friss": { carbs: 12, kCal: 53, protein: 0.4 },
    "Banán": { carbs: 24.2, kCal: 102.9, protein: 1.3 },
    "Barack": { carbs: 9, kCal: 41.5, protein: 0.7 },
    "Birsalma": { carbs: 9.1, kCal: 42, protein: 0.6 },
    "Citrom": { carbs: 2.3, kCal: 27, protein: 0.4 },
    "Citromlé": { carbs: 2.3, kCal: 63, protein: 0.4 },
    "Cseresznye": { carbs: 14, kCal: 63, protein: 0.8 },
    "Csipkebogyó, lekvár": { carbs: 58, kCal: 242, protein: 0.5 },
    "Datolya (préselt)": { carbs: 72.5, kCal: 308, protein: 1.9 },
    "Dinnye (sárga húsú)": { carbs: 9.5, kCal: 40, protein: 0.3 },
    "Dinnye (zöld húsú)": { carbs: 11.1, kCal: 47, protein: 0.3 },
    "Füge, szárított": { carbs: 62, kCal: 262, protein: 3.5 },
    "Földieper (szamóca)": { carbs: 7.2, kCal: 35, protein: 0.9 },
    "Gesztenyekrém (gyorsfagyasztott)": { carbs: 43.6, kCal: 193, protein: 2.1 },
    "Gesztenyepüré (gyorsfagyasztott)": { carbs: 47.6, kCal: 209, protein: 2 },
    "Grapefruit": { carbs: 7.2, kCal: 36, protein: 0.5 },
    "Gyümölcssaláta": { carbs: 13.4, kCal: 60, protein: 0.7 },
    "Görögdinnye": { carbs: 6.5, kCal: 29, protein: 0.5 },
    "Kajszibarack": { carbs: 10.2, kCal: 48, protein: 0.9 },
    "Kiwi": { carbs: 11.3, kCal: 54.6, protein: 1 },
    "Körte": { carbs: 12, kCal: 52.3, protein: 0.4 },
    "Körte befőtt": { carbs: 23.7, kCal: 99, protein: 0.3 },
    "Málna": { carbs: 5.4, kCal: 29, protein: 1.2 },
    "Málna (fertődi, gyorsfagyasztott)": { carbs: 6.2, kCal: 39, protein: 1.1 },
    "Málna (nagymarosi gyorsfagyasztott)": { carbs: 13, kCal: 62, protein: 1.4 },
    "Málna dzsem, üveges": { carbs: 63.3, kCal: 263, protein: 1.5 },
    "Mandarin": { carbs: 10.8, kCal: 50.2, protein: 1.7 },
    "Mazsola": { carbs: 62, kCal: 273.7, protein: 3.5 },
    "Meggy": { carbs: 11, kCal: 52, protein: 0.8 },
    "Meggy befőtt": { carbs: 20.8, kCal: 90, protein: 0.6 },
    "Meggy dzsem, üveges": { carbs: 70.3, kCal: 292, protein: 0.4 },
    "Meggy (gyorsfagyasztott)": { carbs: 10.8, kCal: 48, protein: 0.5 },
    "Narancs": { carbs: 8.5, kCal: 41, protein: 0.6 },
    "Narancslé": { carbs: 8.5, kCal: 49.9, protein: 1.6 },
    "Nektarin": { carbs: 11.4, kCal: 49, protein: 0.4 },
    "Őszibarack": { carbs: 9, kCal: 41, protein: 0.7 },
    "Őszibarack (gyorsfagyasztott)": { carbs: 10.3, kCal: 51, protein: 1 },
    "Őszibarack (befőtt)": { carbs: 21.2, kCal: 90, protein: 0.5 },
    "Őszibarack dzsem, üveges": { carbs: 71.3, kCal: 295, protein: 0.5 },
    "Őszibarack hámozott, gyorsfagyasztott": { carbs: 10.1, kCal: 50, protein: 1.1 },
    "Ribizke, fekete": { carbs: 9.5, kCal: 48, protein: 0.9 },
    "Ribizke, fekete (gyorsfagyasztott)": { carbs: 9.3, kCal: 56, protein: 1.9 },
    "Ribizke, vörös": { carbs: 7, kCal: 34, protein: 0.6 },
    "Ribizke , vörös (gyorsfagyasztott)": { carbs: 5.3, kCal: 33, protein: 1.2 },
    "Sárgabarack dzsem, üveges": { carbs: 64.5, kCal: 267, protein: 0.4 },
    "Szeder": { carbs: 6, kCal: 33, protein: 0.8 },
    "Szeder (gyorsfagyasztott)": { carbs: 6.4, kCal: 37, protein: 1.6 },
    "Szilva": { carbs: 13.1, kCal: 59.7, protein: 0.7 },
    "Szilva, aszalt": { carbs: 61.8, kCal: 268, protein: 2.3 },
    "Szilva befőtt": { carbs: 21.9, kCal: 92, protein: 0.4 },
    "Szilva, Besztercei": { carbs: 13.1, kCal: 58, protein: 0.7 },
    "Szilva, vörös": { carbs: 10.2, kCal: 47, protein: 0.8 },
    "Szilva, Zöldringló": { carbs: 13.5, kCal: 61, protein: 0.8 },
    "Szilvaíz, natúr": { carbs: 54, kCal: 231, protein: 1.3 },
    "Szőlő": { carbs: 18.1, kCal: 79.3, protein: 0.6 },
    "Vegyes gyümölcs": { carbs: 10, kCal: 50, protein: 0.7 },
    "Vegyes íz": { carbs: 60, kCal: 252, protein: 1 },
    "Dió": { carbs: 11.7, kCal: 634, protein: 18.6 },
    "Földimogyoró": { carbs: 14.7, kCal: 609, protein: 26.7 },
    "Gesztenye": { carbs: 32.6, kCal: 167, protein: 4.8 },
    "Kesudió": { carbs: 32, kCal: 596, protein: 18 },
    "Kókuszdió, friss": { carbs: 10, kCal: 401, protein: 3.9 },
    "Lenmag": { carbs: 28.88, kCal: 534, protein: 18.29 },
    "Mák": { carbs: 23.9, kCal: 537, protein: 20.5 },
    "Mandula": { carbs: 6.8, kCal: 607, protein: 27.6 },
    "Mogyoró": { carbs: 8.7, kCal: 690, protein: 15.6 },
    "Napraforgó mag": { carbs: 17.4, kCal: 590, protein: 18.7 },
    "Paradió": { carbs: 7.2, kCal: 709, protein: 14 },
    "Pisztácia": { carbs: 13.8, kCal: 650, protein: 22.3 },
    "Szezámmag": { carbs: 23, kCal: 572, protein: 18 },
    "Tökmag": { carbs: 3.6, kCal: 623, protein: 33.9 },
    "Angolszalonna": { carbs: 0, kCal: 501, protein: 16.8 },
    "Margarin": { carbs: 0.2, kCal: 737, protein: 0.3 },
    "Margarin, sütő": { carbs: 0.4, kCal: 781, protein: 0.5 },
    "Olaj (napraforgó, szója, tökmag)": { carbs: 0, kCal: 928, protein: 0 },
    "Olívaolaj": { carbs: 0, kCal: 900, protein: 0 },
    "Vaj, szendvics": { carbs: 0.3, kCal: 653, protein: 0.3 },
    "Vaj, tea": { carbs: 0.5, kCal: 748, protein: 0.4 },
    "Vajkrém": { carbs: 2, kCal: 390, protein: 2.5 },
    "Zsír, ami kisül": { carbs: 0, kCal: 900, protein: 0 },
    "Baromfi párizsi": { carbs: 3, kCal: 130, protein: 11 },
    "Baromfi virsli": { carbs: 3, kCal: 193, protein: 12 },
    "Chorizo kolbász": { carbs: 6, kCal: 433, protein: 24 },
    "Csabai kolbász": { carbs: 1, kCal: 494, protein: 23 },
    "Császárszalonna": { carbs: 1, kCal: 367, protein: 12 },
    "Cserkészkolbász": { carbs: 0, kCal: 336, protein: 16 },
    "Disznósajt": { carbs: 0, kCal: 249, protein: 17 },
    "Főzőkolbász": { carbs: 2, kCal: 301, protein: 15 },
    "Füstölt kolbász": { carbs: 0, kCal: 316, protein: 28 },
    "Gépsonka": { carbs: 1, kCal: 88, protein: 16 },
    "Gyulai kolbász": { carbs: 1, kCal: 479, protein: 22 },
    "Házi szárazkolbász": { carbs: 1, kCal: 469, protein: 20 },
    "Húskenyér": { carbs: 5, kCal: 303, protein: 9 },
    "Húspástétom": { carbs: 6, kCal: 282, protein: 13 },
    "Kacsamájkrém": { carbs: 4, kCal: 282, protein: 9 },
    "Krinolin": { carbs: 3, kCal: 206, protein: 13 },
    "Lecsókolbász": { carbs: 3, kCal: 409, protein: 16 },
    "Libamájkrém": { carbs: 3, kCal: 194, protein: 9 },
    "Löncshús": { carbs: 1, kCal: 176, protein: 9 },
    "Májashurka": { carbs: 1, kCal: 379, protein: 15 },
    "Marha párizsi": { carbs: 1, kCal: 216, protein: 11 },
    "Mortadella": { carbs: 1, kCal: 322, protein: 16 },
    "Nyári szalámi": { carbs: 1, kCal: 362, protein: 16 },
    "Olasz felvágott": { carbs: 1, kCal: 251, protein: 13 },
    "Paprikás szalámi": { carbs: 1, kCal: 520, protein: 24 },
    "Paraszt sonka": { carbs: 1, kCal: 245, protein: 20 },
    "Pármai sonka": { carbs: 1, kCal: 236, protein: 27 },
    "Pulykakolbász": { carbs: 2, kCal: 270, protein: 12 },
    "Pulykapárizsi": { carbs: 2, kCal: 203, protein: 11 },
    "Pulykasonka": { carbs: 3, kCal: 111, protein: 15 },
    "Pulykavirsli": { carbs: 1, kCal: 236, protein: 13 },
    "Sertés párizsi": { carbs: 1, kCal: 207, protein: 12 },
    "Sertés virsli": { carbs: 3, kCal: 252, protein: 13 },
    "Sertésmájkrém": { carbs: 14, kCal: 237, protein: 11 },
    "Sütnivaló kolbász": { carbs: 1, kCal: 346, protein: 14 },
    "Szafaládé": { carbs: 2, kCal: 250, protein: 10 },
    "Szárazkolbász": { carbs: 1, kCal: 494, protein: 23 },
    "Tavaszi felvágott": { carbs: 2, kCal: 209, protein: 12 },
    "Téliszalámi": { carbs: 1, kCal: 524, protein: 25 },
    "Turista felvágott": { carbs: 2, kCal: 372, protein: 18 },
    "Turista szalámi": { carbs: 1, kCal: 362, protein: 16 },
    "Vaddisznókolbász": { carbs: 1, kCal: 500, protein: 22 },
    "Véreshurka": { carbs: 6, kCal: 250, protein: 12 },
    "Veronai felvágott": { carbs: 0, kCal: 288, protein: 15 },
    "Zalai felvágott": { carbs: 1, kCal: 218, protein: 13 },
    "Babapiskóta": { carbs: 78, kCal: 380, protein: 8 },
    "Chips (burgonya)": { carbs: 48, kCal: 536, protein: 7 },
    "Chips (tortilla)": { carbs: 60, kCal: 503, protein: 8 },
    "Drazsé": { carbs: 82, kCal: 448, protein: 2 },
    "Édeskeksz": { carbs: 66, kCal: 483, protein: 6 },
    "Étcsokoládé (45-59% kakaótartalmú)": { carbs: 54, kCal: 546, protein: 5 },
    "Étcsokoládé (60-69% kakaótartalmú)": { carbs: 44, kCal: 579, protein: 6 },
    "Étcsokoládé (70-85% kakaótartalmú)": { carbs: 35, kCal: 598, protein: 8 },
    "Extrudált kukoricapehely": { carbs: 62, kCal: 510, protein: 6 },
    "Fehércsokoládé": { carbs: 59, kCal: 539, protein: 6 },
    "Főzőcsokoládé": { carbs: 42, kCal: 554, protein: 6 },
    "Gumicukor": { carbs: 76, kCal: 336, protein: 4 },
    "Gyümölcsfagylalt": { carbs: 33, kCal: 134, protein: 0 },
    "Háztartási keksz": { carbs: 80, kCal: 430, protein: 7 },
    "Jégkrém": { carbs: 28, kCal: 164, protein: 2 },
    "Linzer": { carbs: 54, kCal: 429, protein: 5 },
    "Mályvacukor": { carbs: 81, kCal: 318, protein: 2 },
    "Medvecukor": { carbs: 77, kCal: 338, protein: 5 },
    "Mézes puszedli": { carbs: 80, kCal: 368, protein: 7 },
    "Mirelit gesztenye": { carbs: 44, kCal: 200, protein: 2 },
    "Mogyorókrém": { carbs: 57, kCal: 541, protein: 5 },
    "Mogyoróvaj": { carbs: 17, kCal: 598, protein: 22 },
    "Nápolyi": { carbs: 55, kCal: 511, protein: 6 },
    "Perec": { carbs: 71, kCal: 373, protein: 11 },
    "Popcorn": { carbs: 63, kCal: 387, protein: 13 },
    "Rágógumi": { carbs: 94, kCal: 360, protein: 0 },
    "Ropi": { carbs: 72, kCal: 374, protein: 11 },
    "Sajtostallér": { carbs: 62, kCal: 389, protein: 13 },
    "Tejcsokoládé": { carbs: 56, kCal: 535, protein: 8 },
    "Coca-Cola, 1 dl": { carbs: 11, kCal: 46, protein: 0 },
    "Fehér bor, félédes, 1 dl": { carbs: 2, kCal: 70, protein: 0.1 },
    "Kakaópor": { carbs: 32.4, kCal: 386, protein: 21.4 },
    "Keményítő": { carbs: 70.2, kCal: 347, protein: 9.6 },
    "Ketchup": { carbs: 24, kCal: 109, protein: 2 },
    "Kristálycukor": { carbs: 99.9, kCal: 400, protein: 0 },
    "Majonéz": { carbs: 3, kCal: 774, protein: 1.5 },
    "Méz": { carbs: 81, kCal: 325.6, protein: 0.4 },
    "Mustár": { carbs: 6, kCal: 105, protein: 6 },
    "Pudingpor": { carbs: 75, kCal: 388.3, protein: 2.5 },
    "Sör, világos, 1dl": { carbs: 2.9, kCal: 43, protein: 0.5 },
    "Szőlőcukor": { carbs: 90, kCal: 358, protein: 0 },
    "Tofu": { carbs: 1.9, kCal: 76, protein: 8 },
    "Tyúkleves, kocka": { carbs: 0, kCal: 359.5, protein: 29.5 },
    "Vörösbor, száraz, 1dl": { carbs: 0.3, kCal: 65, protein: 0.1 }

    // Add meg a többi összetevőt is
};

// Töltse fel a legördülő listát (datalist) az összetevőkkel
const ingredientsList = document.getElementById('ingredientsList');
for (let ingredient in carbData) {
    let option = document.createElement('option');
    option.value = ingredient;
    ingredientsList.appendChild(option);
}

let totalCarbs = 0;
let totalCalories = 0;
let totalProtein = 0;
let totalWeight = 0; 

const ingredientTableBody = document.getElementById('ingredientTableBody');

// Hozzávaló hozzáadása a táblázathoz
document.getElementById('addIngredient').addEventListener('click', function() {
    const ingredient = document.getElementById('ingredientInput').value;
    const weight = parseFloat(document.getElementById('weightInput').value);

    if (carbData[ingredient] !== undefined) {
        const carbs = carbData[ingredient].carbs * (weight / 100);
        const kCal = carbData[ingredient].kCal * (weight / 100);
        const protein = carbData[ingredient].protein * (weight / 100);
        
        totalCarbs += carbs;
        totalCalories += kCal;
        totalProtein += protein;
        totalWeight += weight; 

        // Új sor hozzáadása a táblázathoz
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ingredient}</td>
            <td>${weight} gramm</td>
            <td>${carbs.toFixed(2)} gramm</td>
            <td>${kCal.toFixed(2)}</td>
            <td>${protein.toFixed(2)} gramm</td>
            <td><button class="removeButton">x</button></td>
        `;
        
        ingredientTableBody.appendChild(row);

        // Szénhidrát, kalória, fehérje frissítése
        document.getElementById('totalCarbs').textContent = `Összes szénhidrát: ${totalCarbs.toFixed(2)} gramm`;
        document.getElementById('totalCalories').textContent = `Összes kalória: ${totalCalories.toFixed(2)} kCal`;
        document.getElementById('totalProtein').textContent = `Összes fehérje: ${totalProtein.toFixed(2)} gramm`;

        // Eltávolítás gomb funkciójának hozzáadása
        row.querySelector('.removeButton').addEventListener('click', function() {
            ingredientTableBody.removeChild(row);
            totalCarbs -= carbs;
            totalCalories -= kCal;
            totalProtein -= protein;
            totalWeight -= weight; 

            document.getElementById('totalCarbs').textContent = `Összes szénhidrát: ${totalCarbs.toFixed(2)} gramm`;
            document.getElementById('totalCalories').textContent = `Összes kalória: ${totalCalories.toFixed(2)} kCal`;
            document.getElementById('totalProtein').textContent = `Összes fehérje: ${totalProtein.toFixed(2)} gramm`;
        });

        // Beviteli mezők törlése
        document.getElementById('ingredientInput').value = '';
        document.getElementById('weightInput').value = '';
    } else {
        alert("Hozzávaló nem található!");
    }
});

// Existing code...

document.getElementById("calculateServingValues").addEventListener("click", function() {
    let servingSize = parseFloat(document.getElementById("servingSizeInput").value);

    if (totalWeight > 0 && !isNaN(servingSize)) {
        let carbsPerGram = totalCarbs / totalWeight;
        let caloriesPerGram = totalCalories / totalWeight;
        let proteinPerGram = totalProtein / totalWeight;

        let servingCarbs = servingSize * carbsPerGram;
        let servingCalories = servingSize * caloriesPerGram;
        let servingProtein = servingSize * proteinPerGram;

        document.getElementById("servingCarbs").textContent = `Szénhidráttartalom/adag: ${servingCarbs.toFixed(2)} gramm`;
        document.getElementById("servingCalories").textContent = `Kalóriatartalom/adag: ${servingCalories.toFixed(2)} kCal`;
        document.getElementById("servingProtein").textContent = `Fehérjetartalom/adag: ${servingProtein.toFixed(2)} gramm`;
    } else {
        alert("Adj meg egy érvényes adagméretet és hozzávalókat!");
    }
});


let calculationMethod = "carbs"; // Default calculation method

// Button click event listeners to set the active calculation method
document.getElementById('btnCH').addEventListener('click', function() {
    setActiveCalculationMethod('carbs');
});
document.getElementById('btnKCal').addEventListener('click', function() {
    setActiveCalculationMethod('calories');
});
document.getElementById('btnProt').addEventListener('click', function() {
    setActiveCalculationMethod('protein');
});

// Function to handle the active button state and update the calculation method
function setActiveCalculationMethod(method) {
    calculationMethod = method;
    document.querySelectorAll('.calc-btn').forEach(button => button.classList.remove('active'));
    
    if (method === 'carbs') {
        document.getElementById('btnCH').classList.add('active');
    } else if (method === 'calories') {
        document.getElementById('btnKCal').classList.add('active');
    } else if (method === 'protein') {
        document.getElementById('btnProt').classList.add('active');
    }
}

// Update the portion size calculation logic based on the active calculation method
document.getElementById("calculatePortion").addEventListener("click", function() {
    let desiredAmount = parseFloat(document.getElementById("desiredAmount").value);
    let portionSize = 0;

    if (calculationMethod === "carbs") {
        let carbsPerGram = totalCarbs / totalWeight; 
        portionSize = desiredAmount / carbsPerGram;
    } else if (calculationMethod === "calories") {
        let caloriesPerGram = totalCalories / totalWeight;
        portionSize = desiredAmount / caloriesPerGram;
    } else if (calculationMethod === "protein") {
        let proteinPerGram = totalProtein / totalWeight;
        portionSize = desiredAmount / proteinPerGram;
    }

    document.getElementById("portionSize").textContent = `Adag mérete: ${portionSize.toFixed(2)} gramm`;
});


