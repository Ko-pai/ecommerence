const bigImage = document.querySelector(".bigImage")
const bigItem = document.querySelector(".bigItem")


let imageArray = [
    {
        id : 1,
        name : "product1-thumbnail",
        image : "./images/image-product-1.jpg",
        class : "product1-small-item",
        class2 : "product1-small-image"

    },
    {
        id : 2,
        name : "product2-thumbnail",
        image : "./images/image-product-2.jpg",
        class : "product2-small-item",
        class2 : "product2-small-image" 

    },
    {
        id : 3,
        name : "product3-thumbnail",
        image : "./images/image-product-3.jpg",
        class : "product3-small-item",
        class2 : "product3-small-image" 

    },
    {
        id : 4,
        name : "product4-thumbnail",
        image : "./images/image-product-4.jpg",
        class : "product4-small-item",
        class2 : "product4-small-image" 

    }
]



//creating list item and clicking method of small image in Light Box
const innerSmallImage = document.querySelector(".inner-small-item")
const smallImageContainer = document.querySelector(".small-image-container")
const nextIcon = document.querySelector(".nextIconContainer")


imageArray.map((data)=>{
    console.log(imageArray.length);
    let createList = document.createElement("li")
    let imageCreate = document.createElement("img")

    let createListInMainImage = document.createElement("li")
    let imageCreate1 = document.createElement("img")

    createList.id = data.id
    createList.classList.add(data.class)
    imageCreate.src = data.image
    imageCreate.alt = data.name

    createListInMainImage.id = data.id
    createListInMainImage.classList.add(data.class2)
    imageCreate1.src = data.image
    imageCreate1.alt = data.name


    createList.append(imageCreate)
    innerSmallImage.append(createList)

    createListInMainImage.append(imageCreate1)
    smallImageContainer.append(createListInMainImage)


    if(createListInMainImage.id == 1){
        createListInMainImage.classList.add("active")
        createListInMainImage.firstChild.classList.add("imgActive")
    }


   createListInMainImage.addEventListener("click",()=>{
       if(createListInMainImage.id == 2){
           ActiveStyleInMainPageSmallImage2()

           removeActiveStyleInMainPageSmallImage1()
           removeActiveStyleInMainPageSmallImage3()
           removeActiveStyleInMainPageSmallImage4()

           appearLightBox()

           removeActiveStyle1()
            removeActiveStyle3()
            removeActiveStyle4()

            ActiveStyle2()
           bigImage.src = "./images/image-product-2.jpg"
           bigImageInLightBox.src = "./images/image-product-2.jpg"
           //product2SmallImageInLightBox.firstChild.classList.remove("imgActive")

          

       }else if(createListInMainImage.id == 1){
           
           ActiveStyleInMainPageSmallImage1()

           removeActiveStyleInMainPageSmallImage2()
           removeActiveStyleInMainPageSmallImage3()
           removeActiveStyleInMainPageSmallImage4()

           appearLightBox()

           removeActiveStyle2()
            removeActiveStyle3()
            removeActiveStyle4()

            ActiveStyle1()
           
           bigImage.src = "./images/image-product-1.jpg"
           bigImageInLightBox.src = "./images/image-product-1.jpg"
           /*
           product2SmallImageInLightBox.classList.add("active")
           product2SmallImageInLightBox.firstChild.classList.add("imgActive")

          )
           */
       }else if(createListInMainImage.id == 3 ){
           ActiveStyleInMainPageSmallImage3()

           removeActiveStyleInMainPageSmallImage1()
           removeActiveStyleInMainPageSmallImage2()
           removeActiveStyleInMainPageSmallImage4()

           appearLightBox()

           removeActiveStyle1()
            removeActiveStyle2()
            removeActiveStyle4()
            ActiveStyle3()
           
           bigImage.src = "./images/image-product-3.jpg"
           bigImageInLightBox.src = "./images/image-product-3.jpg"
           
       }else{
           
            ActiveStyleInMainPageSmallImage4()

           removeActiveStyleInMainPageSmallImage1()
           removeActiveStyleInMainPageSmallImage2()
           removeActiveStyleInMainPageSmallImage3()
           
           appearLightBox()
           removeActiveStyle1()
            removeActiveStyle3()
            removeActiveStyle2()

            ActiveStyle4()

           bigImage.src = "./images/image-product-4.jpg"
           bigImageInLightBox.src = "./images/image-product-4.jpg"
       }
   })    

     if(createList.id == 1){
         createList.classList.add("active")
         createList.firstChild.classList.add("imgActive")
     }


    createList.addEventListener("click",()=>{
        
        if(createList.id == 2){
            createList.classList.add("active")
            createList.firstChild.classList.add("imgActive")

            removeActiveStyle1()
            removeActiveStyle3()
            removeActiveStyle4()
            
            ActiveStyleInMainPageSmallImage2()
            removeActiveStyleInMainPageSmallImage1()
            removeActiveStyleInMainPageSmallImage4()
            removeActiveStyleInMainPageSmallImage3()
            bigImage.src = "./images/image-product-2.jpg"
            bigImageInLightBox.src = "./images/image-product-2.jpg"
            //product2SmallImageInLightBox.firstChild.classList.remove("imgActive")

           

        }else if(createList.id == 1){
            
            createList.classList.add("active")
            createList.firstChild.classList.add("imgActive")
            removeActiveStyle2()
            removeActiveStyle3()
            removeActiveStyle4()
            
            ActiveStyleInMainPageSmallImage1()
            removeActiveStyleInMainPageSmallImage4()
            removeActiveStyleInMainPageSmallImage2()
            removeActiveStyleInMainPageSmallImage3()
            bigImage.src = "./images/image-product-1.jpg"
            bigImageInLightBox.src = "./images/image-product-1.jpg"
            /*
            product2SmallImageInLightBox.classList.add("active")
            product2SmallImageInLightBox.firstChild.classList.add("imgActive")

           )
            */
        }else if(createList.id == 3 ){
            createList.classList.add("active")
            createList.firstChild.classList.add("imgActive")

            removeActiveStyle1()
            removeActiveStyle2()
            removeActiveStyle4()
            
            ActiveStyleInMainPageSmallImage3()

            removeActiveStyleInMainPageSmallImage1()
            removeActiveStyleInMainPageSmallImage2()
            removeActiveStyleInMainPageSmallImage4()
            bigImage.src = "./images/image-product-3.jpg"
            bigImageInLightBox.src = "./images/image-product-3.jpg"
            
        }else{
            createList.classList.add("active")
            createList.firstChild.classList.add("imgActive")
            
            removeActiveStyle1()
            removeActiveStyle2()
            removeActiveStyle3()

            ActiveStyleInMainPageSmallImage4()
            
            removeActiveStyleInMainPageSmallImage1()
            removeActiveStyleInMainPageSmallImage2()
            removeActiveStyleInMainPageSmallImage3()

            bigImage.src = "./images/image-product-4.jpg"
            bigImageInLightBox.src = "./images/image-product-4.jpg"
        }
    })


    
})
const previousIcon = document.querySelector(".previousIconContainer")

