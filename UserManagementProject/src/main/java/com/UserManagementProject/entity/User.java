package com.UserManagementProject.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

    @Entity
	@Table(name = "users")
	public class User {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @NotBlank(message = "First Name is required")
	    @Size(min = 2, max = 50, message = "First Name should be between 2 and 50 characters")
	    private String firstName;

	    @NotBlank(message = "Last Name is required")
	    @Size(min = 2, max = 50, message = "Last Name should be between 2 and 50 characters")
	    private String lastName;

	    @NotBlank(message = "Phone Number is required")
	    private String phoneNumber;

	    @NotBlank(message = "Email is required")
	    @Email(message = "Email should be valid")
	    private String email;

	    @NotBlank(message = "Address is required")
	    private String address;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getPhoneNumber() {
			return phoneNumber;
		}

		public void setPhoneNumber(String phoneNumber) {
			this.phoneNumber = phoneNumber;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

	    // Getters and Setters
	    // (or use Lombok @Getter and @Setter annotations)
	    
	}


