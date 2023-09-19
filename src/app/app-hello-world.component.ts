import { Component, OnInit, OnDestroy} from "@angular/core";

@Component({
    selector: 'app-hello-world',
    template: '<h1>{{title}}</h1>',
    styles: [`h1{
        color: blue;
    }`],
})
export class HelloWorldComponent {
    title: string = "Hello World!"
}