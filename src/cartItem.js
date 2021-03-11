import CartSummary from './cartSummary'

export default class CartItem {
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