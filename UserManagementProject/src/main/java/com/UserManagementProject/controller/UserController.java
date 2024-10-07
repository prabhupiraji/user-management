package com.UserManagementProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.UserManagementProject.entity.User;
import com.UserManagementProject.service.UserService;
    @CrossOrigin(origins = "http://localhost:4200")
    @RestController
	@RequestMapping("/users")
	public class UserController {

	    @Autowired
	    private UserService userService;

	    @GetMapping("/getall")
	    public List<User> getAllUsers() {
	        return userService.getAllUsers();
	    }

	    @GetMapping("getuser/{id}")
	    public ResponseEntity<User> getUserById(@PathVariable Long id) {
	        return userService.getUserById(id)
	            .map(ResponseEntity::ok)
	            .orElse(ResponseEntity.notFound().build());
	    }

	    @PostMapping("/create")
	    public ResponseEntity<User> createUser(@Validated @RequestBody User user) {
	        return ResponseEntity.ok(userService.createUser(user));
	    }

	    @PutMapping("update/{id}")
	    public ResponseEntity<User> updateUser(@PathVariable Long id, @Validated @RequestBody User user) {
	        return ResponseEntity.ok(userService.updateUser(id, user));
	    }

	    @DeleteMapping("delete/{id}")
	    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
	        userService.deleteUser(id);
	        return ResponseEntity.noContent().build();
	    }
	}


