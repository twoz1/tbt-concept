package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;

>>>>>>> hyeonju
@AllArgsConstructor
@RequestMapping(value = "/master/user")
@Controller
public class UserController {
<<<<<<< HEAD
	UserService userService;
=======


	@GetMapping("/userList")
	public void getUserList() {
		
	}	

>>>>>>> hyeonju
}
