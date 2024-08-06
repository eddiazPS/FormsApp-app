import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
  const email = control.value;
  const httpCallObservable = new Observable<ValidationErrors|null>( (subcriber)=> {
    console.log({email});

    if (email === 'edgar@google.com'){
      subcriber.next ({emailTaken: true});
      subcriber.complete();
    }

    subcriber.next(null);
    subcriber.complete();
    // return;

  }).pipe(
    delay(3000)
  );

  return httpCallObservable;

  }




  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  // const email = control.value;
  //   console.log({email});

  //   return of ({
  //     emailTaken: true,
  //   }).pipe(
  //     delay(2000)
  //   );

  // }







}
