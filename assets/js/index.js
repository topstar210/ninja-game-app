let scrollFlag = "downwards";
const scrollSpeed = 0.77;
let previousScrollTop = 0;
const foregroundObj = document.getElementById("foreground");
const first_ninjaObj = document.getElementById("first_ninja");
const blood_2Obj = document.getElementById("blood_2");
const fight_ninjaObj = document.getElementById("fight_ninja");
const fight_demonObj = document.getElementById("fight_demon");
const cloud1 = document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
const cloud3 = document.getElementById("cloud3");
const cloud4 = document.getElementById("cloud4");
const cloud5 = document.getElementById("cloud5");
const fire_flame = document.getElementById("fire_flame");

const isMobile = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

// Add a scroll event listener to the element
document.addEventListener('scroll', function (event) {
    // Get the current scrollTop value
    const currentScrollTop = document.scrollingElement.scrollTop;
    // Compare the current and previous scrollTop values to determine if the scroll direction changed
    if (currentScrollTop > previousScrollTop) {
        scrollFlag = 'downwards';
    } else {
        scrollFlag = 'upwards';
    }
    previousScrollTop = currentScrollTop;

    calcForeGroundNinjaPos();
    
    // splater blood ------
    let bloodRange = [1550, 2550];
    if(isMobile()) bloodRange = [300, 800];
    if(currentScrollTop>bloodRange[0] && currentScrollTop < bloodRange[1]){
        blood_2Obj.style.display = "block";
    } else {
        blood_2Obj.style.display = "none";
    }

    // fighting section animation  ====
    let fightRange = [1700, 2300, 2700, 3200];
    let fightingPos = 128;
    if(isMobile()){
        fightRange = [400, 900, 1200, 1700];
        fightingPos = 28;
    }
    if (currentScrollTop > fightRange[0] && currentScrollTop < fightRange[1]) {
        let itemPosition = (500 - (currentScrollTop-fightRange[0])) + fightingPos;
        itemPosition = itemPosition < fightingPos ? fightingPos : itemPosition;
        itemPosition = itemPosition * -1;

        fight_ninjaObj.style.left = itemPosition + "px";
        fight_demonObj.style.right = itemPosition + "px";

        let scale = (currentScrollTop-fightRange[0]) * 0.002;
        scale = scale > 1 ? 1 : scale;
        scale = 2.5 - scale;
        fight_ninjaObj.style.transform = `scale(${scale*-1}, ${scale})`;
        fight_demonObj.style.transform = `scale(${scale})`;
    } else if(currentScrollTop > fightRange[2] && currentScrollTop < fightRange[3]) {
        // let itemPosition = (currentScrollTop - fightRange[2]) * 0.5;
        // itemPosition = itemPosition > 100 ? 100: itemPosition;
        // itemPosition = itemPosition * -1;
        // fight_ninjaObj.style.left = itemPosition + "px";
        // fight_demonObj.style.right = itemPosition + "px";
    }

    let cloud_f_range = [2275, 2925];
    let cloud_f1_pos = 1250;
    let cloud_f2_pos = 1300;
    let cloud_f3_pos = 600;
    if(isMobile()) {
        cloud_f_range = [675, 1000];
        cloud_f1_pos = 500;
        cloud_f2_pos = 700;
        cloud_f3_pos = 330
    }
    if(currentScrollTop>cloud_f_range[0] && currentScrollTop < cloud_f_range[1]){
        const posLen = currentScrollTop - cloud_f_range[0];
        let cloud1_pos = cloud_f1_pos - posLen;
        let cloud2_pos = cloud_f2_pos - posLen * 2;
        let cloud3_pos = cloud_f3_pos - posLen + 20;
        cloud1.style.left = cloud1_pos * -1 + "px";
        cloud2.style.left = cloud2_pos + "px";
        cloud3.style.left = cloud3_pos*-1 + "px";
    }

    let cloud_s_range = [3600, 4050, 4227, 4527];
    let cloud_s1_pos = 920;
    let cloud_s2_pos = 800;
    let cloud_s1_pos_b = 470;
    let cloud_s2_pos_b = 350;
    if(isMobile()) {
        cloud_s_range = [1000, 1329, 1500, 1755];
        cloud_s1_pos = 460;
        cloud_s2_pos = 400;
        cloud_s1_pos_b = 130;
        cloud_s2_pos_b = 90;
    }
    if(currentScrollTop > cloud_s_range[0] && currentScrollTop < cloud_s_range[1]) {
        const posLen = currentScrollTop - cloud_s_range[0];
        let cloud4_pos = cloud_s1_pos - posLen;
        let cloud5_pos = cloud_s2_pos - posLen;
        cloud4.style.left = cloud4_pos * -1 + "px";
        cloud5.style.right = cloud5_pos * -1 + "px";
    } else if(currentScrollTop > cloud_s_range[2] && currentScrollTop < cloud_s_range[3]) {
        const posLen = currentScrollTop - cloud_s_range[2];
        let cloud4_pos = cloud_s1_pos_b + posLen;
        let cloud5_pos = cloud_s2_pos_b + posLen;
        cloud4.style.left = cloud4_pos * -1 + "px";
        cloud5.style.right = cloud5_pos * -1 + "px";
    }

    let flameRange = [5300, 5580];
    let flameScrollSpeed = 1.78;
    if(isMobile()) {
        flameRange = [1700, 2000];
        flameScrollSpeed = 0.5;
    }
    if(currentScrollTop > flameRange[0] && currentScrollTop < flameRange[1]) {
        let posLen = currentScrollTop - flameRange[0];
        posLen = posLen * flameScrollSpeed * -1;
        fire_flame.style.top = posLen + "px";
    }
});


const calcForeGroundNinjaPos = () => {
    const currentScrollTop = document.scrollingElement.scrollTop;
    // first section ninja ---
    let ninjaScrollSpeed = 1;
    let foreScrollSpeed = 1;
    let initNinjaPos = 1150;
    let initForegroundTop = 1360;
    let stopNinjaPos = 680;
    let stopForegroundPos = 660;
    if(isMobile()) {
        initNinjaPos = 480;
        stopNinjaPos = 190;
        initForegroundTop = 500;
        stopForegroundPos = 190;
        ninjaScrollSpeed = 2;
        foreScrollSpeed = 3;
    }

    let ninjaTop = initNinjaPos-currentScrollTop*ninjaScrollSpeed;
    if(ninjaTop >= stopNinjaPos) {
        first_ninjaObj.style.top = `${ninjaTop}px`;
    } else {
        first_ninjaObj.style.top = `${stopNinjaPos}px`;
    }
    
    let foregroundTop = initForegroundTop-currentScrollTop*foreScrollSpeed;
    if(foregroundTop >= stopForegroundPos) {
        foregroundObj.style.top = `${foregroundTop}px`;
    } else {
        foregroundObj.style.top = `${stopForegroundPos}px`;
    }
}

(function () {
    AOS.init({
        'data-aos-mirror': true,
        'data-aos-once': false
    });

    calcForeGroundNinjaPos();
    // blood_2Obj.style.display = "none";
})();