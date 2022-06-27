
console.log('tanim');


    let main_cart = document.getElementById('main_cart')
    // main_cart.appendChild( myFunName())



    // fetch api
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(json=> {
    json.map(data =>{
    console.log(data);
    main_cart.appendChild( myFunName(data))
    })
    })


    //----------
    function myFunName({category, id, title, price}){
        let div = document.createElement('div');
        div.className = 'row';


        div.innerHTML = `
        
        
        <!-- start main cart  -->
        <div class="row">
            <!-- cart img -->
            <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                <img src="${category.image}" class="img-fluid">
            </div>
            <!-- cart product details -->
            <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                <div class="row">
                    <!-- product name -->
                    <div class="col-6 cart_title">
                        <h4 class="mb-4 product_name">${category.name}</h4>
                        <p class="mb-2"> Product Id : ${id}</p>
                        <p class="mb-2">Title : ${title}</p>
                        <p id="singlePrice" class="mb-2 text-primary cart_price">$ ${price}</p>
                    </div>

                    <!-- quentity inc dec -->
                    <div class="col-6">
                    <ul class="pagination justify-content-end set_quentity">
                    <li class="page_item">
                    <button class="page-link" id="decNumber" onclick="decNumber()">
                    <i class="fa-solid fa-minus"></i>
                    </button>
                    </li>
                    <li class="page_item">
                    <input class="page-link" type="text" name="" value="1" id="inputBox"></input>
                    </li>
                    <li class="page_item">
                    <button class="page-link" id="incNumber" onclick="incNumber()">
                    <i class="fa-solid fa-plus"></i>
                    </button>
                    </li>
                    </ul>
            </div>

                    <!-- remove items -->
                    <div class="row mt-4">
                    <div class="col-8 d-flex justify-content-between remove_price">
                    <p><i class="fa-solid fa-trash delete px-1"></i>REMOVE ITEM</p>
                    <p><i class="fa-solid fa-heart love px-1"></i>MOVE TO WISH LIST</p>
                    </div>
                    <div class="col-4 d-flex justify-content-end price_money">
                    <h5> <span id="leftItemAmount">0.00</span></h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <br/>
        <hr  class="hr" />
        <!-- end main cart -->

        `

        return div;
    }



    /*
       * increment btn-------------------------
    */

    function incNumber(){
        console.log('increment')

        let inputBox = document.getElementById('inputBox')


        // left
        let singlePrice = document.getElementById('singlePrice');
        let leftItemAmount = document.getElementById('leftItemAmount');


      
    
       if (inputBox.value >= 5){
        inputBox.value = 5;

        // if product Quentity >5 then red signal;
        if(inputBox.value = 5){
            inputBox.style.background = 'red';
            inputBox.style.color = 'white';
        }
       }
       
       else{
        inputBox.value ++;

  
        let leftResult = parseInt(singlePrice.innerHTML) + parseInt(leftItemAmount.innerHTML);
        leftItemAmount.innerHTML = leftResult;
       }

    }







    
    /*
       * decrement btn---------------------------
    */

    function decNumber(){
        console.log('decrement')

    let inputBox = document.getElementById('inputBox')

        
    // if product Quentity <=5 then red signal;
    if(inputBox.value <= 5){
        inputBox.style.backgroundColor = 'white';
        inputBox.style.color = "black";
    }
    
    if(inputBox.value <= 0){
        inputBox.value = 0;

    }

    else{
        inputBox.value --;
    }

    }