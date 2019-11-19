import { Md5 } from 'md5-typescript';

export class global{
    timer: any = Date.now();
    publicKey: string = 'df58a9f1af8b007d82f009740fa3a828';
    privateKey: string = 'ca554d81ee4b387ff9c7e0f0e3683754f570eb9e';
    publicApi: string = 'https://gateway.marvel.com:443/v1/public/comics/';
    //publicApi: string = 'https://gateway.marvel.com:443/v1/public/comics';
    hash: string = Md5.init(this.timer + this.privateKey + this.publicKey);
}