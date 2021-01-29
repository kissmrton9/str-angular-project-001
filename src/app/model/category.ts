
interface ICategory {
    id: number;
    name: string;
    description: string;

    // getId(): string;
    // getName(): string;
    // getDescription(): string;

    // setId(value: string): void;
    // setName(value: string): void;
    // setDescription(value: string): void;
}

export class Category implements ICategory{
    id: number;
    name: string;
    description: string;

    constructor(product: Partial<ICategory>){
        Object.keys(product).forEach(property => {
            this[property] = product[property];
        });
    }
    // getId(): string{
    //     return(this.id);
    // };
    // getName(): string{
    //     return(this.name);
    // };
    // getDescription(): string{
    //     return(this.description);
    // };

    // setId(value: string): void{
    //     this.id = value;
    // };
    // setName(value: string): void{
    //     this.name = value;
    // };
    // setDescription(value: string): void{
    //     this.description = value;
    // };
}
