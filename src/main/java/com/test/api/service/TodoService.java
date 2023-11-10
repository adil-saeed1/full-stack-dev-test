package com.test.api.service;

import com.test.api.entity.Todo;
import com.test.api.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Transactional
    public String createTodoItem(Todo item){
        try {
            if (!todoRepository.existsByTitle(item.getTitle())){
                item.setId(null == todoRepository.findMaxId()? 0 : todoRepository.findMaxId() + 1);
                todoRepository.save(item);
                return "Todo Item created successfully.";
            }else {
                return "Todo Item already exists.";
            }
        }catch (Exception e){
            throw e;
        }
    }

    public List<Todo> ListTodoItems(){
        return todoRepository.findAll();
    }

    @Transactional
    public String updateTodoItem(Todo item){
        if (todoRepository.existsById((item.getId()))){
            try {
                if(!todoRepository.existsByTitle(item.getTitle())) {
                    Todo todoToBeUpdate = todoRepository.findById(item.getId()).get();
                    todoToBeUpdate.setTitle(item.getTitle());
                    todoToBeUpdate.setDescription(item.getDescription());
                    todoRepository.save(todoToBeUpdate);
                    return "Todo Item updated.";
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
    public String deleteTodoItem(Todo item){
        if (todoRepository.existsById(item.getId())){
            try {
                Todo todoITem = todoRepository.findById(item.getId()).get();
                 todoRepository.delete(todoITem);
                return "Todo deleted successfully.";
            }catch (Exception e){
                throw e;
            }

        }else {
            return "Todo Item does not exist";
        }
    }
}
