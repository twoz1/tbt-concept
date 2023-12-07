package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Address;
import com.tbtConcept.tbt.service.AddressService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/address")
@RestController
@Log4j2
public class AddressRController {
   
   AddressService addressService;

   
   @GetMapping("/aList")
   public List<Address> getAddressList(Model model){
      return addressService.selectList();
 }
   
   @DeleteMapping("aDelete/{duplicate_user_id}")
   public ResponseEntity<?> axAddressDelete(@PathVariable("duplicate_user_id") int id, Address entity) {
      entity.setDuplicate_user_id(id);
      if (addressService.delete(id) != null) {
         log.info("axidelete HttpStatus.OK =>" + HttpStatus.OK);
         System.out.println("삭제 성공");
         return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
      } else {
         log.info("axidelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
         System.out.println("삭제 실패");
         return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
      }
   
   
   }
   
   
   @PostMapping("/aListInsert")
   public String postorderListInsert( @RequestBody Address entity, Model model, RedirectAttributes rttr){

      System.out.println("확인!!!!!!!!!!!!!!!!!!!!" + entity);
      try {
         addressService.save(entity);
         model.addAttribute("message", "주소등록 성공");
         System.out.println("** AddressList insert 성공");
         return "완료";
      
      } catch (Exception e) {
         System.out.println("** AddressList insert Exception => " + e.toString());
         return "실패";
      }
   }
   
}