for(let i = 0 ; i < imageArray.length ; i++){
    let left = 1
    nextIcon.addEventListener("click",(e)=>{
        
       left++

       if(left == 1){
            removeActiveStyle3()
            removeActiveStyle2()
            removeActiveStyle4()
            ActiveStyle1()
            bigImageInLightBox.src = imageArray[0].image
           

        }else if(left == 2){
            removeActiveStyle1()
            removeActiveStyle3()
            removeActiveStyle4()
            ActiveStyle2()
            bigImageInLightBox.src = imageArray[1].image
        }else if(left == 3){
            removeActiveStyle1()
            removeActiveStyle2()
            removeActiveStyle4()
            ActiveStyle3()
            bigImageInLightBox.src = imageArray[2].image
        }else{
            removeActiveStyle1()
            removeActiveStyle2()
            removeActiveStyle3()
            ActiveStyle4()
            bigImageInLightBox.src = imageArray[3].image
            left = 0
        }
    })

    previousIcon.addEventListener("click",()=>{
        
        if(left == 1){
            left = 4
            removeActiveStyle1()
            removeActiveStyle2()
            removeActiveStyle3()
            ActiveStyle4()
            bigImageInLightBox.src = imageArray[3].image
            console.log(left);
        }else if(left == 2){
            left = 1
            removeActiveStyle3()
            removeActiveStyle2()
            removeActiveStyle4()
            ActiveStyle1()
            bigImageInLightBox.src = imageArray[0].image
        }else if (left == 3 ){
            left = 2
            removeActiveStyle1()
            removeActiveStyle4()
            removeActiveStyle3()
            ActiveStyle2()
            bigImageInLightBox.src = imageArray[1].image
        }else{
            left = 3
            removeActiveStyle1()
            removeActiveStyle2()
            removeActiveStyle4()
            ActiveStyle3()
            bigImageInLightBox.src = imageArray[2].image
        }
    })
    


}
// small product image variable
const product1SmallImage = document.querySelector(".product1-small-image")
const product2SmallImage = document.querySelector(".product2-small-image")
const product3SmallImage = document.querySelector(".product3-small-image")
const product4SmallImage = document.querySelector(".product4-small-image")



