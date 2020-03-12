import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  emp;
  id;

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(private _Activatedroute:ActivatedRoute,private empService: EmployeeService,private router:Router) { }
  @ViewChild("f") form: any;

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    let emps=this.empService.getEmployees();
    this.emp=emps.find(p => p.id==this.id);
    console.log(this.emp);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.empService.updateEmployee(this.emp,this.form.value);
    this.router.navigate(['employee-list']);
    }
  }

  keyPress(event: any) {
    console.log("enter into mobile validation");

    let charCode = (event.query) ? event.query : event.keyCode;
    if (charCode > 31
      && (charCode < 48 || charCode > 57))
      return false;

    return true;
  }

}
