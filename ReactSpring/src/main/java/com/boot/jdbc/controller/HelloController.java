package com.boot.jdbc.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
 
    @GetMapping("/hello")
    public String hello(){
        return "안녕하세요. 수정 메세지입니다!!! \n";
    }
    
}