//for light box 
const lightBox = document.querySelector(".lightBox")
const bigImageInLightBox = document.querySelector(".bigItemImage")
const crossInLightBox = document.querySelector(".cross")


// closing light box
crossInLightBox.addEventListener("click",()=>{
    disappearLightBox()
})



// clicking plus and minus method and variable for plus and minus 

const plusSign = document.querySelector(".plus")
const minusSign = document.querySelector(".minus")
const countNumberDiv = document.querySelector(".countNumber")


let count = 0;


plusSign.addEventListener("click",()=>{
    count++
    countNumberDiv.innerText = count
})


minusSign.addEventListener("click",()=>{
    
    if(count == 0){
        count = 0 

    }else{
        count--
        countNumberDiv.innerText = count
    }
})


//shopping cart icon click
const shoppingCartIcon = document.querySelector(".shoppingIcon")
const billCard = document.querySelector(".billCard")
const billContainer = document.querySelector(".billContainer")
const secondDivInbill = document.querySelector(".secondDivInBill")
const billCartItemContainer = document.querySelector(".inCartItemContainer")
const itemAndAmount = document.querySelector(".itemAndAmountContainer")
const emptyText = document.querySelector(".emptyText")
const amountOfShoes = document.querySelector(".amountOfShoes")
const quantityOfShoes = document.querySelector(".quantityOfShoes")
const multiplyOfAmountAndQuantity = document.querySelector(".multiplyOfAmountAndQuantity")
const deleteIcon = document.querySelector(".deleteIcon")
const checkoutButton = document.querySelector(".checkoutButton")
const body = document.querySelector("body")


const addToCartButton = document.querySelector(".addToCartButton")
const addToCartText = document.querySelector(".addToCartAmount")
const avatarIcon = document.querySelector(".avatarIcon")



shoppingCartIcon.addEventListener("click",()=>{
    if(billCard.classList.contains("active")){

        billCard.style.transform  = "scale(0)"
        billCard.classList.remove("active")
    }else{
        billCard.style.transform  = "scale(1)"
        billCard.classList.add("active")
    }

    if(addToCartText.innerHTML == 0){
        billCartItemContainer.style.display = "none"
        emptyText.style.display = "flex"
    }else{
        emptyText.style.display = "none"
        billCartItemContainer.style.display = "flex"
        quantityOfShoes.innerHTML = addToCartText.innerHTML
        multiplyOfAmountAndQuantity.innerHTML = Number(quantityOfShoes.innerHTML) * Number(amountOfShoes.innerHTML)
        itemAndAmount.style.transform = "scale(1)"
    }
})


checkoutButton.addEventListener("click",()=>{
    window.alert("We will send your order in two days. Thank you")
})





