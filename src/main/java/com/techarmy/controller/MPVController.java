package com.techarmy.controller;

import com.techarmy.model.CarBrandSale;
import com.techarmy.model.CarBrandSaleMonth;
import com.techarmy.model.CarCountrySale;
import com.techarmy.model.CarPriceRange;
import com.techarmy.service.MPVSaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MPVController {
    @Autowired
    MPVSaleService mpvSaleService;

    /*
    [{"id":1,"country":"American","saleAmount":180950},{"id":2,"country":"China","saleAmount":1325371},
    {"id":3,"country":"German","saleAmount":67826},{"id":4,"country":"Japan","saleAmount":104774}]
     */
    //MPV各国系的销量 比较哪个国系的MPV更受欢迎
    @RequestMapping(value = {"/getMPVCountrySale"})
    @ResponseBody
    public List<CarCountrySale> getMPVCountrySale(){
        return mpvSaleService.getMPVCountrySale();
    }


    //MPV各类型车销量 比较哪个类型的MPV更受欢迎  中大型 中型 紧凑型
    /*
    [{"id":1,"brand":"mpv_large","saleAmount":28101},
    {"id":2,"brand":"mpv_middle","saleAmount":559088},
    {"id":3,"brand":"mpv_small","saleAmount":1091732}]
     */
    @RequestMapping(value = {"/getMPVKindSale"})
    @ResponseBody
    public List<CarBrandSale> getMPVKindSale(){
        return mpvSaleService.getMPVKindSale();
    }

    /*
    [{"id":1,"brand":"奔驰V级","saleAmount":17306},
    {"id":2,"brand":"奔驰威霆","saleAmount":10795}]
     */
    //MPV中大型 TOP
    @RequestMapping(value = {"/getLargeMPVTop"})
    @ResponseBody
    public List<CarBrandSale> getLargeMPVTop(){
        return mpvSaleService.getLargeMPVTop();
    }

    //MPV中型 TOP
    @RequestMapping(value = {"/getMiddleMPVTop"})
    @ResponseBody
    public List<CarBrandSale> getMiddleMPVTop(){
        return mpvSaleService.getMiddleMPVTop();
    }

    //MPV紧凑型 TOP
    @RequestMapping(value = {"/getSmallMPVTop"})
    @ResponseBody
    public List<CarBrandSale> getSmallMPVTop(){
        return mpvSaleService.getSmallMPVTop();
    }

    //MPV各类型车 各月销量走势
    @RequestMapping(value = {"/getMPVKindSaleMonth"})
    @ResponseBody
    public List<CarBrandSaleMonth> getMPVKindSaleMonth(){
        return mpvSaleService.getMPVKindSaleMonth();
    }

    //MPV各国系车 top
    //美系车top
    /*
    [{"id":1,"brand":"别克GL8","saleAmount":144308},{"id":2,"brand":"别克GL6","saleAmount":36642}]
     */
    @RequestMapping(value = {"/getMPVAmericaSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getMPVAmericaSaleTop(){
        return mpvSaleService.getMPVAmericaSaleTop();
    }

    //自主系车top
    @RequestMapping(value = {"/getMPVChinaSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getMPVChinaSaleTop(){
        return mpvSaleService.getMPVChinaSaleTop();
    }

    //德系车top
    @RequestMapping(value = {"/getMPVGermanySaleTop"})
    @ResponseBody
    public List<CarBrandSale> getMPVGermanySaleTop(){
        return mpvSaleService.getMPVGermanySaleTop();
    }

    //日系车top
    @RequestMapping(value = {"/getMPVJapanSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getMPVJapanSaleTop(){
        return mpvSaleService.getMPVJapanSaleTop();
    }





}
