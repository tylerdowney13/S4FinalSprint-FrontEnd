import { useState, useRef } from "react";
import axios from "axios";
import SearchResults from "../components/SearchResults";
import React from "react";
import Topbar from "../components/Topbar";

function SearchPage() {
  const [searchResults, setSearchResults] = useState(false);
  const searchRef = useRef();
  const databaseRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    const databaseValue = databaseRef.current.value;

    if (databaseValue === "id") {
      const res = await axios.get(
        `http://localhost:8080/customer/${searchValue}`
      );

      const userData = [];
      userData.push(res.data);
      console.log(userData);
      setSearchResults(userData);
    }

    if (databaseValue === "firstName") {
      const res = await axios.get(
        `http://localhost:8080/customer/search/findByFirstName?firstName=${searchValue}`
      );
      const userData = res.data._embedded.customer;
      console.log(userData);
      setSearchResults(userData);
    }

    if (databaseValue === "lastName") {
      const res = await axios.get(
        `http://localhost:8080/customer/search/findByLastName?lastName=${searchValue}`
      );
      const userData = res.data._embedded.customer;
      console.log(userData);
      setSearchResults(userData);
    }

    if (databaseValue === "email") {
      const res = await axios.get(
        `http://localhost:8080/customer/search/findByEmail?email=${searchValue}`
      );
      const userData = res.data._embedded.customer;
      console.log(userData);
      setSearchResults(userData);
    }

    if (databaseValue === "phoneNumber") {
      const res = await axios.get(
        `http://localhost:8080/customer/search/findByPhoneNumber?phoneNumber=${searchValue}`
      );
      const userData = res.data._embedded.customer;
      console.log(userData);
      setSearchResults(userData);
    }

    if (databaseValue === "address") {
      const res = await axios.get(
        `http://localhost:8080/customer/search/findByAddress?address=${searchValue.replace(
          " ",
          "%20"
        )}`
      );
      const userData = res.data._embedded.customer;
      console.log(userData);
      setSearchResults(userData);
    }

    if (databaseValue === "city") {
      const res = await axios.get(
        `http://localhost:8080/customer/search/findByCity?city=${searchValue.replace(
          " ",
          "%20"
        )}`
      );
      const userData = res.data._embedded.customer;
      console.log(userData);
      setSearchResults(userData);
    }

    if (databaseValue === "country") {
      const res = await axios.get(
        `http://localhost:8080/customer/search/findByCountry?country=${searchValue.replace(
          " ",
          "%20"
        )}`
      );
      const userData = res.data._embedded.customer;
      console.log(userData);
      setSearchResults(userData);
    }

    if (databaseValue === "accountBalance") {
      const res = await axios.get(
        `http://localhost:8080/customer/search/findByAccountBalance?accountBalance=${searchValue}`
      );
      const userData = res.data._embedded.customer;
      console.log(userData);
      setSearchResults(userData);
    }
  };
  return (
    <div>
      <Topbar />
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          placeholder="Search database"
          ref={searchRef}
        ></input>
        <select name="dropdown" id="database" ref={databaseRef}>
          <option value="id">id</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
          <option value="phoneNumber">Phone Number</option>
          <option value="address">Address</option>
          <option value="city">City</option>
          <option value="country">Country</option>
          <option value="accountBalance">Account Balance</option>
        </select>
        <button className="submit">Search</button>
      </form>
      {searchResults ? (
        <SearchResults searchResults={searchResults} />
      ) : (
        "nodata"
      )}
    </div>
  );
}

export default SearchPage;
