import { character } from './character';

export class comic{
    title: string;
    banner: string;
    attributionText: string;
    description: string;
    isbn: string;
    resourceUrl: string;
    characters: character[];

    constructor(title?: string, banner?: string, attributionText?: string, description?: string, isbn?: string, 
        resourceUrl?: string, characters?: character[]){
            this.title = title;
            this.banner = banner;
            this.attributionText = attributionText;
            this.description = description;
            this.isbn = isbn;
            this.resourceUrl = resourceUrl;
            this.characters = characters;
    }
}