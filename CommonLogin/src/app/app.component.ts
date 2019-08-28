import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var UIkit: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    orgId: new FormControl('', Validators.required),
    fpMonth: new FormControl('', Validators.required),
    fpYear: new FormControl('', Validators.required),
    gstin: new FormControl('', Validators.required),
  });
  constructor(){}
  ngOnInit() {
  }
  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }
}
