package com.test.api.repository;

import com.test.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    public  Boolean existsByUserName(String userName);
    public User findByUserName(String userName);

    @Query("select max(u.id) from User u")
    public Integer findMaxId();
}
