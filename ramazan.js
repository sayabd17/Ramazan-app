let d1el=document.getElementById("d1");
let d2el=document.getElementById("d2");
let d3el=document.getElementById("d3");
let d4el=document.getElementById("d4");
let d5el=document.getElementById("d5");
let d6el=document.getElementById("d6");
let d7el=document.getElementById("d7");
let d8el=document.getElementById("d8");
let d9el=document.getElementById("d9");
let d10el=document.getElementById("d10");
let d11el=document.getElementById("d11");
let d12el=document.getElementById("d12");
let d13el=document.getElementById("d13");
let d14el=document.getElementById("d14");
let d15el=document.getElementById("d15");
let d16el=document.getElementById("d16");
let d17el=document.getElementById("d17");
let d18el=document.getElementById("d18");
let d19el=document.getElementById("d19");
let d20el=document.getElementById("d20");
let d21el=document.getElementById("d21");
let d22el=document.getElementById("d22");
let d23el=document.getElementById("d23");
let d24el=document.getElementById("d24");
let d25el=document.getElementById("d25");
let d26el=document.getElementById("d26");
let d27el=document.getElementById("d27");
let d28el=document.getElementById("d28");
let d29el=document.getElementById("d29");
let d30el=document.getElementById("d30");



var count1 = parseInt(localStorage.getItem("day1Count")) || 0; var day1Completed = localStorage.getItem("day1Completed") === "true";
var count2 = parseInt(localStorage.getItem("day2Count")) || 0; var day2Completed = localStorage.getItem("day2Completed") === "true";
var count3 = parseInt(localStorage.getItem("day3Count")) || 0; var day3Completed = localStorage.getItem("day3Completed") === "true";
var count4 = parseInt(localStorage.getItem("day4Count")) || 0; var day4Completed = localStorage.getItem("day4Completed") === "true";
var count5 = parseInt(localStorage.getItem("day5Count")) || 0; var day5Completed = localStorage.getItem("day5Completed") === "true";
var count6 = parseInt(localStorage.getItem("day6Count")) || 0; var day6Completed = localStorage.getItem("day6Completed") === "true";
var count7 = parseInt(localStorage.getItem("day7Count")) || 0; var day7Completed = localStorage.getItem("day7Completed") === "true";
var count8 = parseInt(localStorage.getItem("day8Count")) || 0; var day8Completed = localStorage.getItem("day8Completed") === "true";
var count9 = parseInt(localStorage.getItem("day9Count")) || 0; var day9Completed = localStorage.getItem("day9Completed") === "true";
var count10 = parseInt(localStorage.getItem("day10Count")) || 0; var day10Completed = localStorage.getItem("day10Completed") === "true";
var count11 = parseInt(localStorage.getItem("day11Count")) || 0; var day11Completed = localStorage.getItem("day11Completed") === "true";
var count12 = parseInt(localStorage.getItem("day12Count")) || 0; var day12Completed = localStorage.getItem("day12Completed") === "true";
var count13 = parseInt(localStorage.getItem("day13Count")) || 0; var day13Completed = localStorage.getItem("day13Completed") === "true";
var count14 = parseInt(localStorage.getItem("day14Count")) || 0; var day14Completed = localStorage.getItem("day14Completed") === "true";
var count15 = parseInt(localStorage.getItem("day15Count")) || 0; var day15Completed = localStorage.getItem("day15Completed") === "true";
var count16 = parseInt(localStorage.getItem("day16Count")) || 0; var day16Completed = localStorage.getItem("day16Completed") === "true";
var count17 = parseInt(localStorage.getItem("day17Count")) || 0; var day17Completed = localStorage.getItem("day17Completed") === "true";
var count18 = parseInt(localStorage.getItem("day18Count")) || 0; var day18Completed = localStorage.getItem("day18Completed") === "true";
var count19 = parseInt(localStorage.getItem("day19Count")) || 0; var day19Completed = localStorage.getItem("day19Completed") === "true";
var count20 = parseInt(localStorage.getItem("day20Count")) || 0; var day20Completed = localStorage.getItem("day20Completed") === "true";
var count21 = parseInt(localStorage.getItem("day21Count")) || 0; var day21Completed = localStorage.getItem("day21Completed") === "true";
var count22 = parseInt(localStorage.getItem("day22Count")) || 0; var day22Completed = localStorage.getItem("day22Completed") === "true";
var count23 = parseInt(localStorage.getItem("day23Count")) || 0; var day23Completed = localStorage.getItem("day23Completed") === "true";
var count24 = parseInt(localStorage.getItem("day24Count")) || 0; var day24Completed = localStorage.getItem("day24Completed") === "true";
var count25 = parseInt(localStorage.getItem("day25Count")) || 0; var day25Completed = localStorage.getItem("day25Completed") === "true";
var count26 = parseInt(localStorage.getItem("day26Count")) || 0; var day26Completed = localStorage.getItem("day26Completed") === "true";
var count27 = parseInt(localStorage.getItem("day27Count")) || 0; var day27Completed = localStorage.getItem("day27Completed") === "true";
var count28 = parseInt(localStorage.getItem("day28Count")) || 0; var day28Completed = localStorage.getItem("day28Completed") === "true";
var count29 = parseInt(localStorage.getItem("day29Count")) || 0; var day29Completed = localStorage.getItem("day29Completed") === "true";
var count30 = parseInt(localStorage.getItem("day30Count")) || 0; var day30Completed = localStorage.getItem("day30Completed") === "true";


const ramazanStart = new Date(2026, 1, 19); 
ramazanStart.setHours(0, 0, 0, 0);

function unlockDays() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = today - ramazanStart;
    const unlockedDay = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    for (let i = 1; i <= 30; i++) {
        const dayBtn = document.getElementById("d" + i);
        if (!dayBtn) continue;

        if (i <= unlockedDay) {
            dayBtn.disabled = false;
            dayBtn.style.opacity = "1";
        } else {
            dayBtn.disabled = true;
            dayBtn.style.opacity = "0.4";
        }
        
        
    }
    const fnlBtn=document.getElementById("cml-el");

        if (unlockedDay>=30){
            fnlBtn.disabled=false;
            fnlBtn.style.opacity="1";
            
        }
        else{
            fnlBtn.disabled=true;
            fnlBtn.style.opacity="0.4";
        }
        
}
window.onload = function () {
    unlockDays();
};









