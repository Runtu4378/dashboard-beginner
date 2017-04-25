import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

// 引入动画效果
import { fadeIn } from '../../../../animation/fadeIn';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  animations: [ fadeIn ]
})
export class ResetComponent implements OnInit {
  showForm: string;
  form: FormGroup; 
  showLoading: boolean = false;
  messageTips: string;

  constructor(private fb: FormBuilder, private router: Router, private account: AccountService) {
    this.form = fb.group({
      'email': ['', [Validators.required, Validators.pattern('(\\w)+(\\.\\w+)*@(\\w)+((\\.\\w+)+)')]],
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
