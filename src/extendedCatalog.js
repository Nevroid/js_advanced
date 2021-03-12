import CartItem from './cartItem'
import CartSummary from './cartSummary'

export default class ExtendedCatalog {
    _items = []
    _moreBtnCounter = ''

    constructor() {
        this._moreBtnCounter = moreBtnCounter
        this.fetchGoods(this._moreBtnCounter)
            .then(response => {
                return response.json()
            })
            .then(data => {
                const goods = data.data.map(item => {
                    let constructedCard = new Card(item)
                    return constructedCard
                })
                this._items = goods
                this.render()
            })
            .catch(() => {
                console.log('UnexpectedError2')
            })

    }

    fetchGoods(i) {
        if (typeof i !== 'undefined') {
            const dataUrl = `/data/items${i}.json`
            return fetch(dataUrl)
                .catch(() => {
                    console.log('UnexpectedError')
                })
        } else {
            console.log('UnexpectedError3')
        }
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
        const placeToRender = document.querySelector('.product-content')
        const moreBtn = document.createElement('div')
        moreBtn.innerHTML = 'Show more'
        moreBtn.id = 'moreBtn'
        moreBtn.classList.add('cart__control__button')
        placeToRender.appendChild(moreBtn)
        moreBtn.addEventListener('click', event => {
            console.log('add more items')
            moreBtnCounter = moreBtnCounter + 1
            console.log(`moreBtnCounter value: ${moreBtnCounter}`)
            moreBtn.remove()
            new ExtendedCatalog(moreBtnCounter)
        })


    }

}