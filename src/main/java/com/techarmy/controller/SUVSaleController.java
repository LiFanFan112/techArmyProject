package com.techarmy.controller;


import com.techarmy.model.*;
import com.techarmy.service.SUVSaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class SUVSaleController {
    @Autowired
    SUVSaleService suvSaleService;

    /*
    [{"id":1,"country":"America","saleAmount":620664},{"id":2,"country":"Britain","saleAmount":42681},
    {"id":3,"country":"China","saleAmount":5887998},{"id":4,"country":"France","saleAmount":153007},
    {"id":5,"country":"Germany","saleAmount":1165702},{"id":6,"country":"Japan","saleAmount":1657147},
    {"id":7,"country":"Korea","saleAmount":404273},{"id":8,"country":"Swedenn","saleAmount":50237}]
     */
    //各国系的SUV 总销量 哪个国系的SUV更受欢迎
    @RequestMapping(value = {"/getSUVCountrySale"})
    @ResponseBody
    public List<CarCountrySale> getSUVCountrySale(){
        return suvSaleService.getSUVCountrySale();
    }

    //各车型的SUV 总销量 哪个类型的SUV更受欢迎
    /*
    [{"id":1,"brand":"suv_large","saleAmount":209126},
    {"id":2,"brand":"suv_middle","saleAmount":1956016},
    {"id":3,"brand":"suv_tight","saleAmount":2163212}]
     */
    @RequestMapping(value = {"/getSUVKindSale"})
    @ResponseBody
    public List<CarBrandSale> getSUVKindSale(){
        return suvSaleService.getSUVKindSale();
    }

    /*
    [{"id":1,"brand":"大众途昂","saleAmount":86182},{"id":2,"brand":"众泰T700","saleAmount":37828},
    {"id":3,"brand":"丰田普拉多","saleAmount":34709},{"id":4,"brand":"哈弗H9","saleAmount":14635},
    {"id":5,"brand":"荣威RX8","saleAmount":13256},{"id":6,"brand":"蔚来ES8","saleAmount":8101},
    {"id":7,"brand":"长安CS95","saleAmount":6814},{"id":8,"brand":"上汽大通D90","saleAmount":5842},
    {"id":9,"brand":"北京BJ80","saleAmount":645},{"id":10,"brand":"哈弗H8","saleAmount":1114}]
     */
    //中大型SUV TOP10
    @RequestMapping(value = {"/getLargeSUVTop"})
    @ResponseBody
    public List<CarBrandSale> getLargeSUVTop(){
        return suvSaleService.getLargeSUVTop();
    }

    //中型SUV TOP10
    @RequestMapping(value = {"/getMiddleSUVTop"})
    @ResponseBody
    public List<CarBrandSale> getMiddleSUVTop(){
        return suvSaleService.getMiddleSUVTop();
    }

    //小型SUV top10
    @RequestMapping(value = {"/getSmallSUVTop"})
    @ResponseBody
    public List<CarBrandSale> getSmallSUVTop(){
        return suvSaleService.getSmallSUVTop();
    }

    //紧凑型SUV top10
    @RequestMapping(value = {"/getTightSUVTop"})
    @ResponseBody
    public List<CarBrandSale> getTightSUVTop(){
        return suvSaleService.getTightSUVTop();
    }

    //各类型SUV每月销量趋势
    /*
    [{"id":1,"brand":"tight","month1":598260,"month2":368711,"month3":508083,"month4":445179,"month5":432938,"month6":420676,"month7":367506,"month8":432240,"month9":501200,"month10":498955,"month11":528204,"month12":551403},
    {"id":2,"brand":"small","month1":264320,"month2":147751,"month3":206191,"month4":185217,"month5":159817,"month6":148164,"month7":122426,"month8":142409,"month9":181334,"month10":190962,"month11":196614,"month12":218007},
    {"id":3,"brand":"middle","month1":197225,"month2":121324,"month3":181506,"month4":160674,"month5":150275,"month6":154299,"month7":136285,"month8":151080,"month9":175878,"month10":164655,"month11":170060,"month12":192755},
    {"id":4,"brand":"large","month1":21417,"month2":14674,"month3":20929,"month4":17473,"month5":18286,"month6":17157,"month7":14309,"month8":14673,"month9":16165,"month10":15815,"month11":16360,"month12":21868}]
     */
    @RequestMapping(value = {"/getSUVKindMonth"})
    @ResponseBody
    public List<CarBrandSaleMonth> getSUVKindMonth(){
        return suvSaleService.getSUVKindMonth();
    }

    /*
    [{"id":1,"brand":"别克昂科威","saleAmount":201776},{"id":2,"brand":"凯迪拉克XT5","saleAmount":82111},
    {"id":4,"brand":"雪佛兰探界者","saleAmount":71497},{"id":3,"brand":"Jeep指南者","saleAmount":63015},
    {"id":7,"brand":"福特锐界","saleAmount":59892},{"id":9,"brand":"福特翼虎","saleAmount":31149},
    {"id":6,"brand":"Jeep自由光","saleAmount":30799},{"id":10,"brand":"Jeep自由侠","saleAmount":17232},
    {"id":11,"brand":"福特翼搏","saleAmount":16033},{"id":12,"brand":"别克昂科拉","saleAmount":15177}]
     */
    //SUV各系车top
    //SUV美系车top
    @RequestMapping(value = {"/getSUVAmericaSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getSUVAmericaSaleTop(){
        return suvSaleService.getSUVAmericaSaleTop();
    }

    //SUV英系车top
    @RequestMapping(value = {"/getSUVBritainSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getSUVBritainSaleTop(){
        return suvSaleService.getSUVBritainSaleTop();
    }

    //SUV自主系车top
    @RequestMapping(value = {"/getSUVChinaSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getSUVChinaSaleTop(){
        return suvSaleService.getSUVChinaSaleTop();
    }

    //SUV法系车top
    @RequestMapping(value = {"/getSUVFranceSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getSUVFranceSaleTop(){
        return suvSaleService.getSUVFranceSaleTop();
    }

    //SUV德系车top
    @RequestMapping(value = {"/getSUVGermanySaleTop"})
    @ResponseBody
    public List<CarBrandSale> getSUVGermanySaleTop(){
        return suvSaleService.getSUVGermanySaleTop();
    }

    //SUV日系车top
    @RequestMapping(value = {"/getSUVJapanSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getSUVJapanSaleTop(){
        return suvSaleService.getSUVJapanSaleTop();
    }

    //SUV韩系车top
    @RequestMapping(value = {"/getSUVKoreaSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getSUVKoreaSaleTop(){
        return suvSaleService.getSUVKoreaSaleTop();
    }

    //SUV瑞典系车top
    @RequestMapping(value = {"/getSUVSwedenSaleTop"})
    @ResponseBody
    public List<CarBrandSale> getSUVSwedenSaleTop(){
        return suvSaleService.getSUVSwedenSaleTop();
    }

    //SUV各系车各月销量走势
    @RequestMapping(value = {"/getSUVCountrySaleMonth"})
    @ResponseBody
    public List<CarCountrySaleMonth> getSUVCountrySaleMonth(){
        return suvSaleService.getSUVCountrySaleMonth();
    }

}