function d1(){
    if (document.getElementById("d1").disabled) return;

    let x="اللّهُمَّ أَنْزِلْ عَلَيَّ رَحْمَتَكَ، وَافْتَحْ لِي أَبْوَابَ فَضْلِكَ، وَاجْعَلْنِي مِنَ الْمَرْحُومِينَ.";
    let y="O Allah, send down Your mercy upon me, open for me the doors of Your grace, and make me among those who receive mercy.";
    let z="அல்லாஹ்வே! உனது கருணையை என்மீது பொழியச் செய். உனது அருளின் கதவுகளை எனக்காகத் திறந்து, கருணை பெறுபவர்களில் என்னையும் சேர்த்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d1el.innerText = all;
    document.getElementById("c1").style.display = "flex";
    document.getElementById("cnt1").style.display = "flex";
    document.getElementById("num1").style.display = "flex";

    
    
    
}
function d2(){
    if (document.getElementById("d2").disabled) return;

    let x="اللّهُمَّ ارْحَمْنِي رَحْمَةً وَاسِعَةً، تُصْلِحُ بِهَا قَلْبِي وَتُزَكِّي نَفْسِي.";
    let y="O Allah, grant me vast mercy that reforms my heart and purifies my soul.";
    let z="அல்லாஹ்வே! என் இதயத்தைச் சீர்செய்யும், என் ஆத்மாவைத் தூய்மைப்படுத்தும் விரிந்த கருணையை எனக்கு வழங்குவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d2el.innerText = all;
    document.getElementById("c2").style.display = "flex";
    document.getElementById("cnt2").style.display = "flex";
    document.getElementById("num2").style.display = "flex";
   
    
}
function d3(){
    if (document.getElementById("d3").disabled) return;

    let x="اللّهُمَّ اشْمَلْنِي بِرَحْمَتِكَ فِي هَذَا الشَّهْرِ، وَقَرِّبْنِي إِلَيْكَ قُرْبًا يَرْضِيكَ عَنِّي.";
    let y="O Allah, cover me with Your mercy in this month and take me closer to You in a way that pleases You.";
    let z="அல்லாஹ்வே! இந்தப் புனித மாதத்தில் உமது கருணையால் என்னை மூடிக்கொள். உமக்கு பிரியமான முறையில் என்னை உமக்கு நெருக்கமாக்குவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d3el.innerText = all;
    document.getElementById("c3").style.display = "flex";
    document.getElementById("cnt3").style.display = "flex";
    document.getElementById("num3").style.display = "flex";

    
    
    
}
function d4(){
    if (document.getElementById("d4").disabled) return;
    let x="اللّهُمَّ اجْعَلْ رَحْمَتَكَ لِي نُورًا وَهُدًى، وَسَبَبًا لِكُلِّ خَيْرٍ فِي حَيَاتِي.";
    let y="O Allah, make Your mercy a light and guidance for me and a cause of all goodness in my life.";
    let z="அல்லாஹ்வே! உமது கருணையை என் வாழ்வில் ஒளியாகவும் வழிகாட்டுதலாகவும் மாற்றி, எல்லா நன்மைகளுக்கும் காரணமாக்குவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d4el.innerText = all;
    document.getElementById("c4").style.display = "flex";
    document.getElementById("cnt4").style.display = "flex";
    document.getElementById("num4").style.display = "flex";

    
    
    
}
function d5(){
    if (document.getElementById("d5").disabled) return;

    let x="اللّهُمَّ ارْحَمْ ضَعْفِي، وَاقْبَلْ عُذْرِي، وَتَجَاوَزْ عَنْ تَقْصِيرِي.";
    let y="O Allah, have mercy on my weakness, accept my excuses, and overlook my shortcomings.";
    let z="அல்லாஹ்வே! என் பலவீனத்தை கருணையுடன் பார்ப்பாயாக. என் குறைகளை மன்னித்து, என் தவறுகளைப் பொருட்படுத்தாமல் விடுவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d5el.innerText = all;
    document.getElementById("c5").style.display = "flex";
    document.getElementById("cnt5").style.display = "flex";
    document.getElementById("num5").style.display = "flex";

    
    
    
}
function d6(){
    if (document.getElementById("d6").disabled) return;

    let x="اللّهُمَّ أَدْخِلْنِي فِي رَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ.";
    let y="O Allah, admit me into Your mercy which encompasses all things.";
    let z="அல்லாஹ்வே! எல்லாவற்றையும் சூழ்ந்திருக்கும் உமது கருணைக்குள் என்னையும் சேர்த்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d6el.innerText = all;
    document.getElementById("c6").style.display = "flex";
    document.getElementById("cnt6").style.display = "flex";
    document.getElementById("num6").style.display = "flex";

    
    
    
}
function d7(){
    if (document.getElementById("d7").disabled) return;

    let x="اللّهُمَّ اجْعَلْ رَحْمَتَكَ سَكِينَةً لِقَلْبِي، وَطُمَأْنِينَةً لِنَفْسِي.";
    let y="O Allah, make Your mercy tranquility for my heart and peace for my soul.";
    let z="அல்லாஹ்வே! உமது கருணையை என் இதயத்திற்கு அமைதியாகவும் என் உள்ளத்திற்கு நிம்மதியாகவும் ஆக்குவாயாக";
    let all=x+"\n\n"+y+"\n\n"+z;
    d7el.innerText = all;
    document.getElementById("c7").style.display = "flex";
    document.getElementById("cnt7").style.display = "flex";
    document.getElementById("num7").style.display = "flex";

    
    
    
}
function d8(){
    if (document.getElementById("d8").disabled) return;

    let x="اللّهُمَّ ارْحَمْنِي فِي سِرِّي وَعَلَانِيَتِي، وَلَا تَكِلْنِي إِلَى نَفْسِي.";
    let y="O Allah, have mercy on me in private and in public, and do not leave me to myself.";
    let z="அல்லாஹ்வே! வெளிப்படையாகவும் மறைவாகவும் என்ன்மீது கருணை காட்டுவாயாக. என்னை எனக்கே ஒப்படைக்காதிருப்பாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d8el.innerText = all;
    document.getElementById("c8").style.display = "flex";
    document.getElementById("cnt8").style.display = "flex";
    document.getElementById("num8").style.display = "flex";

    
    
    
}
function d9(){
    if (document.getElementById("d9").disabled) return;

    let x="اللّهُمَّ اجْعَلْنِي مِنْ عِبَادِكَ الَّذِينَ نَالُوا رَحْمَتَكَ فِي رَمَضَان.";
    let y="O Allah, make me among Your servants who attain Your mercy in Ramadan.";
    let z="அல்லாஹ்வே! ரமலானில் உமது கருணையைப் பெற்ற உமது அடியார்களில் என்னையும் சேர்த்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d9el.innerText = all;
    document.getElementById("c9").style.display = "flex";
    document.getElementById("cnt9").style.display = "flex";
    document.getElementById("num9").style.display = "flex";

    
    
    
}
function d10(){
    if (document.getElementById("d10").disabled) return;

    let x="اللّهُمَّ خَتِمْ لِي أَيَّامَ الرَّحْمَةِ بِقُرْبِكَ وَرِضَاكَ.";
    let y="O Allah, conclude the days of mercy for me with closeness to You and Your pleasure.";
    let z="அல்லாஹ்வே! கருணையின் இந்த நாட்களை உமக்கு நெருக்கமும் உமது திருப்தியுமுடன் எனக்காக முடிவுசெய்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d10el.innerText = all;
    document.getElementById("c10").style.display = "flex";
    document.getElementById("cnt10").style.display = "flex";
    document.getElementById("num10").style.display = "flex";

    
    
    
}
function d11(){
    if (document.getElementById("d11").disabled) return;

    let x="اللّهُمَّ اغْفِرْ لِي ذُنُوبِي كُلَّهَا، مَا عَلِمْتُ مِنْهَا وَمَا لَمْ أَعْلَمْ.";
    let y="O Allah, forgive all my sins, those I know and those I do not know.";
    let z="அல்லாஹ்வே! நான் அறிந்தும் அறியாமலும் செய்த அனைத்து பாவங்களையும் மன்னித்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d11el.innerText = all;
    document.getElementById("c11").style.display = "flex";
    document.getElementById("cnt11").style.display = "flex";
    document.getElementById("num11").style.display = "flex";

    
    
    
}
function d12(){
    if (document.getElementById("d12").disabled) return;

    let x="اللّهُمَّ امْحُ خَطَايَايَ، وَطَهِّرْ قَلْبِي، وَاقْبَلْ تَوْبَتِي.";
    let y="O Allah, erase my sins, purify my heart, and accept my repentance.";
    let z="அல்லாஹ்வே! என் பாவங்களை அழித்து, என் இதயத்தைத் தூய்மைப்படுத்தி, என் தவ்பாவை ஏற்றுக்கொள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d12el.innerText = all;
    document.getElementById("c12").style.display = "flex";
    document.getElementById("cnt12").style.display = "flex";
    document.getElementById("num12").style.display = "flex";

    
    
    
}
function d13(){
    if (document.getElementById("d13").disabled) return;

    let x="اللّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ، وَلِمَنْ لَهُ حَقٌّ عَلَيَّ.";
    let y="O Allah, forgive me, my parents, and all those who have rights over me.";
    let z="அல்லாஹ்வே! என்னையும், என் பெற்றோர்களையும், என்மீது உரிமை கொண்ட அனைவரையும் மன்னித்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d13el.innerText = all;
    document.getElementById("c13").style.display = "flex";
    document.getElementById("cnt13").style.display = "flex";
    document.getElementById("num13").style.display = "flex";

    
    
    
}
function d14(){
    if (document.getElementById("d14").disabled) return;

    let x="اللّهُمَّ تَجَاوَزْ عَنِّي، وَاسْتُرْ عُيُوبِي، وَلَا تَفْضَحْنِي.";
    let y="O Allah, pardon me, conceal my faults, and do not expose me.";
    let z="அல்லாஹ்வே! என் குறைகளை மறைத்து, என்னை அவமானப்படுத்தாமல், என் தவறுகளை மன்னித்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d14el.innerText = all;
    document.getElementById("c14").style.display = "flex";
    document.getElementById("cnt14").style.display = "flex";
    document.getElementById("num14").style.display = "flex";

    
    
    
}
function d15(){
    if (document.getElementById("d15").disabled) return;

    let x="اللّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاغْفِرْ لِي مَغْفِرَةً شَامِلَةً.";
    let y="O Allah, make me among those who repent often and grant me complete forgiveness.";
    let z="அல்லாஹ்வே! அடிக்கடி தவ்பா செய்யும்வர்களில் என்னையும் சேர்த்து, முழுமையான மன்னிப்பை எனக்கு வழங்குவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d15el.innerText = all;
    document.getElementById("c15").style.display = "flex";
    document.getElementById("cnt15").style.display = "flex";
    document.getElementById("num15").style.display = "flex";

    
    
    
}
function d16(){
    if (document.getElementById("d16").disabled) return;

    let x="اللّهُمَّ نَقِّنِي مِنَ الذُّنُوبِ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ.";
    let y="O Allah, cleanse me from sins as a white cloth is cleansed from dirt.";
    let z="அல்லாஹ்வே! வெள்ளை ஆடையிலிருந்து அழுக்கு நீங்குவது போல், என் பாவங்களை முற்றிலும் நீக்குவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d16el.innerText = all;
    document.getElementById("c16").style.display = "flex";
    document.getElementById("cnt16").style.display = "flex";
    document.getElementById("num16").style.display = "flex";

    
    
    
}
function d17(){
    if (document.getElementById("d17").disabled) return;

    let x="اللّهُمَّ لَا تَحْرِمْنِي مَغْفِرَتَكَ بِسَبَبِ تَقْصِيرِي.";
    let y="O Allah, do not deprive me of Your forgiveness because of my shortcomings.";
    let z="அல்லாஹ்வே! என் குறைகளால் உமது மன்னிப்பை என்னிடமிருந்து விலக்காதிருப்பாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d17el.innerText = all;
    document.getElementById("c17").style.display = "flex";
    document.getElementById("cnt17").style.display = "flex";
    document.getElementById("num17").style.display = "flex";

    
    
    
}
function d18(){
    if (document.getElementById("d18").disabled) return;

    let x="اللّهُمَّ اغْفِرْ لِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ، وَاشْمَلْنَا بِمَغْفِرَتِكَ.";
    let y="O Allah, forgive the believing men and women and envelop us in Your forgiveness.";
    let z="அல்லாஹ்வே! ஈமான் கொண்ட ஆண்களையும் பெண்களையும் மன்னித்து, உமது மன்னிப்பால் எங்களை மூடிக்கொள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d18el.innerText = all;
    document.getElementById("c18").style.display = "flex";
    document.getElementById("cnt18").style.display = "flex";
    document.getElementById("num18").style.display = "flex";

    
    
    
}
function d19(){
    if (document.getElementById("d19").disabled) return;

    let x="اللّهُمَّ بَدِّلْ سَيِّئَاتِي حَسَنَاتٍ، وَارْفَعْ دَرَجَاتِي.";
    let y="O Allah, replace my bad deeds with good ones and raise my ranks.";
    let z="அல்லாஹ்வே! என் தீய செயல்களை நற்செயல்களாக மாற்றி, என் நிலைகளை உயர்த்துவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d19el.innerText = all;
    document.getElementById("c19").style.display = "flex";
    document.getElementById("cnt19").style.display = "flex";
    document.getElementById("num19").style.display = "flex";

    
    
    
}
function d20(){
    if (document.getElementById("d20").disabled) return;

    let x="اللّهُمَّ اخْتِمْ لِي أَيَّامَ الْمَغْفِرَةِ بِتَوْبَةٍ نَصُوحٍ.";
    let y="O Allah, conclude the days of forgiveness for me with sincere repentance.";
    let z="அல்லாஹ்வே! இந்த மன்னிப்பின் நாட்களை உண்மையான தவ்பாவுடன் எனக்காக முடிவுசெய்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d20el.innerText = all;
    document.getElementById("c20").style.display = "flex";
    document.getElementById("cnt20").style.display = "flex";
    document.getElementById("num20").style.display = "flex";

    
    
    
}
function d21(){
    if (document.getElementById("d21").disabled) return;

    let x="اللّهُمَّ أَعِذْنِي مِنَ النَّارِ، وَاجْعَلْنِي مِنْ عُتَقَائِكَ.";
    let y="O Allah, protect me from the Fire and make me among those freed from it.";
    let z="அல்லாஹ்வே! என்னை நரகத்திலிருந்து பாதுகாத்து, அதிலிருந்து விடுதலை பெறுபவர்களில் என்னையும் சேர்த்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d21el.innerText = all;
    document.getElementById("c21").style.display = "flex";
    document.getElementById("cnt21").style.display = "flex";
    document.getElementById("num21").style.display = "flex";

    
    
    
}
function d22(){
    if (document.getElementById("d22").disabled) return;

    let x="اللّهُمَّ أَجِرْنِي مِنْ عَذَابِ النَّارِ، وَأَدْخِلْنِي الْجَنَّةَ";
    let y="O Allah, save me from the punishment of Hellfire and admit me into Paradise.";
    let z="அல்லாஹ்வே! நரகத்தின் வேதனையிலிருந்து என்னைக் காத்து, சுவர்க்கத்தில் என்னை நுழையச் செய்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d22el.innerText = all;
    document.getElementById("c22").style.display = "flex";
    document.getElementById("cnt22").style.display = "flex";
    document.getElementById("num22").style.display = "flex";

    
    
    
}
function d23(){
    if (document.getElementById("d23").disabled) return;

    let x="اللّهُمَّ لَا تَكْتُبْنِي مِنْ أَهْلِ النَّارِ، وَاكْتُبْنِي مِنْ أَهْلِ الْجَنَّةِ.";
    let y="O Allah, do not write me among the people of Hellfire; write me among the people of Paradise.";
    let z="அல்லாஹ்வே! என்னை நரகத்தாரில் சேர்க்காமல், சுவர்க்கத்தாரில் சேர்த்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d23el.innerText = all;
    document.getElementById("c23").style.display = "flex";
    document.getElementById("cnt23").style.display = "flex";
    document.getElementById("num23").style.display = "flex";

    
    
    
}
function d24(){
    if (document.getElementById("d24").disabled) return;

    let x="اللّهُمَّ اجْعَلْ بَيْنِي وَبَيْنَ النَّارِ حِجَابًا مَتِينًا.";
    let y="O Allah, place a strong barrier between me and the Hellfire.";
    let z="அல்லாஹ்வே! என்னுக்கும் நரகத்திற்கும் இடையில் வலுவான தடுப்பை ஏற்படுத்துவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d24el.innerText = all;
    document.getElementById("c24").style.display = "flex";
    document.getElementById("cnt24").style.display = "flex";
    document.getElementById("num24").style.display = "flex";

    
    
    
}
function d25(){
    if (document.getElementById("d25").disabled) return;

    let x="اللّهُمَّ احْفَظْنِي مِنْ سُوءِ الْخَاتِمَةِ، وَأَجِرْنِي مِنَ النَّارِ.";
    let y="O Allah, protect me from a bad ending and save me from Hellfire.";
    let z="அல்லாஹ்வே! மோசமான முடிவிலிருந்து என்னைக் காத்து, நரகத்திலிருந்து பாதுகாப்பாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d25el.innerText = all;
    document.getElementById("c25").style.display = "flex";
    document.getElementById("cnt25").style.display = "flex";
    document.getElementById("num25").style.display = "flex";

    
    
    
}
function d26(){
    if (document.getElementById("d26").disabled) return;

    let x="اللّهُمَّ نَجِّنِي مِنَ النَّارِ، وَاجْعَلْ مَصِيرِي إِلَى الْجَنَّةِ.";
    let y="O Allah, rescue me from the Fire and make my final abode Paradise.";
    let z="அல்லாஹ்வே! என்னை நரகத்திலிருந்து காப்பாற்றி, என் இறுதி வாசஸ்தலமாக சுவர்க்கத்தை ஆக்குவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d26el.innerText = all;
    document.getElementById("c26").style.display = "flex";
    document.getElementById("cnt26").style.display = "flex";
    document.getElementById("num26").style.display = "flex";

    
    
    
}
function d27(){
    if (document.getElementById("d27").disabled) return;

    let x="اللّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي.";
    let y="O Allah, You are Forgiving and love forgiveness, so forgive me.";
    let z="அல்லாஹ்வே! நீ மன்னிப்பவனும் மன்னிப்பை விரும்புபவனும் ஆவாய்; எனவே என்னை மன்னித்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d27el.innerText = all;
    document.getElementById("c27").style.display = "flex";
    document.getElementById("cnt27").style.display = "flex";
    document.getElementById("num27").style.display = "flex";

    
    
    
}
function d28(){
    if (document.getElementById("d28").disabled) return;

    let x="اللّهُمَّ أَعِتْ رِقَابَنَا مِنَ النَّارِ، وَارْزُقْنَا رِضَاكَ.";
    let y="O Allah, free our necks from the Fire and grant us Your pleasure.";
    let z="அல்லாஹ்வே! எங்களை நரகத்திலிருந்து விடுதலை செய்து, உமது திருப்தியை எங்களுக்கு வழங்குவாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d28el.innerText = all;
    document.getElementById("c28").style.display = "flex";
    document.getElementById("cnt28").style.display = "flex";
    document.getElementById("num28").style.display = "flex";

    
    
    
}
function d29(){
    if (document.getElementById("d29").disabled) return;

    let x="اللّهُمَّ اجْعَلْنِي مِمَّنْ نَجَوْا مِنَ النَّارِ بِرَحْمَتِكَ.";
    let y="O Allah, make me among those saved from Hellfire by Your mercy.";
    let z="அல்லாஹ்வே! உமது கருணையால் நரகத்திலிருந்து காப்பாற்றப்பட்டவர்களில் என்னையும் சேர்த்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d29el.innerText = all;
    document.getElementById("c29").style.display = "flex";
    document.getElementById("cnt29").style.display = "flex";
    document.getElementById("num29").style.display = "flex";

    
    
    
}
function d30(){
    if (document.getElementById("d30").disabled) return;

    let x="اللّهُمَّ تَقَبَّلْ مِنَّا رَمَضَانَ، وَأَعْتِقْنَا مِنَ النَّارِ، وَاجْمَعْنَا فِي الْجَنَّةِ.";
    let y="O Allah, accept Ramadan from us, free us from Hellfire, and unite us in Paradise.";
    let z="அல்லாஹ்வே! எங்களிடமிருந்து இந்த ரமலானை ஏற்றுக்கொண்டு, நரகத்திலிருந்து எங்களை விடுவித்து, சுவர்க்கத்தில் எங்களை ஒன்றுசேர்த்தருள்வாயாக.";
    let all=x+"\n\n"+y+"\n\n"+z;
    d30el.innerText = all;
    document.getElementById("c30").style.display = "flex";
    document.getElementById("cnt30").style.display = "flex";
    document.getElementById("num30").style.display = "flex";

    
    
    
}


