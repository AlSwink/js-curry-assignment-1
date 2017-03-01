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
        const price = item.items.reduce(
          (previous, current) => {

          })
        return rItem(item.customer, tot)
      })
      return bill
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
