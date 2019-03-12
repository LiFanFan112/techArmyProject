package com.techarmy.dao;

import com.techarmy.model.CarBrandSale;
import com.techarmy.model.CarBrandSaleMonth;
import com.techarmy.model.CarCountrySale;
import com.techarmy.model.CarCountrySaleMonth;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;


@Mapper
public interface MPVDao {
    @Select({"select * from mpv_country_totalsale"})
    List<CarCountrySale> getMPVCountrySale();

    @Select({"select * from mpv_kind_totalsale"})
    List<CarBrandSale> getMPVKindSale();

    @Select({"select * from mpv_large_top"})
    List<CarBrandSale> getLargeMPVTop();

    @Select({"select * from mpv_middle_top"})
    List<CarBrandSale> getMiddleMPVTop();

    @Select({"select * from mpv_small_top"})
    List<CarBrandSale> getSmallMPVTop();

    @Select({"select * from car_series_Trend_mpv"})
    List<CarBrandSaleMonth> getMPVKindSaleMonth();

    @Select({"select * from mpv_America_top"})
    List<CarBrandSale> getMPVAmericaSaleTop();

    @Select({"select * from mpv_China_top"})
    List<CarBrandSale> getMPVChinaSaleTop();

    @Select({"select * from mpv_Germany_top"})
    List<CarBrandSale> getMPVGermanySaleTop();

    @Select({"select * from mpv_Japan_top"})
    List<CarBrandSale> getMPVJapanSaleTop();

    @Select({"select * from mpv_country_sale_month"})
    List<CarCountrySaleMonth> getMPVCountrySaleMonth();

}
