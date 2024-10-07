import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { UserService } from '../userservice';
import { User } from '../usermodel';
import { UserService } from '../userservice';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  // private userService!: UserService;

  constructor(private injector: Injector,private router: Router,private userService: UserService ) {
    // Lazy initialization of UserService
    setTimeout(() => {
      this.userService = this.injector.get(UserService);
    });
  }
  users: User[] = []; // Array to hold the list of users

 

  ngOnInit(): void {
    this.loadUsers(); // Load the users when the component is initialized
  }

  // Load all users from the service
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        console.error("data"+data);
      },
      (error) => {
        console.error('Error loading users:', error);
        // console.error("data"+data);
      }
    );
  }

  // Navigate to the edit page with the selected user's ID, handle undefined
  editUser(userId: number ): void {
    if (userId !== undefined) {
      this.router.navigate([`/edit-user-form/${userId}`]);
    } else {
      console.error('Invalid user ID');
    }
  }

  // Delete the selected user by ID, handle undefined
  deleteUser(userId: number): void {
    if (
      userId !== undefined &&
      confirm('Are you sure you want to delete this user?')
    ) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          console.log('User deleted successfully!');
          this.loadUsers(); // Reload the list after deletion
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    } else {
      console.error('Invalid user ID');
    }
  }
}
