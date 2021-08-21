var Dialogue =document.getElementById("dio");
var DialogueButton1 =document.getElementById("diobtn1");
var DialogueButton2 =document.getElementById("diobtn2");
var skip=document.getElementById("skip");
var warpDetect=document.getElementById('warp');
var play=1;
warpDetect.style.display="none";
DialogueButton1.style.display="none";
document.getElementById('fade').style.display="none";
var diaCount =0;
console.log(diaCount);



    function changeDialog(count)
    {   
        if(a[diaCount].button=='尋找女巫'){
            document.getElementById('fade').style.display="block";
            var timeoutID = setTimeout( function(){window.location.href='index2.html';}, 800);
            
            }

        console.log(diaCount);
        if(diaCount<a.length-1){diaCount +=count;}
        if(diaCount>0){DialogueButton1.style.display="block";}
      
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
        console.log(diaCount);
        if(a[diaCount].button=='GO！' ){
            if(play>0){
            
            warpDetect.style.display="block";
            DialogueButton2.style.display="none";
            DialogueButton1.style.display="none";
            Dialogue.style.display="none";
            diaCount++;
            Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
            DialogueButton2.innerHTML=a[diaCount].button;
            play=0;
            }
        }
        if(diaCount==a.length){diaCount=a.length-1;}
        
        
    }
    function changeDialogBack(count)
    { 
            console.log(diaCount);
            diaCount+=count;
            Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
            DialogueButton2.innerHTML=a[diaCount].button;
            console.log(diaCount);
            if(diaCount==0){ DialogueButton1.style.display="none";}

    }
    function skipToNext()
    {
        diaCount=a.length-1;
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
        if(diaCount>0){DialogueButton1.style.display="block";}
    }
    
let a = [
    {
        name:'太空船AI：',
        msg:'小隊們!',
        button:'Hey！',
    },
    {
        name:'太空船AI：',
        msg:'你們現在是偵茶號飛船的船員。我們偵茶號的任務是維護宇宙和平，接下來可能會遇到許多未知的任務及挑戰，你們準備好了嗎？',
        button:'準備好了！',
    },
    {
        name:'太空船AI：',
        msg:'今天收到一封緊急信函，透過本船轉譯，只能翻譯出部分資訊,由翻譯出來的資訊知道是一個外星人QQ發出的求救訊號,另外還有一部分為翻譯不成功的未知訊號。',
        button:'打開信件',
    },
    {
        name:'緊急信函',
        msg:'求救訊號：<br>　　ＳＯＳ！Ｌｏｓｔ　ｔｈｅ　ＵＦＯ　ｋｅｙｓ　ａｃｃｉｄｅｎｔａｌｌｙ．．．<br>　　ＱＱ　 ｂｅ　ｔｒａｐｐｅｄ　ｉｎ　Ｔａｉｗａｎ！<br>　　Ｐｌｅａｓｅ　ｈｅｌｐ　ｍｅ！<br><br>',
        button:'>　>　>',
    },

    {
        name:'緊急信函',
        msg:'<br>　　　雖然無法轉譯出來，但是翻譯程式歸納結果。知道每一個單字都分別對應到0~9其中一個數字，但究竟哪個單字對應哪個數字，還需要請你們幫忙找出！<br>　　　<br>　　　',
        button:'>　>　>',
    },
    {
        name:'以下就是無法翻譯的未知訊號(ciest, odin, siem等都是未翻譯出的單字)',
        msg:'<br>　　ciest + odin + siem + tri = chie + ciest + dva + piat<br>　　diev + odin = dva + piat + tri<br>　　tri * tri = diev<br>　　dva + odin + piat = vos<br>　　dva + dva + piat = die<br>　　vos - vos = nul<br>　　',
        button:'關閉信件',
    },
    {
        name:'太空船AI：',
        msg:'<br>　　　現在帶各位出發去處理 ✉️緊急信函！解救外星人ＱＱ！',
        button:'我知道了',
    },
    {
        name:'太空船AI',
        msg:'<br>　　　請各位系上安全帶！',
        button:'>　>　>',
    },
    {
        name:'太空船AI',
        msg:'<br>　　　準備起飛！',
        button:'GO！!',
    },
    {
        name:'太空船AI',
        msg:'<br>　　　咻～～～咻－－－咻～～～咻－－－＝＝＝ＥＥ',
        button:'GO！',
    },
    {
        name:'太空船AI',
        msg:'<br>　　　已到達目的地．．',
        button:'>　>　>',
    },
    {
        name:'太空船AI',
        msg:'<br>　　　已尋獲求救者外星人QQ．．．',
        button:'>　>　>',
    },
    {
        name:'太空船AI',
        msg:'<br>　　　情況了解當中．．．',
        button:'>　>　>',
    },
    {
        name:'太空船AI',
        msg:'原來，外星人ＱＱ來地球走過許多景點，玩遍台灣的森林遊樂區，但是在最後一天的行程中遺失了三把鑰匙，因此無法啟動ＵＦＯ，回不了家，只好發送ＳＯＳ請求救援．．．',
        button:'>　>　>',
    },
    {
        name:'太空船AI',
        msg:'等待救援時，ＱＱ沒有坐以待斃，問了民宿老闆，民宿老闆建議他去找北投的女巫：<h3>　　　　　　<i>利用神靈的力量，請北投女巫用占卜尋找線索。</i></h3>',
        button:'尋找女巫',
    },
]