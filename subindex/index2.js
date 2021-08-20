var Dialogue =document.getElementById("dio");
var DialogueButton1 =document.getElementById("diobtn1");
var DialogueButton2 =document.getElementById("diobtn2");
var skip=document.getElementById("skip");
var warpDetect=document.getElementById('warp');
var play=1;
DialogueButton1.style.display="none";
var diaCount =0;
console.log(diaCount);

    window.onlod=loadFadeIn();
    
    
    function loadFadeIn()
    {
        document.getElementById('fade').style.display="block";
        console.log('2e2e')
        var timeoutID = setTimeout( function(){console.log('eded');document.getElementById('fade').style.display="none";}, 2000);

    }

    function changeDialog(count)
    {
        if(a[diaCount].button=='謝謝！我們出發了！'){alert("此頁結束。\n快去下一頁吧!!!");}
            
            
        console.log(diaCount);
        if(diaCount<a.length-1){diaCount +=count;}
        if(diaCount>0){DialogueButton1.style.display="block";}
      
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
        console.log(diaCount);

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
        msg:'１. 紅色的鑰匙掉在最後一天去過的森林遊樂區之中最南邊的地方<br>　　２. 綠色的鑰匙掉在最後一天去過的森林遊樂區之中海拔最高的地方<br>　　３. 藍色的鑰匙掉在最後一天去過最靠近重心的森林遊樂區',
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
        msg:'(女巫大喊)不、還有機會！仔細看，那些點和線，飛進<b>茶葉座標</b>和<b>黑心茶商的走私路線</b>裡面了！        ',
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
        button:'好！',
    },
    {
        name:'女巫：',
        msg:'等等！<br>　　在尋找之前，我先教你們怎麼看占卜內容。<br>　　如圖...(測關時請往下看再回來>///<)',
        button:'好',
    },
    {
        name:'ＱＱ：',
        msg:'^%#$#H$ˋ%@＼(＠＾０＾＠)/！',
        button:'那就出發吧！',
    },
    {
        name:'女巫：',
        msg:'等等！(等ＱＱ先走出去，女巫偷偷拉住了你，有事情要私下和你聊聊。)',
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
        msg:'占卜感應了部分日記，了解到外星人QQ到每個地點都會喝茶，所以只要將外星人QQ最後一天喝的茶依照順序連起來，就能知道它最後一天的足跡了。',
        button:'原來如此',
    },
    {
        name:'女巫：',
        msg:'（女巫透過魔力秀出一本小小的書，上面寫了許多東西，夾雜著外星文。）',
        button:'拿日記',
    },
    {
        name:'　',
        msg:'（你翻了翻，偏偏…最後一天的日記全部都是用外星文寫的！）        ',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'我想應該能夠幫助你們，找出ＱＱ最後一天的足跡。加油吧！<br>　　(故事說明結束囉^0^/ 麻煩大家前往計分說明頁~側欄跟下方都有連結)',
        button:'謝謝！我們出發了！',
    },
]