//for add to cart button click



avatarIcon.addEventListener("click",()=>{
    if(avatarIcon.classList.contains("borderColor")){
        avatarIcon.classList.remove("borderColor")
    }else{
        avatarIcon.classList.add("borderColor")
    }
})

addToCartButton.addEventListener("click",()=>{
    addToCartText.style.opacity = "1"
    addToCartText.innerText = countNumberDiv.innerText
    count = 0 
    countNumberDiv.innerText = count

})

//delete icon clicking method 
deleteIcon.addEventListener("click", ()=>{
    itemAndAmount.style.transform = "scale(0)"
    addToCartText.innerText = 0
    
    setTimeout(()=>{
        billCard.style.transform = "scale(0)"
    },1200)
})

//cross icon in menu slider 
const crossIconInMenu = document.querySelector(".crossIconInMenu")
const menuSlider = document.querySelector(".menuSlider")

crossIconInMenu.addEventListener("click",()=>{
    
    menuSlider.style.transform = "translateX(-350px)"
})

//heumberger menu clicking
const humburgerIcon = document.querySelector(".humburger")

humburgerIcon.addEventListener("click",()=>{
    menuSlider.style.transform = "translateX(0px)"
})

//this loop for header middle div container

const ulContainerInHeader = document.querySelector(".ulContainerInHeader")
const slider = document.querySelector(".slider")
const selectionData = [
    {
        id : 1,
        name : "Collection",

    },
    {
        id : 2,
        name : "Men",

    },
    {
        id : 3,
        name : "Women",

    },
    {
        id : 4,
        name : "About",

    },
    {
        id : 5,
        name : "Contact",

    }
]

selectionData.map((data)=>{
    const listCreate = document.createElement("li")
    listCreate.append(data.name)
    listCreate.id = data.id
    ulContainerInHeader.append(listCreate)

    listCreate.addEventListener("click",()=>{
        slider.style.width = listCreate.offsetWidth + "px"
        slider.style.transform  = `translateX(${listCreate.offsetLeft}px)`
    })


})


//left right arrow in bigImageContainer

const  leftAngleArrow =  document.querySelector(".leftArrowDiv")
const  rightAngleArrow =  document.querySelector(".rightArrowDiv")
let testCount = 1

rightAngleArrow.addEventListener("click",()=>{
    testCount++
    if(testCount == 1){
        bigImage.src = "./images/image-product-1.jpg"
    }else if(testCount == 2){
        bigImage.src = "./images/image-product-2.jpg"
    }else if(testCount == 3){
        bigImage.src = "./images/image-product-3.jpg"
    }else{
        bigImage.src = "./images/image-product-4.jpg"
        testCount = 0
    }
})

leftAngleArrow.addEventListener("click",()=>{

    testCount--
    if(testCount == -1){
        bigImage.src = "./images/image-product-3.jpg"
        
    }else if(testCount == -2){
        bigImage.src = "./images/image-product-2.jpg"
    }else if(testCount == -3){
        bigImage.src = "./images/image-product-1.jpg"
    }else{
        bigImage.src = "./images/image-product-4.jpg"
        testCount = 0
    }
})


//function for light box

function appearLightBox(){
    lightBox.classList.add("appear")
    lightBox.style.transform = "scale(1)"
}

function disappearLightBox (){
    lightBox.classList.remove("appear")
    lightBox.style.transform = "scale(0)"
}

function smallImageActive (smallImg,list){
        smallImg.style.opacity = "0.6"
        smallImg.style.borderRadius = "5px"
        list.style.borderRadius = "8px"
        list.style.border = "2px solid hsl(26, 100%, 55%)"
}


function smallImageDeactive (smallImg,list){
    smallImg.style.opacity = "1"
        smallImg.style.borderRadius = "5px"
        list.style.borderRadius = "8px"
        list.style.border = "inherit"
}

