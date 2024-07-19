import  { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'ALL'
                },
                {
                    key: 'Chairs',
                    name: 'Chairs'
                },
                {
                    key: 'Table',
                    name: 'Tables'
                },
                {
                    key: 'Sofa',
                    name: 'Sofas'
                },
                {
                    key: 'Chandelier',
                    name: 'Chandeliers'
                },
                {
                    key: 'Coffe Table',
                    name: 'Coffe Tables'
                },
                {
                    key: 'Kitchen',
                    name: 'Kitchen '
                },
            ]
        }
    }
    render(){
        return(
            <div className='categories'>
          {this.state.categories.map(el =>(
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}
    export default Categories