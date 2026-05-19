
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
    ],
    gallery: [
        {src: "ASSETS/ShineBrightDress.png", alt: "Shine Bright Tartan Dress"},
        {src: "ASSETS/ShineBrightDress2.png", alt: "Shine Bright Tartan Dress 2"},
        {src: "ASSETS/ShineBrightDress3.png", alt: "Shine Bright Tartan Dress 3"},
        {src: "ASSETS/ShineBrightDress4.png", alt: "Shine Bright Tartan Dress 4"},
        {src: "ASSETS/ShineBrightDress5.png", alt: "Shine Bright Tartan Dress 5"}
    ]
    },
    {
    id: "midnight-gosh-mesh-top",
    name: "Midnight Gosh Mesh Top",
    category: 'Top Womens New Sale Mesh',
    price: 38.4, oldPrice: 48,
    sizes: ["XS","S","M","L","XL"],
    code: "BGFAB154",
    description: "A basic mesh top that knows what it wants. This Dangerfield classic is a wardrobe staple. Layer over, under, or in-between your fav outfits.",
    details: [
        "Turtleneck Mesh Top","Long Sleeves","Fitted Shape","Made from Sheer Polyester Mesh","Available in Navy"],
    gallery: [
        {src: "ASSETS/MidnightGoshMeshTop.png", alt: "Midnight Gosh Mesh Top"},
        {src: "ASSETS/MidnightGoshMeshTop2.png", alt: "Midnight Gosh Mesh Top 2"},
        {src: "ASSETS/MidnightGoshMeshTop3.png", alt: "Midnight Gosh Mesh Top 3"},
        {src: "ASSETS/MidnightGoshMeshTop4.png", alt: "Midnight Gosh Mesh Top 4"},
        {src: "ASSETS/MidnightGoshMeshTop5.png", alt: "Midnight Gosh Mesh Top 5"}
    ]
    },
    {
    id: "shine-bright-goth-pant",
    name: "Shine Bright Goth Pant",
    category: 'Top Womens Pant Goth Flared',
    price: 78.4, oldPrice: 98,
    sizes: ["XS","S","M","L","XL"],
    code: "BGFAB136",
    description: "A timeless tartan with a rebellious edge, this iconic pant is not asking, but demanding attention.",
    details: [
        "Tartan Pant","Fitted Waistband","Slightly Flared Shape","Fly Front Closure with Button","Side Pockets","Designed in Naarm/Melbourne by our Apparel Design Team","Made from Cotton Fabric","Available in Multi"],
    gallery: [
        {src: "ASSETS/ShineBrightGothPant.png", alt: "Shine Bright Goth Pant"},
        {src: "ASSETS/ShineBrightGothPant2.png", alt: "Shine Bright Goth Pant 2"},
        {src: "ASSETS/MidnightGoshMeshTop3.png", alt: "Shine Bright Goth Pant 3"},
        {src: "ASSETS/ShineBrightGothPant3.png", alt: "Shine Bright Goth Pant 4"},
        {src: "ASSETS/ShineBrightGothPant4.png", alt: "Shine Bright Goth Pant 5"}
    }
    {
    id: "shine-goth-skort",
    name: "Shine Bright Goth Skort",
    category: 'Skort Womens Goth Mini',
    price: 67.2, oldPrice: 84,
    sizes: ["XS","S","M","L","XL"],
    code: "BGFAB135",
    description: "A timeless tartan with a rebellious edge, this iconic pant is not asking, but demanding attention.",
    details: [
        "Tartan Mini Skort","Fitted Waistband with Elasticated Back","Belt with Eyelets and a large buckle","Zip Closure at the Back","Eyelet Strap Details","Panneled Skirt","Shorts under layer","Designed in Naarm/ Melbourne by our apparel design team","Made from cotton fabric","Available in Multi"],
    gallery: [
        {src: "ASSETS/ShineGothSkort.png", alt: "Shine Bright Goth Skort"},
        {src: "ASSETS/ShineGothSkort2.png", alt: "Shine Bright Goth Skort 2"},
        {src: "ASSETS/ShineGothSkort3.png", alt: "Shine Bright Goth Skort 3"},
        {src: "ASSETS/ShineGothSkort4.png", alt: "Shine Bright Goth Skort 4"},
        {src: "ASSETS/ShineGothSkort5.png", alt: "Shine Bright Goth Skort 5"}
    }
    {
    id: "swarm-goth-cardigan",
    name: "Swarm Goth Cardigan",
    category: 'Cardigan Womens Goth Pink Cardigan',
    price: 78.4, oldPrice: 98,
    sizes: ["XS","S","M","L","XL"],
    code: "BGFAB152",
    description: "Flutter Into Trouble With The 'Swarm Goth' Cardi. This Piece Blends Soft Nostalgia With A Bold Edge. Crafted For Comfort With A Flattering Silhouette, It’s Perfect For Any Occasion.",
    details: [
        "Gradient Knit Cardigan","Relaxed Fit","Long Slightly Bellowed Sleeves","Round Neckline","Slightly Cropped","Buttons Down Front","Knitted from acrylic blend yarn","Designed in Naarm/ Melbourne by our apparel design team","Available in Multi"],
    gallery: [
        {src: "ASSETS/SwarmGothCardigan.png", alt: "Swarm Goth Cardigan"},
        {src: "ASSETS/SwarmGothCardigan2.png", alt: "Swarm Goth Cardigan 2"},
        {src: "ASSETS/SwarmGothCardigan3.png", alt: "Swarm Goth Cardigan 3"},
        {src: "ASSETS/SwarmGothCardigan4.png", alt: "Swarm Goth Cardigan 4"},
        {src: "ASSETS/SwarmGothCardigan5.png", alt: "Swarm Goth Cardigan 5"}
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