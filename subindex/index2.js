var Dialogue =document.getElementById("dio");
var DialogueButton1 =document.getElementById("diobtn1");
var DialogueButton2 =document.getElementById("diobtn2");
var skip=document.getElementById("skip");
var warpDetect=document.getElementById('warp');
var play=1;


var diaCount =0;
console.log(diaCount);


    function changeDialog(count)
    {
        console.log(diaCount);
        if(diaCount<a.length-1)
        diaCount +=count;
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
        console.log(diaCount);

        if(a[diaCount].button=='QQ'){
            diaCount=a.length-1;
            
            
        }
        
    }
    function changeDialogBack(count)
    {
        if(diaCount==0){
        }else
        {
            console.log(diaCount);
            diaCount+=count;
            Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
            DialogueButton2.innerHTML=a[diaCount].button;
            console.log(diaCount);
        }

    }
    function skipToNext()
    {
        diaCount=a.length-1;
        Dialogue.innerHTML=a[diaCount].name+"<br>　　"+a[diaCount].msg;
        DialogueButton2.innerHTML=a[diaCount].button;
    }
let a = [
    {
        name:'',
        msg:'偵茶號帶著大家和ＱＱ一起到北投尋找神靈的力量，進行北投女巫的占卜。',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'<br>　　你遺失了很重要的東西，需要我幫你占卜掉在哪裡吧？',
        button:'>　>　>',
    },
    {
        name:'ＱＱ：',
        msg:'<br>　　(ＱＱ點頭如搗蒜。)',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'<br>　　．．．．．．',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'<br>　　那麼我就直接占卜了。',
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
        msg:'<br>　　ＱＱ說他忘記他最後一天去過哪些地方了。',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'<br>　　那我再幫你占卜一次。',
        button:'>　>　>',
    },
    {
        name:'女巫：',
        msg:'　（噗嚕嚕嚕噗女巫占卜中孤呼呼哩拉拉）<br>　　你最後一天去過的地方就在這些點、線組成的面之內，來，你來看看。',
        button:'>　>　>',
    },
    {
        name:'ＱＱ',
        msg:'<br>　　（ＱＱ滿是興奮地把走到女巫身後）',
        button:'>　>　>',
    },
    {
        name:'ＱＱ',
        msg:'<br>　　正當ＱＱ把頭伸過去時，占卜突然爆走．．．',
        button:'>　>　>',
    },
    {
        name:'．．．',
        msg:'<br>　　普嚕嚕嚕———卡拉卡拉——-—骨錄骨錄———<br>　　繃咻～～～～～－－－－咻～～～～～～阿．．． ',
        button:'>　>　>',
    },
    {
        name:'．．．',
        msg:'<br>　　點飛走了．．．<br>　　線也飛走了．．．<br>　　面完全不見了．．．',
        button:'>　>　>',
    },
    {
        name:'．．．',
        msg:'<br>　　．．．．．．',
        button:'>　>　>',
    },
    {
        name:'．．．',

        msg:'<br>　　．．．       <br>　　 這下ＱＱ真的ＱＱ了．．．',
        button:'．．．．．．',
    },
    {
        name:'．．．',
        msg:'<br>　　．．．．．．',
        button:'>　>　>',
    },
    {
        name:'女巫大喊：',
        msg:'不、還有機會！仔細看，那些點和線，飛進<b>茶葉座標</b>和<b>黑心茶商的走私路線</b>裡面了！        ',
        button:'什麼!?',
    },
    {
        name:'女巫：',
        msg:'<br>　　在魔力消散之前，都還能看到占卜的結果！',
        button:'原來如此！',
    },
    {
        name:'飛船AI：',
        msg:'<br>　　那我們快去找回來吧！',
        button:'好！',
    },
    {
        name:'女巫：',
        msg:'<br>　　等等！',
        button:'？',
    },
    {
        name:'女巫：',
        msg:'<br>　　在尋找之前，我先教你們怎麼看占卜內容。',
        button:'>　>　>',
    },

    {
        name:'QQ',
        msg:'小隊們!',
        button:'>　>　>',
    },

]