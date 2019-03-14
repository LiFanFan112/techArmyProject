package com.techarmy.controller;


import com.alibaba.fastjson.JSONObject;
import com.techarmy.model.*;
import com.techarmy.service.CarSaleService;
import com.techarmy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class CarSaleController {
    @Autowired
    UserService userService;

    @Autowired
    CarSaleService carSaleService;

    @RequestMapping(value = {"/"})
    public String index(){
        return "index.html";
    }


    /*{"month1":2418065,"month2":3868797,"month3":5987760,"month4":7856250,
    "month5":9706018,"month6":11539911,"month7":13104763,"month8":14853915,"month9":16875492,
    "month10":18890999,"month11":21050161,"month12":23232743}*/
    //所有汽车全国各月总销量
    @RequestMapping(value = {"/car/TotalSaleMonth"})
    @ResponseBody
    public CarTotalSaleMonth getCarTotalSaleEveryMonth(){
        return carSaleService.getCarTotalSaleEveryMonth();
    }

    /*[{"priceRange":"0~10","saleAmount":935790},{"priceRange":"10~15","saleAmount":1240925},
    {"priceRange":"15~25","saleAmount":949541},{"priceRange":"25~35","saleAmount":386882},
    {"priceRange":"35~50","saleAmount":239140},{"priceRange":"50","saleAmount":103942}]*/
    //获取各个价格区间的销量 数据仅为2019年1月 占比图
    @RequestMapping(value = {"/carPriceRangeSale"})
    @ResponseBody
    public List<CarPriceRange> getCarPriceRangeSale(){
        return carSaleService.getCarPriceRangeSale();
    }


    //每个价格区间的top10
    /*
    [[{"id":1,"brand":"轩逸","saleAmount":44454},{"id":2,"brand":"五菱宏光","saleAmount":38203},{"id":3,"brand":"捷达","saleAmount":31065},{"id":4,"brand":"桑塔纳","saleAmount":28508},{"id":5,"brand":"科沃兹","saleAmount":28297},{"id":6,"brand":"博越","saleAmount":27503},{"id":7,"brand":"帝豪","saleAmount":21472},{"id":8,"brand":"宝骏510","saleAmount":20911},{"id":9,"brand":"长安CS35","saleAmount":19600},{"id":10,"brand":"荣威i5","saleAmount":19262}],
    [{"id":1,"brand":"朗逸","saleAmount":58537},{"id":2,"brand":"哈弗H6","saleAmount":45034},{"id":3,"brand":"轩逸","saleAmount":44454},{"id":4,"brand":"卡罗拉","saleAmount":37711},{"id":5,"brand":"英朗","saleAmount":34622},{"id":6,"brand":"捷达","saleAmount":31065},{"id":7,"brand":"桑塔纳","saleAmount":28508},{"id":8,"brand":"科沃兹","saleAmount":28297},{"id":9,"brand":"博越","saleAmount":27503},{"id":10,"brand":"雷凌","saleAmount":26681}],
    [{"id":1,"brand":"朗逸","saleAmount":58537},{"id":2,"brand":"轩逸","saleAmount":44454},{"id":3,"brand":"卡罗拉","saleAmount":37711},{"id":4,"brand":"博越","saleAmount":27503},{"id":5,"brand":"雷凌","saleAmount":26681},{"id":6,"brand":"宝来","saleAmount":24765},{"id":7,"brand":"思域","saleAmount":24374},{"id":8,"brand":"荣威Ei5","saleAmount":22261},{"id":9,"brand":"雅阁","saleAmount":21336},{"id":10,"brand":"凯美瑞","saleAmount":19720}],
    [{"id":1,"brand":"雅阁","saleAmount":21336},{"id":2,"brand":"凯美瑞","saleAmount":19720},{"id":3,"brand":"RAV4荣放","saleAmount":17859},{"id":4,"brand":"宝马3系","saleAmount":17379},{"id":5,"brand":"本田CR-V","saleAmount":17071},{"id":6,"brand":"奥迪A4L","saleAmount":16318},{"id":7,"brand":"奇骏","saleAmount":16262},{"id":8,"brand":"帕萨特","saleAmount":15622},{"id":9,"brand":"奔驰C级","saleAmount":15013},{"id":10,"brand":"昂科威","saleAmount":12640}],
    [{"id":1,"brand":"宝马3系","saleAmount":17379},{"id":2,"brand":"奥迪A4L","saleAmount":16318},{"id":3,"brand":"奔驰E级","saleAmount":15801},{"id":4,"brand":"奔驰C级","saleAmount":15013},{"id":5,"brand":"奔驰GLC","saleAmount":13104},{"id":6,"brand":"宝马5系","saleAmount":12224},{"id":7,"brand":"途观L","saleAmount":10841},{"id":8,"brand":"沃尔沃XC60","saleAmount":10647},{"id":9,"brand":"汉兰达","saleAmount":10481},{"id":10,"brand":"宝马X1","saleAmount":9856}],
    [{"id":1,"brand":"奔驰E级","saleAmount":15801},{"id":2,"brand":"奔驰GLC","saleAmount":13104},{"id":3,"brand":"宝马5系","saleAmount":12224},{"id":4,"brand":"沃尔沃XC60","saleAmount":10647},{"id":5,"brand":"奥迪A6L","saleAmount":9656},{"id":6,"brand":"奥迪Q5","saleAmount":9656},{"id":7,"brand":"宝马X3","saleAmount":9371},{"id":8,"brand":"凯迪拉克XT5","saleAmount":7329},{"id":9,"brand":"途昂","saleAmount":6020},{"id":10,"brand":"普拉多","saleAmount":2851}]]
     */
    @RequestMapping(value = {"/carPriceRangeTop"})
    @ResponseBody
    public List<List<CarBrandSale>> getCarPriceTop1Car(){
        List<CarBrandSale> top_1 =  carSaleService.getCarPriceTop1Sale();
        List<CarBrandSale> top_2 =  carSaleService.getCarPriceTop2Sale();
        List<CarBrandSale> top_3 =  carSaleService.getCarPriceTop3Sale();
        List<CarBrandSale> top_4 =  carSaleService.getCarPriceTop4Sale();
        List<CarBrandSale> top_5 =  carSaleService.getCarPriceTop5Sale();
        List<CarBrandSale> top_6 =  carSaleService.getCarPriceTop6Sale();
        List<List<CarBrandSale>> list = new ArrayList<>();
        list.add(top_1);
        list.add(top_2);
        list.add(top_3);
        list.add(top_4);
        list.add(top_5);
        list.add(top_6);
        return list;
    }

    //2018最受欢迎的10个汽车品牌 销量最高的
    /*
    [{"id":1,"brand":"大众","saleAmount":3129743},{"id":2,"brand":"本田","saleAmount":1452441},
    {"id":9,"brand":"吉利","saleAmount":1380424},{"id":5,"brand":"丰田","saleAmount":1295002},
    {"id":3,"brand":"日产","saleAmount":1177705},{"id":6,"brand":"别克","saleAmount":1125426},
    {"id":7,"brand":"宝骏","saleAmount":879077},{"id":8,"brand":"现代","saleAmount":790177},
    {"id":4,"brand":"哈弗","saleAmount":766062},{"id":19,"brand":"长安","saleAmount":673782}]
     */
    @RequestMapping(value = "/getCarBrandTop")
    @ResponseBody
    public List<CarBrandSale> getCarBrandTop(){
        return carSaleService.getCarBrandTop();
    }

    /*
    [{"id":1,"brand":"别克英朗","saleAmount":261920},{"id":2,"brand":"雪佛兰科沃兹","saleAmount":252108},
    {"id":3,"brand":"别克威朗","saleAmount":192174},{"id":4,"brand":"雪佛兰赛欧","saleAmount":154141},
    {"id":5,"brand":"福特福睿斯","saleAmount":150360},{"id":6,"brand":"雪佛兰迈锐宝","saleAmount":129458},
    {"id":7,"brand":"别克君威","saleAmount":100378},{"id":8,"brand":"别克君越","saleAmount":69709},
    {"id":9,"brand":"福特福克斯","saleAmount":66654},{"id":10,"brand":"凯迪拉克XTS","saleAmount":65010}]
     */
    //美系轿车销量top10
    @RequestMapping(value = "/getAmericaCarTop")
    @ResponseBody
    public List<CarBrandSale> getAmericaCarBrandTop(){
        return carSaleService.getAmericaCarBrandTop();
    }

    //英系轿车销量top10
    @RequestMapping(value = "/getBritainCarTop")
    @ResponseBody
    public List<CarBrandSale> getBritainCarBrandTop(){
        return carSaleService.getBritainCarBrandTop();
    }

    //自主系轿车销量top10
    @RequestMapping(value = "/getChinaCarTop")
    @ResponseBody
    public List<CarBrandSale> getChinaCarBrandTop(){
        return carSaleService.getChinaCarBrandTop();
    }

    //法系轿车销量top10
    @RequestMapping(value = "/getFranceCarTop")
    @ResponseBody
    public List<CarBrandSale> getFranceCarBrandTop(){
        return carSaleService.getFranceCarBrandTop();
    }

    //德系轿车销量top10
    @RequestMapping(value = "/getGermanyCarTop")
    @ResponseBody
    public List<CarBrandSale> getGermanyCarBrandTop(){
        return carSaleService.getGermanyCarBrandTop();
    }

    //意系轿车销量top10
    @RequestMapping(value = "/getItalyCarTop")
    @ResponseBody
    public List<CarBrandSale> getItalyCarBrandTop(){
        return carSaleService.getItalyCarBrandTop();
    }

    //日系轿车销量top10
    @RequestMapping(value = "/getJapanCarTop")
    @ResponseBody
    public List<CarBrandSale> getJapanCarBrandTop(){
        return carSaleService.getJapanCarBrandTop();
    }

    //韩系轿车销量top10
    @RequestMapping(value = "/getKoreaCarTop")
    @ResponseBody
    public List<CarBrandSale> getKoreaCarBrandTop(){
        return carSaleService.getKoreaCarBrandTop();
    }

    //瑞典系轿车销量top10
    @RequestMapping(value = "/getSwedenCarTop")
    @ResponseBody
    public List<CarBrandSale> getSwedenCarBrandTop(){
        return carSaleService.getSwedenCarBrandTop();
    }

    //各系轿车总销量 哪个系轿车较收欢迎
    /*
   [{"id":9,"country":"Sweden","saleAmount":57406},{"id":8,"country":"Korea","saleAmount":755462},
   {"id":7,"country":"Japan","saleAmount":2668470},{"id":6,"country":"Italy","saleAmount":248},
   {"id":5,"country":"Germany","saleAmount":3879609},{"id":4,"country":"France","saleAmount":154000},
   {"id":3,"country":"China","saleAmount":2369732},{"id":2,"country":"Britain","saleAmount":11061},
   {"id":1,"country":"America","saleAmount":1676001}]
     */
    @RequestMapping(value = "/getCarCountrySale")
    @ResponseBody
    public List<CarCountrySale> getCarCountrySale(){
        return carSaleService.getCarCountrySale();
    }

    /*
    [{"id":1,"country":"America","month1":183771,"month2":115898,"month3":141054,"month4":141687,"month5":124999,"month6":115751,"month7":106233,"month8":131052,"month9":158500,"month10":158290,"month11":159438,"month12":139328},
    {"id":2,"country":"Britain","month1":1062,"month2":654,"month3":864,"month4":1283,"month5":1348,"month6":1539,"month7":907,"month8":755,"month9":650,"month10":495,"month11":670,"month12":834},
    {"id":3,"country":"China","month1":203445,"month2":146958,"month3":229869,"month4":198703,"month5":205318,"month6":190490,"month7":161095,"month8":167542,"month9":189600,"month10":213449,"month11":228399,"month12":234988},
    {"id":4,"country":"France","month1":19713,"month2":8965,"month3":21160,"month4":17219,"month5":14616,"month6":13322,"month7":7634,"month8":10811,"month9":10118,"month10":11693,"month11":9665,"month12":9084},
    {"id":5,"country":"Germany","month1":439742,"month2":229527,"month3":340784,"month4":299699,"month5":317008,"month6":325308,"month7":290353,"month8":319955,"month9":349592,"month10":320729,"month11":342768,"month12":304144},
    {"id":6,"country":"Italy","month1":0,"month2":0,"month3":0,"month4":70,"month5":11,"month6":0,"month7":0,"month8":0,"month9":0,"month10":0,"month11":90,"month12":77},
    {"id":7,"country":"Japan","month1":248458,"month2":132248,"month3":227151,"month4":196006,"month5":221048,"month6":236499,"month7":219139,"month8":213176,"month9":231539,"month10":232672,"month11":267136,"month12":243398},
    {"id":8,"country":"Korea","month1":61112,"month2":40208,"month3":66307,"month4":68678,"month5":64927,"month6":79348,"month7":31146,"month8":54623,"month9":61174,"month10":66031,"month11":71075,"month12":90833},
    {"id":9,"country":"Sweden","month1":5561,"month2":3224,"month3":5103,"month4":4685,"month5":4696,"month6":5901,"month7":2708,"month8":3251,"month9":4370,"month10":8514,"month11":4423,"month12":4925}]
     */
    //各系轿车 每月销量走势
    @RequestMapping(value = "/getCarCountrySaleMonth")
    @ResponseBody
    public List<CarCountrySaleMonth> getCarCountrySaleMonth(){
        return carSaleService.getCarCountrySaleMonth();
    }

    //轿车 SUV MPV各月总销量走势
    /*
    [{"id":1,"brand":"car","month1":1162864,"month2":677682,"month3":1032292,"month4":928030,"month5":954016,"month6":968158,"month7":819215,"month8":901165,"month9":1005543,"month10":1011873,"month11":1083664,"month12":1027611},
    {"id":2,"brand":"suv","month1":1081222,"month2":652460,"month3":916709,"month4":808543,"month5":761316,"month6":740296,"month7":640526,"month8":740402,"month9":874577,"month10":870387,"month11":911238,"month12":984033},
    {"id":3,"brand":"mpv","month1":173979,"month2":120590,"month3":169962,"month4":131917,"month5":134436,"month6":125520,"month7":105441,"month8":119687,"month9":142781,"month10":138735,"month11":144935,"month12":170938}]
     */
    @RequestMapping(value = "/getAllSaleMonth")
    @ResponseBody
    public List<CarBrandSaleMonth> getAllSaleMonth(){
        return carSaleService.getAllSaleMonth();
    }


    //轿车 SUV MPV总销量 占比
    /*
    [{"id":1,"brand":"car","saleAmount":11572173},
    {"id":2,"brand":"suv","saleAmount":9981709},
    {"id":1,"brand":"mpv","saleAmount":1678921}]
     */
    @RequestMapping(value = "/getAllSale")
    @ResponseBody
    public List<CarBrandSale> getAllSale(){
        return carSaleService.getAllSale();
    }

    //各年龄段 普通汽车销量占比
    /*
    [{"id":1,"range":"-18","percent":"7%"},
    {"id":2,"range":"19-24","percent":"30%"},
    {"id":3,"range":"25-34","percent":"52%"},
    {"id":4,"range":"35-49","percent":"10%"},
    {"id":5,"range":"50-","percent":"1%"}]
     */
    @RequestMapping(value = "/getCarRangePercent")
    @ResponseBody
    public List<CarRangePercent> getCarRangePercent(){
        return carSaleService.getCarRangePercent();
    }

    //各年龄段 新能源汽车销量占比
    /*
    [{"id":1,"range":"-18","percent":"6%"},{"id":2,"range":"18-24","percent":"25%"},
    {"id":3,"range":"25-34","percent":"57%"},{"id":4,"range":"35-49","percent":"11%"},
    {"id":5,"range":"50-","percent":"1%"}]
     */
    @RequestMapping(value = "/getNewCarRangePercent")
    @ResponseBody
    public List<CarRangePercent> getNewCarRangePercent(){
        return carSaleService.getNewCarRangePercent();
    }

    //不同性别选择 普通汽车和新能源汽车的比例
    /*
    [{"id":1,"sex":"男","percent":"67%","kind":"普通汽车"},{"id":2,"sex":"女","percent":"33%","kind":"普通汽车"},
    {"id":3,"sex":"男","percent":"72%","kind":"新能源汽车"},{"id":4,"sex":"女","percent":"28%","kind":"新能源汽车"}]
     */
    @RequestMapping(value = "/getCarSexPercentKind")
    @ResponseBody
    public List<CarSexPercentKind> getCarSexPercentKind(){
        return carSaleService.getCarSexPercentKind();
    }

    //车辆舒适度 相关因素重要程度
    @RequestMapping(value = "/getCarFeatureImportance")
    @ResponseBody
    public List<FeatureImportance> getCarFeatureImportance(){
        return carSaleService.getCarFeatureImportance();
    }

}
