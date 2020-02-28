import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public curretIndex: number = 0;
  public currentQuestion: Question;
  public userCurrentChoise: any;
  public userFinalChoices: any[];

  constructor() {
    this.userFinalChoices = []
  }

  ngOnInit() {
    this.currentQuestion = questions[this.curretIndex];
  }

  next() {
    let choise = this.currentQuestion.choises.find((c: any) => c.payload == this.userCurrentChoise);
    this.curretIndex++;
    if (this.curretIndex <= questions.length) {
      this.userFinalChoices.push(choise);
      this.currentQuestion = questions[this.curretIndex];
    }
    if (this.curretIndex == (questions.length - 1))
    console.log(this.userFinalChoices);
  }
}

const questions: Question[] = [
  {
    payload: "q1",
    choises: [
      { payload: "ch1.1", correct: 'false' },
      { payload: "ch1.2", correct: 'false' },
      { payload: "ch1.3", correct: 'true' }
    ]
  },
  {
    payload: "q2",
    choises: [
      { payload: "ch2.1", correct: 'false' },
      { payload: "ch2.2", correct: 'true' },
      { payload: "ch2.3", correct: 'false' }
    ]
  },
  {
    payload: "q3",
    choises: [
      { payload: "ch3.1", correct: 'true' },
      { payload: "ch3.2", correct: 'false' },
      { payload: "ch3.3", correct: 'false' }
    ]
  },
  {
    payload: "q4",
    choises: [
      { payload: "ch4.1", correct: 'false' },
      { payload: "ch4.2", correct: 'false' },
      { payload: "ch4.3", correct: 'true' }
    ]
  },
  {
    payload: "q5",
    choises: [
      { payload: "ch5.1", correct: 'true' },
      { payload: "ch5.2", correct: 'false' },
      { payload: "ch5.3", correct: 'false' }
    ]
  },
]

interface Question {
  payload: string,
  choises: {
    payload: string,
    correct: string
  }[]
}

