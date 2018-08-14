//SETUP

$('form').on('submit', function(e){
    e.preventDefault();
})

let levelCount = 1;

const gameContainerInner = $('.game--container--inner');

const label1 = $('.form--label--1');
const label2 = $('.form--label--2');

const nextLevelContainer = $('.next-level-container');
const nextLevelButton = $('.next-level');

const header = $('.header--title');

const ball = $('.ball');
const ballLight = $('.ball--light');

const girder1 = $('.girder--1');
const girder2 = $('.girder--2');
const button = $('#button1');

// obstacle - add image array later
let obstacle = `<div class="obstacle"></div>`;

// block
const blockLeft = $('.block--left');
const blockRight = $('.block--right');

let input = $('input');
console.log(input);



// TEST ZONE

// LEVEL 1
console.log(levelCount);
    
console.log('running');

let numCount = -45;

button.on('click', function(e){

    if (levelCount === 1){

        // why is this running!!!!!??????
        console.log(levelCount);
        e.preventDefault();
        inputVal = input.val();
        let newNum = Number(inputVal);
        console.log(newNum);
        numCount = numCount - newNum;
        
    
        
        girder1.css('transform', `rotate(${numCount}deg)`);
        
        
        if (numCount % 360 === 0) {
            ball.css('left', '90%');
            $('input').val('');
            ballLight.css('right', '50%');
            ball.css('animation', 'hammy 1s steps(13) 4');

            //change level
            levelCount = levelCount + 1;
            console.log(levelCount);

            // show next level button
            setTimeout(function () {
                nextLevelContainer.css('display', 'block');
            }, 2500);

            // add 1 to levelCount - maybe add to next level button
            // if (levelCount === 1){
            //     levelCount = levelCount + 1;
            // }
            
        }
    }
    
});

// LEVEL 2
console.log('running2');
button.on('click', function (e) {
    e.preventDefault();
    if (levelCount === 2) {
        console.log('level 2 ');
        let opacity = input.val();
        girder1.css('opacity', opacity);
        if (input.val() == 1) {
            $('input').val('');
            console.log('yay');
            girder1.css('opacity', '1');
            ball.css('left', '0%');
            ball.css('animation', 'hammy 1s steps(13) 4');
            // ballLight.css('right', '0%');

            //change level
            levelCount = levelCount + 1;
            console.log(levelCount);

            // show next level button
            setTimeout(function () {
                nextLevelContainer.css('display', 'block');
            }, 2500);

        }
    }
});


// LEVEL 3
console.log('running3');
button.on('click', function (e) {
    e.preventDefault();
    if (levelCount === 3) {
        console.log('level 3 ');
        let width = input.val();
        girder1.css('width', width);
        if (input.val() == 100) {
            $('input').val('');
            console.log('yay');
            girder1.css('width', '100%');
            ball.css('left', '90%');
            ball.css('animation', 'hammy 1s steps(13) 4');
            // ballLight.css('right', '50%');

            //change level
            levelCount = levelCount + 1;
            console.log(levelCount);

            // show next level button
            setTimeout(function () {
                nextLevelContainer.css('display', 'block');
            }, 2500);

        }
    }
});


// LEVEL 4
console.log('running4');
button.on('click', function (e) {
    e.preventDefault();
    if (levelCount === 4) {
        console.log('level 4 ');
        let top = input.val();
        console.log(top);
        blockLeft.css('transition-delay', '0s');
        blockLeft.css('top', `${top}%`);
        if (input.val() == 50) {
            $('input').val('');
            console.log('yay');
            blockLeft.css('top', '50%');
            ball.css('left', '0%');
            ball.css('animation', 'hammy 1s steps(13) 4');
            // ballLight.css('right', '0%');

            //change level
            levelCount = levelCount + 1;
            console.log(levelCount);

            // show next level button
            setTimeout(function () {
                nextLevelContainer.css('display', 'block');
            }, 2500);

        }
    }
});


