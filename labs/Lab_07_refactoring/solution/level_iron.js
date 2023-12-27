let Fruits = 
{
    'apple': 'green', 
    'strawberry': 'red', 
    'blueberry': 'blue', 
    'raspberry': 'light red', 
    'lemon': 'yellow'
}
Fruit = Object.keys(Fruits)
Colour = Object.values(Fruits)

for(let key in Fruits)
{
    console.log(Fruit[key] + " " + Colour[key]);
}