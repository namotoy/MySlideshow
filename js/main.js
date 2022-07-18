'use strict';
{
  const images = [
    'img/010.jpg',
    'img/011.jpg',
    'img/012.jpg',
    'img/013.jpg',
    'img/014.jpg',
    'img/015.jpg',
    'img/016.jpg',
    'img/017.jpg',
    'img/018.jpg',
    'img/019.jpg',
    'img/020.jpg',
    'img/021.jpg',
    'img/022.jpg',
    'img/023.jpg',
    'img/024.jpg',
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex){
      li.classList.add('current')
    }
    li.addEventListener('click',()=> {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length){
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0 ){
      target = images.length -1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

}