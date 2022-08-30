import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AdminService } from 'src/app/services/admin.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(formVal: FormGroup) { this.adminService.login(formVal) }
  
  // login(formVal: FormGroup) {
  //   this.adminService.login(formVal).subscribe(
  //     res => this.router.navigateByUrl('/home'),
  //     err => console.log(err)
  //   )
  // }
}