function cnt1(){
        let add=document.getElementById("num1");
        count1 +=1;
        add.textContent=count1;
        
        localStorage.setItem("day1Count", count1);

    }
function cnt2(){
        let add=document.getElementById("num2");
        count2 +=1;
        add.textContent=count2;
        localStorage.setItem("day2Count", count2);


    }
function cnt3(){
        let add=document.getElementById("num3");
        count3 +=1;
        add.textContent=count3;
        localStorage.setItem("day3Count", count3);
    }
    function cnt4(){
        let add=document.getElementById("num4");
        count4 +=1;
        add.textContent=count4;
        localStorage.setItem("day4Count", count4);


    }
    function cnt5(){
        let add=document.getElementById("num5");
        count5 +=1;
        add.textContent=count5;
        localStorage.setItem("day5Count", count5);


    }
    function cnt6(){
        let add=document.getElementById("num6");
        count6 +=1;
        add.textContent=count6;
        localStorage.setItem("day6Count", count6);
    }
    function cnt7(){
        let add=document.getElementById("num7");
        count7 +=1;
        add.textContent=count7;
        localStorage.setItem("day7Count", count7);
    }
    function cnt8(){
        let add=document.getElementById("num8");
        count8 +=1;
        add.textContent=count8;
        localStorage.setItem("day8Count", count8);


    }
    function cnt9(){
        let add=document.getElementById("num9");
        count9 +=1;
        add.textContent=count9;
        localStorage.setItem("day9Count", count9);
    }
    function cnt10(){
        let add=document.getElementById("num10");
        count10 +=1;
        add.textContent=count10;
        localStorage.setItem("day10Count", count10);


    }
    function cnt11(){
        let add=document.getElementById("num11");
        count11 +=1;
        add.textContent=count11;
        localStorage.setItem("day11Count", count11);
    }
    function cnt12(){
        let add=document.getElementById("num12");
        count12 +=1;
        add.textContent=count12;
        localStorage.setItem("day12Count", count12);
    }
    function cnt13(){
        let add=document.getElementById("num13");
        count13 +=1;
        add.textContent=count13;
        localStorage.setItem("day13Count", count13);


    }
    function cnt14(){
        let add=document.getElementById("num14");
        count14 +=1;
        add.textContent=count14;
        localStorage.setItem("day14Count", count14);


    }
    function cnt15(){
        let add=document.getElementById("num15");
        count15 +=1;
        add.textContent=count15;
        localStorage.setItem("day15Count", count15);


    }
    function cnt16(){
        let add=document.getElementById("num16");
        count16 +=1;
        add.textContent=count16;
        localStorage.setItem("day16Count", count16);


    }
    function cnt17(){
        let add=document.getElementById("num17");
        count17 +=1;
        add.textContent=count17;
        localStorage.setItem("day17Count", count17);


    }
    function cnt18(){
        let add=document.getElementById("num18");
        count18 +=1;
        add.textContent=count18;
        localStorage.setItem("day18Count", count18);


    }
    function cnt19(){
        let add=document.getElementById("num19");
        count19 +=1;
        add.textContent=count19;
        localStorage.setItem("day19Count", count19);


    }
    function cnt20(){
        let add=document.getElementById("num20");
        count20 +=1;
        add.textContent=count20;
        localStorage.setItem("day20Count", count20);


    }
    function cnt21(){
        let add=document.getElementById("num21");
        count21 +=1;
        add.textContent=count21;
        localStorage.setItem("day21Count", count21);
    }
    function cnt22(){
        let add=document.getElementById("num22");
        count22 +=1;
        add.textContent=count22;
        localStorage.setItem("day22Count", count22);
    }
    function cnt23(){
        let add=document.getElementById("num23");
        count23 +=1;
        add.textContent=count23;
        localStorage.setItem("day23Count", count23);
    }
    
    function cnt24(){
        let add=document.getElementById("num24");
        count24 +=1;
        add.textContent=count24;
        localStorage.setItem("day24Count", count24);
    }
    function cnt25(){
        let add=document.getElementById("num25");
        count25 +=1;
        add.textContent=count25;
        localStorage.setItem("day25Count", count25);
    }
    function cnt26(){
        let add=document.getElementById("num26");
        count26 +=1;
        add.textContent=count26;
        localStorage.setItem("day26Count", count26);
    }
    
    function cnt27(){
        let add=document.getElementById("num27");
        count27 +=1;
        add.textContent=count27;
        localStorage.setItem("day27Count", count27);
    }
    function cnt28(){
        let add=document.getElementById("num28");
        count28 +=1;
        add.textContent=count28;
        localStorage.setItem("day28Count", count28);
    }
    function cnt29(){
        let add=document.getElementById("num29");
        count29 +=1;
        add.textContent=count29;
        localStorage.setItem("day29Count", count29);
    }
    function cnt30(){
        let add=document.getElementById("num30");
        count30 +=1;
        add.textContent=count30;
        localStorage.setItem("day30Count", count30);
    }

