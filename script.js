window.onload = function() {
    let styleGuide = [
        'assets/Brand_Style.jpg',
        'assets/Buttons.png',
        'assets/Colors.png',
        'assets/Components.jpg',
        'assets/Icongraphy.jpg',
        'assets/Mission_Statement.png',
        'assets/selectors.jpg',
        'assets/text_fields.jpg',
        'assets/Typography_Azeret_Mono.png',
        'assets/Typography_Unbounded.png'
    ];

    let currentIndex = 0;
    let isMouseOver = false;
    let intervalId; // Variable to store the interval ID for the carousel
    let clickProposal = 0

    const carouselImg = document.getElementById('carousel-img');
    const circlesContainer = document.getElementById('circles-container');
const textProposalL = document.getElementById('arrowsL')
const textProposalR = document.getElementById('arrowsR')
    function changeImage() {
        // Set the source of the image
        carouselImg.src = styleGuide[currentIndex];

        // Trigger the opacity animation by adding the 'fade-in' class
        carouselImg.classList.add('fade-in');

        // Update the active circle
        updateActiveCircle();

        currentIndex = (currentIndex + 1) % styleGuide.length;
    }

    function updateActiveCircle() {
        // Remove the 'active' class from all circles
        const circles = document.querySelectorAll('.circle');
        circles.forEach(circle => circle.classList.remove('active'));

        // Add the 'active' class to the current circle
        circles[currentIndex].classList.add('active');
    }

    function startCarousel() {
        // Start the image carousel if it's not already running
        if (!intervalId) {
            intervalId = setInterval(changeImage, 3000);
        }
    }

    function stopCarousel() {
        // Clear the interval to pause the carousel
        clearInterval(intervalId);
        intervalId = null;
    }

    function changeText(){
        console.log(clickProposal)
        
        let text = [
            'text0 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi deserunt, porro quia odio', 
       ' text1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi deserunt, porro quia odio quidem natus perspiciatis consequatur, ullam unde eius enim nihil vero nulla maxime aliquam sapiente ipsa tempore atque! Animi doloremque, eligendi quam optio odit quos repellat minus unde ex eveniet qui? Nihil expedita perferendis eligendi hic sequi in repudiandae. At iure laboriosam quas facere, veritatis voluptatibus dignissimos dolor?',
    ' text2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ' text 3Eligendi deserunt, porro quia odio quidem natus perspiciatis consequatur, ullam unde eius enim nihil vero nulla maxime aliquam sapiente ipsa tempore atque! Animi doloremque, eligendi quam optio odit quos repellat minus unde ex eveniet qui? Nihil expedita perferendis eligendi hic sequi in repudiandae. At iure laboriosam quas facere, veritatis voluptatibus dignissimos dolor?', 
  ' text4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vitae iste exercitationem ', ' text5 Lorem, ipsum dolor' ]
const textBox1 = document.getElementById('box1')
const textBox2 = document.getElementById('box2')

  if(clickProposal == 0){
    textBox1.innerHTML = text[0]
    textBox2.innerHTML = text[1]
  

  } else if(clickProposal == 1){
    textBox1.innerHTML = text[2]
    textBox2.innerHTML = text[3]
  

  } else {
    textBox1.innerHTML = text[4]
    textBox2.innerHTML = text[5]
   
  }
    }

    // Add event listeners to pause and resume the carousel when the mouse enters or leaves the image
    carouselImg.addEventListener('mouseenter', function() {
        isMouseOver = true;
        stopCarousel();
    });

    carouselImg.addEventListener('mouseleave', function() {
        isMouseOver = false;
        startCarousel();
    });

    textProposalR.addEventListener("click", () => {
        if(clickProposal < 2)
        clickProposal++
        changeText()})
    textProposalL.addEventListener("click", () => {
        if(clickProposal > 0){
            clickProposal--
        }
       
    changeText()})
    
    // Create circles dynamically based on the number of images
    styleGuide.forEach((_, index) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.addEventListener('click', () => {
            currentIndex = index;
            changeImage();
        });
        circlesContainer.appendChild(circle);
    });

    // Start the image carousel initially
    startCarousel();
}