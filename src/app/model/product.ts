interface IProduct {
    id: number;
    catId: number;
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    featured: boolean;
    active: boolean;

    // getId(): string;
    // getCatId(): string;
    // getName(): string;
    // getDescription(): string;
    // getImage(): string;
    // getPrice(): number;
    // getStock(): number;
    // isFeatured(): boolean;
    // isActive(): boolean;

    // setId(value: string): void;
    // setCatId(value: string): void;
    // setName(value: string): void;
    // setDescription(value: string): void;
    // setImage(value: string): void;
    // setPrice(value: number): void;
    // setStock(value: number): void;
    // setFeatured(value: boolean): void;
    // setActive(value: boolean): void;
}

export class Product implements IProduct {
    id: number;
    catId: number;
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    featured: boolean;
    active: boolean;

    constructor(product: Partial<Product>) {
        Object.keys(product).forEach(property => {
            this[property] = product[property];
        });
    }
    // getId(): string{
    //     return(this.id);
    // };
    // getCatId(): string{
    //     return(this.catId);
    // };
    // getName(): string{
    //     return(this.name);
    // };
    // getDescription(): string{
    //     return(this.description);
    // };
    // getImage(): string{
    //     return(this.image);
    // };
    // getPrice(): number{
    //     return(this.price);
    // };
    // getStock(): number{
    //     return(this.stock);
    // };
    // isFeatured(): boolean{
    //     return(this.featured);
    // };
    // isActive(): boolean{
    //     return(this.active);
    // };

    // setId(value: string): void{
    //     this.id = value;
    // };
    // setCatId(value: string): void{
    //     this.catId = value;
    // };
    // setName(value: string): void{
    //     this.name = value;
    // };
    // setDescription(value: string): void{
    //     this.description = value;
    // };
    // setImage(value: string): void{
    //     this.image = value;
    // };
    // setPrice(value: number): void{
    //     this.price = value;
    // };
    // setStock(value: number): void{
    //     this.stock = value;
    // };
    // setFeatured(value: boolean): void{
    //     this.featured = value;
    // };
    // setActive(value: boolean): void{
    //     this.active = value;
    // };
}
