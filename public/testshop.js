class Card {

    _title = ''
    _description = ''
    _price = 0
    _img = ''
    _page = ''
    id = 0

    constructor({
        title,
        description,
        price,
        img,
        page,
        id
    }) {
        this._title = title
        this._description = description
        this._price = price
        this._img = img
        this._page = page
        this.id = id

    }

    render() {
        const placeToRender = document.querySelector('.product-content')
        if (placeToRender) {

            const productCard = document.createElement('div')
            productCard.innerHTML = `
            
            <a href=${this._page}>
                    <img class="product__img" src=${this._img} alt=${this._title}>
                </a>
                <div class="product__add" href="#">
                    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
                            fill="white" />
                    </svg> Add to Cart
                </div>
                <div class="product__info">
                    <a href=${this._page} class="product__name">${this._title}</a>
                    <p class="product__text">${this._description}</p>
                    <div class="product__price">$${this._price}</div>
            `
            productCard.classList.add('product_mb', 'product')
            productCard.id = this.id
            placeToRender.appendChild(productCard)

        }
    }

}


class Catalog {
    _items = []

    constructor() {
        let goods = this.fetchGoods()
        goods = goods.map(item => {
            let constructedCard = new Card(item)
            return constructedCard
        })
        this._items = goods
        this.render()


    }



    fetchGoods() {
        return [{
                title: 'T-Shirt',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                price: 88,
                img: './img/product_000.jpg',
                page: '',
                id: 1
            },
            {
                title: 'Jeans',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                price: 125,
                img: './img/product_001.jpg',
                page: '',
                id: 2
            },
            {
                title: 'Sweater',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                price: 75,
                img: './img/product_003.jpg',
                page: '',
                id: 3
            },
            {
                title: 'Coat',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                price: 200,
                img: './img/product_004.jpg',
                page: '',
                id: 4
            },
            {
                title: 'Socks',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                price: 5,
                img: './img/product_005.jpg',
                page: '',
                id: 5
            },
            {
                title: 'Sneakers',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                price: 50,
                img: './img/product_006.jpg',
                page: '',
                id: 6
            }
        ]
    }

    render() {
        this._items.forEach(good => {
            good.render()
            let addBtn = document.getElementById(good.id)
            addBtn.addEventListener('click', function (event) {
                console.log(`added`)

                let targetId = "cart" + good.id
                if (document.getElementById(targetId)) {
                    let targetItem = document.getElementById(targetId + "q")
                    let newQnt = parseInt(targetItem.innerHTML) + 1
                    targetItem.innerHTML = newQnt
                    new CartSummary()
                } else {
                    new CartItem(good, targetId)
                    new CartSummary()
                }

            })
        })
    }

}

class CartItem {
    _title = ''
    _description = ''
    _price = 0
    _img = ''
    _page = ''
    _id = ''
    _qnt = 1

    constructor({
        _title,
        _description,
        _price,
        _img,
        _page
    }, _id, _qnt) {
        this._title = _title
        this._description = _description
        this._price = _price
        this._img = _img
        this._page = _page
        this._id = _id


        this.render()
    }


    render() {
        const placeToRender = document.querySelector('.product__usercart')
        if (placeToRender) {

            const productCard = document.createElement('div')
            productCard.innerHTML = `
            
                <a href=${this._page}>
                    <img class="product__img" src=${this._img} alt=${this._title}>
                </a>
                <div class="product__info">
                <a href=${this._page} class="product__name">${this._title}</a>
                <p class="product__text">${this._description}</p>
                <div class="product__price">$<span id="${this._id + "p"}" class="product__price price-calc">${this._price}</span></div>                
                <div class="product__price"><span class="decrQnt" id="${this._id + "decrQnt"}">   -   </span>Quantity: <span id="${this._id + "q"}" class="qnt-calc">${this._qnt}</span><span class="incrQnt" id="${this._id + "incrQnt"}">  +  </span></div>
                
                
            `
            productCard.classList.add('product_mb', 'product', 'userCart__item')
            productCard.id = this._id
            placeToRender.appendChild(productCard)
            let plusBtns = document.getElementById(this._id + "incrQnt")
            plusBtns.addEventListener('click', (event) => {
                event.preventDefault()
                console.log("+ click")
                let qntId = this._id + "q"
                document.getElementById(qntId).innerHTML = parseInt(document.getElementById(qntId).innerHTML) + 1
                new CartSummary()
            })

            let minusBtns = document.getElementById(this._id + "decrQnt")
            minusBtns.addEventListener('click', elem => {
                console.log("- click")
                let qntId = this._id + "q"
                if (document.getElementById(qntId).innerHTML > 1) {
                    document.getElementById(qntId).innerHTML = parseInt(document.getElementById(qntId).innerHTML) - 1
                    new CartSummary()

                } else {
                    let cardToDelete = document.getElementById(this._id)
                    cardToDelete.parentNode.removeChild(cardToDelete)
                    new CartSummary()

                }
            })



        }
    }

}

class CartSummary {
    cashSumm = 0
    qntSumm = 0

    constructor() {
        let totalSum = 0
        let totalQnt = 0
        // Тут костыль, не могу сообразить как сделать правильно
        for (let i = 0; i < 1000; i++) {
            if (document.getElementById("cart" + i)) {
                let itemQnt = parseInt(document.getElementById("cart" + i + "q").innerHTML)
                let itemPrice = parseInt(document.getElementById("cart" + i + "p").innerHTML)
                let itemCashSum = itemPrice * itemQnt
                totalSum = totalSum + itemCashSum
                totalQnt = totalQnt + itemQnt
            }
        }

        this.cashSumm = totalSum
        this.qntSumm = totalQnt
        console.log(`Total quantity: ${this.qntSumm}. Your total cart cost: ${this.cashSumm}`)

        this.render()



    }
    render() {
        const placeToRender = document.querySelector('.product__usercart__footer')
        if (placeToRender) {
            const summaryDiv = document.querySelector('.product__usercart-summary')
            if (summaryDiv) {
                summaryDiv.parentNode.removeChild(summaryDiv)
                const summary = document.createElement('div')
                summary.innerHTML = `Total quantity: ${this.qntSumm}. Your total cart cost: $${this.cashSumm}`
                summary.classList.add('product__usercart-summary')
                placeToRender.appendChild(summary)
            } else {
                const summary = document.createElement('div')
                summary.innerHTML = `Total quantity: ${this.qntSumm}. Your total cart cost: $${this.cashSumm}`
                summary.classList.add('product__usercart-summary')
                placeToRender.appendChild(summary)
            }


        }
    }
}
let catalog = new Catalog()