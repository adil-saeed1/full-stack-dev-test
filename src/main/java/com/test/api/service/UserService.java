package com.test.api.service;

import com.test.api.entity.Todo;
import com.test.api.entity.User;
import com.test.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public String createUser(User user){
        try {
            if (userRepository.existsByUserName(user.getUserName())){
                user.setId(null == userRepository.findMaxId()? 0 : userRepository.findMaxId() + 1);
                userRepository.save(user);
                return "User created successfully.";
            }else {
                return "User already exists.";
            }
        }catch (Exception e){
            throw e;
        }
    }

    public User VerifyUser(String userName, String Password) {

        try {
            var user = userRepository.findByUserName(userName);
            if (user != null) {
                if (user.getPassword().equals(Password)) {

                   return  user;
                }
               else
                   return  null;
            } else {
                return null;
            }
        } catch (Exception e) {
            throw e;
        }

    }



}
