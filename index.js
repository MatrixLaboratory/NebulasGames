var NebPay = require("nebpay");
var nebPay = new NebPay();
var daojishi = document.getElementById('daojishi');
var donate = document.getElementById('donate');
var addlifea = document.getElementById('add');
add.onclick=addlife;
var calca = document.getElementById('calc');
calca.onclick=claimwin;

var checkinfo = document.getElementById('check');
checkinfo.onclick= getGame;
//addlifea.onclick=addlife();
var now = new Date().getTime();
var dappAddress = "n1rAkcvWrwpF2tEonLw9S3etuy3ADjXeZuN";
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
