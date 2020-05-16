import React from "react";
import "./App.css";

import SignIn from "../SignIn/SignIn";
import AreasContainer from "../AreasContainer/AreasContainer";
import ListingsContainer from "../ListingsContainer/ListingsContainer";
// import Favorites from "../Favorites/Favorites";
import Header from "../Header/Header";
import ListingDetails from "../ListingDetails/ListingDetails";
import Favorites from "../Favorites/Favorites";
import { Route } from "react-router-dom";

// this.state will probably need: user, areas, currentArea/currentListings(in order to pass down to the listingsContainer to display the correct listings for each area), selectedListing(for all the details), favorites. maybe an allListings array...i'm thinking this would be the easiest way to fetch and then store the data...otherwise we could add a key to the areas objects that holds all the listings but that might get tricky. allListings could then be iterated over to match area_ids in order to display the correct ones for each area?
// BE CAREFUL NOT TO REPLICATE DATA IN this.state...we can do things like store ideas for favorites instead of storing the whole object. Then iterate over and match ids to display favorites.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      areas: [],
      listings: [],
      currentArea: "",
      currentListing: "",
      favorites: [],
    };
  }

  setUser = (newUser) => {
    this.setState({ user: newUser });
    this.fetchListings();
  };

  resetUser = () => {
    this.setState({ user: "" });
  };

  setCurrentArea = (area) => {
    this.setState({ currentArea: area });
  };

  setCurrentListing = (listingId) => {
    this.setState({ currentListing: listingId });
  };

  saveToFavorites = (listingId) => {
    const newFavorite = this.state.listings[this.state.currentArea].find(
      (listing) => listing.listing_id === listingId
    );
    this.setState({ favorites: [...this.state.favorites, newFavorite] });
  };

  removeFromFavorites = (listingId) => {
    const newFavorites = this.state.favorites.filter(
      (favorite) => favorite.listing_id !== listingId
    );
    this.setState({ favorites: newFavorites });
  };

  fetchListings = () => {
    fetch("https://vrad-api.herokuapp.com/api/v1/listings/")
      .then((response) => response.json())
      .then((data) => {
        const listingsInArea = data.listings.reduce(
          (listingObj, listing) => {
            listingObj[listing.area_id].push(listing);
            return listingObj;
          },
          { "590": [], "751": [], "408": [], "240": [] }
        );
        this.setState({ listings: listingsInArea });
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    fetch("https://vrad-api.herokuapp.com/api/v1/areas")
      .then((response) => response.json())
      .then((areaData) => {
        const promises = areaData.areas.map((area) => {
          let url = `https://vrad-api.herokuapp.com${area.details}`;
          return fetch(url)
            .then((response) => response.json())
            .then((areaDetails) => areaDetails);
        });
        return Promise.all(promises);
      })
      .then((resolvedData) => this.setState({ areas: resolvedData }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <Header
          user={this.state.user}
          resetUser={this.resetUser}
          numberOfFavorites={this.state.favorites.length}
        />
        <Route
          path="/"
          exact
          render={() => {
            return <SignIn setUser={this.setUser} />;
          }}
        />
        <Route
          path="/areas"
          exact
          render={() => {
            return (
              <AreasContainer
                areas={this.state.areas}
                setCurrentArea={this.setCurrentArea}
              />
            );
          }}
        />
        <Route
          path={`/areas/${this.state.currentArea}`}
          exact
          render={() => {
            return (
              <ListingsContainer
                listings={
                  this.state.currentArea !== ""
                    ? this.state.listings[this.state.currentArea]
                    : []
                }
                setCurrentListing={this.setCurrentListing}
              />
            );
          }}
        />
        <Route
          path={`/listings/${this.state.currentListing}`}
          exact
          render={() => {
            const currentListing = this.state.listings[
              this.state.currentArea
            ].find(
              (listing) => listing.listing_id === this.state.currentListing
            );
            return (
              <ListingDetails
                details={currentListing}
                saveToFavorites={this.saveToFavorites}
                removeFromFavorites={this.removeFromFavorites}
              />
            );
          }}
        />
        <Route
          path={"/favorites"}
          exact
          render={() => {
            return (
              <Favorites
                favorites={this.state.favorites}
                setCurrentListing={this.setCurrentListing}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
