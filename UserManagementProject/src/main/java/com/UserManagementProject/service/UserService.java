package com.UserManagementProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.UserManagementProject.entity.User;
import com.UserManagementProject.repo.UserRepository;

    @Service
	public class UserService {

	    @Autowired
	    private UserRepository userRepository;

	    public List<User> getAllUsers() {
	        return userRepository.findAll();
	    }

	    public Optional<User> getUserById(Long id) {
	        return userRepository.findById(id);
	    }

	    public User createUser(User user) {
	        return userRepository.save(user);
	    }

	    public User updateUser(Long id, User updatedUser) {
	        return userRepository.findById(id)
	            .map(user -> {
	                user.setFirstName(updatedUser.getFirstName());
	                user.setLastName(updatedUser.getLastName());
	                user.setPhoneNumber(updatedUser.getPhoneNumber());
	                user.setEmail(updatedUser.getEmail());
	                user.setAddress(updatedUser.getAddress());
	                return userRepository.save(user);
	            })
	            .orElseThrow(() -> new RuntimeException("User not found"));
	    }

	    public void deleteUser(Long id) {
	        userRepository.deleteById(id);
	    }

		
}
