//Use constructor functions to create an Object constructor

function Cookies(size, flavor, count) {
    this.size = size;
    this.flavor = flavor;
    this.count = count;
}

//Moving methods to prototypes
Cookies.prototype.countCookies = function () {
    console.log(`There are approximately ${this.count} in the box.`)
};

Cookies.prototype.updateCount = function (newCount) {
    this.count = (typeof newCount === 'number' ? newCount : 0);
}

Cookies.prototype.describe = function () {
    return `${this.size} ${this.flavor} cookies, ${this.count} left.`
}

Cookies.prototype.eatCookie = function () {
    if (this.count > 0) {
        this.count--;
        console.log(`Mmm, one ${this.flavor} cookie eaten! ${this.count} left.`)
    } else {
        console.log(`No ${this.flavor} cookies left to eat!`)
    }
}

Cookies.prototype.addCookies = function (batchCookies) {
    if (typeof batchCookies === 'number' && batchCookies > 0) {
        this.count += batchCookies;
    } else {
        this.count = this.count;
        console.log("Please add a valid number of cookies!")
    }
}

Cookies.prototype.describeFlavor = function () {
    console.log(`This ${this.flavor} cookie is very tasty! It is just like grandma made!`);
}

//Instantiate new cookie objects

const chocyChip = new Cookies("Large", "ChocyChip", 12);
const whiteChocy = new Cookies("Medium", "WhiteChocy", 240);

//Test eat cookie method
chocyChip.eatCookie();
console.log(chocyChip);
chocyChip.addCookies("fru");
console.log(chocyChip);

chocyChip.describeFlavor();



//node ObjectConstructors.js