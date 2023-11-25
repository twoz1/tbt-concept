package com.tbtConcept.tbt.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Controller
public class HomeController {
	

	// test
	@GetMapping("/test")
	public String test() {
		log.info("** React Connect Test 중~");
		return "test";
	}

	@GetMapping("/home")
	public void home(Locale locale, Model model) {
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		String formattedDate = dateFormat.format(date);
		model.addAttribute("serverTime", formattedDate );
	} //home
	
	@GetMapping("/master/masterIndex")
	public void masterIndex() {
		
	}
}
