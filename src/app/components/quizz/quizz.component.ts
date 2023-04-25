import { Component, OnInit } from '@angular/core';

import quizz_questions from '../../../assets/data/quizz-questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title: string ='';
  questions: any;
  questionSelected: any;

  answers:string[] = [];
  answersSelected:string= '';

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  ngOnInit(): void {
   if(quizz_questions){
    this.finished = false;
    this.title = quizz_questions.title;

    this.questions = quizz_questions.questions;
    this.questionSelected = quizz_questions.questions[this.questionIndex]

    this.questionMaxIndex = quizz_questions.questions.length;
   }
  }
  playerChoose(value: string): void {
    this.answers.push(value)
    console.log(this.answers)
  }

  async nextStep():Promise<any>{
    this.questionIndex+=1;

    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex];
    }else{
      this.finished = true;
    }
  }
}
