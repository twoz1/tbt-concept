package com.tbtConcept.tbt.restController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.service.CartService;

//@AllArgsConstructor
@RequestMapping(value = "/cart")
@RestController
public class CartRController {
	
	CartService cartService;
	
	
}
