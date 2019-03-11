package com.techarmy.dao;


import com.techarmy.model.CarBrandSale;
import com.techarmy.model.CarPriceRange;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CarPriceDao {
    @Select({"select * from car_price"})
    public List<CarPriceRange> getCarPriceRangeSale();

    @Select({"select * from car_price_top1"})
    public List<CarBrandSale> getCarPriceTop1Sale();

    @Select({"select * from car_price_top2"})
    public List<CarBrandSale> getCarPriceTop2Sale();

    @Select({"select * from car_price_top3"})
    public List<CarBrandSale> getCarPriceTop3Sale();

    @Select({"select * from car_price_top4"})
    public List<CarBrandSale> getCarPriceTop4Sale();

    @Select({"select * from car_price_top5"})
    public List<CarBrandSale> getCarPriceTop5Sale();

    @Select({"select * from car_price_top6"})
    public List<CarBrandSale> getCarPriceTop6Sale();
}
