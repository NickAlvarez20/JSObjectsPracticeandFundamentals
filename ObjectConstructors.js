//Use constructor functions to create an Object constructor

function Cookies(size, flavor, count) {
    this.size = size;
    this.flavor = flavor;
    this.count = count;
    this.countCookies = function () {
        console.log(`There are approximately ${this.count} in the box.`);
    }
    this.updateCount = function (newCount) {
        this.count = (typeof count === 'number') ? count : 0;
        
    }
}

const chocyChip = new Cookies("Large", "ChocyChip", 12);
const whiteChocy = new Cookies("Medium", "WhiteChocy", 240);

chocyChip.countCookies();
whiteChocy.countCookies();

chocyChip.updateCount("noob");
console.log(chocyChip.count)
console.log(chocyChip)



//node ObjectConstructors.js