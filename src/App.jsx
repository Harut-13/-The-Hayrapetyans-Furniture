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
          title: 'Chair Blue',
          img: 'ator1.webp',
          desc: 'A Classic shell inspired accent chair upholstered in malaysian suede padded with uratex foam and has stainless steel legs.',
          category: 'Chairs',
          price: '50'
        },
        {
          id: 2,
          title: 'Table White',
          img: 'sexan1.webp',
          desc: 'Space-Saving Light Luxury Small Apartment',
          category: 'Table',
          price: '200'
        },
        {
          id: 3,
          title: 'Sofa White',
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
        {
          id: 6,
          title: 'Chair Green',
          img: 'ator2.webp',
          desc: 'Hendrix Upholstered Barrel Chair',
          category: 'Chairs',
          price: '100'
        },
        {
          id: 7,
          title: 'Table Black',
          img: 'sexan2.webp',
          desc: 'Rib Dining Table Set - Design Your Dream',
          category: 'Table',
          price: '290'
        },
        {
          id: 8,
          title: 'Sofa Brown & White',
          img: 'sofa2.webp',
          desc: 'Jimi Corner/L Shape Sofa Design – Extra Comfort & Style',
          category: 'Sofa',
          price: '390'
        },
        {
          id: 9,
          title: 'Coffe Table',
          img: 'coffetable2.jpg',
          desc: 'High-end Italian Lift-top Nesting Coffee Table with Rotatable Drawers White & Walnut',
          category: 'Coffe Table',
          price: '385'
        },
        {
          id: 10,
          title: 'Chandelier',
          img: 'Chandelier2.jpg',
          desc: 'DREAMY DESIGNS Luxury Premium Black Gold 500 MM 4 - Tier K9 Cutting Crystal',
          category: 'Chandelier',
          price: '400'
        },
        {
          id: 11,
          title: 'Kitchen',
          img: 'kitchen1.avif',
          desc: 'Top Modular Kitchen Furniture ',
          category: 'Kitchen',
          price: '490'
        },
        {
          id: 12,
          title: 'Kitchen',
          img: 'KITCHEN2.jpg',
          desc: 'Top Modular Kitchen Furniture ',
          category: 'Kitchen',
          price: '599'
        },
        {
          id: 13,
          title: 'Chair',
          img: 'ator3.webp',
          desc: 'Oikiture Armchair Accent Chairs Sofa Lounge Fabric Upholstered Tub Chair Blue ',
          category: 'Chairs',
          price: '200'
        },
        {
          id: 14,
          title: 'Table',
          img: 'sexan3.jpg',
          desc: 'Modern Dining Tables • Contemporary Italian',
          category: 'Table',
          price: '310'
        },
        {
          id: 15,
          title: 'Sofa',
          img: 'sofa3.webp',
          desc: 'Woodland Furniture 3 Seater Fabric Sofa for Living Room Furniture ',
          category: 'Sofa',
          price: '609'
        },
        {
          id: 16,
          title: 'Coffe Table',
          img: 'coffe table3.jpg',
          desc: 'With a luxurious glass top and fine wood finish base, the Dove Cocktail Table truly is an elegant and eye-catching living room piece.',
          category: 'Coffe Table',
          price: '150'
        },
        {
          id: 17,
          title: 'Strip Modern Chandelier',
          img: 'chandelier3.webp',
          desc: 'Material: High-quality aluminum and silica gel finished by electroplating gold and polishing applied, resulting in high-temperature resistance, anti-corrosion, faded prevention, not easy to scratch, easy to clean and better light transmission and heat dissipation.',
          category: 'Chandelier',
          price: '550'
        },
        {
          id: 18,
          title: 'Kitchen',
          img: 'kitchen3.jpg',
          desc: 'Chamber Furniture | Furniture Designers ',
          category: 'Kitchen',
          price: '610'
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
