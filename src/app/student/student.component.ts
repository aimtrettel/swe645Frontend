import { Component, OnInit, NgZone } from '@angular/core';
import { stuBean } from '../studentBean';
import { StudentDAOService } from '../student-dao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: stuBean;
  getId: any;

   constructor( private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private stu: StudentDAOService ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.stu.GetSurvey(this.getId).subscribe(res => {
      this.student = res;
    });
  }

  ngOnInit() { }

}
