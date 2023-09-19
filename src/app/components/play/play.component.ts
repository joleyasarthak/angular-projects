import { Component, OnInit } from '@angular/core';
import { generate } from 'random-words';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  words !: string;
  enteredText !: string;
  ngOnInit(): void {
    this.words = '';
    this.enteredText = '';
    const tmp = generate(20);
    tmp.forEach((word) => {
      this.words += (word + ' ');
    })
    console.log(this.words);
  }
  compare(correctLetter: string, enteredLetter: string | undefined): string {
    if (!enteredLetter) return 'pending';
    return (enteredLetter === correctLetter) ? 'correct' : 'incorrect';
  }
  reset() {
    this.enteredText = '';
    this.ngOnInit();
  }
}
