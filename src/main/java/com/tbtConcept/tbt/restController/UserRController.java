package com.tbtConcept.tbt.restController;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.domain.WishProdDTO;
import com.tbtConcept.tbt.entity.User;
import com.tbtConcept.tbt.entity.Wish;
import com.tbtConcept.tbt.entity.WishId;
import com.tbtConcept.tbt.service.EmailService;
import com.tbtConcept.tbt.service.UserService;
import com.tbtConcept.tbt.service.WishService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/user")
@RestController
@Log4j2
public class UserRController {
	UserService userService;
	PasswordEncoder passwordEncoder;

	WishService wishService;

	EmailService emailService;

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
			if (userService.selectOne(entity.getUser_id()) == null && userService.save(entity) != null) {
				return 1;
			} else {
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

			if (user != null && passwordEncoder.matches(pw, user.getUser_pw())) {

				return user;

			} else {

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
			System.out.println("넘어온 데이터" + entity);
			String pw = entity.getUser_pw();

			entity = userService.selectOne(entity.getUser_id());
			System.out.println("아이디에 맞는 데이터" + entity);

			if (entity != null && passwordEncoder.matches(pw, entity.getUser_pw())) {

				session.setAttribute("loginUser", entity.getUser_id());
				session.setAttribute("loginName", entity.getUser_name());

				return true;

			} else {

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
			if (userService.save(entity) != null) {

				return "성공";
			} else {

				return "실패";
			}
		} catch (Exception e) {
			log.info("** update Exception => " + e.toString());
			return "실패";

		}

	}

	@PostMapping(value = "/pwUpdate")
	public String passwordUpdate(@RequestBody User entity) {

		String pw = entity.getUser_pw();
		System.out.println(pw);
		System.out.println(entity.getUser_id());

		entity = userService.selectOne(entity.getUser_id());

		if (entity != null) {
			entity.setUser_pw(passwordEncoder.encode(pw));
			userService.save(entity);
			return "성공";
		} else {
			return "실패";
		}
	} // passwordUpdate

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

	// ======================================================================================
	@GetMapping("/wlist")
	public List<WishProdDTO> getWishList(@RequestParam("user_id") String user_id) {

		return wishService.selectListDesc(user_id);
	}

	@GetMapping("/wdetail")
	public Optional<Wish> getWishDetail(@RequestParam("user_id") String user_id,
			@RequestParam("product_id") int product_id) {
		return wishService.selectDetail(new WishId(user_id, product_id));
	}

	@PostMapping(value = "/winsert")
	public String postWishInsert(@RequestBody Wish entity) {

		entity.setWish_date(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));

		if (wishService.save(entity) > 0) {
			return "성공";
		} else {
			return "실패";
		}

	}

	@DeleteMapping(value = "/wdelete")
	public String deleteWish(@RequestBody Wish entity) {

		if (wishService.delete(new WishId(entity.getUser_id(), entity.getProduct_id())) != null) {
			return "삭제성공";
		} else {
			return "삭제실패";
		}
	}

	// find PW ======================================================================================
	@PostMapping(value = "/uFindPW")
	public String postUserFindPW(Model model, @RequestBody User entity) {
		User checkUser = userService.checkUser(entity.getUser_id(), entity.getUser_name());
		System.out.println(checkUser);
		System.out.println(entity.getUser_id() + entity.getUser_name());
		
		try {
			if (checkUser != null) {
				String randomPW = generateTempKey(8);
				log.info(randomPW);
				
				User user = userService.selectOne(entity.getUser_id());
				user.setUser_pw(passwordEncoder.encode(randomPW));
				userService.save(user);

				emailService.sendEmail(entity.getUser_id(), entity.getUser_name(), randomPW);
				return "[" + entity.getUser_id() + "로 이메일 발송완료]. 임시 비밀번호로 로그인 후, 바로 비밀번호를 변경해주세요.";
			} else {
				return "가입한 회원정보를 정확하게 입력해주세요.";
			}
		} catch (Exception e) {
			System.out.println("postUserFindPW" + e.toString());
			return "Error processing data";
		}

	}

	public static String generateTempKey(int length) {
		String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		StringBuilder tempKey = new StringBuilder();

		SecureRandom random = new SecureRandom();
		for (int i = 0; i < length; i++) {
			int index = random.nextInt(characters.length());
			tempKey.append(characters.charAt(index));
		}

		return tempKey.toString();
	}
}