function c1(){
    document.getElementById("c1").style.display ="none" ;
    document.getElementById("cnt1").style.display = "none";
    document.getElementById("num1").style.display = "none";
    document.getElementById("d1").style.display="block";
    d1el.innerText="Day 01 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count1+"  "+"times)";
    document.getElementById("d1").style.backgroundColor="green";
    
    document.getElementById("num1").textContent = count1;
    localStorage.setItem("day1Completed", "true")
    
    
}
function c2(){
    document.getElementById("c2").style.display ="none" ;
    document.getElementById("cnt2").style.display = "none";
    document.getElementById("num2").style.display = "none";
    document.getElementById("d2").style.display="block";
    d2el.innerText="Day 02 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count2+"  "+"times)";
    document.getElementById("d2").style.backgroundColor="green";
    document.getElementById("num2").textContent = count2;
    localStorage.setItem("day2Completed", "true")
    
}
function c3(){
    document.getElementById("c3").style.display ="none" ;
    document.getElementById("cnt3").style.display = "none";
    document.getElementById("num3").style.display = "none";
    document.getElementById("d3").style.display="block";
    d3el.innerText="Day 03 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count3+"  "+"times)";
    document.getElementById("d3").style.backgroundColor="green";
    document.getElementById("num3").textContent = count3;
    localStorage.setItem("day3Completed", "true");
    
}
function c4(){
    document.getElementById("c4").style.display ="none" ;
    document.getElementById("cnt4").style.display = "none";
    document.getElementById("num4").style.display = "none";
    document.getElementById("d4").style.display="block";
    d4el.innerText="Day 04 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count4+"  "+"times)";
    document.getElementById("d4").style.backgroundColor="green";
    document.getElementById("num4").textContent = count4;
    localStorage.setItem("day4Completed", "true");
    
}
function c5(){
    document.getElementById("c5").style.display ="none" ;
    document.getElementById("cnt5").style.display = "none";
    document.getElementById("num5").style.display = "none";
    document.getElementById("d5").style.display="block";
    d5el.innerText="Day 05 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count5+"  "+"times)";
    document.getElementById("d5").style.backgroundColor="green";
    document.getElementById("num5").textContent = count5;
    localStorage.setItem("day5Completed", "true");
    
}
function c6(){
    document.getElementById("c6").style.display ="none" ;
    document.getElementById("cnt6").style.display = "none";
    document.getElementById("num6").style.display = "none";
    document.getElementById("d6").style.display="block";
    d6el.innerText="Day 06 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count6+"  "+"times)";
    document.getElementById("d6").style.backgroundColor="green";
    document.getElementById("num6").textContent = count6;
    localStorage.setItem("day6Completed", "true");
    
}
function c7(){
    document.getElementById("c7").style.display ="none" ;
    document.getElementById("cnt7").style.display = "none";
    document.getElementById("num7").style.display = "none";
    document.getElementById("d7").style.display="block";
    d7el.innerText="Day 07 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count7+"  "+"times)";
    document.getElementById("d7").style.backgroundColor="green";
    document.getElementById("num7").textContent = count7;
    localStorage.setItem("day7Completed", "true");
    
}
function c8(){
    document.getElementById("c8").style.display ="none" ;
    document.getElementById("cnt8").style.display = "none";
    document.getElementById("num8").style.display = "none";
    document.getElementById("d8").style.display="block";
    d8el.innerText="Day 08 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count8+"  "+"times)";
    document.getElementById("d8").style.backgroundColor="green";
    document.getElementById("num8").textContent = count8;
    localStorage.setItem("day8Completed", "true");
    
}
function c9(){
    document.getElementById("c9").style.display ="none" ;
    document.getElementById("cnt9").style.display = "none";
    document.getElementById("num9").style.display = "none";
    document.getElementById("d9").style.display="block";
    d9el.innerText="Day 09 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count9+"  "+"times)";
    document.getElementById("d9").style.backgroundColor="green";
    document.getElementById("num9").textContent = count9;
    localStorage.setItem("day9Completed", "true");
    
}
function c10(){
    document.getElementById("c10").style.display ="none" ;
    document.getElementById("cnt10").style.display = "none";
    document.getElementById("num10").style.display = "none";
    document.getElementById("d10").style.display="block";
    d10el.innerText="Day 10 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count10+"  "+"times)";
    document.getElementById("d10").style.backgroundColor="green";
    document.getElementById("num10").textContent = count10;
    localStorage.setItem("day10Completed", "true");
    
}
function c11(){
    document.getElementById("c11").style.display ="none" ;
    document.getElementById("cnt11").style.display = "none";
    document.getElementById("num11").style.display = "none";
    document.getElementById("d11").style.display="block";
    d11el.innerText="Day 11 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count11+"  "+"times)";
    document.getElementById("d11").style.backgroundColor="green";
    document.getElementById("num11").textContent = count11;
    localStorage.setItem("day11Completed", "true");
    
}
function c12(){
    document.getElementById("c12").style.display ="none" ;
    document.getElementById("cnt12").style.display = "none";
    document.getElementById("num12").style.display = "none";
    document.getElementById("d12").style.display="block";
    d12el.innerText="Day 12 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count12+"  "+"times)";
    document.getElementById("d12").style.backgroundColor="green";
    document.getElementById("num12").textContent = count12;
    localStorage.setItem("day12Completed", "true");
    
}
function c13(){
    document.getElementById("c13").style.display ="none" ;
    document.getElementById("cnt13").style.display = "none";
    document.getElementById("num13").style.display = "none";
    document.getElementById("d13").style.display="block";
    d13el.innerText="Day 13 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count13+"  "+"times)";
    document.getElementById("d13").style.backgroundColor="green";
    document.getElementById("num13").textContent = count13;
    localStorage.setItem("day13Completed", "true");
    
}
function c14(){
    document.getElementById("c14").style.display ="none" ;
    document.getElementById("cnt14").style.display = "none";
    document.getElementById("num14").style.display = "none";
    document.getElementById("d14").style.display="block";
    d14el.innerText="Day 14 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count14+"  "+"times)";
    document.getElementById("d14").style.backgroundColor="green";
    document.getElementById("num14").textContent = count14;
    localStorage.setItem("day14Completed", "true");
    
}
function c15(){
    document.getElementById("c15").style.display ="none" ;
    document.getElementById("cnt15").style.display = "none";
    document.getElementById("num15").style.display = "none";
    document.getElementById("d15").style.display="block";
    d15el.innerText="Day 15 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count15+"  "+"times)";
    document.getElementById("d15").style.backgroundColor="green";
    document.getElementById("num15").textContent = count15;
    localStorage.setItem("day15Completed", "true");
    
}
function c16(){
    document.getElementById("c16").style.display ="none" ;
    document.getElementById("cnt16").style.display = "none";
    document.getElementById("num16").style.display = "none";
    document.getElementById("d16").style.display="block";
    d16el.innerText="Day 16 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count16+"  "+"times)";
    document.getElementById("d16").style.backgroundColor="green";
    document.getElementById("num16").textContent = count16;
    localStorage.setItem("day16Completed", "true");
    
}
function c17(){
    document.getElementById("c17").style.display ="none" ;
    document.getElementById("cnt17").style.display = "none";
    document.getElementById("num17").style.display = "none";
    document.getElementById("d17").style.display="block";
    d17el.innerText="Day 17 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count17+"  "+"times)";
    document.getElementById("d17").style.backgroundColor="green";
    document.getElementById("num17").textContent = count17;
    localStorage.setItem("day17Completed", "true");
    
}
function c18(){
    document.getElementById("c18").style.display ="none" ;
    document.getElementById("cnt18").style.display = "none";
    document.getElementById("num18").style.display = "none";
    document.getElementById("d18").style.display="block";
    d18el.innerText="Day 18 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count18+"  "+"times)";
    document.getElementById("d18").style.backgroundColor="green";
    document.getElementById("num18").textContent = count18;
    localStorage.setItem("day18Completed", "true");
    
}
function c19(){
    document.getElementById("c19").style.display ="none" ;
    document.getElementById("cnt19").style.display = "none";
    document.getElementById("num19").style.display = "none";
    document.getElementById("d19").style.display="block";
    d19el.innerText="Day 19 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count19+"  "+"times)";
    document.getElementById("d19").style.backgroundColor="green";
    document.getElementById("num19").textContent = count19;
    localStorage.setItem("day19Completed", "true");
    
}
function c20(){
    document.getElementById("c20").style.display ="none" ;
    document.getElementById("cnt20").style.display = "none";
    document.getElementById("num20").style.display = "none";
    document.getElementById("d20").style.display="block";
    d20el.innerText="Day 20 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count20+"  "+"times)";
    document.getElementById("d20").style.backgroundColor="green";
    document.getElementById("num20").textContent = count20;
    localStorage.setItem("day20Completed", "true");
    
}
function c21(){
    document.getElementById("c21").style.display ="none" ;
    document.getElementById("cnt21").style.display = "none";
    document.getElementById("num21").style.display = "none";
    document.getElementById("d21").style.display="block";
    d21el.innerText="Day 21 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count21+"  "+"times)";
    document.getElementById("d21").style.backgroundColor="green";
    document.getElementById("num21").textContent = count21;
    localStorage.setItem("day21Completed", "true");
    
}
function c22(){
    document.getElementById("c22").style.display ="none" ;
    document.getElementById("cnt22").style.display = "none";
    document.getElementById("num22").style.display = "none";
    document.getElementById("d22").style.display="block";
    d22el.innerText="Day 22 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count22+"  "+"times)";
    document.getElementById("d22").style.backgroundColor="green";
    document.getElementById("num22").textContent = count22;
    localStorage.setItem("day22Completed", "true");
    
}
function c23(){
    document.getElementById("c23").style.display ="none" ;
    document.getElementById("cnt23").style.display = "none";
    document.getElementById("num23").style.display = "none";
    document.getElementById("d23").style.display="block";
    d23el.innerText="Day 23 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count23+"  "+"times)";
    document.getElementById("d23").style.backgroundColor="green";
    document.getElementById("num23").textContent = count23;
    localStorage.setItem("day23Completed", "true");
    
}
function c24(){
    document.getElementById("c24").style.display ="none" ;
    document.getElementById("cnt24").style.display = "none";
    document.getElementById("num24").style.display = "none";
    document.getElementById("d24").style.display="block";
    d24el.innerText="Day 24 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count24+"  "+"times)";
    document.getElementById("d24").style.backgroundColor="green";
    document.getElementById("num24").textContent = count24;
    localStorage.setItem("day24Completed", "true");
    
}
function c25(){
    document.getElementById("c25").style.display ="none" ;
    document.getElementById("cnt25").style.display = "none";
    document.getElementById("num25").style.display = "none";
    document.getElementById("d25").style.display="block";
    d25el.innerText="Day 25 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count25+"  "+"times)";
    document.getElementById("d25").style.backgroundColor="green";
    document.getElementById("num25").textContent = count25;
    localStorage.setItem("day25Completed", "true");
    
}
function c26(){
    document.getElementById("c26").style.display ="none" ;
    document.getElementById("cnt26").style.display = "none";
    document.getElementById("num26").style.display = "none";
    document.getElementById("d26").style.display="block";
    d26el.innerText="Day 26 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count26+"  "+"times)";
    document.getElementById("d26").style.backgroundColor="green";
    document.getElementById("num26").textContent = count26;
    localStorage.setItem("day26Completed", "true");
    
}
function c27(){
    document.getElementById("c27").style.display ="none" ;
    document.getElementById("cnt27").style.display = "none";
    document.getElementById("num27").style.display = "none";
    document.getElementById("d27").style.display="block";
    d27el.innerText="Day 27 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count27+"  "+"times)";
    document.getElementById("d27").style.backgroundColor="green";
    document.getElementById("num27").textContent = count27;
    localStorage.setItem("day27Completed", "true");
    
}
function c28(){
    document.getElementById("c28").style.display ="none" ;
    document.getElementById("cnt28").style.display = "none";
    document.getElementById("num28").style.display = "none";
    document.getElementById("d28").style.display="block";
    d28el.innerText="Day 28 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count28+"  "+"times)";
    document.getElementById("d28").style.backgroundColor="green";
    document.getElementById("num28").textContent = count28;
    localStorage.setItem("day28Completed", "true");
    
}
function c29(){
    document.getElementById("c29").style.display ="none" ;
    document.getElementById("cnt29").style.display = "none";
    document.getElementById("num29").style.display = "none";
    document.getElementById("d29").style.display="block";
    d29el.innerText="Day 29 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count29+"  "+"times)";
    document.getElementById("d29").style.backgroundColor="green";
    document.getElementById("num29").textContent = count29;
    localStorage.setItem("day29Completed", "true");
    
}
function c30(){
    document.getElementById("c30").style.display ="none" ;
    document.getElementById("cnt30").style.display = "none";
    document.getElementById("num30").style.display = "none";
    document.getElementById("d30").style.display="block";
    d30el.innerText="Day 30 Completed Alhamdulillah"+"  "+"(Today you Recited  "+count30+"  "+"times)";
    document.getElementById("d30").style.backgroundColor="green";
    document.getElementById("num30").textContent = count30;
    localStorage.setItem("day30Completed", "true");
    
}

