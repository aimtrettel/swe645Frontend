import { Component, OnInit, NgZone } from '@angular/core';
import { StudentDAOService } from '../student-dao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  options = [
    {name: 'students', value:'students', checked:false},
    {name: 'location', value:'location', checked:false},
    {name: 'campus', value:'campus', checked:false},
    {name: 'atmosphere', value:'atmosphere', checked:false},
    {name: 'dorms', value:'dorm rooms', checked:false},
    {name: 'sports', value:'sports', checked:false}
  ]

  constructor(private stu: StudentDAOService,
    private router: Router,
    private ngZone: NgZone) { }

  ngOnInit(): void { }

  get selectedOptions() {
    return this.options.filter(opt => opt.checked).map(opt => opt.value);
  }

  onClickSubmit(data) {
    this.stu.AddSurvey(data, this.selectedOptions)
    .subscribe(() => {
      console.log('Data added successfully!')
      this.ngZone.run(() => this.router.navigateByUrl('/simple'))
    }, (err) => {
      console.log(err);
    });
  }
}
