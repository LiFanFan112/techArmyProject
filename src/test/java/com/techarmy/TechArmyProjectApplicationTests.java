package com.techarmy;

import com.techarmy.dao.UserDao;
import com.techarmy.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TechArmyProjectApplicationTests {
    @Autowired
    UserDao userDao;


    @Test
    public void contextLoads() {
        List<User> userList = userDao.selectUser();
        for (User user:userList){
            System.out.println(user.getId()+" "+user.getName());
        }

    }

}
