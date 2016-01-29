
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	RURU-二次元游戏动漫周边_模玩_服饰_同人本预售平台网站
</title>
 <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no">
 <link href="/Img/favicon.ico" rel="icon">
  <script>
      ; (function() {
          var win = window, docElem = document.documentElement, timeoutId;

          setUnitA();
          docElem.setAttribute('data-dpr', win.devicePixelRatio);
          win.addEventListener('resize', delaySetUnitA, false);
          win.addEventListener('pageshow', function(e) {
              e.persisted && delaySetUnitA();
          }, false);

          function delaySetUnitA() {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(setUnitA, 300);
          }

          function setUnitA() {
              win.rem = docElem.getBoundingClientRect().width / 3.2;
              docElem.style.fontSize = win.rem + 'px';
          }
      })();
</script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?ddb7197d3bab71b701494b77bac40b78";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script><link href=/build/css/ruru.css?fileVer=v20160111" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="/Js/Public.js?fileVer=v20160111"></script>

    <script type="text/javascript" src="/build/vendor/zepto.js?fileVer=v20160111"></script>

    <script type="text/javascript" src="/build/vendor/base.js?fileVer=v20160111"></script>

    <script type="text/javascript" src="/build/vendor/flipsnap.js?fileVer=v20160111"></script>

</head>
<body>
    <form name="form1" method="post" action="index.aspx" id="form1">
<div>
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTE3NTA2MjU1MmRkQ1ivtn8HrgY0X09L9I8A63L9xmk=" />
</div>

    <div id="mainDiv">
        
        
<div style="display: none">
    <input type="text" id="txtmeunID" />
</div>
<div id="divmenu" style="display: none;">
    <div class="navigation">
        <div class="btn-close btn-close-r  J_closemenu" onclick="closeDivDialogMenu('')">
        </div>
        <a class="logo" href="http://m.ruru.la/"></a>
    </div>
    <div class="modal-global" style="display: block; -webkit-transform-origin: 0px 0px 0px;
        opacity: 1; -webkit-transform: scale(1, 1);">
        <div class="modal-global-inner">
            <div class="user">
                <!--未登录-->
                
                <div class="avatar">
                    <img src="/Img/ruruhead.png">
                </div>
                <div class="unlog">
                    <a class="log" style="padding-top: 0;" onclick="loginPage();" style="cursor: pointer;">
                        登录<b></b></a> <a class="reg" href="/UserCenter/regist.aspx">注册<b></b></a>
                </div>
                
            </div>
            <div class="navlist">
                <ul class="list">
                    <li class="item"><a href="http://m.ruru.la/">首页</a></li>
                    <li class="item"><a href="/Index/goodsTypeList.aspx">分类</a></li>
                    <li class="item"><a href="/Index/specialList.aspx">专题</a></li>
                </ul>
                <ul class="list">
                    <li class="item"><a href="/sitMessage/MessageList.aspx">我的消息
                        
                    </a></li>
                    <li class="item"><a href="/buyer/myBuy.aspx">我的订单
                        </a></li>
                    <li class="item"><a href="/buyer/shoppingCart.aspx">购物车
                        </a></li>
                    <li class="item"><a href="/buyer/myCoupon.aspx?OPType=manage">优惠券</a></li>
                </ul>
                <ul class="list">
                    <li class="item"><a href="/buyer/buyerAddresss.aspx">收货地址</a></li>
                    <li class="item"><a href="/UserCenter/updatePwd.aspx">修改密码</a></li>
                </ul>
                
            </div>
        </div>
    </div>
</div>
<div class="navigation" id="headerDiv">
    
    <div class="btn-search" id="divheaderleft1" onclick="window.location='/goods/SearchGoods.aspx'">
    </div>
    
    <div data-type="meun" class="btn-menu"  onclick="showDivDialogMenu('');">
    </div>
    
    <a class="logo" href="http://m.ruru.la/"></a>
    
</div>

<script language="javascript">

    //展示菜单
    var ifShowMenum = true;
    function showDivDialogMenu(mainID) {
        if (mainID == "") mainID = "mainDiv";
        if (!ifShowMenum) return;
        ifShowMenum = false;

        var _divmenuHtml = $("#divmenu").html();
        var ran = parseInt(Math.random() * 100000000);
        $("#txtmeunID").val(ran);
        _divmenuHtml = "<div id='" + ran + "'>" + _divmenuHtml + "</div>";
        $(document.body).append(_divmenuHtml);
        document.getElementById(mainID).style.display = "none";

        ifShowMenum = true;
    }
    //关闭菜单
    function closeDivDialogMenu(mainID) {

        var _selfID = $("#txtmeunID").val();
        if (mainID == "") mainID = "mainDiv";
        closeDivDialog(_selfID, mainID);
    }

    //心跳
    setInterval("xtlogin()", 1000 * 600);
    try {
        xtlogin();
    } catch (ex) {
        setTimeout("xtlogin()", 1000 * 2);
    }


    window.onload = function() {


    }
    
    
