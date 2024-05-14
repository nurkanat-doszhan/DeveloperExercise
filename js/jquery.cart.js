
let btnLocation = document.getElementById('open_cart_btn');

function formatterCart (priceSum) {
    let price = priceSum.toString();
    let formattedPrice = '';
    for (let i = 0; i < price.length; i++) {
        if (i > 0 && i % 3 === 0) {
            formattedPrice = ' ' + formattedPrice;
        }
        formattedPrice = price[price.length - 1 - i] + formattedPrice;
    }
    return formattedPrice;
};

let itemAll = localStorage.getItem('all');
let show = 0;
if (localStorage.length > 0) {
    let itemCount = itemAll.split('(');
    itemCount.shift();
    show = itemCount.length;
}

let open_cart_number = document.getElementsByClassName('open_cart_number')[0];
open_cart_number.innerHTML = show;

btnLocation.addEventListener('click', function () {

    const divElement = document.createElement('div');

    divElement.classList.add('jqcart_layout');
    let allPrice = 0;

    function item() {
        let itemCount = itemAll.split('(');
        itemCount.shift();

        let parent;

        for(let i = 0; i < itemCount.length; i++) {
            let item = itemCount[i].split(',');
            let title = item[0];
            let img = item[1];
            let price = item[2];
            let prN = Number(price)
            allPrice += prN;
            // console.log(allPrice)
            console.log(typeof prN)
            let code = item[3].slice(0, length - 1);

            let cart = 
            `<ul class="jqcart_tbody" data-id="${code}">
                <li class="jqcart_small_td">
                    <img src="${img}" alt="Img">
                </li>
                <li>
                    <div class="jqcart_nd">
                        <a href="#chair.html">${title}</a>
                    </div>
                </li>
                <li></li>
                <li class="jqcart_price">${price}</li>
                <li>
                    <div class="jqcart_pm">
                        <input min="1" type="text" class="jqcart_amount" value="1">
                        <span class="jqcart_incr btnup" data-incr="1">
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                        </span>
                        <span class="jqcart_incr btndown" data-incr="-1">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </div>
                </li>
                <li class="jqcart_sum">${price}</li>
            </ul>`
            parent += cart;
        }
        return (
            parent
        )
    }

    divElement.innerHTML = `
        <div class="jqcart_content">
            <div class="jqcart_table_wrapper">
                <div class="jqcart_manage_order">
                
                    <ul class="jqcart_thead">
                        <li></li>
                        <li>ТОВАР</li>
                        <li></li>
                        <li>ЦЕНА</li>
                        <li>КОЛИЧЕСТВО </li>
                        <li>СТОИМОСТЬ</li>
                        <li id="close_window" style="padding: 15px 20px !important; cursor: pointer;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                            </svg>
                        </li>
                    </ul>
                    `+ item() +`
                </div>
            </div>
            
            <div class="jqcart_manage_block">
                <div class="jqcart_btn">
                    <button class="jqcart_open_form_btn">Оформить заказ</button>
                    <form class="jqcart_order_form" style="opacity: 0">
                        <input class="jqcart_return_btn" type="reset" value="Продолжить покупки">
                    </form>
                </div>
                <div class="jqcart_subtotal">Итого: <strong>${allPrice}</strong> тг</div>
            </div>
            
        </div>
    `;

    document.body.appendChild(divElement);

    document.getElementById('close_window').addEventListener('click', function () {
        document.querySelector('.jqcart_layout').remove();
    });
    // for (let i = 0; i < )
    // document.getElementsByClassName("btndown")[i].addEventListener('click', function () {
    //     alert('jfjfj')
    // });
    let btnup = document.getElementsByClassName("btnup");
    let btndown = document.getElementsByClassName("btndown");
    let jqcart_amount = document.getElementsByClassName("jqcart_amount");
    let jqcart_price = document.getElementsByClassName("jqcart_price");

    function tra(params) {
        for (let i = 0; i < params.length; i++) {
            switch (params) {
                case btnup:
                    params[i].addEventListener('click', function () {
                        jqcart_amount[i].value++;
                    });
                    break;
                case btndown:
                    params[i].addEventListener('click', function () {
                        if (jqcart_amount[i].value < 2) {
                            return
                        }
                        jqcart_amount[i].value--;
                    });
                    break;
                case jqcart_amount:
                    params[i].addEventListener('change', function () {
                        console.log('text')
                    });
                    break;
                default:
                    break;
            }
            params
        }
    }
    tra(btnup);
    tra(btndown);
    tra(jqcart_amount);
});