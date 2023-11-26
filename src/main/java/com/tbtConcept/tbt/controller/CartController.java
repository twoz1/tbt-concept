package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.service.CartService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/cart")
@Controller
public class CartController {
	
	CartService cartService;
	
}