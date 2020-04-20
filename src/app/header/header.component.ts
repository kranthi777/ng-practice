import { DataStorageService } from './../shared/data-storage-service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStrorageService:DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.dataStrorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStrorageService.fetchRecipes().subscribe();
  }
}
