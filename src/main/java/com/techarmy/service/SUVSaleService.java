package com.techarmy.service;


import com.techarmy.dao.SUVDao;
import com.techarmy.model.CarBrandSale;
import com.techarmy.model.CarBrandSaleMonth;
import com.techarmy.model.CarCountrySale;
import com.techarmy.model.CarCountrySaleMonth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SUVSaleService {
    @Autowired
    SUVDao suvDao;

    public List<CarCountrySale> getSUVCountrySale(){
        return suvDao.getSUVCountrySale();
    }

    public List<CarBrandSale> getSUVKindSale(){
        return suvDao.getSUVKindSale();
    }

    public List<CarBrandSale> getLargeSUVTop(){
        return suvDao.getLargeSUVTop();
    }

    public List<CarBrandSale> getMiddleSUVTop(){
        return suvDao.getMiddleSUVTop();
    }

    public List<CarBrandSale> getSmallSUVTop(){
        return suvDao.getSmallSUVTop();
    }

    public List<CarBrandSale> getTightSUVTop(){
        return suvDao.getTightSUVTop();
    }

    public List<CarBrandSaleMonth> getSUVKindMonth(){
        return suvDao.getSUVKindMonth();
    }

    public List<CarBrandSale> getSUVAmericaSaleTop(){
        return suvDao.getSUVAmericaSaleTop();
    }

    public List<CarBrandSale> getSUVBritainSaleTop(){
        return suvDao.getSUVBritainSaleTop();
    }

    public List<CarBrandSale> getSUVChinaSaleTop(){
        return suvDao.getSUVChinaSaleTop();
    }

    public List<CarBrandSale> getSUVFranceSaleTop(){
        return suvDao.getSUVFranceSaleTop();
    }

    public List<CarBrandSale> getSUVGermanySaleTop(){
        return suvDao.getSUVGermanySaleTop();
    }

    public List<CarBrandSale> getSUVJapanSaleTop(){
        return suvDao.getSUVJapanSaleTop();
    }

    public List<CarBrandSale> getSUVKoreaSaleTop(){
        return suvDao.getSUVKoreaSaleTop();
    }

    public List<CarBrandSale> getSUVSwedenSaleTop(){
        return suvDao.getSUVSwedenSaleTop();
    }

    public List<CarCountrySaleMonth> getSUVCountrySaleMonth(){
        return suvDao.getSUVCountrySaleMonth();
    }

}
