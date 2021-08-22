var Dialogue =document.getElementById("dio");
var DialogueButton1 =document.getElementById("diobtn1");
var DialogueButton2 =document.getElementById("diobtn2");
var skip=document.getElementById("skip");
var warpDetect=document.getElementById('warp');
var play=1;
DialogueButton1.style.display="none";
document.getElementById("flipbook").style.display="none";
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
            alert("此頁結束。\n快去下一頁吧!!!");}
            
            
        console.log(diaCount);
        if(diaCount<a.length-1){diaCount +=count;}
        if(diaCount>0){DialogueButton1.style.display="block";}
      
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
        console.log(diaCount);
        if(a[diaCount-1].button=='拿日記' ){ document.getElementById("flipbook").style.display="block";}
        if(diaCount==a.length){diaCount=a.length-1;}
        
    }
    function changeDialogBack(count)
    {
        if(a[diaCount-1].name=='日記' ){ diaCount--;}
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
    function ClosePop(){
        document.getElementById("flipbook").style.display="none";
    }
let a = [
    {
        name:'',
        msg:'偵茶號帶著大家和ＱＱ一起到北投尋找神靈的力量，進行北投女巫的占卜。',
        button:'找女巫',
    },
    {
        name:'女巫：',
        msg:'你遺失了很重要的東西，需要我幫你占卜掉在哪裡吧？',
        button:'>　>　>',
    },
    {
        name:'ＱＱ：',
        msg:'(ＱＱ點頭如搗蒜。)',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'．．．．．．',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'那麼我就直接占卜了。',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'　（噗嚕嚕嚕噗女巫占卜中孤呼呼哩拉拉）<br>　　出來了，出來了，你的鑰匙被遺落在三個地方。',
        button:'在哪裡！',
    },
    {
        name:'女巫：',
        msg:'１. <font color="#FF0000">紅色的鑰匙</font>掉在最後一天去過．．．．．．之中．．．．．．地方<br>　　２. <font color="#02CA73">綠色的鑰匙</font>掉在最後一天去過．．．．．．之中．．．．．．地方<br>　　３. <font color="#3DB5FF">藍色的鑰匙</font>掉在最後一天去過．．．．．．之中．．．．．．地方',
        button:'>　>　>',
    },
    {
        name:'ＱＱ：',
        msg:'<br>　　Σ(ﾟДﾟ；≡；ﾟдﾟ)  @^G@%#**(%',
        button:'根本聽不懂',
    },
    {
        name:'太空船AI：',
        msg:'ＱＱ說他忘記他最後一天去過哪些地方了。',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'那我再幫你占卜一次。',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'　（噗嚕嚕嚕噗女巫占卜中孤呼呼哩拉拉）<br>　　你最後一天去過的地方就在這些點、線組成的面之內，來，你來看看。',
        button:'>　>　>',
    },
    {
        name:'ＱＱ：',
        msg:'　　（ＱＱ滿是興奮地把走到女巫身後）',
        button:'>　>　>',
    },
    {
        name:'ＱＱ：',
        msg:'　　正當ＱＱ把頭伸過去時，占卜突然爆走．．．',
        button:'>　>　>',
    },
    {
        name:'爆炸',
        msg:'　　普嚕嚕嚕———卡拉卡拉——-—骨錄骨錄———<br>　　繃咻～～～～～－－－－咻～～～～～～阿．．． ',
        button:'>　>　>',
    },
    {
        name:'．．．',
        msg:'點飛走了．．．<br>　　線也飛走了．．．<br>　　面完全不見了．．．',
        button:'>　>　>',
    },
    {
        name:'．．．',
        msg:'<br>　　．．．．．．',
        button:'>　>　>',
    },
    {
        name:'．．．',

        msg:'　　．．．       <br>　　 這下ＱＱ真的ＱＱ了．．．',
        button:'．．．．．．',
    },

    {
        name:'女巫：',
        msg:'(女巫大喊)不、還有機會！仔細看，那些點和線，飛進<font color="#5CADAD">茶葉座標</font>和<font color="#AD5A5A">黑心茶商的走私路線</font>裡面了！        ',
        button:'什麼!?',
    },
    {
        name:'女巫：',
        msg:'　　在魔力消散之前，都還能看到占卜的結果！',
        button:'原來如此！',
    },
    {
        name:'飛船AI：',
        msg:'　　那我們快去找回來吧！',
        button:'>　>　>',
    },
    {
        name:'ＱＱ：',
        msg:'^%#$#H$ˋ%@＼(＠＾０＾＠)/！',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'等等！(ＱＱ走出門後，女巫偷偷拉住了你，有事情要私下和你聊聊。)',
        button:'秘密對話',
    },
    {
        name:'女巫：',
        msg:'剛剛占卜了ＱＱ的未來，這個占卜不能讓ＱＱ本人知道，看見未來是危險的事情。        ',
        button:'是什麼呢？',
    },
    {
        name:'女巫：',
        msg:'ＱＱ未來會寫一本像是日記的東西，但是有很多內容我看不懂。',
        button:'>　>　>',
    },
        {
        name:'女巫：',
        msg:'（女巫透過魔力秀出一本小小的書，上面寫了許多東西，夾雜著外星文。）',
        button:'拿日記',
    },
    {
        name:'日記',
        msg:'        ',
        button:'>　>　>',
    },
    {
        name:'　',
        msg:'（你翻了翻，偏偏…最後一天的日記全部都是用外星文寫的！）        ',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'占卜感應了部分日記，了解到外星人QQ到每個地點都會喝茶，所以只要循著QQ品茶之旅最後一天的足跡，就能找到遺失的鑰匙。',
        button:'原來如此',
    },
    {
        name:'女巫：',
        msg:'我想這應該能夠幫助你們找到ＱＱ遺失的鑰匙！加油吧！<font color="yellow"><br>　　(故事說明結束囉^0^/"~)</font>',
        button:'謝謝！我們出發了！',
    },
]