package com.techarmy.controller;

import com.alibaba.fastjson.JSONObject;
import com.techarmy.model.User;
import com.techarmy.service.CarSaleService;
import com.techarmy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(value = {"/user"})
    @ResponseBody
    public String getUser(){
        List<User> userList = userService.getUsers();
        return JSONObject.toJSONString(userList);
    }


}
