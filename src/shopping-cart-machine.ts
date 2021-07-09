import {createMachine} from 'xstate'

export interface Product {
    /**
     * The name of the product
     */
    name: string
    /**
     * The description of the product
     */
    description?: string
    /**
     * A unique product SKU
     */
    sku: string
    /**
     * The price of the product
     */
    price: number
    /**
     * A URL to an image of the product
     */
    image?: string
    /**
     * The currency of the product
     */
    currency: string
    /**
     * Any additional properties
     */
    [propName: string]: any
  }

export interface CartEntry extends Product {
    /**
     * Amount of this product in the cart
     */
    readonly quantity: number
    /**
     * The total line item value, the `price` multiplied by the `quantity`
     */
    readonly value: number
    /**
     * Currency formatted version of `value`
     */
    readonly formattedValue: string
  }

export interface CartMachineContext {
    allItemIds: string[]
    itemsById: {
        string?: CartEntry
    }
}

export type CartMachineEvent =
    | {
        type: 'ADD_ITEM'
      }
    | {
        type: 'CLEAR_CART'
      }
    | {
        type: 'CHECKOUT'
      }

const cartMachine = createMachine<CartMachineContext, CartMachineEvent>({
    id: 'cartMachine',
    initial: 'shopping',
    context: {
        allItemIds: [],
        itemsById: {}
    },
    states: {
        shopping: {
            on: {
                ADD_ITEM: {},
                CLEAR_CART: {},
                CHECKOUT: {}
            }
        },
        purchasing: {}
    }
})
