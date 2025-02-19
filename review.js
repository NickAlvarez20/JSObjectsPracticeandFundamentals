let Chef = {
    name: "Doge Cooking",
    specialty: "Government Waste",
    cook() {
        console.log(`Hewrro Hrooman, this is Wroggey, the Wroge Chef. My real name is ${this.name} and my specialty is ${this.specialty}.`)
    }
}

Chef.cook();

function Meal(name, type, prepTime) {
    this.name = name;
    this.type = type;
    this.prepTime = prepTime;
}

Meal.prototype.describe = function () {
    console.log(`Name: ${this.name}\nType: ${this.type}\nPrep Time: ${this.prepTime} minutes`);
}

const Brecky = new Meal("Grilled Cheese", "Breakfast", 5);
const Loonch = new Meal("Tuna", "Lunch", 3);

Brecky.describe();
Loonch.describe();

// node review.js