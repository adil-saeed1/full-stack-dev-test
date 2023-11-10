package com.test.api.controller;

import com.test.api.entity.User;
import com.test.api.model.LoginRequest;
import com.test.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ResponseEntity<?> LoggedIn(@RequestBody LoginRequest loginRequest){
        var userProfile= userService.VerifyUser(loginRequest.getUsername(),loginRequest.getPassword());
        if(userProfile == null)
            return ResponseEntity.badRequest().body("UnAuthorize User");
        Map<String, String> response = new HashMap<>();
        response.put("userName", userProfile.getUserName());
        response.put("role", userProfile.getRole());
        return ResponseEntity.ok(response);
    }


}
