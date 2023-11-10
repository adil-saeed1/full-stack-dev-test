package com.test.api.controller;

import com.test.api.entity.Todo;
import com.test.api.service.TodoService;
import com.test.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;


    @RequestMapping(value = "addtodo", method = RequestMethod.POST)
    public String createTodoItem(@RequestHeader(value ="User", required = true)String user,@RequestBody Todo item){
        return todoService.createTodoItem(user,item);
    }

    @RequestMapping(value = "listtodoitems", method = RequestMethod.GET)
    public List<Todo> listTodoItems(@RequestHeader(value = "User", required = true)String user,
                                    @RequestHeader(value = "Role", required = true)String role){
        return todoService.ListTodoItem(user,role);
    }

    @RequestMapping(value = "updatetodo", method = RequestMethod.PUT)
    public String updateTodoItem(@RequestHeader(value = "User", required = true)String user,@RequestBody Todo item){
        return todoService.updateTodoItem(user,item);
    }

    @DeleteMapping("deletetodo/{id}")
    public String deleteTodoItem(@RequestHeader("User") String user,@PathVariable("id") Todo id){
        return todoService.deleteTodoItem(user,id);
    }
}
