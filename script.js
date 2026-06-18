

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

// const header = document.getElementById('main-header');
// const navLinks = document.querySelectorAll('.nav-link');

// window.addEventListener('scroll', () => {

//     if (window.scrollY > 20) {
//         // جب یوزر نیچے اسکرول کرے گا تو یہ کلاسز لگیں گی
//         header.classList.add('bg-white', 'shadow-md', 'py-3','bg-primary-50');
//         header.classList.remove('bg-transparent', 'py-5');
        
//         // ٹیکسٹ کلر سفید سے تبدیل کر کے گہرا (Slate) کر دے گا تاکہ نظر آئے
//         navLinks.forEach(link => {
//             link.classList.add('text-slate-700',);
//             link.classList.remove('text-white');
//         });
//     } else {
//         // جب یوزر بالکل واپس اوپر جائے گا تو پرانی حالت بحال ہو جائے گی
//         header.classList.remove('bg-white', 'shadow-md', 'py-3');
//         header.classList.add('bg-transparent', 'py-5');
        
//         // ٹیکسٹ دوبارہ سفید ہو جائے گا
//         navLinks.forEach(link => {
//             link.classList.remove('text-slate-700');
//             link.classList.add('text-white');
//         });
//     }
// });

const header = document.getElementById('main-header');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        // Scroll par header white aur shadow ke sath shrink hoga
        header.classList.add('bg-white', 'shadow-md', 'py-3');
        header.classList.remove('bg-transparent', 'py-5');
        
        navLinks.forEach(link => {
            // Check karega agar ye link active page ka hai (jisme bg-white/20 laga hai)
            if (link.classList.contains('bg-white/20')) {
                link.classList.add('bg-primary-500/10', 'text-primary-600');
                link.classList.remove('bg-white/20', 'backdrop-blur-sm', 'text-white');
            } else {
                // Baqi normal links scroll par text dark slate ho jayenge
                link.classList.add('text-slate-800');
                link.classList.remove('text-white');
            }
        });
    } else {
        // Wapas top par jaane par shuru wali look wapas aa jayegi
        header.classList.remove('bg-white', 'shadow-md', 'py-3');
        header.classList.add('bg-transparent', 'py-5');
        
        navLinks.forEach(link => {
            if (link.classList.contains('bg-primary-500/10')) {
                link.classList.add('bg-white/20', 'backdrop-blur-sm', 'text-white');
                link.classList.remove('bg-primary-500/10', 'text-primary-600');
            } else {
                link.classList.add('text-white');
                link.classList.remove('text-slate-800');
            }
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


