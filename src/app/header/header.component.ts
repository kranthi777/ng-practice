import { DataStorageService } from './../shared/data-storage-service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private dataStrorageService:DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      //console.log(user);
      this.isAuthenticated = !!user;
      //console.log(!user);//true
      //console.log(!!user);//false
    });
  }

  onSaveData() {
    this.dataStrorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStrorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
