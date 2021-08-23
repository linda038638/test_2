var Dialogue =document.getElementById("dio");
var DialogueButton1 =document.getElementById("diobtn1");
var DialogueButton2 =document.getElementById("diobtn2");
var skip=document.getElementById("skip");
var warpDetect=document.getElementById('warp');
var img =document.getElementById("dialogue");        //圖片
var imgQQ =document.getElementById("dialogueQQ");    //圖片
var play=1;
DialogueButton1.style.display="none";
document.getElementById("flipbook").style.display="none";

            //img.style.display="none";  //圖片先關
            imgQQ.style.display="none"; //圖片先關

var diaCount =0;
console.log(diaCount);

    window.onlod=loadFadeIn();
    
    
    function loadFadeIn()
    {
        document.getElementById('fade').style.display="block";
        var timeoutID = setTimeout( function(){console.log('eded');document.getElementById('fade').style.display="none";}, 2000);
        
    }

    function changeDialog(count)
    {
        
        if(a[diaCount].button=='謝謝！我們出發了！'){
            //alert("此頁結束。\n快去下一頁吧!!!");
            DialogueButton2.disabled=true;}
            
            
        console.log(diaCount);
        if(diaCount<a.length-1){diaCount +=count;}
        if(diaCount>0){DialogueButton1.style.display="block";}
      
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
        imgchange(a[diaCount].src); //圖片
        console.log(diaCount);
        if(a[diaCount-1].button=='拿日記' ){ document.getElementById("flipbook").style.display="block";}
        if(diaCount==a.length){diaCount=a.length-1;}

        
    }
    function changeDialogBack(count)
    {
        DialogueButton2.disabled=false;
        if(a[diaCount-1].name=='日記' ){ diaCount--;}
        console.log(diaCount);
        diaCount+=count;
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
        imgchange(a[diaCount].src); //圖片
        console.log(diaCount);
        if(diaCount==0){ DialogueButton1.style.display="none";}
        
    }
    function skipToNext()
    {
        diaCount=a.length-1;
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
        if(diaCount>0){DialogueButton1.style.display="block";}
        imgchange(a[diaCount].src); //圖片
    }

    function imgchange(psw){  //傳入路徑string a[diaCount].src
        
        img.src=psw;
        imgQQ.src=psw;
        console.log("imgchange");
        switch (a[diaCount].name) {
            case "女巫：" :
                img.style.display="block";
                imgQQ.style.display="none";
                break;
             case "．．．．" :
                img.style.display="block";
                imgQQ.style.display="none";
                break;
            case "ＱＱ：" :
                imgQQ.style.display="block";
                img.style.display="none";
                break;
            
            case "．．．" :
                imgQQ.style.display="block";
                img.style.display="none";
                break;
            default :
            img.style.display="none";
            imgQQ.style.display="none";
            console.log("idf");
        }
    }

    function ClosePop(){
        document.getElementById("flipbook").style.display="none";
    }