function removeActiveStyle2(){
        const product2SmallImageInLightBox = document.querySelector(".product2-small-item")
            product2SmallImageInLightBox.firstChild.classList.remove("imgActive")
            product2SmallImageInLightBox.classList.remove("active")

}
function removeActiveStyle1(){
        const product1SmallImageInLightBox = document.querySelector(".product1-small-item")
            product1SmallImageInLightBox.firstChild.classList.remove("imgActive")
            product1SmallImageInLightBox.classList.remove("active")

}
function removeActiveStyle3(){
        const product3SmallImageInLightBox = document.querySelector(".product3-small-item")
            product3SmallImageInLightBox.firstChild.classList.remove("imgActive")
            product3SmallImageInLightBox.classList.remove("active")

}
function removeActiveStyle4(){
        const product4SmallImageInLightBox = document.querySelector(".product4-small-item")
            product4SmallImageInLightBox.firstChild.classList.remove("imgActive")
            product4SmallImageInLightBox.classList.remove("active")

}
function ActiveStyle2(){
        const product2SmallImageInLightBox = document.querySelector(".product2-small-item")
            product2SmallImageInLightBox.firstChild.classList.add("imgActive")
            product2SmallImageInLightBox.classList.add("active")

}
function ActiveStyle1(){
        const product1SmallImageInLightBox = document.querySelector(".product1-small-item")
            product1SmallImageInLightBox.firstChild.classList.add("imgActive")
            product1SmallImageInLightBox.classList.add("active")

}
function ActiveStyle3(){
        const product3SmallImageInLightBox = document.querySelector(".product3-small-item")
            product3SmallImageInLightBox.firstChild.classList.add("imgActive")
            product3SmallImageInLightBox.classList.add("active")

}
function ActiveStyle4(){
        const product4SmallImageInLightBox = document.querySelector(".product4-small-item")
            product4SmallImageInLightBox.firstChild.classList.add("imgActive")
            product4SmallImageInLightBox.classList.add("active")

}


//for main page small Image
function removeActiveStyleInMainPageSmallImage2(){
        const product2SmallImageInMainPage = document.querySelector(".product2-small-image")
            product2SmallImageInMainPage.firstChild.classList.remove("imgActive")
            product2SmallImageInMainPage.classList.remove("active")

}
function removeActiveStyleInMainPageSmallImage1(){
        const product1SmallImageInMainPage = document.querySelector(".product1-small-image")
            product1SmallImageInMainPage.firstChild.classList.remove("imgActive")
            product1SmallImageInMainPage.classList.remove("active")

}
function removeActiveStyleInMainPageSmallImage3(){
        const product3SmallImageInMainPage = document.querySelector(".product3-small-image")
            product3SmallImageInMainPage.firstChild.classList.remove("imgActive")
            product3SmallImageInMainPage.classList.remove("active")

}
function removeActiveStyleInMainPageSmallImage4(){
        const product4SmallImageInMainPage = document.querySelector(".product4-small-image")
            product4SmallImageInMainPage.firstChild.classList.remove("imgActive")
            product4SmallImageInMainPage.classList.remove("active")

}

function ActiveStyleInMainPageSmallImage2(){
        const product2SmallImageInMainPage = document.querySelector(".product2-small-image")
            product2SmallImageInMainPage.firstChild.classList.add("imgActive")
            product2SmallImageInMainPage.classList.add("active")

}
function ActiveStyleInMainPageSmallImage1(){
        const product1SmallImageInMainPage = document.querySelector(".product1-small-image")
            product1SmallImageInMainPage.firstChild.classList.add("imgActive")
            product1SmallImageInMainPage.classList.add("active")

}
function ActiveStyleInMainPageSmallImage3(){
        const product3SmallImageInMainPage = document.querySelector(".product3-small-image")
            product3SmallImageInMainPage.firstChild.classList.add("imgActive")
            product3SmallImageInMainPage.classList.add("active")

}
function ActiveStyleInMainPageSmallImage4(){
        const product4SmallImageInMainPage = document.querySelector(".product4-small-image")
            product4SmallImageInMainPage.firstChild.classList.add("imgActive")
            product4SmallImageInMainPage.classList.add("active")

}

