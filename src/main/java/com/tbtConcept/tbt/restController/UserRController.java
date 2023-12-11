package com.tbtConcept.tbt.restController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	public User postUserLogin(@RequestBody User entity) {

		try {
			String pw = entity.getUser_pw();
			User user = userService.selectOne(entity.getUser_id());


			if(user != null && passwordEncoder.matches(pw, user.getUser_pw())) {

				return user;

			}else {

				return null;
			}

		} catch (Exception e) {
			log.info("** Login Exception => " + e.toString());

			return null;
		}


	}


	@PostMapping(value = "/uUser")
	public boolean postUserLogin(HttpSession session, @RequestBody User entity) {
		try {
			System.out.println("넘어온 데이터"+entity);
			String pw = entity.getUser_pw();

			entity = userService.selectOne(entity.getUser_id());
			System.out.println("아이디에 맞는 데이터"+entity);



			if( entity != null && 
					passwordEncoder.matches(pw, entity.getUser_pw())) {

				session.setAttribute("loginUser", entity.getUser_id());
				session.setAttribute("loginName", entity.getUser_name());

				return true;

			}else {

				return false;

			}


		} catch (Exception e) {
			log.info("** Login Exception => " + e.toString());

			return false;
		}
	}

	@PostMapping(value = "/uUpdate")
	public String postUserUpdate(HttpSession session, @RequestBody User entity, Model model) {
		System.out.println("^^^^^^^^^^^" + entity.toString());
		try {
			if(userService.save(entity)!= null) {

				return "성공";
			}else {

				return "실패";
			}
		} catch (Exception e) {
			log.info("** update Exception => " + e.toString());
			return  "실패";

		}

	}


	@PostMapping(value="/pwUpdate/{user_id}")
	public String passwordUpdate(HttpServletRequest request, Model model, User entity) {

		String rawPassword = entity.getUser_pw();
		
		System.out.println("&&&&&&&&&&&" + entity);
		
		
//		if (rawPassword == null) {
//			model.addAttribute("message", "비밀번호가 null입니다.");
//			return "에러";
//		}

		String id =(String)request.getSession().getAttribute("user_id");

		entity.setUser_id(id);
		entity.setUser_pw(passwordEncoder.encode(entity.getUser_pw()));

		if ( userService.save(entity) != null ) {
			model.addAttribute("message", "~~ password 수정 성공, 재로그인 하세요 ~~");
			return "성공";
		}else {
			model.addAttribute("message", "~~ password 수정 실패 , 다시 하세요 ~~");
			return "실패";
		}
	} //passwordUpdate




	@DeleteMapping(value = "uDelete/{userId}")
	public ResponseEntity<?> axUserDelete(@PathVariable("userId") String id) {
		if (userService.delete(id) != null) {
			log.info("axidelete HttpStatus.OK =>" + HttpStatus.OK);
			System.out.println("삭제 성공");
			return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
		} else {
			log.info("axidelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
			System.out.println("삭제 실패");
			return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}



}
