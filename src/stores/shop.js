import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'shop',
  state: () => ({
    products: [],
    categories: [],
    currentCategory: '',
    showModalPlus: false,
    showModalPencil: false,
    newProd: false,
    updateProd: false
  }),
  actions: {
    hideModal() {
      this.showModalPlus = false
      this.showModalPencil = false
      this.newProd = false,
      this.updateProd = false
    },
    modalVisible(arg) {
      if(arg === 'addProduct') {
        this.showModalPlus = true
      }
      if(arg === 'updateProduct') {
        this.showModalPencil = true
      }
    },
    getAllCategories() {
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>this.categories = json)
    },
    getProductsInASpecificCategory(prod) {
      this.currentCategory = prod
      fetch(`https://fakestoreapi.com/products/category/${prod}`)
            .then(res=>res.json())
            .then(json=>this.products = json)
    },
    addNewProduct() {
      fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(this.newProd = true)
            .then(this.getProductsInASpecificCategory(this.currentCategory))
    },
    updateProduct() {
      fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(this.updateProd = true)
            .then(this.getProductsInASpecificCategory(this.currentCategory))
    }
  }
})
