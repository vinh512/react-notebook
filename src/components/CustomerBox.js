import React, { Component } from 'react';

import Customer from './Customer';

// This component houses the individual Person Entries

class CustomerBox extends Component {
  render() {
    // the function '_getCustomers' returns an array
    const customers = this._getCustomers();
    const correctTitle = this._getEntriesTitle(customers.length)

    return (
      <div className="comment-box">
        <h3>Entries</h3>
        <h4 className="comment-count">{correctTitle}</h4>
        <div className="comment-list">
          {customers}
        </div>
      </div>
    )
  }

  // Gets the customer data and returns the values as an array
  _getCustomers() {
    // data from API ...
    const customerList = [
      {id: 1, name: "Margie Chu", phone: "858-356-7633", body: "Ordered Food and returned with all the shrimps eaten."},
      {id: 2, name: "Robert Smith", phone: "619-553-2247", body: "Never picked up large order"}
    ];

    return customerList.map((entry) => {
      return ( <Customer
               name={entry.name}
               phone={entry.phone}
               body={entry.body}
               key={entry.id} />);
    });
  }

  _getEntriesTitle(customerCount) {
    if (customerCount === 0) {
      return 'No entries yet';
    } else if (customerCount === 1) {
      return '1 entry';
    } else {
      return `${customerCount} entries`;
    }
  }


}


export default CustomerBox;
