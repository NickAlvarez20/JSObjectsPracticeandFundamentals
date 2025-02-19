function Cookies(size, flavor, count) {
  this.size = size;
  this.flavor = flavor;
  this.count = count;
}

Cookies.prototype.countCookies = function () {
  console.log(`There are approximately ${this.count} in the box.`);
};

Cookies.prototype.eatCookie = function () {
  if (this.count > 0) {
    this.count--;
    console.log(`Mmm, one ${this.flavor} cookie eaten! ${this.count} left.`);
  } else {
    console.log(`No ${this.flavor} cookies left to eat!`);
  }
};

//Create a new cookie object with Cookies.prototype as its prototype
const sugarCookie = Object.create(Cookies.prototype);

//Set properties directly (since no constructor runs)
sugarCookie.size = "Small";
sugarCookie.flavor = "Sugar";
sugarCookie.count = 20;

//Test inherited methods
sugarCookie.countCookies();
sugarCookie.eatCookie();
console.log(sugarCookie);


//node Objectcreate.js
