document.addEventListener('DOMContentLoaded', function () {

    let currentImageSrc;

    let employeesList = [
        {
            id:1,
            name: 'AL RAYHAN',
            position: 'UI Designer',
            description:'Lorem Ipsum is not simply is an action designer random text. It has roots in a piece',
            twitter: 'https://twitter.com/',
            facebook:'https://www.facebook.com/',
            globe: 'https://www.google.com/',
            mail: 'email@email.com',
            imgSrc:'./images/team_3.webp',
            alt:'example employee'
        },
        {
            id:2,
            name: 'AL RAYHAN',
            position: 'UI Designer',
            description:'Lorem Ipsum is not simply is an action designer random text. It has roots in a piece',
            twitter: 'https://twitter.com/',
            facebook:'https://www.facebook.com/',
            globe: 'https://www.google.com/',
            mail: 'email@email.com',
            imgSrc:'./images/team_4.webp',
            alt:'example employee'
        },
        {
            id:3,
            name: 'AL RAYHAN',
            position: 'UI Designer',
            description:'Lorem Ipsum is not simply is an action designer random text. It has roots in a piece',
            twitter: 'https://twitter.com/',
            facebook:'https://www.facebook.com/',
            globe: 'https://www.google.com/',
            mail: 'email@email.com',
            imgSrc:'./images/team_1.webp',
            alt:'example employee'
        },
        {
            id:4,
            name: 'AL RAYHAN',
            position: 'UI Designer',
            description:'Lorem Ipsum is not simply is an action designer random text. It has roots in a piece',
            twitter: 'https://twitter.com/',
            facebook:'https://www.facebook.com/',
            globe: 'https://www.google.com/',
            mail: 'email@email.com',
            imgSrc:'./images/team_2.webp',
            alt:'example employee'
        },
        {
            id:5,
            name: 'AL RAYHAN',
            position: 'UI Designer',
            description:'Lorem Ipsum is not simply is an action designer random text. It has roots in a piece',
            twitter: 'https://twitter.com/',
            facebook:'https://www.facebook.com/',
            globe: 'https://www.google.com/',
            mail: 'email@email.com',
            imgSrc:'./images/3.webp',
            alt:'example employee'
        },
        {
            id:6,
            name: 'AL RAYHAN',
            position: 'UI Designer',
            description:'Lorem Ipsum is not simply is an action designer random text. It has roots in a piece',
            twitter: 'https://twitter.com/',
            facebook:'https://www.facebook.com/',
            globe: 'https://www.google.com/',
            mail: 'email@email.com',
            imgSrc:'./images/team_3.webp',
            alt:'example employee'
        }
    ]

    function createEmployeesDiv(array){
        let smallTeamEmployees = document.querySelector('.employees');
        array.map(item=>{
            let employee = document.createElement('div');
            employee.classList.add('employee');
            let employeeImg = document.createElement('img');
            employeeImg.setAttribute('src',`${item.imgSrc}`);
            employeeImg.setAttribute('alt',`${item.alt}`);
            let employeesInfo = document.createElement('div');
            employeesInfo.classList.add('info');
            let employeeName = document.createElement('h4');
            employeeName.innerHTML = `${item.name}`;
            let employeePosition = document.createElement('span');
            employeePosition.innerHTML = `/ ${item.position}`;
            employeeName.append(employeePosition);
            let employeeDescription = document.createElement('p');
            employeeDescription.innerHTML = `${item.description}`;
            let employeeSocialDiv = document.createElement('div');
            employeeSocialDiv.classList.add('social-media');      
            let employeeTwitter = document.createElement('a');
            employeeTwitter.setAttribute('href',`${item.twitter}`);
            let employeeSocialIconTwitter = document.createElement('i');
            employeeSocialIconTwitter.classList.add('fab','fa-twitter');
            employeeTwitter.append(employeeSocialIconTwitter);
            let employeeFacebook = document.createElement('a');
            employeeFacebook.setAttribute('href',`${item.facebook}`);
            let employeeSocialIconFacebook = document.createElement('i');
            employeeSocialIconFacebook.classList.add('fab','fa-facebook-f');
            employeeFacebook.append(employeeSocialIconFacebook);
            let employeeGlobe = document.createElement('a');
            employeeGlobe.setAttribute('href',`${item.globe}`);
            let employeeSocialIconGlobe = document.createElement('i');
            employeeSocialIconGlobe.classList.add('fas','fa-globe');
            employeeGlobe.append(employeeSocialIconGlobe);
            let employeeMail = document.createElement('a');
            employeeMail.setAttribute('href',`mailto:${item.mail}`);
            let employeeSocialIconMail = document.createElement('i');
            employeeSocialIconMail.classList.add('far','fa-envelope');
            employeeMail.append(employeeSocialIconMail);
            employeeSocialDiv.append(employeeTwitter,employeeFacebook,employeeGlobe,employeeMail);
            employeesInfo.append(employeeName,employeeDescription,employeeSocialDiv);
            employee.append(employeeImg,employeesInfo);
            smallTeamEmployees.append(employee);
        })
        
    }

    createEmployeesDiv(employeesList);

    const allImages = document.querySelectorAll('.gallery img');
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