let scrollFlag = "downwards";
const scrollSpeed = 0.77;
const maxPosition = -128;
let previousScrollTop = 0;
const foregroundObj = document.getElementById("foreground");
const first_ninjaObj = document.getElementById("first_ninja");
const blood_2Obj = document.getElementById("blood_2");
const fight_ninjaObj = document.getElementById("fight_ninja");
const fight_demonObj = document.getElementById("fight_demon");

// Add a scroll event listener to the element
document.addEventListener('scroll', function (event) {
    // Get the current scrollTop value
    const currentScrollTop = document.scrollingElement.scrollTop;

    // Compare the current and previous scrollTop values to determine if the scroll direction changed
    if (currentScrollTop > previousScrollTop) {
        scrollFlag = 'downwards';
        // console.log('Scrolling downwards');
    } else {
        scrollFlag = 'upwards';
        // console.log('Scrolling upwards');
    }
    // Update the previousScrollTop variable
    previousScrollTop = currentScrollTop;
    
    // fighting section animation  ====
    if (currentScrollTop > 1700 && currentScrollTop < 2300) {
        const stepPosition = (currentScrollTop - 1700) * scrollSpeed;

        let itemPosition = -520 + stepPosition;
        itemPosition = itemPosition >= maxPosition ? maxPosition : itemPosition;

        fight_ninjaObj.style.left = itemPosition + "px";
        fight_demonObj.style.right = itemPosition + "px";
    } else if(currentScrollTop > 2500 && currentScrollTop < 3000) {
        let itemPosition = ((currentScrollTop - 2500) * 0.5 + 128) * -1;
        fight_ninjaObj.style.left = itemPosition + "px";
        fight_demonObj.style.right = itemPosition + "px";
        
        let scale = 1.5 - (currentScrollTop - 2500) * 0.0015;
        console.log("currentScrollTop", scale)
        fight_ninjaObj.style.transform = `scale(${scale*-1}, ${scale})`;
        fight_demonObj.style.transform = `scale(${scale})`;
    }

    calcForeGroundNinjaPos();

    // console.log(scrollFlag, currentScrollTop)
    if(currentScrollTop>1750 && currentScrollTop < 2550){
        blood_2Obj.style.display = "inline";
    } else {
        blood_2Obj.style.display = "none";
    }

    // let foregroundDeltaY = 0;
    // if(currentScrollTop >= 390) {
    //     if(foregroundDeltaY <= 600) {
    //         foregroundDeltaY += currentScrollTop-390; 
    //         document.scrollingElement.scrollTo(390, 390);
    //     } else {
    //     }
    // }
});


const calcForeGroundNinjaPos = () => {
    const currentScrollTop = document.scrollingElement.scrollTop;
    // first section ninja ---
    let ninjaTop = 900-currentScrollTop;
    if(ninjaTop >= 400) {
        first_ninjaObj.style.top = `${ninjaTop}px`;
    } else {
        first_ninjaObj.style.top = `400px`;
    }
    
    const foregroundSpeed = 1;
    let foregroundTop = 1160-currentScrollTop*foregroundSpeed;
    if(foregroundTop >= 560) {
        foregroundObj.style.top = `${foregroundTop}px`;
    } else {
        foregroundObj.style.top = `560px`;
    }
}

(function () {
    AOS.init({
        'data-aos-mirror': true,
        'data-aos-once': false
    });

    calcForeGroundNinjaPos();
    blood_2Obj.style.display = "none";
})();