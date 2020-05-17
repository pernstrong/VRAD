

* There should also be a button that when clicked, links the user to the /favorites route and displays only the favorited cards.
    we will need to make a favorites display component that shows the listing cards of the favorites...reuse listingCard ??
    Button is in header...need wrap that in a Link

<!-- * Users should be able to unfavorite a card both on the relevant route (/areas/:area_id/:listing_id) as well as the /favorites route. 
    Two buttons, one in favorites display and one in listing details
    method in app that removes a favorite...pass in the favorite to removes id, filter through and create new array with every one but the one that matches the id, save that to a variable, set state to said variable -->


* If there are no favorites, there should be a message indicating that there are no favorites.
    just a little conditional rendering, probably in favorites display component. 