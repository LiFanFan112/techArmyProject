package com.techarmy.service;

import com.techarmy.dao.CarPriceDao;
import com.techarmy.dao.CarSaleDao;
import com.techarmy.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarSaleService {
    @Autowired
    CarSaleDao carSaleDao;

    @Autowired
    CarPriceDao carPriceDao;

    public CarTotalSaleMonth getCarTotalSaleEveryMonth(){
        return carSaleDao.selectCarTotalSaleEveryMonth();
    }

    public List<CarPriceRange> getCarPriceRangeSale(){
        return carPriceDao.getCarPriceRangeSale();
    }

    //获取各个价格区间的top10
    public List<CarBrandSale> getCarPriceTop1Sale(){
        return carPriceDao.getCarPriceTop1Sale();
    }
    public List<CarBrandSale> getCarPriceTop2Sale(){
        return carPriceDao.getCarPriceTop2Sale();
    }
    public List<CarBrandSale> getCarPriceTop3Sale(){
        return carPriceDao.getCarPriceTop3Sale();
    }
    public List<CarBrandSale> getCarPriceTop4Sale(){
        return carPriceDao.getCarPriceTop4Sale();
    }
    public List<CarBrandSale> getCarPriceTop5Sale(){
        return carPriceDao.getCarPriceTop5Sale();
    }
    public List<CarBrandSale> getCarPriceTop6Sale(){
        return carPriceDao.getCarPriceTop6Sale();
    }

    public List<CarBrandSale> getCarBrandTop(){
        return carSaleDao.getCarBrandTop();
    }

    public List<CarBrandSale> getAmericaCarBrandTop(){
        return carSaleDao.getAmericaCarBrandTop();
    }

    public List<CarBrandSale> getBritainCarBrandTop(){
        return carSaleDao.getBritainCarBrandTop();
    }

    public List<CarBrandSale> getChinaCarBrandTop(){
        return carSaleDao.getChinaCarBrandTop();
    }

    public List<CarBrandSale> getFranceCarBrandTop(){
        return carSaleDao.getFranceCarBrandTop();
    }

    public List<CarBrandSale> getGermanyCarBrandTop(){
        return carSaleDao.getGermanyCarBrandTop();
    }

    public List<CarBrandSale> getItalyCarBrandTop(){
        return carSaleDao.getItalyCarBrandTop();
    }

    public List<CarBrandSale> getJapanCarBrandTop(){
        return carSaleDao.getJapanCarBrandTop();
    }

    public List<CarBrandSale> getKoreaCarBrandTop(){
        return carSaleDao.getKoreaCarBrandTop();
    }

    public List<CarBrandSale> getSwedenCarBrandTop(){
        return carSaleDao.getSwedenCarBrandTop();
    }

    public List<CarCountrySale> getCarCountrySale(){
        return carSaleDao.getCarCountrySale();
    }

    public List<CarCountrySaleMonth> getCarCountrySaleMonth(){
        return carSaleDao.getCarCountrySaleMonth();
    }

    public List<CarBrandSaleMonth> getAllSaleMonth(){
        return carSaleDao.getAllSaleMonth();
    }

    public List<CarBrandSale> getAllSale(){
        return carSaleDao.getAllSale();
    }

    public List<CarRangePercent> getCarRangePercent(){
        return carSaleDao.getCarRangePercent();
    }

    public List<CarRangePercent> getNewCarRangePercent(){
        return carSaleDao.getNewCarRangePercent();
    }

    public List<CarSexPercentKind> getCarSexPercentKind(){
        return carSaleDao.getCarSexPercentKind();
    }

    public List<FeatureImportance> getCarFeatureImportance(){
        return carSaleDao.getCarFeatureImportance();
    }

}
