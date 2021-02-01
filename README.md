# Angular Első Csapatmunka

## Feladat
Készítsetek egy Webshopot Angular keretrendszer segítségével.

## Előkészítés
- A csapat egyik tagja forkolja a következő repo -t:
- `https://github.com/cherryApp/str-angular-project-001`
- Hívja meg a többieket együttműködőknek a github felületén.
- Mindenki klónozza le magának a forkolt repo -t.
- Üzembehelyezés a szokásos: 
- `cd str-angular-project-001`
- `npm i`
- `code . -r`
- `npm start`

## Csapatmunka
- Válasszátok ki az oldal témáját (sícuccok, főzés, könyvek, filmek, stb...).
- Keressétek meg a hozzávalókat: képek, egyéb adatok.
- Egyenlő arányban osszátok el a feladatokat.
- Minden komponensen csak egy ember dolgozzon.
- Beszéljétek meg a stílust.
- Osszátok ki, ki melyik feladatot végzi el: el kell készíteni az osztályokat, 
majd három komponenst kell készíteni. Ez 4 jól elkülönülő faladat, időrendben.  
- Ha megvan minden hozzávaló, akkor össze kell állítani az oldalt a szükséges 
komponensekből. Ezt érdemes együtt csinálni.
- Miután minden megfelelően működik, csak akkor fogjatok hozzá a stílusok 
testreszabásának. Amit csak lehet, a komponensek saját stíluslapjába írjatok.
- A Git közös használatáról konzultálunk a projekt indító megbeszélésen.

## Alap osztályok
Mielőtt hozzákezdenétek a komponensek generálásához, készítsétek el a 
szükséges oszályokat és szolgáltatásokat (service).
- Product osztály: id, catId, name, description, image, price, stock, featured, active
- Category osztály: id, name, description
> _Ezeket a model almappába érdemes elhelyezni az app mappán belül, hogy egy helyen legyenek._
- ProductService: ez egy service legyen, így tudtok egyet generálni a service almappába: 
`ng g service service/kutya`
> A ProductService tartalmazzon egy list nevű változót, ami a termékek tömbje legyen.  
> Ebben szerepeljen random adatokkal legalább 50 termék, segítség: `https://mockaroo.com`

## Home component
Amint látjátok, a fő komponenseket már elkészítettem és a menüt is beállítottam.
- Ez a főoldala a webshopnak.
- Jelenjen meg egy kiemelt termék sor az oldal tetején.  
> 5 kiemelt terméket tartalmazzon, azok közül jelenjenek meg, amelyek featured tulajdonsága true.
- Jelenjen meg egy akciós termék sor a kiemelt termékek alatt, ide bármilyen random termék 
kerülhet, szintén 5 darab legyen.

## Category oldalak
A kategória oldalak linkjét a ConfigService -ben tudjátok átnevezni.
- Jelenjen meg itt is a kiemelt termék sor 5 termékkel, de ezeknek már ebből a kategóriából kell jönnie. 
Ezek azok a termékek amelyek az adott kategóriához tartoznak és a featured tulajdonságuk true.
- Jelenjen meg alatta a terméklista. Itt az összes termék látható legyen rácsrendszerben, amely 
az adott kategóriában található. Azt, hogy melyik termék melyik kategóriában van, a catId mondja meg.
- Legyen a terméklista tetején egy szűrőmező. Ez egy input mező, ha gépelni kezdenek bele, akkor 
a név alapján kezdje el szűrni a termékeket, a legutóbbi feladathoz hasonlóan.

## Szükséges komponensek
Ezeket nektek kell legenerálni, például így: `ng g c common/product-card`

### 1. Termékkártya komponens
Ez jeleníti meg az egyes termékeket. Az alábbi részei vannak:
- Termékkép, teljes szélességében a kártya felső 30 - 50% át foglalja el.
- Alatta egymás alatt: név, rövid leírás, készlet, ár. A formázás rátok van bízva. 
Kiindulásnak jó lehet (de módosítsátok): `https://getbootstrap.com/docs/4.6/components/card/#example`
- Működése: input tulajdonságként kapja meg a megjelenített terméket, 
pld: `<app-product-card [product]="product"></app-product-card>`
- Statikus komponens, azaz nem kell bele output tulajdonság (egyenlőre :))))

### 2. Temék lapozó komponens
Az öt terméket jeleníti meg. A főoldalon kettő, a kategória oldalakon egy van belőle, 
csak különböző termékekkel. Tehát ez jeleníti meg a főoldalon a kiemelt és akciós 
termékeket, a kategória oldalakon pedig a kategória kiemelt termékeit.
- Működése: input tulajdonságként kapja meg az 5 terméket. *ngFor használatával 
jeleníti meg őket, minden egy termék egy product-card komponens lesz.
- Extra: ha valaki nagyon unatkozik, akkor több termék is lehet benne, jobbra - balra 
lapozó gombokkal.

### 3. Termék lista komponens
Ez a komponens hasonlóan működik mint a termék lapozó, de ez korlátlan számú terméket 
képes megjeleníteni.
- Működése: input tulajdonságként kapja meg a termékek tömbjét. Ezeket bejárva (*ngFor) 
minden terméket egy product-card komponenssel jelenít meg.
- Szűrés: generáljatok egy filter pipe -ot és azt alkalmazzátok a szűrésre. 
> Legyen egy input mező a termékek felett (de ezen a komponensen belül).  
> Amikor módosítják a taralmát, akkor módosuljon egy változó, pld: `phrase`.  
> Ez a változó legyen átadva a filternek, ami ez alapján szűrje le a 
kapott termékek tömbjét. Ezt ott tudjátok alkalmazni, ahol az *ngFor 
bejárja a termékeket, pld:  
```html
<tr *ngFor="let product of products | filter:phrase">
```
> Működő példa: `https://github.com/Training360/str-angular-002/tree/main/angular-components-pipes`

## Megjelenés
A Bootstrap keretrendszert és a FontAwesom ikonokat előre telepítettem és beállítottam. 
- Írjatok egyéni scss állományokat igény szerint, alakítsátok a színeket és a megjelenést 
a saját ízlésetek alapján. 
- RESZPONZIVITÁS: mobil nézetben 1, tablet nézetben 2 és asztali nézetben 5 termék 
jelenjen meg egymás mellett. A menüt már megoldottam.
- Termékek képei: a képeket az `app/assets` mappába helyezzétek el. Ez egy 
speciális mappa, a webpack átmásolja a kész alkalmazásba. Ha mondjuk az 
ebben a mappában létrehozol egy `img` almappát a képeknek, akkor egy képet így 
érsz el: `/assets/img/logo.png`. A képeket érdemes egyforma méretűre vágni, hogy 
ne kelljen vele annyit dolgozni a stílusnál.

## Extra funkciók
- A lista nézetben lehessen a termékeket szűrni nem csak név, hanem más paraméterek alapján is.
- A lista nézetben lehessen rendezni is a termék kártyákat, mondjuk ár, név, akció, kiemelt alapján.

## Sok sikert!

