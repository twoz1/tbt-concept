package com.tbtConcept.tbt.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.entity.User;
import com.tbtConcept.tbt.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;


@AllArgsConstructor
@RequestMapping(value = "/master/user")
@Controller
@Log4j2
public class UserController {
	UserService userService;
	 PasswordEncoder passwordEncoder;

	@GetMapping(value ="/userList")
	public void getUserList(Model model) {
		model.addAttribute("userList", userService.selectList());
	}	

	@GetMapping(value="/userJoin")
	public void getUserJoin() {
		
	} 
	
	@PostMapping(value="/userJoin")
	public String postUserJoin(HttpServletRequest request, Model model , User entity)  {
		String uri ="redirect:userList";
		entity.setUser_pw(passwordEncoder.encode(entity.getUser_pw()));
		
	      try {
	          log.info("** insert 성공 id => "+userService.save(entity));
	          model.addAttribute("message", "회원가입 성공");
	       } catch (Exception e) {
	          log.info("** insert Exception => "+e.toString());
	          model.addAttribute("message", "회원가입 실패");
	          uri="master/user/userJoin";
	       }
	      
		return uri;
	}	
	
	
}
