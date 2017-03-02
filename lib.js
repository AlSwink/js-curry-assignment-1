'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      const bill = carts.map((item) => {
        const rItem = (customer, total) => ({customer, total})
        const iList = item.items
        let sum = 0
        iList.forEach(it => {
          listings.forEach(listing => {
            const lp = listedPrice(listing)
            const lp2 = lp(it)
            sum += lp2
          })
        })
        return rItem(item.customer, sum)
      })
      return bill
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
