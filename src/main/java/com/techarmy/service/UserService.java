package com.techarmy.service;

import com.techarmy.dao.UserDao;
import com.techarmy.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserDao userDao;

    public List<User> getUsers(){
        return userDao.selectUser();

    }
}
