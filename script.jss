
const products = [
    {
    id: "shine-mini-dress",
    name: "Shine Bright Tartan Mini Dress",
    category: 'Dress Womens New Sale Tartan',
    price: 86.4, oldPrice: 108,
    sizes: ["XS","S","M","L","XL"],
    code: "BGFAB289",
    description: "A timeless tartan with a rebellious edge, this iconic mini dress is not asking, but demanding attention.",
    details: [
        "Tartan Mini Dress",
        "Features 'Shine Bright' Tartan",
        "Fitted Body with Shirred Back",
        "Pleated Skirt with Contrast Fabric",
        "Eyelet Detail Straps",
        "Side Zip Closure",
        "Side Pockets",
        "Designed in Naarm/ Melbourne by our apparel design team",
        "Made from cotton fabric",
        "Available in multi" 
    ]
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