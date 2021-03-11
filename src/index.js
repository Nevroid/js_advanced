'use strict'

import Counter from './counter'
import Catalog from './catalog'

let counter = new Counter()
let moreBtnCounter = counter.moreBtnCounter
let catalog = new Catalog()

console.log(`moreBtnCounter value: ${moreBtnCounter}`)