package com.techarmy.dao;

import com.techarmy.model.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CarSaleDao {
    @Select({"select * from car_sale_month"})
    CarTotalSaleMonth selectCarTotalSaleEveryMonth();

    @Select({"select * from car_sale_phb"})
    List<CarBrandSale> getCarBrandTop();

    @Select({"select * from car_series_America_top"})
    List<CarBrandSale> getAmericaCarBrandTop();

    @Select({"select * from car_series_Britain_top"})
    List<CarBrandSale> getBritainCarBrandTop();

    @Select({"select * from car_series_China_top"})
    List<CarBrandSale> getChinaCarBrandTop();

    @Select({"select * from car_series_France_top"})
    List<CarBrandSale> getFranceCarBrandTop();

    @Select({"select * from car_series_Germany_top"})
    List<CarBrandSale> getGermanyCarBrandTop();

    @Select({"select * from car_series_Italy_top"})
    List<CarBrandSale> getItalyCarBrandTop();

    @Select({"select * from car_series_Japan_top"})
    List<CarBrandSale> getJapanCarBrandTop();

    @Select({"select * from car_series_Korea_top"})
    List<CarBrandSale> getKoreaCarBrandTop();

    @Select({"select * from car_series_Sweden_top"})
    List<CarBrandSale> getSwedenCarBrandTop();

    @Select({"select * from car_country_totalsale"})
    List<CarCountrySale> getCarCountrySale();

    @Select({"select * from car_series_month_total"})
    List<CarCountrySaleMonth> getCarCountrySaleMonth();

    @Select({"select * from total"})
    List<CarBrandSaleMonth> getAllSaleMonth();

    @Select({"select * from total_sale"})
    List<CarBrandSale> getAllSale();





}
