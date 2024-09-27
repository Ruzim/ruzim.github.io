//不会jQuery, 还是老老实实地用js吧
// fadeOut 效果不好, 不用了
let oButton = document.querySelector("button");
oButton.innerHTML = "开始吧！";
let oPromptMessage = document.querySelector("#promptMessage");
oPromptMessage.innerHTML = "去哪儿自习呢？";
let oDisplay = document.querySelector("#rollDisplay");
let isRolling = false;
let iRoll = 0;
var elementsForBarrage = [];
//var arrStr = ['Mehvish', 'Tahir', 'John', 'Sania', 'Thomas'];

var placesForRoll = 
['科大一环','也西湖小亭子','天鹅窝','鸣蛙听月','气膜馆','加速器',
'西区图书馆','1958咖啡厅','近邻宝','严济慈广场','芦花映雪小亭子','西区专家楼',
'图书教育中心A楼','图书教育中心B楼','图书教育中心C楼','高新区师生活动中心','信智楼','未来中心',
'综合体育馆','艺术教学中心','人文楼','西区1958', 
'郭沫若广场','老图书馆','新图书馆','校史馆','档案馆','东区澡堂','水上报告厅','东区大礼堂',
'一教1101','一教1102','一教1109','一教1115','一教1201','一教1202','一教1301','一教1302',
'二教2103','二教2104','二教2105','二教2106','二教2121','二教2202','二教2203','二教2208',
'二教2209','二教2210','二教2211','二教2301','二教2302','二教2303','二教2304','二教2305',
'二教2306','二教2307','二教2308','二教2309','二教2321','二教2401','二教2402','二教2403',
'二教2404','二教2405','二教2406','二教2407','二教2408','二教2409','二教2421','二教2502',
'二教2503','二教2504','二教2505','二教2506','二教2507','二教2509','二教2603','二教2604',
'二教2605','二教2606','二教2607','二教2608','二教2621',
'二教2103','二教2104','二教2105','二教2106','二教2121','二教2202','二教2203','二教2208',
'二教2209','二教2210','二教2211','二教2301','二教2302','二教2303','二教2304','二教2305',
'二教2306','二教2307','二教2308','二教2309','二教2321','二教2401','二教2402','二教2403',
'二教2404','二教2405','二教2406','二教2407','二教2408','二教2409','二教2421','二教2502',
'二教2503','二教2504','二教2505','二教2506','二教2507','二教2509','二教2603','二教2604',
'二教2605','二教2606','二教2607','二教2608','二教2621',
'三教3A102','三教3A103','三教3A104','三教3A105','三教3A106','三教3A107','三教3A108',
'三教3A102','三教3A103','三教3A104','三教3A105','三教3A106','三教3A107','三教3A108',
'三教3A109','三教3A110','三教3A111','三教3A112','三教3A113','三教3A201','三教3A202',
'三教3A203','三教3A204','三教3A205','三教3A206','三教3A207','三教3A208','三教3A209',
'三教3A210','三教3A211','三教3A212','三教3A213','三教3A301','三教3A302','三教3A303',
'三教3A304','三教3A305','三教3A306','三教3A307','三教3A308','三教3A309','三教3A310',
'三教3A311','三教3A312','三教3A313','三教3A314','三教3A315','三教3A316','三教3A317',
'三教3A318','三教3A401','三教3A402','三教3A403','三教3A404','三教3A405','三教3A406',
'三教3A407','三教3A408','三教3A409','三教3A411','三教3A412',
'三教3B101','三教3B102','三教3B103','三教3B201','三教3B202',
'三教3C101','三教3C102','三教3C103','三教3C104','三教3C201','三教3C202','三教3C203','三教3C204',
'三教3C301','三教3C302','三教3C303','三教3C304',
'三教3C101','三教3C102','三教3C103','三教3C104','三教3C201','三教3C202','三教3C203','三教3C204',
'三教3C301','三教3C302','三教3C303','三教3C304',
'五教5102','五教5103','五教5104','五教5106','五教5107','五教5201','五教5202','五教5203',
'五教5204','五教5205','五教5206','五教5207','五教5301','五教5302','五教5303','五教5304',
'五教5305','五教5306','五教5307','五教5401','五教5402','五教5403','五教5404','五教5405',
'五教5406','五教5407','五教5501','五教5502','五教5503','五教5504','五教5505','云端自习室(校友)',
'回宿舍打游戏吧','KTX','青年之家','桃李苑'];

