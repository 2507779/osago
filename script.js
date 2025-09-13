// WOW.js и плавная прокрутка
new WOW().init();
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Мобильное меню
const menuIcon = document.querySelector('.mobile-menu-icon');
const navUl = document.querySelector('header nav ul');
menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Hero particles
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
function resizeCanvas(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
const particles=[];
for(let i=0;i<100;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*1,dy:(Math.random()-0.5)*1});}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='rgba(255,255,255,0.7)';
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
        p.x+=p.dx;p.y+=p.dy;
        if(p.x>canvas.width)p.x=0;if(p.x<0)p.x=canvas.width;
        if(p.y>canvas.height)p.y=0;if(p.y<0)p.y=canvas.height;
    });
    requestAnimationFrame(animate);
}
animate();