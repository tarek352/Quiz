import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjoutQuizService {

  constructor( private http: HttpClient) { }

addQuiz(Quiz: any){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post(`http://localhost:9201/Questions/add`, Quiz)
  // .map(res => res.json());
}
}