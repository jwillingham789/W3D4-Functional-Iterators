// Using the items variable, use array.map(), array.reduce(), array.forEach, and array.filter() to help you through the following questions.
// The answers should be logged out to your console using console.log()
// Make sure the output matches the answers below each question.
// Please comment your code as you walk through your thought process.

// Questions & Answers
// Show me how to calculate the average price of all items. Please console.log the average.

var total = items.reduce(function(previousItem, currentItem) {
  var previousPrice = isNaN(previousItem) ? previousItem.price : previousItem
  return previousPrice + currentItem.price
})

var averagePrice = total/items.length

console.log('____________________Question 1____________________')
console.log('The average price is ' + (averagePrice))
console.log('')

// Show me how to get an array of items that cost between $14.00 and $18.00 USD


var filteredPrices = items.filter(function(item) {
  //this will filter through all the items, then return only values >14 and <18 within the price property
  var item = isNaN(item) ? item.price : item
  return item > 14 && item < 18
})

filteredPrices = filteredPrices.map(function(item) {
  //returns the .title of each item into a new array
  return item.title
})

console.log('____________________Question 2____________________')
console.log(filteredPrices.join("\n"))
console.log('')


// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

var currencyGBP = items.find(function(item) {
  //this will look through all the items seaching for 'GBP' keyword within the currency_code property of each item, then return that object
  var item = item.currency_code
  return item === 'GBP'
})
//logged the object title here
console.log('____________________Question 3____________________')
console.log(currencyGBP.title + ' £' + currencyGBP.price)
console.log('')

// Show me how to find which items are made of wood. Please console.log the ones you find.

var woodItems = items.filter(function(item) {
  //this will filter through all the items, then look for a 'wood' keyword within the materials property
  return item.materials.includes('wood')
})

woodItems = woodItems.map(function(item) {
  //returns the .title of each item into a new array
  return item.title
})

console.log('____________________Question 4____________________')
console.log(woodItems.join("\n"))
console.log('')

// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

var numberItems = items.filter(function(item) {
  //this will filter through all the items, then look for a list of materials >= 8 within the materials property
  return item.materials.length >= 8
})

numberItems = numberItems.map(function(item) {
  //returns the .title of each item into a new array
  return item.title
})

console.log('____________________Question 5____________________')
console.log(numberItems.join("\n"))
console.log('')

// Show me how to calculate how many items were made by their sellers

var homemade = items.filter(function(item) {
  //this will filter through all the items, then look for a value of 'i_did' within the who_made property
  return item.who_made === 'i_did'
})

//then the console is returning the new array list length (18 objects)
console.log('____________________Question 6____________________')
console.log(homemade.length + ' were made by their sellers')
console.log('')
