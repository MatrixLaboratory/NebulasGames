var NebPay = require("nebpay");
var nebPay = new NebPay();
var daojishi = document.getElementById('daojishi');
var donate = document.getElementById('donate');
var authortx = document.getElementById('author');
var pictx =document.getElementById('pic')
var shengmingtx = document.getElementById('shengming');
shengmingtx.onclick=shengming;
pictx.onclick=pic;
donate.onclick=donatein;
var addlifea = document.getElementById('add');
add.onclick=addlife;
var calca = document.getElementById('calc');
calca.onclick=claimwin;
authortx.onclick =author;
var checkinfo = document.getElementById('check');
checkinfo.onclick= getGame;
//addlifea.onclick=addlife();
var now = new Date().getTime();
var dappAddress = "n1tk16qMKYU9ioNa9mNjmSJC2g2s9kt7678";
//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if(typeof(webExtensionWallet) != "undefined"){
    
}else {
    
    layer.msg('请安装最新的星云钱包后刷新~');
    
}

//
//function wordTime($time) {
//    $time = (int) substr($time, 0, 10);
//    $int = time() - $time;
//    $str = '';
//    if ($int <= 30){
//        $str = sprintf('刚刚', $int);
//    }elseif ($int < 60){
//        $str = sprintf('%d秒前', $int);
//    }elseif ($int < 3600){
//        $str = sprintf('%d分钟前', floor($int / 60));
//    }elseif ($int < 86400){
//        $str = sprintf('%d小时前', floor($int / 3600));
//    }elseif ($int < 2592000){
//        $str = sprintf('%d天前', floor($int / 86400));
//    }else{
//        $str = date('Y-m-d H:i:s', $time);
//    }
//    return $str;
//}
function test(){
    
 
    var newnow = new Date().getTime();
    var see =((newnow)-now)/1000;
    console.log(see);
}
function addlife(){
    var to = dappAddress;
    var value = 0.0001;
    var func = "addlife"
    var args = "[\"" + 0 + "\"]";
    
    // var callArgs = "[\"" + document.getElementById("inputParameter").value.trim() + "\"]"; //in the form of ["args"]
    nebPay.call(to, value, func, args, {
                qrcode: {
                showQRCode: false
                },
                goods: {
                name: "test",
                desc: "test goods"
                },
                //callback: cbCallDapp
                listener: cbCallDapp
                });
}

function donatein(){
    var to = dappAddress;
    var value = 0.0001;
    var func = "donate"
    var args = "[\"" + 0 + "\"]";
    
    // var callArgs = "[\"" + document.getElementById("inputParameter").value.trim() + "\"]"; //in the form of ["args"]
    nebPay.call(to, value, func, args, {
                qrcode: {
                showQRCode: false
                },
                goods: {
                name: "test",
                desc: "test goods"
                },
                //callback: cbCallDapp
                listener: cbCallDapp
                });
    
}

function claimwin(){
    var to = dappAddress;
    var value = 0.000;
    var func = "claimwin"
    var args = "[\"" + 0 + "\"]";
    
    // var callArgs = "[\"" + document.getElementById("inputParameter").value.trim() + "\"]"; //in the form of ["args"]
    nebPay.call(to, value, func, args, {
                qrcode: {
                showQRCode: false
                },
                goods: {
                name: "test",
                desc: "test goods"
                },
                //callback: cbCallDapp
                listener: cbCallDapp
                });

}
function pic(){
    var test=parseInt(Math.random()*100);
    console.log(test);
    if(test<10){
           layer.msg('听说你也来比赛头铁');
    }else if(test>10 && test < 50){
        layer.msg('争当铁头娃');
        
    }else if(test>50 &&test<55){
        layer.msg('有些东西翻过来比较对');
        
    }else if(test>55 && test <90){
               layer.msg('贵在坚持');
    }else if(test>90 && test <92){
        layer.msg('134661245');
        
    }else{
        layer.msg('想联系作者吗，加个qq呗XD');
        
    }
    
}

function author(){
           layer.msg('独立开发者，第一批国内开发以太坊dapp游戏的开发者，多年编程经验，头很铁，就是喜欢做自己想做的游戏～任何bug反馈欢迎联系游戏danjinxiangsi@gmail.com -Ling ',{time:0,btn: ['确定'],shade: 0.8});
}
function shengming(){
    layer.msg('所有素材来自于开发性素材，合约一旦启动，开发者并无从里赚钱的功能，请放心玩耍。本游戏内置彩蛋，增加点点趣味性XD',{time:0,btn: ['确定'],shade: 0.8});
}

function cbCallDapp(resp){
  
    
}
function getbalance(){
    var func = "getBalace"
    var args = "[\"" + 0 + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    
}

function getTimestamp(){
    var func = "getTimeStamp"
    var args = "[\"" + 0 + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    
}

function getrnow(){
    var func = "getrnow"
    var args = "[\"" + 0 + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    
}
function getLast(){
    var func = "getLast"
    var args = "[\"" + 0 + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    
}
function getGame(){
    var func = "getGame"
    var args = "[\"" + 0 + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    
}
function getdiff(){
    var func = "getdiff"
    var args = "[\"" + 0 + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    
}



function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y+M+D+h+m+s;
}

setInterval("getTimestamp()", 60000);
window.addEventListener('message', function(e) {
                       
                        if(e.data.data){
                        if (!!e.data.data.neb_call){
                        var result = e.data.data.neb_call.result;
                        
                     
                        if (result === 'null'){
                        console.log("meidongxi")
                        } else{
                        try{
                             result = JSON.parse(e.data.data.neb_call.result);
                        if(result.last){
                        if(result.last !=null){
                        layer.msg('当前铁头娃:'+'<br>'+result.last+'<br>'+'当前奖金:<br>'+result.balance,{time:0,btn: ['确定'],shade: 0.8});
                        
                        }else{
                        layer.msg('当前没有铁头娃！');
                        
                        }
                        
                        
                        }else{
                        if(result!=0){
                        var newnow = new Date().getTime();
                     //   console.log("newnow:"+newnow);
                        var countdownno = (newnow-parseInt(result))/1000;
                     //   console.log("countdown:"+countdownno);
                        
                        if(countdownno>3600){
                        countdownno = 3600;
                        
                        }
                        var diff = (3600-countdownno)/60;
                        daojishi.innerHTML="倒计时："+parseInt(diff)+" min";
                        
                        }
                        
                        }
                        
                        }catch (err){
                        }
                        
                        if (!!result.key){
                        
                        }
                        }
                        }
                        }});
