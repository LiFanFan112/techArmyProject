package com.techarmy.dao;


import com.techarmy.model.CarBrandSale;
import com.techarmy.model.CarBrandSaleMonth;
import com.techarmy.model.CarCountrySale;
import com.techarmy.model.CarCountrySaleMonth;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SUVDao {
    @Select({"select * from suv_country_totalsale"})
    List<CarCountrySale> getSUVCountrySale();

    @Select({"select * from suv_kind_totalsale"})
    List<CarBrandSale> getSUVKindSale();

    @Select({"select * from suv_large_top"})
    List<CarBrandSale> getLargeSUVTop();

    @Select({"select * from suv_middle_top"})
    List<CarBrandSale> getMiddleSUVTop();

    @Select({"select * from suv_small_top"})
    List<CarBrandSale> getSmallSUVTop();

    @Select({"select * from suv_tight_top"})
    List<CarBrandSale> getTightSUVTop();

    @Select({"select * from car_series_Trend_suv"})
    List<CarBrandSaleMonth> getSUVKindMonth();

    @Select({"select * from suv_America_top"})
    List<CarBrandSale> getSUVAmericaSaleTop();

    @Select({"select * from suv_Britain_top"})
    List<CarBrandSale> getSUVBritainSaleTop();

    @Select({"select * from suv_China_top"})
    List<CarBrandSale> getSUVChinaSaleTop();

    @Select({"select * from suv_France_top"})
    List<CarBrandSale> getSUVFranceSaleTop();

    @Select({"select * from suv_Germany_top"})
    List<CarBrandSale> getSUVGermanySaleTop();

    @Select({"select * from suv_Japan_top"})
    List<CarBrandSale> getSUVJapanSaleTop();

    @Select({"select * from suv_Korea_top"})
    List<CarBrandSale> getSUVKoreaSaleTop();

    @Select({"select * from suv_Sweden_top"})
    List<CarBrandSale> getSUVSwedenSaleTop();


}
