package com.tbtConcept.tbt.restController;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.entity.User;
import com.tbtConcept.tbt.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/user")
@RestController
@Log4j2
public class UserRController {
	UserService userService;
	PasswordEncoder passwordEncoder;

	@GetMapping("/idDupCheck")
	public String idDupCheck(HttpServletRequest request, Model model) {
		String id = request.getParameter("id");
		if (userService.selectOne(id) != null) {
			return "존재";
		} else {
			return "미존재";
		}
	}

	@PostMapping(value = "/uJoin")
	public int postUserJoin(Model model, @RequestBody User entity) {
		entity.setUser_pw(passwordEncoder.encode(entity.getUser_pw()));
		try {
			if(userService.selectOne(entity.getUser_id()) == null && userService.save(entity) != null) {
				return 1;
			}else {
				return 0;
			}
		} catch (Exception e) {
			log.info("** Join insert Exception => " + e.toString());
			
			return 0;
		}
	}
	
	@PostMapping(value = "/uLogin")
	public int postUserLogin(Model model, @RequestBody User entity) {
		try {
			if(userService.selectOne(entity.getUser_id()) == null && userService.save(entity) != null) {
				return 1;
			}else {
				return 0;
			}
		} catch (Exception e) {
			log.info("** Join insert Exception => " + e.toString());
			
			return 0;
		}
	}

	

}
