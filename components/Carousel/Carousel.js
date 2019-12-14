/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComponents(){
  const carouselDiv =document.createElement('div');
  const leftBtn = document.createElement('div');
  const imageOne = document.createElement('img');
  const imageTwo = document.createElement('img');
  const imageThree = document.createElement('img');
  const imageFour = document.createElement('img');
  const rightBtn = document.createElement('div');

  carouselDiv.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(imageOne);
  carouselDiv.appendChild(imageTwo);
  carouselDiv.appendChild(imageThree);
  carouselDiv.appendChild(imageFour);
  carouselDiv.appendChild(rightBtn);

  imageOne.src = "./assets/carousel/mountains.jpeg";
  imageTwo.src = "./assets/carousel/computer.jpeg";
  imageThree.src = "./assets/carousel/trees.jpeg";
  imageFour.src = "./assets/carousel/turntable.jpeg";
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  imageOne.classList.add('img-appear');
  rightBtn.addEventListener('click', () => {
    const arrayOne = Array.from(imageOne.classList);
    const arrayTwo = Array.from(imageTwo.classList);
    const arrayThree = Array.from(imageThree.classList);
    const arrayFour = Array.from(imageFour.classList);

    // Right Button
    
    if (arrayOne.includes('img-appear')){
      imageOne.classList.remove('img-appear');
      imageTwo.classList.add('img-appear');
    }
    else if (arrayTwo.includes('img-appear')){
      imageTwo.classList.remove('img-appear');
      imageThree.classList.add('img-appear');
    }
    else if (arrayThree.includes('img-appear')){
      imageThree.classList.remove('img-appear');
      imageFour.classList.add('img-appear');
    }
    else if (arrayFour.includes('img-appear')){
      imageFour.classList.remove('img-appear');
      imageOne.classList.add('img-appear');
    }
    else {
      imageOne.classList.add('img-appear');
    }
  })
  leftBtn.addEventListener('click', () => {
    const arrayOne = Array.from(imageOne.classList);
    const arrayTwo = Array.from(imageTwo.classList);
    const arrayThree = Array.from(imageThree.classList);
    const arrayFour = Array.from(imageFour.classList);

    // Right Button

    if (arrayOne.includes('img-appear')){
      imageOne.classList.remove('img-appear');
      imageFour.classList.add('img-appear');
    }
    else if (arrayTwo.includes('img-appear')){
      imageTwo.classList.remove('img-appear');
      imageOne.classList.add('img-appear');
    }
    else if (arrayThree.includes('img-appear')){
      imageThree.classList.remove('img-appear');
      imageTwo.classList.add('img-appear');
    }
    else if (arrayFour.includes('img-appear')){
      imageFour.classList.remove('img-appear');
      imageThree.classList.add('img-appear');
    }
    else {
      imageOne.classList.add('img-appear');
    }
  })

  return carouselDiv;
}

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(carouselComponents());