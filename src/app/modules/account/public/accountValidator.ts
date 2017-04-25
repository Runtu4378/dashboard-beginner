import { FormGroup } from '@angular/forms'; 

export const pwdRules = '^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[^A-Za-z0-9].*).{7,42}$';    // 至少一个大写字母，一个小写字母
// export const pwdRules = '.*';    // The password must be at least 7 characters long. The password must contain at least one lowercase letter. The password must contain at least one uppercase letter. The password must contain at least one special character.

export const pwdValidator = function(g:FormGroup){
    let password = g.get('password').value;
    // console.log(g.errors.emailErr);
    let p1 = /^.{7,42}$/g;
    let p2 = /^(?=.*[A-Z].*).{7,42}$/g;
    let p3 = /^(?=.*[A-Z].*)(?=.*[a-z].*).{7,42}$/g;
    if(!p1.exec(password)){ 
        return { err: 'The password must be at least 7 characters long.' }; 
    }
    if(!p2.exec(password)){ 
        return { err: 'The password must contain at least one uppercase letter.'}; 
    }
    if(!p3.exec(password)){ 
        return { err: 'The password must be at least 7 characters long. The password must contain at least one lowercase letter.'}; 
    }
    return null;
}