function cml() {
    if (document.getElementById("cml-el").disabled) return;
    let completedDays = 0;

    for (let i = 1; i <= 30; i++) {
        if (localStorage.getItem("day" + i + "Completed") === "true") {
            completedDays++;
        }
    }
    document.getElementById("th1").innerText=count1;
    document.getElementById("th2").innerText=count2;
    document.getElementById("th3").innerText=count3;
    document.getElementById("th4").innerText=count4;
    document.getElementById("th5").innerText=count5;
    document.getElementById("th6").innerText=count6;
    document.getElementById("th7").innerText=count7;
    document.getElementById("th8").innerText=count8;
    document.getElementById("th9").innerText=count9;
    document.getElementById("th10").innerText=count10;
    document.getElementById("th11").innerText=count11;
    document.getElementById("th12").innerText=count12;
    document.getElementById("th13").innerText=count13;
    document.getElementById("th14").innerText=count14;
    document.getElementById("th15").innerText=count15;
    document.getElementById("th16").innerText=count16;
    document.getElementById("th17").innerText=count17;
    document.getElementById("th18").innerText=count18;
    document.getElementById("th19").innerText=count19;
    document.getElementById("th20").innerText=count20;
    document.getElementById("th21").innerText=count21;
    document.getElementById("th22").innerText=count22;
    document.getElementById("th23").innerText=count23;
    document.getElementById("th24").innerText=count24;
    document.getElementById("th25").innerText=count25;
    document.getElementById("th26").innerText=count26;
    document.getElementById("th27").innerText=count27;
    document.getElementById("th28").innerText=count28;
    document.getElementById("th29").innerText=count29;
    document.getElementById("th30").innerText=count30;


    document.getElementById("table1").style.display = "inline-table";


    
    let marks = completedDays + " / 30";
    document.getElementById("finalMarks").innerText ="Your mark is :- " +marks;

    document.getElementById("finalScore").innerText ="You have completed " + completedDays + " days";

    
    let msg = "";
    if (completedDays === 30) {
        msg = "🌟 MashaAllah! Perfect consistency!";
    } else if (completedDays >= 20) {
        msg = "💚 Very good! Strong effort!";
    } else if (completedDays >= 10) {
        msg = "👍 Good start! Keep going!";
    } else {
        msg = "🌱 Every step counts. Continue!";
    }

    document.getElementById("finalMsg").innerText = msg;
    document.getElementById("resultBox").style.display = "block";
}

    


let counts = parseInt(localStorage.getItem("salawatCount")) || 0;

let countel=document.getElementById("sal-counter");
countel.innerText=counts;

function add(){
    counts +=1;
    countel.innerText=counts;
    localStorage.setItem("salawatCount", counts)
}
function save(){
    let msg="you recited : ";
    let a=document.getElementById("total-sal");
    
    let newmsg=msg+counts;
    a.textContent=newmsg;
    localStorage.setItem("salawatMessage", msg + counts);

}

    const savedMsg = localStorage.getItem("salawatMessage");
    if (savedMsg) {
        document.getElementById("total-sal").textContent = savedMsg;
    };





