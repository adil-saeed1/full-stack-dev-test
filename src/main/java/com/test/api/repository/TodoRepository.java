package com.test.api.repository;

import com.test.api.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {

    public boolean existsByTitle(String title);

    public List<Todo> findByTitle(String title);
    public  boolean existsById(int id);
    @Query("select max(s.id) from Todo s")
    public Integer findMaxId();
}
