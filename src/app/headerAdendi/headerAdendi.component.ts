import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headerAdendi',
  templateUrl: './headerAdendi.component.html',
  styleUrls: ['./headerAdendi.component.css']
})
export class HeaderAdendiComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
