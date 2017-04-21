import { Component, OnInit, } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

// 引入动画效果
import { fadeIn } from '../../../../animation/fadeIn';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [ fadeIn ]
})
export class SignupComponent implements OnInit {
  showForm: string;
  form: FormGroup;
  messageTips: string;

  showLoading: boolean;


  constructor(private fb: FormBuilder, private router: Router, private act: AccountService) {
    this.form = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.pattern('(\\w)+(\\.\\w+)*@(\\w)+((\\.\\w+)+)')]],
      'password': ['', [Validators.required, Validators.minLength(7), Validators.maxLength(42)]],
    });
  }
  ngOnInit() {
  }

  onSubmit(data) {
    this.showLoading = true;
    this.act.signUp(data).subscribe((res) => {
      this.router.navigate(['../', 'signin']);
    }, (err) => {
      this.showLoading = false;
      this.messageTips = err.message;
    });
  }

  onLogin() {
    this.router.navigate(['../', 'signin']);
  }
}
