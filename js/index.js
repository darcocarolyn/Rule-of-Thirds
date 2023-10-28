//Sponsorship Form
function sendEmail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_igfb07c"
    const templateID = "template_mq4h247"
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("message").value  
            console.log(res)
            alert("Your message was sent successfully!")  
        })
        .catch((err) => console.log(err))
}
// RSVP Form
console.log("Hi")
function sendRSVP() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        comment: document.getElementById("comment").value, 
        rsvp: document.querySelector('input[name="rsvp"]:checked').value
    }

    const serviceID = "service_xeynjxd";
    const templateID = "rsvp_template";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch(err => console.error(err));
}

const images=[
    "images/Img1.jpg",
    "images/Img2.jpg",
    "images/Img3.jpg",
    "images/Img4.jpg",
    "images/Img5.jpg",
    "images/Img6.jpg",
    "images/Img7.jpg",
    "images/Img8.jpg",
    "images/Img9.jpg",
    "images/Img10.jpg",
    "images/Img11.jpg",

]

/*let currentImageIndex = 0;

const btnLeft = document.getElementById('left-button');
const btnRight = document.getElementById('right-button');

function updateBackgroundImage() {
  document.getElementById("slider-img").src=`../${images[currentImageIndex]}`;
}

btnLeft.addEventListener('click', function() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateBackgroundImage();
});

btnRight.addEventListener('click', function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateBackgroundImage();
});

// Initial background image setup
updateBackgroundImage();
   /* let counter = 0

const btnLeft = document.getElementById('left-button');
const btnRight = document.getElementById('right-button');
const imgDiv = document.querySelector('.image-container');
// Add event listener to the left button
btnLeft.addEventListener('click', function() {
    console.log("Clicked Left");
    // Update the current image index
    counter = (counter - 1 + images.length) % images.length;
    // Update the background image
    imgDiv.style.backgroundImage = `../url("${images[counter]}")`;
});

// Add event listener to the right button
btnRight.addEventListener('click', function() {
    console.log("Clicked Right");
    // Update the current image index
    counter = (counter + 1) % images.length;
    // Update the background image
    imgDiv.style.backgroundImage = `../url("${images[counter]}")`;
});
*/