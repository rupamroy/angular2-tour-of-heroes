import {Component} from 'angular2/core';
import {Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    template: `
         <div *ngIf="hero">
            <h1>{{title}}</h1>
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" type="text" placeholder="Name" />
            </div>
        </div>
    `
})
export class HeroDetailComponent {
    public hero: Hero;

}