</script>


        
        <div class="main home">
            <div class="slide">
                <div class="block-img slide-inner">
                    <div class="span-img J_ww">
                        <div class="slide-show J_slide" style="width: 5.12rem;">
                            
                            <div class="item" onclick="bannerCilck(66,'http://m.ruru.la/goods/goodsDetails.aspx?goodsID=13549')" style="width: 2.56rem; background-image: url(http://imgcdn.ruru.la/banner/20160114040951850.jpg);">
                            </div>
                            
                            <div class="item" onclick="bannerCilck(60,'http:/m.ruru.la/goods/goodsDetails.aspx?goodsID=13621')" style="width: 2.56rem; background-image: url(http://imgcdn.ruru.la/banner/20160109032705787.jpg);">
                            </div>
                            
                            <div class="item" onclick="bannerCilck(57,'http://m.ruru.la/goods/goodsDetails.aspx?goodsID=13717')" style="width: 2.56rem; background-image: url(http://imgcdn.ruru.la/banner/20151231064738491.jpg);">
                            </div>
                            
                            <div class="item" onclick="bannerCilck(53,'http://m.ruru.la/goods/goodsDetails.aspx?goodsID=12912')" style="width: 2.56rem; background-image: url(http://imgcdn.ruru.la/banner/20151211100246278.jpg);">
                            </div>
                            
                            <div class="item" onclick="bannerCilck(51,'http://m.ruru.la/Index/specialZoneList.aspx?specialZoneID=24')" style="width: 2.56rem; background-image: url(http://imgcdn.ruru.la/banner/20151210035525566.jpg);">
                            </div>
                            
                            <div class="item" onclick="bannerCilck(67,'http://m.ruru.la/goods/goodsDetails.aspx?goodsID=13530')" style="width: 2.56rem; background-image: url(http://imgcdn.ruru.la/banner/20160118024343955.jpg);">
                            </div>
                            
                            <div class="item" onclick="bannerCilck(62,'http://m.ruru.la/goods/goodsDetails.aspx?goodsID=13120')" style="width: 2.56rem; background-image: url(http://imgcdn.ruru.la/banner/20160105033955021.jpg);">
                            </div>
                            
                            <div class="item" onclick="bannerCilck(49,'http://m.ruru.la/Index/specialInfo.aspx?specialID=13')" style="width: 2.56rem; background-image: url(http://imgcdn.ruru.la/banner/20151209025209833.jpg);">
                            </div>
                            
                        </div>
                    </div>
                    <div class="dots J_dots">
                        <span class="current"></span>
                        
                        <span></span>
                        
                        <span></span>
                        
                        <span></span>
                        
                        <span></span>
                        
                        <span></span>
                        
                        <span></span>
                        
                        <span></span>
                        
                    </div>
                </div>
                <div class="arrow">
                    <a class="left prev" href="javascript:void(0)"></a><a class="right next" href="javascript:void(0)">
                    </a>
                </div>
            </div>
            
           
          
            
            <h2 class="tit">
                春晚专区
                <a href="/Index/specialZoneList.aspx?specialZoneID=29" class="more arrow">
                    more<b></b></a></h2>
            <div class="rcol-1 block-2">
                
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A1095a819-f4a0-44fd-9fa1-2591290f6d39.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    ANIPLEX 物语系列 伪物语 忍野忍 小忍 浴缸 包邮预定</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    865</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=12223"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/Ac5289a54-3ffc-4da4-8ce9-44c61954edb8.png);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    漫踪正版小羊肖恩卡通影视周边冬季四件套 套装系列</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    286</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=12401"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/Ad5e1c984-ee45-4d7e-866b-268da15f4326.png);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    漫踪机动战士高达独角兽风衣报丧女妖动漫衣服周边秋冬外套</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    328</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=12404"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A46ecd984-f134-42a6-aec5-2fdf1632171d.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    GSC 星球大战 原力觉醒 风暴兵 帝国突击队 粘土人  包邮预定</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    265</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=12468"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/Abb62ee28-941e-46ea-b186-3cfdc37c4d1e.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    Broccoli 魔女的夜宴 绫地宁宁 1/7 手办 包邮预定</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    680</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=12526"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A90a61667-8fb7-43d0-9e9a-a70b5a6113fd.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    MaxFactory figma 如龙 桐生一马 手办 包邮预定</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    275</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=12612"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A20151110080406554.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    剑侠情缘网络版叁 2016丙申年全彩十二门派主题同人手帐 剑网3</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    68</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=12912"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A6132ddc0-41fb-4b8b-a664-38cb46e671ce.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    熊霸 印象款拖鞋 冬季保暖 必备 预售 萌之境界 原创设计</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    59</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=12924"></a>
                        </div>
                    </div>
                    
                </div>
                
            <div class="topic">
                <div class="rcol-1 block-2">
                    <div class="item">
                        <div class="block-img" style="padding-top: 30%">
                            <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/specialImg/20160126063904568.jpg);">
                            </div>
                        </div>
                        <div class="info">
                            <div class="name nowrap">
                                机动战士高达 - 共振</div>
                        </div>
                        <a class="alink" href="/Index/specialInfo.aspx?specialID=30">
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="topic">
                <div class="rcol-1 block-2">
                    <div class="item">
                        <div class="block-img" style="padding-top: 30%">
                            <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/specialImg/20160125074850564.jpg);">
                            </div>
                        </div>
                        <div class="info">
                            <div class="name nowrap">
                                它们诞生背后的故事</div>
                        </div>
                        <a class="alink" href="/Index/specialInfo.aspx?specialID=29">
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="topic">
                <div class="rcol-1 block-2">
                    <div class="item">
                        <div class="block-img" style="padding-top: 30%">
                            <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/specialImg/20160120064335532.jpg);">
                            </div>
                        </div>
                        <div class="info">
                            <div class="name nowrap">
                                江湖情，剑侠缘。</div>
                        </div>
                        <a class="alink" href="/Index/specialInfo.aspx?specialID=28">
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="topic">
                <div class="rcol-1 block-2">
                    <div class="item">
                        <div class="block-img" style="padding-top: 30%">
                            <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/specialImg/20160114044333971.jpg);">
                            </div>
                        </div>
                        <div class="info">
                            <div class="name nowrap">
                                全职高手，荣耀不败</div>
                        </div>
                        <a class="alink" href="/Index/specialInfo.aspx?specialID=25">
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="topic">
                <div class="rcol-1 block-2">
                    <div class="item">
                        <div class="block-img" style="padding-top: 30%">
                            <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/specialImg/20160108031143042.jpg);">
                            </div>
                        </div>
                        <div class="info">
                            <div class="name nowrap">
                                RU推荐</div>
                        </div>
                        <a class="alink" href="/Index/specialInfo.aspx?specialID=24">
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="topic">
                <div class="rcol-1 block-2">
                    <div class="item">
                        <div class="block-img" style="padding-top: 30%">
                            <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/specialImg/20160106084632929.jpg);">
                            </div>
                        </div>
                        <div class="info">
                            <div class="name nowrap">
                                送膝盖系列</div>
                        </div>
                        <a class="alink" href="/Index/specialInfo.aspx?specialID=23">
                        </a>
                    </div>
                </div>
            </div>
            
            <h2 class="tit">
                新品loading
                <a href="/Index/specialZoneList.aspx?specialZoneID=6" class="more arrow">
                    more<b></b></a></h2>
            <div class="rcol-1 block-2">
                
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/Ac2eb1a3c-0d6f-4c5c-b8b4-9468f1e2cefe.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    神物！  1：1  MK-43 钢铁侠可穿戴头盔  限量版</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    1080</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13845"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/Ac1282197-bbfd-4e68-88c0-88a627dcf94b.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    MaxFactory figFIX 舰队Collection 雪风 中破Ver. 日版 手办 包邮预</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    290</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13844"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/Aa5e4d772-8b87-460e-8eba-41cda22fe33b.png);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    MegaHouse G.E.M.系列 数码宝贝 加鲁鲁兽&石田大和</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    545</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13843"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A1b0cc696-4c25-4b48-b7a7-c495fa0461ab.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    现货 包邮 亿辉拼装模型第二弹 合金弹头 小坦克 可动全内构 送特典</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    99</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13638"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A0bcd9c63-d214-4a10-9ea9-c1d15b098144.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    MF figma 257 Fate UBW 远坂凛 2.0 制服</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    260</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13820"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A8abd6610-894f-4d1b-b451-b41cfc130f1d.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    MaxFactory 赛车初音未来 2014 EV MIRAI VER.1/7 手办 日版现货包邮</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    800</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13821"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A21802890-d480-406d-91ce-66ae6004434c.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    GSC 粘土 457 伪恋 小野寺小咲  再版 包邮</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    186</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13822"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A888dceab-d5be-48c3-b176-60acf5908387.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    PHAT Medicchu 舰队collection 舰娘 雪风 GSC 粘土 日版</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    140</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13823"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A37f90e41-f1ea-4bf9-9440-5084f8e7993e.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    GSC 粘土 525号 刀剑乱舞 小狐丸 特典版现货</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    235</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13826"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/Aa965c6a4-67fb-4a33-9796-6abdc71b84a1.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    WAVE BEACH QUEENS Love Live！南小鸟 现货</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    260</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13827"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                    <div class="item left">
                        
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/Adf503291-8a99-4e88-a4f0-63f1ed3abea4.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    GSC 粘土人  2014 雪初音 魔法音 现货包邮</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    366</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13828"></a>
                        </div>
                    </div>
                    
                <div class="rcol-2">
                    
                        <div class="item right">
                            
                            <div class="block-img" style="padding-top: 59%">
                                <div class="span-img" style="background-image: url(http://imgcdn.ruru.la/goodsImg/A7f5f26c5-3deb-447f-b0d9-851518179554.jpg);">
                                </div>
                            </div>
                            <div class="info">
                                <div class="name nowrap">
                                    手办 海洋堂 山口可动 胡迪 玩具总动员 再版 现货包邮</div>
                                <div class="price">
                                    <em class="yen">&yen; </em>
                                    230</div>
                            </div>
                            <a class="alink" href="/goods/goodsDetails.aspx?goodsID=13829"></a>
                        </div>
                    </div>
                    
                </div>
                
                
                
                
                
            </div>
            <div class="foot">
                <ul class="list">
                    <li><a class="arrow" href="/UserCenter/xyNr.aspx?infType=34"><b></b>预售规则条款</a></li>
                    <li><a class="arrow" href="/UserCenter/xyNr.aspx?infType=35"><b></b>用户服务条款</a></li>
                    <li><a class="arrow" href="/UserCenter/xyNr.aspx?infType=36"><b></b>关于我们</a></li>
                    <li><a class="arrow" href="/sitMessage/sxSpeak.aspx?LinkManUserGUID=47661ACD-DFEB-4B62-8310-CC84E52B55D0"><b></b>联系我们</a></li>
                    
                    <li><a class="arrow" href="/UserCenter/xyNr2.aspx?announcementInfoID=19">
                        <b></b>
                        常见问题</a></li>
                    
                </ul>
                <div class="copyright">
                    <p>
                        杭州巨聚网络技术有限公司是一家致力于二次元交流的网络公司
                    <p>
                        RURU是杭州巨聚网络技术有限公司旗下二次元专属的预售，贩卖平台
                    <p>
                        杭州巨聚网络技术有限公司版权所有
                    <p>
                        2014-2015 ruru.la All rights reserved
                        <br />
                        浙ICP备14031324号 － 2
                </div>
            </div>
        </div>
    </form>
