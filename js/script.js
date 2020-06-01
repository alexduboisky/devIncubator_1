document.addEventListener('DOMContentLoaded', function () {

    let currentImageSrc;

    const allImages = document.querySelectorAll('.featured-works-gallery img');
    let openImageFromGallery;

    allImages.forEach(el => el.addEventListener('click', function (e) {
        e.preventDefault();
        currentImageSrc=el.getAttribute('src');
        openImage(currentImageSrc);
    }));

    function openImage(ImageSrc){
        openImageFromGallery = document.querySelector('.big-image');
        if(openImageFromGallery!=null){
                closeImage();
        }
        else{
            let bigImageDiv = document.createElement('div');
            bigImageDiv.classList.add('big-image');
            let img = document.createElement('img');
            img.setAttribute('src',`${ImageSrc}`);
            bigImageDiv.append(img);
            document.body.append(bigImageDiv);
            openImageFromGallery = document.querySelector('.big-image');
            openImageFromGallery.addEventListener('click', function(){
                closeImage();
            })
        } 
    }

    function closeImage(){
        document.querySelector('.big-image').remove();
    }
})