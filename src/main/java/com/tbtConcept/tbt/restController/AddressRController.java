package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.entity.Address;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.AddressService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value = "/address")
@RestController
public class AddressRController {
	
	AddressService addressService;

	
	@GetMapping("/aList")
	public List<Address> getAddressList(Model model){
		return addressService.selectList();
 }
	
	
}