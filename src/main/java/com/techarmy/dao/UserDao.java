package com.techarmy.dao;

import com.techarmy.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserDao {
    @Select({"select id,name from user"})
    public List<User> selectUser();
}
