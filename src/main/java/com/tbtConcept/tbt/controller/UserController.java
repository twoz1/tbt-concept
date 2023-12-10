package com.tbtConcept.tbt.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.OrderList;
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

	@GetMapping(value = "/userList")
	public void getUserList(Model model) {
		model.addAttribute("userList", userService.selectList());


	}

	@GetMapping(value = "/userDetail")
	public String getUserdetail(HttpServletRequest request, Model model, User entity) {
		model.addAttribute("userDetail", userService.selectOne(entity.getUser_id()));

		if ("U".equals(request.getParameter("jCode")))
			return "master/user/userUpdate";
		else
			return "master/user/userDetail";
	}

	@PostMapping(value = "/userUpdate")
	public String postUserUpdate(HttpSession session, User entity, Model model) {

		model.addAttribute("userDetail", entity);
		String uri = "master/user/userDetail";

		try {
			if(userService.save(entity)!= null) {
				session.setAttribute("loginName", entity.getUser_name());
				model.addAttribute("message", "~~ 회원정보 수정 성공 ~~");
			}else {
				model.addAttribute("message", "~~ 회원정보 수정 실패 !! 다시 하세요 ~~");
			}
		} catch (Exception e) {
			log.info("** update Exception => " + e.toString());
			uri = "master/user/userUpdate";
		}

		return uri;
	}

	@DeleteMapping("userdelete/{user_id}")
	public ResponseEntity<?> axUserDelete(@PathVariable("user_id") String id, User entity) {
		entity.setUser_id(id);
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
