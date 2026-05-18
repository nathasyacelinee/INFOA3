
const products = [
    {
    id: "shine-mini-dress",
    name: "Shine Bright Tartan Mini Dress",
    category: 'Dress Womens New Sale Tartan',
    price: 86.4, oldPrice: 108
    }
]

document.getElementById('menuBtn').addEventListener('click', () => document.getElementById('sideMenu').classList.add('open'));
document.getElementById ('closeMenu').addEventListener('click', () => document.getElementById('sideMenu').classList.remove('open'));

function showPage(pageName){
    pages.forEach(page => page.classList. remove('active'));
    document.getElementById(pageName + 'Page').classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'})
    document.getElementById('sideMenu').classList.remove('open');
}