import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  message = 'message';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("calling backend /manager.");
    this.http.get(`${environment.serverUrl}/manager`).subscribe((data: any) => {
      this.message = data.message;
    });
  }

}