let a = [
    {
        name:'',
        msg:'偵茶號帶著大家和ＱＱ一起到北投尋找神靈的力量，進行北投女巫的占卜。',
        button:'找女巫',
        src:"",
    },
    {
        name:'女巫：',
        msg:'你遺失了很重要的東西，需要我幫你占卜掉在哪裡吧？',
        button:'>　>　>',
        src:"img/witch/6.png",
    },
    {
        name:'ＱＱ：',
        msg:'(ＱＱ點頭如搗蒜。)',
        button:'>　>　>',
        src:"img/QQ/2.png",
    },
    {
        name:'女巫：',
        msg:'．．．．．．',
        button:'>　>　>',
        src:"img/witch/10.png",
    },
    {
        name:'女巫：',
        msg:'那麼我就直接占卜了。',
        button:'>　>　>',
        src:"img/witch/1.png",
    },
    {
        name:'女巫：',
        msg:'　（噗嚕嚕嚕噗女巫占卜中孤呼呼哩拉拉）<br>　　出來了，出來了，你的鑰匙被遺落在三個地方。',
        button:'在哪裡！',
        src:"img/witch/7.png",
    },
    {
        name:'女巫：',
        msg:'１. <font color="#FF0000">紅色的鑰匙</font>掉在最後一天去過．．．．．．之中．．．．．．地方<br>　　２. <font color="#02CA73">綠色的鑰匙</font>掉在最後一天去過．．．．．．之中．．．．．．地方<br>　　３. <font color="#3DB5FF">藍色的鑰匙</font>掉在最後一天去過．．．．．．之中．．．．．．地方',
        button:'>　>　>',
        src:"img/witch/2.png",
    },
    {
        name:'ＱＱ：',
        msg:'<br>　　Σ(ﾟДﾟ；≡；ﾟдﾟ)  @^G@%#**(%',
        button:'根本聽不懂',
        src:"img/QQ/2.png",
    },
    {
        name:'飛船AI：',
        msg:'ＱＱ說他忘記他最後一天去過哪些地方了。',
        button:'>　>　>',
        src:"",
    },
    {
        name:'女巫：',
        msg:'那我再幫你占卜一次。',
        button:'>　>　>',
        src:"img/witch/3.png",
    },
    {
        name:'女巫：',
        msg:'　（噗嚕嚕嚕噗女巫占卜中孤呼呼哩拉拉）<br>　　你最後一天去過的地方就在這些點、線組成的面之內，來，你來看看。',
        button:'>　>　>',
        src:"img/witch/7.png",
    },
    {
        name:'ＱＱ：',
        msg:'　　（ＱＱ滿是興奮地把走到女巫身後）',
        button:'>　>　>',
        src:"img/QQ/2.png",
    },
    {
        name:'ＱＱ：',
        msg:'　　正當ＱＱ把頭伸過去時，占卜突然爆走．．．',
        button:'>　>　>',
        src:"img/QQ/2.png",
    },
    {
        name:'爆炸',
        msg:'　　普嚕嚕嚕———卡拉卡拉——-—骨錄骨錄———<br>　　繃咻～～～～～－－－－咻～～～～～～阿．．． ',
        button:'>　>　>',
        src:"",
    },
    {
        name:'．．．',
        msg:'點飛走了．．．<br>　　線也飛走了．．．<br>　　面完全不見了．．．',
        button:'>　>　>',
        src:"img/QQ/2.png",
    },
    {
        name:'．．．．',
        msg:'<br>　　．．．．．．',
        button:'>　>　>',
        src:"img/witch/7.png",
    },
    {
        name:'．．．',

        msg:'　　．．．       <br>　　 這下ＱＱ真的ＱＱ了．．．',
        button:'．．．．．．',
        src:"img/QQ/2.png",
    },

    {
        name:'女巫：',
        msg:'(女巫大喊)不、還有機會！仔細看，那些點和線，飛進<font color="#5CADAD">茶葉座標</font>和<font color="#AD5A5A">黑心茶商的走私路線</font>裡面了！        ',
        button:'什麼!?',
        src:"img/witch/8.png",
    },
    {
        name:'女巫：',
        msg:'　　在魔力消散之前，都還能看到占卜的結果！',
        button:'原來如此！',
        src:"img/witch/4.png",
    },
    {
        name:'飛船AI：',
        msg:'　　那我們快去找回來吧！',
        button:'>　>　>',
        src:"",
    },
    {
        name:'ＱＱ：',
        msg:'^%#$#H$ˋ%@＼(＠＾０＾＠)/！',
        button:'>　>　>',
        src:"img/QQ/2.png",
    },
    {
        name:'女巫：',
        msg:'等等！(ＱＱ走出門後，女巫偷偷拉住了你，有事情要私下和你聊聊。)',
        button:'秘密對話',
        src:"img/witch/12.png",
    },
    {
        name:'女巫：',
        msg:'剛剛占卜了ＱＱ的未來，這個占卜不能讓ＱＱ本人知道，看見未來是危險的事情。        ',
        button:'是什麼呢？',
        src:"img/witch/11.png",
    },
    {
        name:'女巫：',
        msg:'ＱＱ未來會寫一本像是日記的東西，但是有很多內容我看不懂。',
        button:'>　>　>',
        src:"img/witch/5.png",
    },
        {
        name:'女巫：',
        msg:'（女巫透過魔力秀出一本小小的書，上面寫了許多東西，夾雜著外星文。）',
        button:'拿日記',
        src:"img/witch/9.png",
    },
    {
        name:'日記',
        msg:'        ',
        button:'>　>　>',
        src:"img/witch/1.png",
    },
    {
        name:'　',
        msg:'（你翻了翻，偏偏…最後一天的日記全部都是用外星文寫的！）        ',
        button:'>　>　>',
        src:"",
    },
    {
        name:'女巫：',
        msg:'占卜感應了部分日記，了解到外星人QQ到每個地點都會喝茶，所以只要循著QQ品茶之旅最後一天的足跡，就能找到遺失的鑰匙。',
        button:'原來如此',
        src:"img/witch/4.png",
    },
    {
        name:'女巫：',
        msg:'我想這應該能夠幫助你們找到ＱＱ遺失的鑰匙！加油吧！<font color="yellow"><br>　　(故事說明結束囉^0^/"~)</font>',
        button:'謝謝！我們出發了！',
        src:"img/witch/1.png",
    },
]