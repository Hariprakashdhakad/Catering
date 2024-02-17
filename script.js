function showImage(imageSrc, descriptionIndex) {
    console.log('showImage() function called');
    // Hide all descriptions
    let descriptions = document.querySelectorAll('.description');
    descriptions.forEach(description => {
      description.style.display = 'none';
    });
  
    
    let selectedDescription = document.getElementById(`description${descriptionIndex}`);
    selectedDescription.style.display = 'block';
  
  
    let slideshowContainer = document.querySelector('.showSlides');
    slideshowContainer.innerHTML = ''; 
    let imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = 'Event Image';
    
    
    slideshowContainer.appendChild(imageElement);
  }
  
  