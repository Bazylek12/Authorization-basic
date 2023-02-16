import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {CredentialModel, CredentialsResponse, CredentialsResponseData} from '../models/credential.model';

@Injectable({providedIn: 'root'})
export class AuthService {

  private _loggedUserSubject: BehaviorSubject<CredentialsResponseData> = new BehaviorSubject<CredentialsResponseData>(this.getUserToken());
  public loggedUser$: Observable<CredentialsResponseData> = this._loggedUserSubject.asObservable();
  private _isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated());
  public isLoggedIn$: Observable<boolean> = this._isLoggedInSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  login(credentials: CredentialModel): Observable<CredentialsResponseData> {
    return this._httpClient.post<CredentialsResponse>(`https://us-central1-courses-auth.cloudfunctions.net/auth/login`, { data: credentials}).pipe(
      map(response => response.data),
      tap(response => {
        localStorage.setItem('accessToken', response.accessToken)
        this._loggedUserSubject.next(response)
        this._isLoggedInSubject.next(true)
      })
    );
  }
  private getUserToken(): CredentialsResponseData {
    return <CredentialsResponseData>{
      accessToken: localStorage.getItem('accessToken'),
    };
  }

  private isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken')
    return !token ? false : true
  }

}
