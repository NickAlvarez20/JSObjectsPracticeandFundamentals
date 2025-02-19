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

//Instantiate new cookie objects

const chocyChip = new Cookies("Large", "ChocyChip", 12);
const whiteChocy = new Cookies("Medium", "WhiteChocy", 240);

//Invoke count cookies method on each new object

chocyChip.countCookies();
whiteChocy.countCookies();

//Log the updates to see how they performed

chocyChip.updateCount("noob");
console.log(chocyChip.count)
console.log(chocyChip)


console.log(chocyChip.hasOwnProperty('countCookies'));
console.log('countCookies' in chocyChip);
console.log(Cookies.prototype.isPrototypeOf(chocyChip));
console.log(Object.getPrototypeOf(chocyChip));

console.log(chocyChip.describe());
console.log(whiteChocy.describe());

chocyChip.countCookies = function () {
    console.log(`Only ${this.count} ChocyChips remain!`);
}
chocyChip.countCookies(); // "Only 0 ChocyChips remain!"
whiteChocy.countCookies(); // "There are approximately 240 in the box."


//node ObjectConstructors.js