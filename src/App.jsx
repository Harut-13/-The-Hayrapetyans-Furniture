import React from "react"
import Header from "./components/Header"
import { Foother } from "./components/Foother"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Chair',
          img: 'ator1.webp',
          desc: 'A Classic shell inspired accent chair upholstered in malaysian suede padded with uratex foam and has stainless steel legs.',
          category: 'Chairs',
          price: '50'
        },
        {
          id: 2,
          title: 'Table',
          img: 'sexan1.webp',
          desc: 'Space-Saving Light Luxury Small Apartment',
          category: 'Table',
          price: '150'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa1.jpg',
          desc: '𝐒𝐈𝐍𝐊 𝐈𝐍𝐓𝐎 𝐋𝐔𝐗𝐔𝐑𝐘: Our 3 and 2 seater sofa sets plush velvet upholstery and cozy cushions ensure maximum comfort and relaxation.',
          category: 'Sofa',
          price: '400'
        },
        {
          id: 4,
          title: 'Coffe Table',
          img: 'coffe table.jpg',
          desc: 'Easy to clean and maintain.Clean with a soft damp cloth using a mild detergent if required.',
          category: 'Coffe Table',
          price: '100'
        },
        {
          id: 5,
          title: 'Chandelier',
          img: 'chandelier.jpg',
          desc: 'Simple installation: all installation hardware to ensure quick and easy installation.',
          category: 'Chandelier',
          price: '140'
        },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deletOrder = this.deletOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deletOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Foother />
      </div>

    )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category ===category)
    })
  }

  deletOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {
      })
  }
}

export default App
