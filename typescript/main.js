// var burger:string = "hamburger",
//     calories:number = 300,
//     tasty:boolean = true;
//     function speak(food:string , energy: number):void{
//         console.log("Our "+ food + "has" + energy + "calories");
//     }
//     speak(burger, calories);
// Here we define our Food inyerface, its properties, and their types.
// interface Food{
//     name:string,
//     calories:number
// }
// // We tell your function to expect an object that fullfills the Food interface
// // This way we know that the properties we need will alway be avaiable
// function speak(food: Food):void{
//     console.log("Our " + food.name + " has " + food.calories + " calories.");
// }
// var ice_cream ={ name: "ice cream", calories:200}
// speak(ice_cream);
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    //Method
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(["A", "B"], 1);
sundayMenu.list();
