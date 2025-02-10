$(document).ready(() => {
    const images = [
        'images/pesident1.png',
        'images/persedent2.png',
        'images/persident3.png',
        'images/persident4.png',
        'images/persident5.png',
        'images/persident6.png',
    ];
    const fortunes = [
        "Hampalyo mudane madaxwayne👳🏼‍♂️❤❤",
    ];
    const clapSound = new Audio('images/vedio.mp3');

    $('#generateBtn').click(function() {
        let randomImage = images[Math.floor(Math.random() * images.length)];
        $('#luckyImage').attr('src', randomImage); 
        $('#imageContainer').removeClass('hidden').addClass('block');
        
        let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        $('#fortuneText').text(randomFortune);
        $('#result').removeClass('hidden').addClass('block');
        clapSound.play();
    });
});


