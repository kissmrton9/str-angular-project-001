import { Input, OnChanges } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, IProduct } from '../model/product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { };
  private jsonUrl: string = 'http://localhost:3000/list';

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.jsonUrl);
  }
  getOne(product: number | string | Partial<IProduct>): Observable<IProduct> {
    try {
      const id =
        typeof product === 'number' ? product :
          typeof product === 'string' ? product :
            product.id;
      return this.http.get<IProduct>(`${this.jsonUrl}/${id}`);
    }
    catch (e) {
      console.log(`Failed to get product ${product}: 'id' wasn't given`);
    }
  }
  add(product: Partial<IProduct>): Observable<IProduct> {
    delete product.id;
    return this.http.post<IProduct>(this.jsonUrl, product);
  }
  remove(product: number | string | Partial<IProduct>): Observable<IProduct> {
    try {
      const id =
        typeof product === 'number' ? product :
          typeof product === 'string' ? product :
            product.id;
      return this.http.delete<IProduct>(`${this.jsonUrl}/${id}`);
    }
    catch (e) {
      console.log(`Failed to remove product ${product}: 'id' wasn't given`);
    }
  }
  update(product: Product): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.jsonUrl}/${product.id}`, product);
  }

  // constructor(data: Array<IProduct>) {
  //   return (data.map(product_data => new Product(product_data)));
  // }
}

// export class ProductService implements OnChanges {

//   constructor(private productService: ProductServiceService){}
//   productsObservable: Observable<IProduct[]> = this.productService.getAll();
//   products: IProduct[];
//   featuredProducts: IProduct[];
//   actionProducts: IProduct[];
//   showProducts(){
//     this.productsObservable
//       .subscribe((data: IProduct[]) => {
//         //console.log(data);
//         this.products = data;
//         this.featuredProducts = data.filter(value => value.featured);
//         this.actionProducts = data.filter(value => value.discount);
//         //console.log(this.featuredProducts);
//   });
//   //console.log(this.products);
//   }
//   done = this.showProducts();
//   ngOnChanges(): void {
//     this.showProducts();
//   }
// }




/* let data: IProduct[] = [{ id: 1, catId: 2, name: "Back to the Future", description: "unleash sexy e-business", image: "SitAmetEros.tiff", price: 9601, stock: 84, featured: true, active: true, discount: false },
{ id: 2, catId: 3, name: "Flesh Gordon", description: "revolutionize virtual action-items", image: "Ultrices.jpeg", price: 5466, stock: 28, featured: false, active: false, discount: false },
{ id: 3, catId: 1, name: "She", description: "strategize robust infomediaries", image: "LobortisSapienSapien.jpeg", price: 6822, stock: 36, featured: false, active: false, discount: false },
{ id: 4, catId: 3, name: "Bill Burr: Let It Go", description: "incentivize transparent users", image: "Turpis.png", price: 3040, stock: 58, featured: true, active: true, discount: false },
{ id: 5, catId: 2, name: "Inauguration of the Pleasure Dome", description: "evolve magnetic vortals", image: "LiberoNon.png", price: 4718, stock: 95, featured: true, active: true, discount: false },
{ id: 6, catId: 2, name: "Spaceballs", description: "visualize turn-key models", image: "Vivamus.tiff", price: 9966, stock: 99, featured: true, active: false, discount: false },
{ id: 7, catId: 2, name: "The Gambler", description: "harness 24/365 action-items", image: "PurusSit.tiff", price: 4065, stock: 97, featured: true, active: false, discount: false },
{ id: 8, catId: 2, name: "Wild Hunt, The", description: "harness global schemas", image: "TempusSitAmet.tiff", price: 8480, stock: 62, featured: false, active: false, discount: false },
{ id: 9, catId: 3, name: "Blackbeard's Ghost", description: "syndicate synergistic experiences", image: "QuamPharetraMagna.tiff", price: 8052, stock: 4, featured: true, active: false, discount: false },
{ id: 10, catId: 2, name: "Lady Jane", description: "revolutionize web-enabled schemas", image: "Nulla.jpeg", price: 3455, stock: 5, featured: false, active: true, discount: false },
{ id: 11, catId: 1, name: "Separation, The (Séparation, La)", description: "orchestrate 24/7 infrastructures", image: "EgetCongueEget.jpeg", price: 7890, stock: 94, featured: true, active: true, discount: false },
{ id: 12, catId: 3, name: "Bad Medicine", description: "reintermediate back-end technologies", image: "IdConsequat.tiff", price: 7631, stock: 6, featured: true, active: true, discount: false },
{ id: 13, catId: 2, name: "Halloween II", description: "mesh holistic e-markets", image: "Ante.jpeg", price: 7668, stock: 74, featured: true, active: false, discount: false },
{ id: 14, catId: 3, name: "Enchanted", description: "reintermediate sticky channels", image: "Felis.jpeg", price: 2991, stock: 45, featured: false, active: false, discount: false },
{ id: 15, catId: 3, name: "Autism: The Musical", description: "incentivize B2B mindshare", image: "A.jpeg", price: 7777, stock: 88, featured: true, active: true, discount: false },
{ id: 16, catId: 3, name: "Family Guy Presents: Blue Harvest", description: "benchmark strategic functionalities", image: "Pede.jpeg", price: 6337, stock: 62, featured: false, active: false, discount: false },
{ id: 17, catId: 3, name: "Fortress", description: "utilize efficient metrics", image: "Posuere.jpeg", price: 6419, stock: 76, featured: false, active: false, discount: false },
{ id: 18, catId: 1, name: "Her Master's Voice", description: "incentivize turn-key synergies", image: "Vel.jpeg", price: 3012, stock: 100, featured: true, active: true, discount: false },
{ id: 19, catId: 1, name: "Fuel", description: "repurpose compelling users", image: "AIpsumInteger.jpeg", price: 5408, stock: 100, featured: true, active: true, discount: false },
{ id: 20, catId: 2, name: "Hoot", description: "syndicate dot-com paradigms", image: "PellentesqueQuisque.gif", price: 2666, stock: 80, featured: false, active: false, discount: false },
{ id: 21, catId: 1, name: "Take This Waltz", description: "maximize leading-edge e-markets", image: "Nulla.tiff", price: 8235, stock: 22, featured: false, active: true, discount: false },
{ id: 22, catId: 3, name: "Piglet's Big Movie", description: "optimize end-to-end eyeballs", image: "SapienDignissim.tiff", price: 5192, stock: 48, featured: false, active: false, discount: false },
{ id: 23, catId: 2, name: "Princess Caraboo", description: "incubate magnetic systems", image: "Urna.jpeg", price: 8829, stock: 47, featured: false, active: false, discount: false },
{ id: 24, catId: 3, name: "Broken English", description: "orchestrate value-added supply-chains", image: "TristiqueFusceCongue.jpeg", price: 6222, stock: 29, featured: true, active: true, discount: false },
{ id: 25, catId: 3, name: "Post Tenebras Lux", description: "deploy strategic infrastructures", image: "Id.gif", price: 4278, stock: 78, featured: true, active: false, discount: false },
{ id: 26, catId: 1, name: "The Spiritual Boxer", description: "disintermediate sticky experiences", image: "Quisque.tiff", price: 1972, stock: 14, featured: true, active: true, discount: false },
{ id: 27, catId: 1, name: "Welcome, or No Trespassing", description: "transform B2B experiences", image: "AliquetMassaId.tiff", price: 8597, stock: 55, featured: true, active: true, discount: false },
{ id: 28, catId: 3, name: "Molokai (Molokai: The Story of Father Damien)", description: "brand holistic paradigms", image: "SemDuisAliquam.tiff", price: 6608, stock: 47, featured: true, active: true, discount: false },
{ id: 29, catId: 1, name: "You Don't Know Jack", description: "target customized partnerships", image: "A.gif", price: 7378, stock: 46, featured: false, active: false, discount: false },
{ id: 30, catId: 1, name: "Mindwarp", description: "matrix next-generation vortals", image: "ErosSuspendisseAccumsan.gif", price: 9373, stock: 97, featured: false, active: false, discount: false },
{ id: 31, catId: 1, name: "Dancing in September", description: "matrix bricks-and-clicks synergies", image: "NullaNuncPurus.tiff", price: 3678, stock: 82, featured: false, active: false, discount: false },
{ id: 32, catId: 3, name: "Rosalie Goes Shopping", description: "incentivize open-source infomediaries", image: "Nullam.tiff", price: 1805, stock: 32, featured: true, active: false, discount: false },
{ id: 33, catId: 2, name: "Jekyll", description: "envisioneer 24/365 eyeballs", image: "Ut.jpeg", price: 2239, stock: 6, featured: false, active: true, discount: false },
{ id: 34, catId: 3, name: "Putzel", description: "transition bricks-and-clicks synergies", image: "LigulaNec.png", price: 5787, stock: 22, featured: true, active: true, discount: false },
{ id: 35, catId: 3, name: "Children of Invention", description: "envisioneer seamless interfaces", image: "LobortisVel.jpeg", price: 7034, stock: 99, featured: true, active: false, discount: false },
{ id: 36, catId: 3, name: "Manuel on the Island of Wonders (Manoel dans l'île des merveilles)", description: "envisioneer enterprise models", image: "CongueRisusSemper.png", price: 5667, stock: 100, featured: false, active: true, discount: false },
{ id: 37, catId: 1, name: "Fugitives (Fugitivas)", description: "revolutionize magnetic functionalities", image: "Blandit.png", price: 2571, stock: 38, featured: true, active: false, discount: false },
{ id: 38, catId: 1, name: "Last of the Mohicans, The", description: "visualize world-class e-business", image: "Nibh.png", price: 247, stock: 23, featured: false, active: true, discount: false },
{ id: 39, catId: 3, name: "Bug", description: "implement granular e-commerce", image: "Vulputate.tiff", price: 8229, stock: 34, featured: false, active: false, discount: false },
{ id: 40, catId: 2, name: "Lemmy", description: "incubate 24/365 paradigms", image: "Quis.png", price: 9289, stock: 27, featured: true, active: false, discount: false },
{ id: 41, catId: 1, name: "Marina Abramovic: The Artist Is Present", description: "seize wireless action-items", image: "Sit.gif", price: 162, stock: 7, featured: true, active: true, discount: false },
{ id: 42, catId: 1, name: "Ballet Shoes", description: "deploy one-to-one bandwidth", image: "Tempor.jpeg", price: 2916, stock: 62, featured: true, active: true, discount: false },
{ id: 43, catId: 1, name: "Piano, The", description: "iterate e-business e-tailers", image: "UltricesAliquet.png", price: 8698, stock: 67, featured: true, active: true, discount: false },
{ id: 44, catId: 1, name: "The Reunion", description: "streamline user-centric platforms", image: "ParturientMontes.png", price: 7557, stock: 39, featured: false, active: true, discount: false },
{ id: 45, catId: 3, name: "On Probation (Tiempo de Valientes)", description: "harness strategic vortals", image: "Sed.jpeg", price: 9276, stock: 44, featured: false, active: false, discount: false },
{ id: 46, catId: 2, name: "Sounder", description: "whiteboard killer methodologies", image: "PellentesqueUltricesPhasellus.jpeg", price: 5072, stock: 4, featured: true, active: false, discount: false },
{ id: 47, catId: 3, name: "Leopard Man, The", description: "revolutionize 24/7 e-services", image: "EstLacinia.gif", price: 2024, stock: 75, featured: true, active: false, discount: false },
{ id: 48, catId: 2, name: "Total Eclipse", description: "facilitate clicks-and-mortar networks", image: "Adipiscing.tiff", price: 6583, stock: 40, featured: true, active: true, discount: false },
{ id: 49, catId: 3, name: "Easy to Love", description: "architect magnetic convergence", image: "NullaTellusIn.gif", price: 8080, stock: 86, featured: false, active: false, discount: false },
{ id: 0, catId: 2, name: "Live Music", description: "engineer sticky methodologies", image: "AliquamLacus.tiff", price: 8360, stock: 65, featured: true, active: true, discount: false }
  //,
  // {id:51,catId:3,name:"Campaign, The",description:"reintermediate bricks-and-clicks synergies",image:"Congue.jpeg",price:3715,stock:54,featured:false,active:false,discount:false},
  // {id:52,catId:3,name:"Hunted City",description:"mesh next-generation supply-chains",image:"TellusNisiEu.jpeg",price:1699,stock:51,featured:false,active:false,discount:false},
  // {id:53,catId:1,name:"Hearts and Minds",description:"scale 24/7 infomediaries",image:"AliquetAt.png",price:8368,stock:18,featured:true,active:true,discount:false},
  // {id:54,catId:2,name:"God's Little Acre",description:"empower real-time systems",image:"NuncVestibulum.png",price:9927,stock:97,featured:true,active:true,discount:false},
  // {id:55,catId:3,name:"Hobbit, The",description:"grow revolutionary synergies",image:"Erat.tiff",price:6615,stock:5,featured:false,active:true,discount:false},
  // {id:56,catId:3,name:"Provocateur (Prowokator)",description:"cultivate viral mindshare",image:"Turpis.tiff",price:7461,stock:98,featured:true,active:false,discount:false},
  // {id:57,catId:3,name:"Levity",description:"matrix cross-platform metrics",image:"Velit.tiff",price:5100,stock:11,featured:true,active:true,discount:false},
  // {id:58,catId:2,name:"Something Borrowed",description:"optimize mission-critical initiatives",image:"VestibulumAnte.jpeg",price:4998,stock:45,featured:false,active:true,discount:false},
  // {id:59,catId:3,name:"These Girls",description:"brand cutting-edge schemas",image:"NullaJusto.jpeg",price:4015,stock:69,featured:true,active:false,discount:false},
  // {id:60,catId:3,name:"Bad Girl Island (Sirens of Eleuthera) (Sirens of the Caribbean)",description:"generate B2C convergence",image:"FelisEuSapien.gif",price:3978,stock:97,featured:false,active:true,discount:false},
  // {id:61,catId:2,name:"Delirious",description:"strategize efficient deliverables",image:"Consequat.tiff",price:7554,stock:83,featured:true,active:true,discount:false},
  // {id:62,catId:1,name:"Mack, The",description:"synthesize frictionless networks",image:"Sit.jpeg",price:1601,stock:65,featured:true,active:false,discount:false},
  // {id:63,catId:1,name:"Wild Parrots of Telegraph Hill, The",description:"innovate world-class synergies",image:"Interdum.jpeg",price:8499,stock:15,featured:false,active:true,discount:false},
  // {id:64,catId:2,name:"Black Legion",description:"aggregate front-end channels",image:"NequeSapien.tiff",price:174,stock:75,featured:true,active:true,discount:false},
  // {id:65,catId:2,name:"Bad Boy (Story of Danny Lester, The)",description:"facilitate ubiquitous functionalities",image:"IntegerAcNeque.tiff",price:3434,stock:3,featured:true,active:false,discount:false},
  // {id:66,catId:1,name:"Cats Don't Dance",description:"engage proactive schemas",image:"Erat.png",price:1355,stock:95,featured:false,active:true,discount:false},
  // {id:67,catId:2,name:"Skhizein",description:"morph cross-media web services",image:"Sodales.tiff",price:9920,stock:97,featured:false,active:false,discount:false},
  // {id:68,catId:3,name:"Boys",description:"revolutionize vertical supply-chains",image:"LuctusUltriciesEu.tiff",price:7949,stock:32,featured:true,active:true,discount:false},
  // {id:69,catId:2,name:"Vääpeli Körmy - Taisteluni",description:"leverage one-to-one platforms",image:"Ipsum.gif",price:800,stock:70,featured:true,active:true,discount:false},
  // {id:70,catId:2,name:"Bless Me, Ultima",description:"incubate virtual relationships",image:"NullaTellusIn.gif",price:6270,stock:19,featured:true,active:true,discount:false},
  // {id:71,catId:2,name:"Any Number Can Win (Mélodie en sous-sol )",description:"aggregate frictionless functionalities",image:"In.tiff",price:1806,stock:7,featured:true,active:false,discount:false},
  // {id:72,catId:3,name:"Possessed",description:"incentivize next-generation infrastructures",image:"TurpisDonec.png",price:3292,stock:98,featured:false,active:false,discount:false},
  // {id:73,catId:3,name:"Bleeding, The",description:"utilize value-added solutions",image:"NullaNeque.jpeg",price:4449,stock:33,featured:true,active:true,discount:false},
  // {id:74,catId:3,name:"Abbott and Costello Meet the Invisible Man",description:"iterate visionary communities",image:"PenatibusEt.gif",price:1244,stock:28,featured:true,active:false,discount:false},
  // {id:75,catId:3,name:"Knuckle ",description:"synthesize frictionless solutions",image:"NullaPedeUllamcorper.gif",price:4018,stock:96,featured:false,active:true,discount:false},
  // {id:76,catId:1,name:"Mummy, The",description:"incubate dynamic relationships",image:"AuctorGravidaSem.gif",price:4920,stock:11,featured:false,active:false,discount:false},
  // {id:77,catId:2,name:"Bellissima",description:"unleash clicks-and-mortar web-readiness",image:"Cras.tiff",price:6548,stock:13,featured:false,active:true,discount:false},
  // {id:78,catId:3,name:"Europa Europa (Hitlerjunge Salomon)",description:"iterate best-of-breed users",image:"BlanditUltricesEnim.jpeg",price:5240,stock:90,featured:true,active:true,discount:false},
  // {id:79,catId:1,name:"Welcome to Sarajevo",description:"streamline user-centric architectures",image:"Donec.tiff",price:2227,stock:94,featured:false,active:true,discount:false},
  // {id:80,catId:2,name:"Toast of New Orleans, The",description:"engineer sexy e-business",image:"Turpis.jpeg",price:905,stock:4,featured:false,active:true,discount:false},
  // {id:81,catId:3,name:"Midsummer Night's Dream, A",description:"disintermediate scalable e-commerce",image:"InFelisEu.png",price:2236,stock:52,featured:true,active:true,discount:false},
  // {id:82,catId:3,name:"Red-Headed Woman",description:"strategize plug-and-play paradigms",image:"VulputateJusto.tiff",price:6302,stock:12,featured:false,active:true,discount:false},
  // {id:83,catId:3,name:"Scrooged",description:"brand cross-media methodologies",image:"A.tiff",price:1439,stock:98,featured:true,active:false,discount:false},
  // {id:84,catId:1,name:"Phone Booth",description:"integrate frictionless e-tailers",image:"MorbiQuis.png",price:4308,stock:35,featured:false,active:false,discount:false},
  // {id:85,catId:1,name:"Gate of Hell (Jigokumon)",description:"repurpose best-of-breed models",image:"DapibusDolorVel.gif",price:5996,stock:94,featured:true,active:false,discount:false},
  // {id:86,catId:1,name:"Audition (Konkurs)",description:"utilize 24/7 methodologies",image:"Etiam.jpeg",price:4296,stock:95,featured:true,active:true,discount:false},
  // {id:87,catId:1,name:"The Violent Professionals",description:"incubate robust vortals",image:"DuisAcNibh.tiff",price:5476,stock:4,featured:true,active:false,discount:false},
  // {id:88,catId:1,name:"Star Trek: Nemesis",description:"integrate ubiquitous eyeballs",image:"DiamEratFermentum.jpeg",price:4668,stock:2,featured:true,active:false,discount:false},
  // {id:89,catId:3,name:"Shoah",description:"brand best-of-breed supply-chains",image:"IdLobortis.tiff",price:1726,stock:54,featured:false,active:false,discount:false},
  // {id:90,catId:1,name:"Sovereign's Company",description:"whiteboard plug-and-play platforms",image:"Morbi.gif",price:1355,stock:15,featured:false,active:false,discount:false},
  // {id:91,catId:2,name:"Semi-Tough",description:"syndicate global e-tailers",image:"Metus.tiff",price:9731,stock:2,featured:false,active:false,discount:false},
  // {id:92,catId:1,name:"Wonder Man",description:"implement interactive portals",image:"VitaeQuamSuspendisse.gif",price:6814,stock:84,featured:true,active:true,discount:false},
  // {id:93,catId:2,name:"Legacy, The",description:"drive back-end supply-chains",image:"Aliquet.tiff",price:4290,stock:10,featured:true,active:false,discount:false},
  // {id:94,catId:1,name:"Hen, his wife",description:"maximize real-time infomediaries",image:"LuctusEtUltrices.tiff",price:8210,stock:77,featured:false,active:false,discount:false},
  // {id:95,catId:1,name:"Love Me Tender",description:"iterate holistic niches",image:"SitAmetSapien.jpeg",price:9354,stock:92,featured:false,active:true,discount:false},
  // {id:96,catId:1,name:"Return to Horror High",description:"enable out-of-the-box partnerships",image:"IdMassa.jpeg",price:8331,stock:36,featured:true,active:true,discount:false},
  // {id:97,catId:2,name:"Joan of Arc",description:"extend web-enabled e-markets",image:"EratFermentumJusto.tiff",price:4608,stock:22,featured:true,active:false,discount:false},
  // {id:98,catId:2,name:"Trapped Ashes",description:"enhance collaborative solutions",image:"ProinEuMi.tiff",price:814,stock:54,featured:false,active:false,discount:false},
  // {id:99,catId:1,name:"Haunting in Connecticut 2: Ghosts of Georgia, The",description:"recontextualize plug-and-play markets",image:"Etiam.gif",price:8750,stock:18,featured:false,active:false,discount:false},
  // {id:100,catId:3,name:"The Bloody Olive",description:"unleash next-generation bandwidth",image:"VolutpatSapien.jpeg",price:1417,stock:26,featured:false,active:false}
];

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }
  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }
}


// data = data.map(el => {
//   el.catId = modif[el.id].catId;
//   el.image = modif[el.id].image;
//   el.name = modif[el.id].name;
//   el.active = true;
//   el.description = newdesc[el.id];
//   return el
// });

// while (
//   data.filter((el) => el.discount && el.catId === 0).length < 5 ||
//   data.filter((el) => el.discount && el.catId === 1).length < 5 ||
//   data.filter((el) => el.discount && el.catId === 2).length < 5 ||
//   data.filter((el) => el.featured && el.catId === 0).length < 5 ||
//   data.filter((el) => el.featured && el.catId === 1).length < 5 ||
//   data.filter((el) => el.featured && el.catId === 2).length < 5
// ) {
//   data = data
//     .map(el => {
//       el.active = true;
//       el.discount = (Math.random() > 0.5);
//       el.featured = (Math.random() > 0.5);
//       if (Math.random() > 0.9) {
//         el.active = false;
//         el.discount = false;
//         el.featured = false;
//         // el.stock = 0;
//         //Ha többször fut le a while ciklus, lehet, hogy aktív termékekből is kifogy a készlet...
//         // el.price = 'typeof notActive';
//       }
//       return el
//     })
// };
// data = data.map(el => { el.stock = el.active ? el.stock : 0; return el });


export const list = data;
 */
//export const list = new ProductServiceService(data);
// export const listById = (categoryId: number) => list.filter(value => value.catId === categoryId);
// export const listByFeatured = (featured: boolean) => list.filter(value => value.featured);
// export const listByActive = (active: boolean) => list.filter(value => value.active);
// export const listByDiscount = (discount: boolean) => list.filter(value => value.discount);

// export const listById = (categoryId: number) => new ProductServiceService(data.filter(value => value.catId === categoryId));
// export const listByFeatured = (featured: boolean) => new ProductServiceService(data.filter(value => value.featured === featured));
// export const listByAction = (featured: boolean) => new ProductServiceService(data.filter(value => value.featured === featured));