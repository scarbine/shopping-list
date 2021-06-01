
const shoppingList = [
    {
        id: 1,
        name: "milk",
        price: 5
    },
    {
        id: 2,
        name: "Eggs",
        price: 6
    },
    {
        id: 3,
        name: "Pizza Rolls",
        price: 4
    },
    {
        id: 4,
        name: "Nut Butter",
        price: 5
    },
    {
        id: 5,
        name: "Blueberries",
        price: 9
    },
    {
        id: 6,
        name: "Beyond Burgers",
        price: 8
    },
    {
        id: 7,
        name: "Carrots",
        price: 6
    },
]

// console.log(shoppingList)


// This function adds new list item to the shopping list
const currentDate = new Date(); 
const dateTime =  (currentDate.getMonth()+1)  + "/"
                + currentDate.getDate()  + "/" 
                + currentDate.getFullYear() + " @ "  
                + currentDate.getHours() + ":"  
                + currentDate.getMinutes() + ":" 
                + currentDate.getSeconds();


// console.log(dateTime)

// const newFooditem =[
    
//     {
//         name: "Apples",
//         price: 4,
//         dateCreated: dateTime
//     }
 
// ]

// console.log(newFoodItems)

// const addToShoppingList = (arr) => {

//     const lastIndex = arr.length -1

//     if(lastIndex === -1){
//     const newId = 1;
//     return newId
//     }
//     const lastItemId = arr[lastIndex].id
//     const newId = lastItemId +1
//     return newId


// }

// newFoodItems.id = addToShoppingList(shoppingList)
// shoppingList.push(newFoodItems)

// console.log(shoppingList)



// ----------version 2-------------------

const newFoodItems =[
    
    {
        name: "Apples",
        price: 4,
        dateCreated: dateTime
    },
    {
        name: "Cliff Bar",
        price: 10,
        dateCreated: dateTime
    },
    {
        name: "Squash",
        price: 8,
        dateCreated: dateTime
    },
    {
        name: "Cheese",
        price: 5,
        dateCreated: dateTime
    },
    {
        name: "Oranges",
        price: 10,
        dateCreated: dateTime
    }


]

// console.log(newFoodItems)

// This function adds new items from a new list array to the shopping list

for (const food of newFoodItems) {

    const addToShoppingList = (arr) => {


    const lastIndex = arr.length - 1;
    
    if (lastIndex === -1) {
        const newId = 1;
        food.id = newId
        shoppingList.push(food)
        return
        }

        const currentLastFood = arr[lastIndex];
        const maxId = currentLastFood.id;
        const newId = maxId + 1;
        food.id = newId
        shoppingList.push(food)
        return

    }
    addToShoppingList(shoppingList)

}

console.log(shoppingList)


// This function filters the grocery list and displays items that are more than $8
const highPriceItems = []

for (const item of shoppingList )
    if (item.price > 8) {
         highPriceItems.push(item)
    }

console.log(highPriceItems)