// LEVEL 5
console.log('running5');
button.on('click', function (e) {
    e.preventDefault();
    if (levelCount === 5) {
        console.log('level 5');
        let color = input.val();
        girder2.css('background', `linear-gradient(to top, grey 65%, ${color} 35%)`);
        if (input.val() == 'red') {
            $('input').val('');
            console.log('yay');
            girder2.css('background', `linear-gradient(to top, grey 65%, ${color} 35%)`);
            ball.css('left', '90%');
            ball.css('animation', 'hammy 1s steps(13) 4');
            // ballLight.css('right', '50%');

            //change level
            levelCount = levelCount + 1;
            console.log(levelCount);

            // show next level button
            setTimeout(function () {
                nextLevelContainer.css('display', 'block');
            }, 2500);

        }
    }
});


// LEVEL 6
console.log('running6');
button.on('click', function (e) {
    e.preventDefault();
    if (levelCount === 6) {
        console.log('level 6');
        let margin = input.val();
        console.log(margin);
        let marginNum = parseInt(margin);
        console.log(marginNum);
        $('.obstacle').css('top', `calc(40% - ${margin}%)`);
        if (marginNum >= 10) {
            $('input').val('');
            console.log('yay');
            $('.obstacle').css('top', `calc(40% - ${margin}%)`);;
            ball.css('left', '0%');
            ball.css('animation', 'hammy 1s steps(13) 4');
            // ballLight.css('right', '0%');

            //change level
            levelCount = levelCount + 1;
            console.log(levelCount);

            // show next level button
            setTimeout(function () {
                nextLevelContainer.css('display', 'block');
            }, 2500);

        }
    }
});


// LEVE SWAPS


// LEVEL TWO SWAP
nextLevelButton.on('click', function(){
    
    if (levelCount === 2){
        // hide next level
        nextLevelContainer.css('display', 'none');
        //header
        header.text(`Game title : level ${levelCount}`);
    
        //labels
        label1.text(`Opacity :`);
        label2.text(``);

        girder1.css('opacity', '0.3');

        //reset hammy
        ball.css('transform', 'scale(-1, 1)');
        ball.css('animation', 'none');
    }

    if (levelCount === 3) {
        // hide next level
        nextLevelContainer.css('display', 'none');
        //header
        header.text(`Game title : level ${levelCount}`);

        //labels
        label1.text(`width :`);
        label2.text(`%`);

        // new condition
        girder1.css('width', '50%');

        //reset hammy
        ball.css('transform', 'scale(1, 1)');
        ball.css('animation', 'none');
    }

    if (levelCount === 4) {
        // hide next level
        nextLevelContainer.css('display', 'none');
        //header
        header.text(`Game title : level ${levelCount}`);

        //labels
        label1.text(`top :`);
        label2.text(`%`);

        // new condition
        blockLeft.css('top', '20%');

        //reset hammy
        ball.css('transform', 'scale(-1, 1)');
        ball.css('animation', 'none');
    }

    if (levelCount === 5) {
        // hide next level
        nextLevelContainer.css('display', 'none');
        //header
        header.text(`Game title : level ${levelCount}`);

        //labels
        label1.text(`background-color :`);
        label2.text(``);

        // blocks
        blockLeft.css('transition-delay', '1s');
        
        // new condition
        // maybe not this
        girder1.css('width', '50%');
        girder2.css('display', 'block');
        girder2.css('right', '0');
        
        //reset hammy
        ball.css('transform', 'scale(1, 1)');
        ball.css('animation', 'none');
    }

    if (levelCount === 6) {
        // hide next level
        nextLevelContainer.css('display', 'none');
        //header
        header.text(`Game title : level ${levelCount}`);

        //labels
        label1.text(`margin-top :`);
        label2.text(`%`);

        // blocks

        // obstacles
        // math.floor - random number and random left value
        gameContainerInner.append(`<div class="obstacle"></div>`);
        

        // new condition
        


        //reset hammy
        ball.css('transform', 'scale(-1, 1)');
        ball.css('animation', 'none');
    }
    
    // ball.css('top', '25%');
    // blockLeft.css('top', '35%');
    // blockRight.css('top', '65%');
    // girder1.css('transform', 'rotate(0deg)');
    // girder1.css('left', '-8%');

    // blockLeft.css('left', '90%');
    // blockRight.css('right', '90%');
    // blockRight.css('top', '30%');

    // ball.css('top', '20%');
    
    
    


});
    



