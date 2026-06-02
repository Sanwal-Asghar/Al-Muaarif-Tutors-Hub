

   // navbar.js
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check karein ke elements page par mojood hain ya nahi
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            // 'hidden' class ko toggle karega
            mobileMenu.classList.toggle('hidden');
        });

        // Jab mobile menu ke kisi link par click ho to menu band ho jaye
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});






// 1. EmailJS ko apni Public Key se initialize karo
// (Apni actual EmailJS Public Key yahan 'YOUR_PUBLIC_KEY' ki jagah paste karo)
emailjs.init("7BkuGKi0qkRR-yBvF"); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Page refresh hone se rokne ke liye

    const btn = document.getElementById('submit-btn');
    
    // Button ko disable aur loading state par daalna
    btn.innerText = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.style.cursor = 'not-allowed';

    // Apni Service ID aur Template ID yahan replace karo
    const serviceID = 'service_qhfx8y6';
    const templateID = 'YOUR_TEMPLATE_ID';

    // Form ka poora data automatic send karna
    emailjs.sendForm(serviceID, 'template_vjzqcci', this)
        .then(() => {
            // Success State
            btn.innerText = 'Message Sent Successfully!';
            btn.style.backgroundColor = '#22c55e'; // Green Color Button
            
            // Form clear karne ke liye
            document.getElementById('contact-form').reset();
            
            // 4 seconds baad button ko normal state me wapas laane ke liye
            setTimeout(() => {
                btn.innerText = 'Send Message';
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
                btn.style.backgroundColor = '#FF7B02'; // Wapas orange primary color
            }, 4000);

        }, (err) => {
            // Error State
            alert("Oops! Mail nahi ja saki. Error: " + JSON.stringify(err));
            
            // Button normal karna ta ke user dobara try kar sake
            btn.innerText = 'Try Again';
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
        });
});


