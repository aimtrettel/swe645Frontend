import { Component, OnInit, Input } from '@angular/core';
import { StudentDAOService } from '../student-dao.service';
import { stuBean } from '../studentBean';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ids',
  templateUrl: './ids.component.html',
  styleUrls: ['./ids.component.css']
})
export class IdsComponent implements OnInit {
  ids: any = [];

  constructor(private stu: StudentDAOService,
    private router: Router) { }

  ngOnInit(): void {
    this.stu.GetSurveys().subscribe(res => {
      console.log(res)
      this.ids = res;
    });
  }

}