</body>
</html>

<script>

    (function() {

        // headerInit("100110", "", "headerDiv");
        // 幻灯方法
        function initSlide() {
            if ($('.J_slide').length <= 0) return;
            var $items = $('.J_slide .item');
            if ($items.length <= 0) {
                $('.J_dots').remove();
                return;
            }
            var w = $('.J_ww').width();
            //  logger(w);
            var $pointer = $('.J_dots span');
            if ($items.length <= 1) return;
            $items.width(w);
            $('.J_slide').width(w * $items.length);
            window.flipsnap = Flipsnap('.J_slide', {
                distance: w,
                transitionDuration: 100
            });
            var $next = $('.next').click(function() {
                flipsnap.toNext();
            });
            var $prev = $('.prev').click(function() {
                flipsnap.toPrev();
            });
            flipsnap.element.addEventListener('fstouchstart', function(ev) {
                //$('#J_myfri').css('display', 'none');
            }, false);
            flipsnap.element.addEventListener('fspointmove', function() {
                $pointer.filter('.current').removeClass('current');
                $pointer.eq(flipsnap.currentPoint).addClass('current');
            }, false);
        }
        setTimeout(function() {
            initSlide();
        }, 200)

    })();

    function bannerCilck(bannerID, bannerurl) {
        accessLog(520, bannerID, bannerurl);
        if (bannerurl != "")
            goUrl(bannerurl);
    }

</script>