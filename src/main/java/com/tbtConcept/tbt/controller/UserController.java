package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value = "/master/user")
@Controller
public class UserController {


	@GetMapping("/userList")
	public void getUserList() {
		
	}	

}
