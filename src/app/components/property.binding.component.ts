import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <h1>Hello property binding</h1>
    <!--3 ways to bind properties-->
    <div><img src="{{ imageUrl }}"/></div>
    <div><img [src]="imageUrl"/></div>
    <div><img bind-src="imageUrl"/></div>
    <h4>Image Location: <span [textContent]="imageUrl"></span></h4>
    <hr>
    <h2>Create Post</h2>
    <p [hidden] ="isUnchanged">Post has been changed, please save</p>
    <button [disabled]="isUnchanged">Save</button>
  `
})

export class PropertyBindingComponent {
  imageUrl: string = 'http://lorempixel.com/400/200';
  isUnchanged: boolean = true; // Set this to false in order to see hidden p tag and activate the button.
}