var placesForBarrage = ['三教A楼','也西湖小亭子','天鹅窝','鸣蛙听月','气膜馆','加速器',
'西区图书馆','生命科学大楼','三教B楼','三教C楼','芦花映雪','西区专家楼','五教','东区糕点房','钱学森像',
'二教','东区专家楼','力一楼','力二楼','力五楼','力三楼','力四楼','东苑餐厅','篮球场','足球场',
'郭沫若广场','老图书馆','新图书馆','校史馆','档案馆','东区澡堂','水上报告厅','材料楼','HX书店',
'东区大礼堂','一教','严济慈广场','东活','西活','眼镜湖','孺子牛','二里河','环资楼','一心亭',
'物质科研楼','出版社','地空楼','南区体育馆','芳华餐厅','正阳楼','金桔园','火灾楼','一鉴亭',
'西区校车站','东区校车站','南区校车站','电二楼','电一楼','电三楼','电四楼','教工餐厅',
'理化大楼','中区游泳馆','东区1958咖啡馆','东区理发店','西区理发店','中科超市','医学中心',
'牛牛国际','校医院','学生服务中心','美食广场','花房','网球场','南区食堂','芳华园','芳华餐厅',
'信智楼','师生活动中心','未来中心','图书教育中心','KTX','综合体育馆','艺术教学中心','西苑',
'矽谷','西一餐厅','西二餐厅','西三餐厅','星座','中区糕点房','桃李苑','夜食部','西区1958','人文楼'];

var refreshIntervalId ;
var barrageTimer;
oButton.onclick = function() {
    
    if (!isRolling) {
        isRolling = true;
        oPromptMessage.innerHTML = "去哪儿自习呢？";
        this.innerHTML = "停！";
        run();
        refreshIntervalId = setInterval(run,100);
        ///for (let i = 0; i<100; i++){
        //    barrageOnScreen();
        //}
        barrageTimer = setInterval(barrageOnScreen, 500);
    } else {
        isRolling = false;
        oPromptMessage.innerHTML = "就去这里&#8595;自习吧 ";
        iRoll++;
        this.innerHTML = "不想去，换个地方";
        stopRoll();
        clearInterval(barrageTimer);
        barrageFadeOut(); //fadeOut is not working well
    }
    
    if (iRoll >= 6) {
        alert("666，别犹豫了.要不还是去操场锻炼吧！");
        this.disabled=true;
        this.style.display = 'none';
    }
}


let barrageOnScreen=() => {
    if (elementsForBarrage.length>=200) {return 1;}
    let randPlace = placesForBarrage[Math.floor(Math.random() * placesForBarrage.length)];
    let y = Math.ceil(30+Math.random() * (document.documentElement.clientHeight-60)); 
    let x = Math.ceil(30+Math.random() * (document.documentElement.clientWidth -100));
    let fontSize = Math.ceil(Math.random() * (37 - 11) + 11);
    let color = randomHexColor();
    let tempSticker = document.createElement("span");
    document.body.appendChild(tempSticker);
    tempSticker.style.display = 'block';
        tempSticker.innerHTML = randPlace;
        tempSticker.style.position='absolute';
        tempSticker.style.top = y+'px';
        tempSticker.style.left = x+'px';
        tempSticker.style.fontSize = fontSize+'px';
        tempSticker.style.color = color;
        
    
    //console.log("x= " +x+" y= "+y);
    fadeIn(tempSticker);
    elementsForBarrage.push(tempSticker);
    //console.log("fadeIn finished");
    //fadeOut(tempSticker);
    //tempSticker.remove();
}

let barrageFadeOut=() => {
    while (elementsForBarrage.length >0 ) {
        element = elementsForBarrage.pop();
        //fadeOut(element);
        element.remove();
    }
}

function fadeIn(element) {
    //console.log(element.style);
      // Initilize the opacity with 0.1
      let initOpacity = 0.15;
      //element.style.display = 'none';
      element.style.opacity = initOpacity;
      // Update the opacity with 0.1 every 10 milliseconds
      let timer = setInterval(function () {
        if (initOpacity >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = initOpacity;
        element.style.filter = 'alpha(opacity=' + initOpacity * 100 + ")";
        initOpacity += 0.04;
        //console.log(" fadeIn, opacity= "+ element.style.opacity);
      }, 200);
} 

function fadeOut(element) {
    //console.log(element.style);
    initOpacity = element.style.opacity;
      // Update the opacity with 0.1 every 10 milliseconds
      const timer = setInterval(function () {
        if (initOpacity <= 0.01) {
          clearInterval(timer);
          element.remove();
        }
        element.style.opacity = initOpacity;
        element.style.filter = 'alpha(opacity=' + initOpacity * 100 + ")";
        initOpacity -= initOpacity*0.1;
        //console.log(" fadeOut, opacity= "+ element.style.opacity);
      }, 500);
} 



let run=() => {
    let randElement = placesForRoll[Math.floor(Math.random() * placesForRoll.length)];
    //console.log(randElement);
    oDisplay.innerHTML = randElement;
}

let stopRoll=() => {
    clearInterval(refreshIntervalId);
}


function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

//run();
//console.log(3%12);
///var refreshIntervalId = setInterval(run,500);
