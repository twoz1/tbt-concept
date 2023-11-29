package com.tbtConcept.tbt.restController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	public String idDupCheck(User entity, Model model) {
		// 1) newID 확인
		if (userService.selectOne(entity.getUser_id()) != null) {
			// => 존재 : 사용불가
			model.addAttribute("idUse", "F");
		} else {
			// => 없으면: 사용가능
			model.addAttribute("idUse", "T");
		}
		return "master/user/idDupCheck";
	}

	@GetMapping(value = "/uList")
	public void getUserList(Model model) {
		model.addAttribute("userList", userService.selectList());
	}

	@PostMapping(value = "/uJoin")
	public int postUserJoin(HttpServletRequest request, Model model, User entity) {
		entity.setUser_pw(passwordEncoder.encode(entity.getUser_pw()));
		System.out.println(entity);
		try {
			if(userService.save(entity) != null) {
				return 1;
			}else {
				return 0;
			}
		} catch (Exception e) {
			log.info("** Join insert Exception => " + e.toString());
			
			return 0;
		}
	}

	@GetMapping(value = "/uDetail")
	public String getUserdetail(HttpServletRequest request, Model model, User entity) {
		model.addAttribute("userDetail", userService.selectOne(entity.getUser_id()));

		if ("U".equals(request.getParameter("jCode")))
			return "master/user/userUpdate";
		else
			return "master/user/userDetail";
	}

	@PostMapping(value = "/uUpdate")
	public String posrMemberUpdate(HttpSession session, User entity, Model model) {

		model.addAttribute("userDetail", entity);
		String uri = "master/user/userDetail";

		try {
			log.info("** updat 성공 id => " + userService.save(entity));
			session.setAttribute("loginName", entity.getUser_event_check());
			model.addAttribute("message", "~~ 회원정보 수정 성공 ~~");
		} catch (Exception e) {
			log.info("** update Exception => " + e.toString());
			model.addAttribute("message", "~~ 회원정보 수정 실패 !! 다시 하세요 ~~");
			uri = "master/user/userUpdate";
		}

		return uri;
	}

	@DeleteMapping("udelete/{user_id}")
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
