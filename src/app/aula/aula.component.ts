import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit(): void {
  }

}
