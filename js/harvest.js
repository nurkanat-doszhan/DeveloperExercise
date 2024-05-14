// LIST

const data = [
    {
        link: '#chair.html',
        title: 'Slim PRO',
        desc: 'Cтул Slim PRO предназначено не только для работы за компьютером, но и для дополнения антуража помещения. Красиво выполненная конструкция не только изысканно смотрится.',
        price: '83000',
        img: 'images/stul_kresla/SlimPRO.png',
        code: '6702',
        parent: 'computer',
        category: 'computer_chair',
    },
    {
        link: '#chair.html',
        title: 'Slim',
        desc: 'Изящные, легкие, универсальные и эргономичные кресла Slim подойдут для кабинета руководителя. А различные модификации этой серии позволят оформить в едином стиле различные зоны офиса.',
        price: '79000',
        img: 'images/stul_kresla/slim.png',
        code: '6101',
        parent: 'computer',
        category: 'computer_chair',
    },
    {
        link: '#chair.html',
        title: 'Slim DC',
        desc: 'Кресло Slim DC - это офисное кресло для руководителя спинка и сидение которого выполнена из из мягкой сетки.',
        price: '134100',
        img: 'images/stul_kresla/GloryDC.png',
        code: '6987',
        parent: 'computer',
        category: 'computer_chair',
    },
    {
        link: '#chair.html',
        title: 'Hi-tech',
        desc: 'Модель Hi-tech изготовлена в модном дизайне, а значит, будет отлично смотреться в любом современном интерьере.',
        price: '95500',
        img: 'images/stul_kresla/Hi-tech.png',
        code: '6203',
        parent: 'computer',
        category: 'computer_chair',
    },
    {
        link: '#chair.html',
        title: 'Hi-tech PRO',
        desc: 'Профилированная спинка – спинка, имеет анатомически правильную форму, повторяющую естественный изгиб позвоночника.',
        price: '125000',
        img: 'images/stul_kresla/Hi-techPRO.png',
        code: '6057',
        parent: 'computer',
        category: 'computer_chair',
    },
    {
        link: '#chair.html',
        title: 'Prestige DC',
        desc: 'Утонченность и функциональность, высокое качество обивочных материалов и комплектующих – сочетание, достойное современного офисного кресла.',
        price: '122000',
        img: 'images/stul_kresla/PrestigeDC.png',
        code: '6041',
        parent: 'computer',
        category: 'computer_chair',
    },
    {
        link: '#chair.html',
        title: 'Comfort DC',
        desc: 'Многоцелевое кресло нового поколения, олицетворяет новые стандарты простоты, универсальной применимости, качества и комфорта.',
        price: '97610',
        img: 'images/stul_kresla/ComfortDC.png',
        code: '6807',
        parent: 'computer',
        category: 'computer_chair',
    },
];

// SHOW

let computerChairList = document.getElementById('computerChairList_____SHOW');

displayList(data, computerChairList);

function displayList(array, uniqId) {

    uniqId.innerHTML = "";

    array.map((a) => {

        let formatter = function (priceSum) {
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

        let productItem = document.createElement('div');

        productItem.classList.add("product_item");

        productItem.innerHTML = `
        <a class="product_item_content" href="${a.link}">
            <img class="product_item_img" src="${a.img}" alt="Product">
            <div class="product_item_text">
                <h5>${a.title} | code: ${a.code}</h5>
                <p>${a.desc}</p>
            </div>
        </a>
        <div class="product_item_price">
            <span class="product_item_price_text">Цена:</span>
            <br>
            <span class="product_item_price_cost">${formatter(a.price)} <span class="product_item_price_par">₸</span> </span>
            <a class="product_item_price_btn" data-code="${a.code}" style="user-select: none;">В корзину</a>
        </div>
        `;

        uniqId.appendChild(productItem);

    });

}
let addToCardButtonClick = document.getElementsByClassName('product_item_price_btn');
for (let i = 0; i < addToCardButtonClick.length; i++) {
    addToCardButtonClick[i].onclick = function() {
        console.log(i);
        console.log(data[i].code)
        let item = localStorage.getItem('all');
        let newItem = [data[i].title, data[i].img, data[i].price, data[i].code];
        localStorage.setItem('all', [item, `(${newItem})`])
        // if (localStorage.key() ==)
        // console.log(localStorage.getItem(data[i].code))
    }
}

let sortButton = document.getElementsByClassName("sorting_option")[0];
sortButton.onclick = function() {
    for (let i = 0; i < sortButton.children.length; i++) {
        if (sortButton.children[i].classList.contains('selected')) {
            switch (sortButton.children[i].classList.contains('selected')) {
                case i == 0: sort(0); break;
                case i == 1: sort(1); break;
                case i == 2: sort(2); break;
                case i == 3: sort(3); break;
                default: break;
            }
        }
    }
}

function sort(x) {
    var nodeList = document.querySelectorAll('.product_item');
    var itemsArray = [];
    var parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {
        itemsArray.push(parent.removeChild(nodeList[i]));
    }
    if (x == 0) {
        itemsArray.sort(function(nodeA, nodeB) {
            var textA = nodeA.querySelector('.product_item_price_cost').textContent;
            var textB = nodeB.querySelector('.product_item_price_cost').textContent;
            var numberA = parseInt(textA);
            var numberB = parseInt(textB);
            if (numberA < numberB) return -1;
            if (numberA > numberB) return 1;
            return 0;
        }).forEach(function(node) { parent.appendChild(node) });
    }
    if (x == 1) {
        itemsArray.sort(function(nodeA, nodeB) {
            var textA = nodeA.querySelector('.product_item_price_cost').textContent;
            var textB = nodeB.querySelector('.product_item_price_cost').textContent;
            var numberA = parseInt(textA);
            var numberB = parseInt(textB);
            if (numberA < numberB) return 1;
            if (numberA > numberB) return -1;
            return 0;
        }).forEach(function(node) { parent.appendChild(node) });
    }
    if (x == 2) {
        itemsArray.sort(function(nodeA, nodeB) {
            var textA = nodeA.querySelector('.product_item_text').textContent;
            var textB = nodeB.querySelector('.product_item_text').textContent;
            let codeA = textA.split('code: ').pop().split('\n')[0]
            let codeB = textB.split('code: ').pop().split('\n')[0]
            var numberA = parseInt(codeA);
            var numberB = parseInt(codeB);
            if (numberA < numberB) return -1;
            if (numberA > numberB) return 1;
            return 0;
        }).forEach(function(node) { parent.appendChild(node) });
    }
    if (x == 3) {
        itemsArray.sort(function(nodeA, nodeB) {
            var textA = nodeA.querySelector('.product_item_text').textContent;
            var textB = nodeB.querySelector('.product_item_text').textContent;
            if (textA < textB) return -1;
            if (textA > textB) return 1;
            return 0;
        }).forEach(function(node) { parent.appendChild(node) });
    }
}
