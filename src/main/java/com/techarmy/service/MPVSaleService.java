package com.techarmy.service;

import com.techarmy.dao.MPVDao;
import com.techarmy.model.CarBrandSale;
import com.techarmy.model.CarBrandSaleMonth;
import com.techarmy.model.CarCountrySale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MPVSaleService {
    @Autowired
    MPVDao mpvDao;

    public List<CarCountrySale> getMPVCountrySale(){
        return mpvDao.getMPVCountrySale();
    }

    public List<CarBrandSale> getMPVKindSale(){
        return mpvDao.getMPVKindSale();
    }

    public List<CarBrandSale> getLargeMPVTop(){
        return mpvDao.getLargeMPVTop();
    }

    public List<CarBrandSale> getMiddleMPVTop(){
        return mpvDao.getMiddleMPVTop();
    }

    public List<CarBrandSale> getSmallMPVTop(){
        return mpvDao.getSmallMPVTop();
    }

    public List<CarBrandSaleMonth> getMPVKindSaleMonth(){
        return mpvDao.getMPVKindSaleMonth();
    }

    public List<CarBrandSale> getMPVAmericaSaleTop(){
        return mpvDao.getMPVAmericaSaleTop();
    }

    public List<CarBrandSale> getMPVChinaSaleTop(){
        return mpvDao.getMPVChinaSaleTop();
    }

    public List<CarBrandSale> getMPVGermanySaleTop(){
        return mpvDao.getMPVGermanySaleTop();
    }


    public List<CarBrandSale> getMPVJapanSaleTop(){
        return mpvDao.getMPVJapanSaleTop();
    }



}
