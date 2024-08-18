//Single line Comment

/*Multiline Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat vel, consectetur quasi beatae magnam. Quibusdam molestiae sapiente quod, veritatis perspiciatis, molestias minima vel cumque laboriosam, quo quaerat laudantium dolore.
In perferendis, quae deleniti suscipit ut laudantium explicabo cupiditate blanditiis ad voluptate dolores. Et quisquam labore ex molestiae! Tempore inventore corrupti rem minima veritatis et dicta possimus nisi blanditiis asperiores.
Inventore illum libero modi provident ex atque culpa maxime, magni laboriosam repellendus ipsam qui, consequuntur laborum eum non pariatur cum impedit distinctio id explicabo natus aliquam error nemo. Nemo, deleniti!
Nulla, sint ab esse maiores, dicta, distinctio iure alias provident fugiat quisquam ipsum totam officiis. Corrupti doloribus nostrum praesentium delectus in. Reprehenderit delectus voluptas non voluptates optio blanditiis inventore enim.
Ut voluptate quis libero praesentium nostrum non quos, incidunt voluptates explicabo laudantium magnam quaerat, a, cupiditate aperiam. Eligendi id aut voluptate tenetur nesciunt dolorum dolores, voluptatum molestiae corporis quas nulla!
Voluptates debitis vero pariatur omnis qui blanditiis unde aliquam voluptatem quisquam magni tenetur quasi beatae quos sequi autem quia, harum reiciendis nulla expedita eaque inventore non dolor illo earum. Porro!
Veritatis voluptatibus impedit eligendi error eveniet modi voluptatum dolorum, itaque at? Tempore ex officia atque tempora aliquid natus necessitatibus cum ipsum, maiores, beatae possimus quod non vitae temporibus sapiente inventore!
Neque alias quia soluta deserunt eos corrupti, nihil voluptatibus blanditiis harum est, dolores minima. Perspiciatis sint deserunt dolor odit neque? Quod quidem consequuntur ullam natus sequi pariatur quam optio placeat!
Blanditiis ut possimus, dicta sed id at quidem sequi quae velit, sapiente alias, dolorum consectetur quis quo. Nesciunt dolorum asperiores illo autem. Nisi aliquid consequatur officiis necessitatibus placeat hic! Ducimus?
Et, ea ut, reprehenderit soluta, laudantium iste corrupti nobis aspernatur aliquid dolorem molestiae iure tenetur exercitationem in. Vero, consequuntur iure qui distinctio perferendis optio aspernatur nemo alias nesciunt temporibus ipsam.*/

let fruits = ["Mango", "Orange", " Banana", "Tomato", "Lemon"]
document.getElementById("demo").innerHTML = fruits;

const arrange = () => {
    let arranged = fruits.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()),
    )
    console.log(arranged),
        document.getElementById("demo").innerHTML = arranged;
}

for (let data in fruits) {
    console.log(fruits[data])
}

let person = {
    firstname: "Ola",
    lastname: 'Wale'
}
console.log(person["firstname"] + " " + person["lastname"])
console.log(person.firstname + " " + person.lastname)

console.log(data);
var data = 4;


//twelfth.html
const disappea = () => {
    document.getElementById("btno").style.display === 'none' ? document.getElementById("btno").style.display = 'block' : document.getElementById("btno").style.display = 'none',
        document.getElementById("btno").innerHTML = '<h1>gooooooooo</h1>',
        console.log('none');
}