export class character{
    name: string;
    imagePath: string;
    resourceUrl: string;

    constructor(name: string, imagePath: string, resourceUrl: string){
        this.name = name;
        this.imagePath = imagePath;
        this.resourceUrl = resourceUrl;
    }
}