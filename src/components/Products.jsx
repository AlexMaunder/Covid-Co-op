import React, { Component } from 'react'
import _, { uniq } from "lodash";
import SearchResults from 'react-filter-search'
import { Redirect } from 'react-router-dom';
import './Products.css'

export class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      products: this.props.products,
      sendToCart: ''
    }

    this.showProducts = this.showProducts.bind(this);
    this.matchUser = this.matchUser.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.resetSorts = this.resetSorts.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }


  // AXIOS CALL TO GET ALL PRODUCTS FROM THE SERVER


  matchUser(user_id) {
    if (this.props.users.length > 0) {
      return this.props.users[_.findIndex(this.props.users, { id: user_id })].name;
    } else {
      return '';
    }
  }

  handleClick = (product_id) => {
    console.log(product_id);
    this.setState({ sendToCart: product_id })
    this.props.updateCart(product_id)
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  showProducts(productsArray) {
    if(productsArray) {
      return(
        productsArray.map((product) => {
          return(
          <div key={product.id} className='col-3 item'>
            <img src={product.image_url} alt={product.name}/>
            <h3>{product.name.slice(0, 25)} ...</h3>
            <p>Category: {product.category}</p>
            <p>Quantity available: {product.quantity}</p>
            <p>{product.description.slice(0, 30)}...</p>
            <p>Provided by: <a href="">{this.matchUser(product.user_id)}</a></p>
            <p>Posted: {Math.floor(Math.abs(new Date() - new Date(product.created_at))/1000/60/60/24)} days ago</p>
            {this.props.isLoggedIn ? <button type="button" className="btn btn-success btn-sm" onClick={() => {this.handleClick(product.id)}}>Add to Cart</button> : ''}
            {this.state.sendToCart ? <Redirect to={{pathname: "/shoppingcart", state: {product_id: this.state.sendToCart}}} /> : ''}
          </div>
          )
        })
      )
    } else {
      return '';
    }
  }

  getCategories() {
    let allCategories = [];
    if (this.props.products){
      this.props.products.map((product) => {
        allCategories.push(product.category);
      });
      let unique = allCategories.filter((item, i, ar) => ar.indexOf(item) === i);
      return unique.map((category) => {
        return (<option value={category} key={category}> {category} </option>)
      });
    }
  }

  sortByQuantity() {
    let sorted = _.orderBy(this.props.products, 'quantity', 'desc');
    this.setState({products: sorted});
  }

  sortByRecent() {
    let sorted = _.orderBy(this.props.products, 'created_at', 'desc');
    this.setState({ products: sorted });
  }

  handleSort(event) {
    let key = event.target.value;
    console.log(key);
    if (key === 'quantity') {
      this.sortByQuantity()
    }
    if (key === 'created-at') {
      this.sortByRecent()
    }
  }

  handleFilter(event) {
    let category = event.target.value;
    this.filterBy(category);
  }

  filterBy(category) {
    if (category == 'all'){
      this.setState({ products: this.props.products })
    } else {
      let filtered = _.filter(this.props.products, function (o) {
        return o.category == category;
      });
      this.setState({products: filtered})
    }
  }

  resetSorts() {
    this.setState({ products: this.props.products });
  }

  render() {
    return (
      <div className='row'>
        <div className="row">
          <div className="col-8 searchbar">
            <span className="search-heading">{"Search:"}</span> <input type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="col-4 sort">
            <div className="cat-select">
              <span className="category-heading">{"Category:"}</span>
              <select id="categories" name="categories" onChange={this.handleFilter}>
                {this.getCategories()}
                <option value="all">All</option>
              </select>
            </div>
            <div className="sort-select">
              <span className="sort-heading">{"Sort by:"}</span>
              <select id="sort" name="sort" onChange={this.handleSort}>
                <option value="created-at">Date Added</option>
                <option value="num-orders">Popularity</option>
                <option value="quantity">Quantity Available</option>
              </select>
              <button id='resetbtn' className='btn btn-warning' onClick={this.resetSorts}>Reset</button>
            </div>
          </div>
        </div>
        <div className="row">
          {this.showProducts()}
          <SearchResults
            value={this.state.value}
            data={this.state.products}
            renderResults={results => (
              this.showProducts(results)
            )}
          />
        </div>
      </div>
    )
  }
}

export default Products
