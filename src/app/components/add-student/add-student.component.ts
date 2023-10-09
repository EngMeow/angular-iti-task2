import { Component } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  studentName: string = '';
  studentAge: string = '';
  studentInf: any[] = [];
  

  login(e: Event) {
    console.log(this.studentInf);
    let nameFilter = this.studentInf.filter((student) => {
      return this.studentName == student.name ;
    })
    
    if(this.Validation && !nameFilter.length ){
      this.studentInf.push({name:this.studentName ,age:this.studentAge});
      e.preventDefault();
      this.studentName ='';
      this.studentAge ='';
    }
  }
  
  get isStudentNameValid() {
    return this.studentName.length >= 3;
  }

  get isStudentNameEmpty() {
    return this.studentName.length == 0;
  }
  get isStudentAgeValid() {
    let Age = parseInt(this.studentAge);
    return Age >= 18;
  }

  get isStudentAgeEmpty() {
    return this.studentAge.length == 0;
  }

  get Validation(){
    return this.isStudentNameValid && this.isStudentAgeValid ;
  }

}
