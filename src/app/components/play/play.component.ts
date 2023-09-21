import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { generate } from 'random-words';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  words !: string;
  enteredText !: string;
  started !: boolean;
  time !: number;
  intervalId: any;
  @ViewChild('myInput') myInput !: ElementRef;
  ngOnInit(): void {
    this.started = false;
    this.words = '';
    this.enteredText = '';
    this.time = 20;
    const tmp = generate(20);
    tmp.forEach((word) => {
      this.words += (word + ' ');
    })
    console.log(this.words);
  }
  startPlay() {
    this.started = true;
    this.myInput.nativeElement.focus();   //send focus to input
    this.intervalId = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        alert(`WPM is: ${Math.ceil(this.enteredText.length / (1.69))}`)
        this.reset();
      }
    }, 1000);
  }
  compare(correctLetter: string, enteredLetter: string | undefined): string {
    if (!enteredLetter) return 'pending';
    return (enteredLetter === correctLetter) ? 'correct' : 'incorrect';
  }
  reset() {
    this.enteredText = '';
    clearInterval(this.intervalId);
    this.ngOnInit();
  }
}
