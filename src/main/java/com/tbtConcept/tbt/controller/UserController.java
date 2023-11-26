package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;

@AllArgsConstructor
@RequestMapping(value = "/master/user")
@Controller
public class UserController {
	UserService userService;

	@GetMapping("/userList")
	public void getUserList() {
		
	}	

}
