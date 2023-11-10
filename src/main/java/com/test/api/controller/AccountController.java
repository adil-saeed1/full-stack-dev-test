package com.test.api.controller;

import com.test.api.model.LoginRequest;
import com.test.api.model.UserProfile;
import com.test.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ResponseEntity<?> LoggedIn(@RequestBody LoginRequest loginRequest){
        var userProfile= userService.VerifyUser(loginRequest.getUserName(),loginRequest.getPassword());

        if(userProfile == null)
            return ResponseEntity.badRequest().body("UnAuthorize User");
        return ResponseEntity.ok(userProfile);
    }

}
