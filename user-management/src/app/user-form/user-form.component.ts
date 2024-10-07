import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { User } from '../usermodel';
import { UserService } from '../userservice';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  private userService!: UserService;

  constructor(private injector: Injector, private router: Router,private route: ActivatedRoute ) {
    // Lazy initialization of UserService
    setTimeout(() => {
      this.userService = this.injector.get(UserService);
    });
  }
  user: User =new User();
  userId!: number;
  isEditMode = false;
  

  ngOnInit(): void {
    // Check if we are in edit mode or create mode
    this.userId = +(this.route.snapshot.paramMap.get('id') ?? 0); // get the user ID from the route
    
    if (this.userId) {
      this.isEditMode = true;
      this.loadUser();
    }
  }

  // Load the user details in case of edit mode
  loadUser(): void {
    this.userService.getUserById(this.userId).subscribe((data:User)=>{
      this.user=data;
    },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );

    }
    
  

  // // Save or update the user data
  // saveUser(): void {
  //   if (this.isEditMode) {
  //     this.updateUser();
  //   } else {
  //     this.createUser();
  //   }
  // }

  // Method to create a new user
  createUser(): void {
    this.userService.createUser(this.user).subscribe(
      () => {
        console.log('User created successfully!');
        this.router.navigate(['/user-list']); // Navigate back to the list after creation
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  // Method to update an existing user
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
