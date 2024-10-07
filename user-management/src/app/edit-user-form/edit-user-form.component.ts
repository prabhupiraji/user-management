import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../userservice';  // Import your service
import { User } from '../usermodel';  // Import your user model

@Component({
  selector: 'app-user-edit',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = new User();  // Initialize the user object
  userId: number;  // This will hold the ID of the user being edited
  users: User[] = [];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch the user ID from the route parameters and load the user
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userId) {
      this.loadUser(this.userId);
      this.loadUsers();
    }
  }
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

  // Function to load the user details from the service
  loadUser(userId: number): void {
    this.userService.getUserById(userId).subscribe(
      (data: User) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  
  // Navigate to the edit page with the selected user's ID, handle undefined
  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe(
      () => {
        console.log('User updated successfully!');
        this.router.navigate(['/user-list']); // Navigate back to the list after update
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}

