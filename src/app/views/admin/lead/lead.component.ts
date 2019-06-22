import { Component, OnInit , ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {

  @ViewChild('infoModal') public infoModal: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

}
