import React from "react";
import "./searchresults.css";

function SearchResults(searchResults) {
  console.log(searchResults.searchResults);
  return (
    <div className="search-data">
      {searchResults &&
        searchResults.searchResults.map((result) => (
          <div className="searchDataCustomerDataName" key={result.phoneNumber}>
            <ul>
              <li className="searchDataCustomerName">
                <b>
                  {result.firstName} {result.lastName}
                </b>
              </li>
              <ul>
                <li className="searchDataCustomerDataItem">
                  <b>City:</b> {result.city}
                </li>
                <li className="searchDataCustomerDataItem">
                  <b>Country:</b> {result.country}
                </li>
                <li className="searchDataCustomerDataItem">
                  <b>Phone:</b> {result.phoneNumber}
                </li>
                <li className="searchDataCustomerDataItem">
                  <b>E-mail:</b> {result.email}
                </li>
                <li className="searchDataCustomerDataItem">
                  <b>Account Balance:</b> {result.accountBalance}
                </li>
              </ul>
            </ul>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default SearchResults;
