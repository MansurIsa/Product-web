let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


let boxContainer=document.querySelector('.test')
let totalPrice=document.querySelector('.total_price')

let x=0

totalPrice.innerHTML=x
let products=[
    {
        id: 1,
        img: 'https://i0.wp.com/recensgarden.co.za/wp-content/uploads/2021/10/Bananas.jpg?fit=612%2C505&ssl=1',
        title: 'Banana',
        price: 5
    },
    {
        id: 2,
        img: 'https://sihaorganic.com/wp-content/uploads/2021/08/What-to-do-with-pumpkin-500x500-1-150x150.jpg',
        title: 'Pumpkin',
        price: 6
    },
    {
        id: 3,
        img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg',
        title: 'Meat',
        price: 7
    },
    {
        id: 4,
        img: 'https://www.stonyfield.com/wp-content/uploads/2017/02/stonyfield-organic-milk-half-gallon-reduced-fat-500x500-1.png',
        title: 'Milk',
        price: 8
    },
    {
        id: 5,
        img: 'https://img.freepik.com/free-vector/set-vector-illustrations-wheat-spikelets-grains-sheaves-wheat-isolated-white-background_1441-624.jpg?w=740&t=st=1663506702~exp=1663507302~hmac=820fa9465811e6f3b28192064912d6bb82bd7a15023813327a7ab3e8d8fd1a66',
        title: 'Wheat',
        price: 9
    },
    {
        id: 6,
        img: 'https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2014/01/10/Production/Health/Images/bigstock-Half-of-pomegranate-on-a-white-12359999.jpg?uuid=V__-xHohEeOJY7S2VLzJsg',
        title: 'Pomegranate',
        price: 10
    },
    {
        id: 7,
        img: 'https://hopscan.com/wp-content/uploads/2020/09/Apple-Green.jpeg',
        title: 'Apple',
        price: 15
    },
    {
        id: 8,
        img: 'https://www.mashed.com/img/gallery/11-types-of-shrimp-varieties-from-around-the-world/pink-shrimp-1655409249.webp',
        title: 'Shrimp',
        price: 20
    }
]
console.log(products);
let basket=[]
products.forEach(data=>{
    boxContainer.innerHTML+=`
    <div class="box">
    <div class="icons">
        <a onclick="addToCart(event,${data.id})" href="#" class="fas fa-shopping-cart"></a>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
    </div>
    <div class="image">
        <img src="${data.img}" alt="">
    </div>
    <div class="content">
        <h3>${data.title}</h3>
        <div class="price">$${data.price}</div>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>
</div>
    `
})

let basketContainer=document.querySelector('.basket_container')
let count=document.querySelector('.count')
let y=0

count.innerHTML=y

function showList(arr){
    let total=[]
    let productCount=[]
    basketContainer.innerHTML=''
    arr.reverse().forEach(data=>{
        basketContainer.innerHTML+=`
            <div class="box">
                    <i onclick="remove(event,${data.id})" class="fas fa-times"></i>
                    <img src="${data.img}" alt="">
                    <div class="content">
                        <h3>${data.title}</h3>
                        <span class="quantity">${data.count}</span>
                        <span class="multiply">x</span>
                        <span class="price">$${data.price}</span>
                    </div>
                </div>
        `

        total.push(data.count*data.price)
        productCount.push(data.count)
    })

    // console.log(total);
    console.log(productCount);
    let z=0;
    for(let i=0;i<productCount.length;i++){
        z=z+productCount[i]
    }

    
    count.innerHTML=z
    let cem=0
    for(let i=0;i<total.length;i++){
        cem=cem+total[i]
    }
    // console.log(cem);
    totalPrice.innerHTML=`$${cem}`
}


function addToCart(e,id){
    let checkPr=basket.find(data=>data.id===+id)
    if(checkPr){
        checkPr.count+=1
    }else{
        let pr=products.find(data=>data.id===+id)
        pr.count=1
        basket.push(pr)
    }

    showList(basket)

    localStorage.setItem('basket',JSON.stringify(basket))
}


function remove(e,id){
    console.log('fffff');
    let elementIndex=basket.findIndex(data=>data.id===+id)
    basket.splice(elementIndex,1)
    showList(basket)
    localStorage.setItem('basket',JSON.stringify(basket))
}

if(localStorage.getItem('basket')){
    basket=JSON.parse(localStorage.getItem('basket'))
}

window.addEventListener('load',()=>{
    showList(basket)
})




