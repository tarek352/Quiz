import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AjoutQuizService } from '../services/ajout-quiz.service';

@Component({
  selector: 'app-ajout-quiz',
  templateUrl: './ajout-quiz.component.html',
  styleUrls: ['./ajout-quiz.component.css']
})
export class AjoutQuizComponent implements OnInit {
  ajoutForm: FormGroup;
  items: FormArray;
  constructor(
    private readonly formBuilder: FormBuilder,
    private ajoutQuizService: AjoutQuizService
  ) {
    this.ajoutForm = this.formBuilder.group({
      q: this.formBuilder.group({
        payload: [''],
        type: ['']
      }),
      r: this.formBuilder.array([
        this.addRes()
      ])
    });

    this.addItem();
    this.addItem();
  }

  private addRes(): FormGroup {
    return this.formBuilder.group({
      reponse: [''],
      correct: false
    });
  }

  addItem(): void {
    this.items = this.ajoutForm.get('r') as FormArray;
    this.items.push(this.addRes());
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.ajoutForm)
    this.ajoutQuizService.addQuiz(this.ajoutForm.value)
      .subscribe(res => console.log(res)
        , err => console.log(err));
  }
}
