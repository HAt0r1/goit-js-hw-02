function getShippingCost(country) {
  // We create a variable call 'price' to store a value(delivery price), that depends on the country that we pick.
  // After that, let`s call "if" and add into brakets condition: if country === "Own country" means that the deliver price = ...
  let price;
  if (country === "China") {
    price = 100;
  } else if (country === "Chile") {
    price = 250;
  } else if (country === "Australia") {
    price = 170;
  } else if (country === "Jamaica") {
    price = 120;
  }

  switch (country) {
    case "China":
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Chile":
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Australia":
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Jamaica":
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      return "Sorry, there is no delivery to your country";
      break;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
