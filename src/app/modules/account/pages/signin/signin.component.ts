import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-sign',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup; 
  showLoading: boolean = false;
  messageTips: string;

  constructor(private fb: FormBuilder, private router: Router, private account: AccountService) {
    this.form = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required],
      'rememberAccount': ['']
    });
  }


  ngOnInit() {

  }

  // 登录事件
  onSubmit(e) {
    console.log(e)
    this.showLoading = true;
    this.account.signIn(e.value).subscribe((res) => {
      localStorage.setItem('account', JSON.stringify(res));
      localStorage.setItem('auth_token', res.loginToken)
      this.router.navigate(['/page/dashboard']);
      this.showLoading = false;
    }, (err) => {
      this.messageTips = err.message;
      this.showLoading = false;
    });
  }

}
