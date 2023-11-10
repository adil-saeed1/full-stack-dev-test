package com.test.api.controller;

import com.test.api.entity.Todo;
import com.test.api.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;

    @RequestMapping(value = "addtodo", method = RequestMethod.POST)
    public String createTodoItem(@RequestBody Todo item){
        return todoService.createTodoItem(item);
    }

    @RequestMapping(value = "listtodoitems", method = RequestMethod.GET)
    public List<Todo> listTodoItems(){
        return todoService.ListTodoItems();
    }

    @RequestMapping(value = "updatetodo", method = RequestMethod.PUT)
    public String updateTodoItem(@RequestBody Todo item){
        return todoService.updateTodoItem(item);
    }

    @RequestMapping(value = "deletetodo", method = RequestMethod.DELETE)
    public String deleteTodoItem(@RequestBody Todo item){
        return todoService.deleteTodoItem(item);
    }
}
