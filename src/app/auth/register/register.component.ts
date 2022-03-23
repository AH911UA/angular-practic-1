import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


type UserType = {
  login: string,
  password: string,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public login = new FormControl('', [
    Validators.required, 
    Validators.minLength(3),
    Validators.maxLength(10)
  ]);
  public password = new FormControl('', [
    Validators.required, 
    Validators.minLength(6),
    Validators.maxLength(15)
  ]);

  public disabled = false;
  private KEY_DATA = 'users';

  ngOnInit(): void {
    this.login.statusChanges.subscribe((status) => {
      this.disabled = status === 'VALID' && this.password.status === 'VALID';
    });
    this.password.statusChanges.subscribe((status) => {
      this.disabled = status === 'VALID' && this.login.status === 'VALID';
    });
  }

  public handleOnRegister() {
    const user: UserType = {
      login: this.login.value, 
      password: this.password.value
    }
    
    if (!this.isExistsUser(user)) {
      const isRegister = this.registerUser(user);
      alert(`you are ${isRegister ? 'not' : ''} registered`);
    } else {
      alert('You are already registered');
    }
  }

  private isExistsUser(user : UserType): boolean {
    const users = this.getLocalStorageData(this.KEY_DATA);
    return !!users.find((_user: UserType) => 
        _user.login === user.login 
        && _user.password === user.password); 
  }

  private registerUser(user: UserType):boolean {
    try {
      const users = this.getLocalStorageData(this.KEY_DATA) as [UserType];
      users.push({...user});
      localStorage.setItem(this.KEY_DATA, JSON.stringify(users));
      return true;

    } catch(e) {
      return false;
    }
  }

  private getLocalStorageData(key: string): [] | [UserType] {
    const localData = localStorage.getItem(this.KEY_DATA);
    if (!localData) {
      return [];
    }
    return JSON.parse(localData) || [];
  }

  constructor() {}
}
