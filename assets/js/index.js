(function () {
    AOS.init({
        'data-aos-mirror': true,
        'data-aos-once': false
    });


    let currentPosition = 0;
    const scrollSpeed = 0.77;
    const maxPosition = -128;

    // Add a scroll event listener to the element
    document.addEventListener('scroll', function (event) {
        // Get the current scrollTop value
        const currentScrollTop = document.scrollingElement.scrollTop;

        if(currentScrollTop > 1700 && currentScrollTop < 2300){
            const stepPosition = (currentScrollTop - 1700) * scrollSpeed;

            let itemPosition = -520 + stepPosition;
            itemPosition = itemPosition >= maxPosition ? maxPosition : itemPosition;

            console.log(itemPosition)
            document.getElementById("fight_ninja").style.left = itemPosition + "px";
            document.getElementById("fight_demon").style.right = itemPosition + "px";

            // // Compare the current and previous scrollTop values to determine if the scroll direction changed
            // if (currentScrollTop > previousScrollTop) {
            //     console.log('Scrolling downwards');
            // } else {
            //     console.log('Scrolling upwards');
            // }
        }

        // Update the previousScrollTop variable
        previousScrollTop = currentScrollTop;
    });
})();