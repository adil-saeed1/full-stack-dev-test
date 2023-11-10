package com.test.api.service;

import com.test.api.entity.Todo;
import com.test.api.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Transactional
    public String createTodoItem(String user,Todo item){
        try {
            if (!todoRepository.existsByTitle(item.getTitle())){
                item.setId(null == todoRepository.findMaxId()? 0 : todoRepository.findMaxId() + 1);
                item.setCreatedBy(user);
                item.setCreatedDate(new Date());
                todoRepository.save(item);
                return "Todo Item created successfully.";
            }else {
                return "Todo Item already exists.";
            }
        }catch (Exception e){
            throw e;
        }
    }

    public List<Todo> ListTodoItem(String user,String role){

        List<Todo>  todos =todoRepository.findAll();
        if(!role.equals("ADMIN")) {
            todos = todos.stream()
                    .filter(x -> Objects.equals(x.getCreatedBy(), user))
                    .collect(Collectors.toList());
        }
        return  todos;
    }

    @Transactional
    public String updateTodoItem(String user,Todo item){
        if (todoRepository.existsById((item.getId()))){
            try {
                //check duplicate title
                if(!todoRepository.existsByTitle(item.getTitle())) {
                    Todo todoToBeUpdate = todoRepository.findById(item.getId()).get();
                    //check user role for validate permission
                    if (todoToBeUpdate.getCreatedBy().equals(user)) {
                        todoToBeUpdate.setTitle(item.getTitle());
                        todoToBeUpdate.setDescription(item.getDescription());
                        todoToBeUpdate.setCompletionTime(item.getCompletionTime());
                        todoToBeUpdate.setStatus(item.getStatus());
                        todoToBeUpdate.setModifiedBy(user);
                        todoToBeUpdate.setModifiedDate(new Date());
                        todoRepository.save(todoToBeUpdate);
                        return "Todo Item updated.";
                    }
                    else {
                      return  "you don't have permission to update";
                    }
                }
                else
                {
                    return  "Title must be unique";
                }
            }catch (Exception e){
                throw e;
            }
        }else {
            return "Todo item does not exists.";
        }
    }

    @Transactional
    public String deleteTodoItem(String user,Todo item){
        if (todoRepository.existsById(item.getId())){
            try {

                Todo todoITem = todoRepository.findById(item.getId()).get();
                if (todoITem.getCreatedBy().equals(user)) {
                    todoRepository.delete(todoITem);
                    return "Todo deleted successfully.";
                }
                else {
                    return "you don't have permission to delete\"";
                }
            }catch (Exception e){
                throw e;
            }

        }else {
            return "Todo Item does not exist";
        }
    }
}