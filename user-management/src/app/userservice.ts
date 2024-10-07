import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './usermodel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:9086/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/getall');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl +'/getuser'}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/create', user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl +'/update'}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl + '/delete'}/${id}`);
  }
}
