import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Driving } from '../driving.model';
import {Observable} from 'rxjs';
import { Rent } from '../rent.model';
@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  obs: Observable<Driving[]>;
  drivingList: Driving[];
  selectedCar: Driving;
  @Input() rentList:Rent[];

  constructor(public http: HttpClient) { }

  //inizializza il componente
  ngOnInit(): void {
   this.obs= this.http.get<Driving[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi')
   this.obs.subscribe(this.get)
  }
  get=(auto:Driving[]) =>
  {
    this.drivingList=auto;
  }

  onClick(auto : Driving): boolean
  {
    console.log(auto);
    this.selectedCar=auto;
    this.rentList.push(new Rent(auto,1));
    return false;
  }
}
