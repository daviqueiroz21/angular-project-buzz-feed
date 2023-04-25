import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  title: string ='';
  questions: any;
  questionSelected: any;

  answers:string[] = [];
  answersSelected:string= '';

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;
}
