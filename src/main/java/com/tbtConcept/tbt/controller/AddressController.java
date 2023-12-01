package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.service.AddressService;


import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;


@AllArgsConstructor
@RequestMapping(value = "/master/address")
@Controller
@Log4j2
public class AddressController {
	
	AddressService addressService;
	
	@GetMapping(value="/addressList")
	public void getUserList(Model model) {
		model.addAttribute("addressList", addressService.selectList());
	}
	
	
	
}
