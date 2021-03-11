export default class CartSummary {
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