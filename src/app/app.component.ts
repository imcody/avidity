import { comic } from './model/comic';
import { character } from './model/character';
import { global } from './model/global';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comicId: string = '1590';
  comicData: any;
  characterData: any;
  characters: character[] = [];
  viewComic: comic;
  private httpClient: HttpClient;
  private global: global;

  constructor(httpClient: HttpClient, global: global){
    this.httpClient = httpClient;
    this.global = global;
    this.getComicDetails();
  }

  private getComicDetails(){
    this.httpClient.get(this.global.publicApi + this.comicId + '?ts=' + this.global.timer + '&apikey=' + this.global.publicKey + '&hash=' + this.global.hash)
    .subscribe(response => {
      this.comicData = response;
      this.getCharacterDetails(this.comicData.data.results[0].characters.collectionURI);
      this.viewComic = new comic(this.comicData.data.results[0].title,
        this.comicData.data.results[0].images[0].path + '.' + this.comicData.data.results[0].images[0].extension,
        this.comicData.attributionText,
        this.comicData.data.results[0].description,
        this.comicData.data.results[0].isbn,
        this.comicData.data.results[0].resourceURI,
        this.characters);
        
    });
  }

  private getCharacterDetails(characterUrl: string){
    this.httpClient.get(characterUrl + '?ts=' + this.global.timer + '&apikey=' + this.global.publicKey + '&hash=' + this.global.hash)
    .subscribe(response => {
      this.characterData = response;
      for(let i = 0; i < this.characterData.data.results.length; i++){
        let tempCharacter: character = new character(this.characterData.data.results[i].name, 
          this.characterData.data.results[i].thumbnail.path + '.' + this.characterData.data.results[i].thumbnail.extension,
          this.characterData.data.results[i].resourceURI);
          this.characters.push(tempCharacter);
      }
      return this.characters;
    });
  }

  ngOnInit(){
    
  }
}
