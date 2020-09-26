//HW VIDEO
{
    let movie = ['The dark night rises',2012,8.4]
    console.log(movie);
}
{
//read exercise
object-read(1)
    let movie = {
        title : "The dark night rises",
        year : 2012,
        rate : 8.4,
    }
// //c1
    console.log(movie);
//c2
    console.log(movie.title);
    console.log(movie.year);
    console.log(movie.rate);
//?
    console.log((movie.actor));
//=> result is undefined
    console.log(movie['title']);
}
{
//list-read(2)
    let list = ["sport","film","music"]
    for(i=0;i<=list.length;i++){
    console.log(list[i].toUpperCase());
    }
}

object-read(3)
{
  let movie = {
    title: "The dark night rises",
    year: 2012,
    rate: 8.4,
  };
  console.log(movie);
  let x = prompt("What do you want to know?");
  if (x == "title" || x == "year" || x == "rate") {
    alert(movie[x]);
  } else {
    alert(x + " does not exist in our data");
  }
}

object-update(1,2)
{
  let movie = {
    title: "The dark night rises",
    year: 2012,
    rate: 8.4,
  };
  movie.rate = 8.7
  movie.rate+=0.5
  console.log(movie.rate);
  let ask = prompt("What you want to update?")
  let ask1 = prompt("What is the update?")
  if (ask == "title"){
    movie.title=ask1
  }
  else if (ask == "year"){
    movie.year=ask1
  }
  else if (ask == "rate"){
    movie.rate=ask1
  }
  console.log(movie);
}

create
let person = [
    {name:"Trung",age:20},
    {name:"Quan",age:21},
];
console.log(person);
let person1 = {name:"Hoang",age:22}
person.push(person1)
console.log(person[1]);
let e = person[1]
let x = prompt("does not exist in our data, we will add new")
let y = prompt("Enter the new data")
console.log(person[1].x=y);
console.log(person[1]);

//array of object
let movie1 = {
    title: "mrbean",
    year: 1994,
    rate: 9,
};
let movie2 = {
    title: "007",
    year: 2000,
    rate: 8.5
};
let movie3 = {
    title: "000",
    year: 2010,
    rate: 7.0
};
let movies = [movie1,movie2,movie3];
console.log(movie1);
console.log(movie3.title);
for (let i = 0;i<movies.length;i++){
    console.log(movies[i]);
}
movie3.rate +=0.7
console.log(movie3);
let x = prompt("abc")
let y = prompt("xyz")
movies.push[2]=x.y
console.log(movies);

//object of array
let movie = {
    title: "mrbean",
    year: 2000,
    rate: 9.0,
    cast: ["atkinson","bond","miller"]
};
console.log(movie);
let cast = movie.cast;
console.log(cast);
cast.push=["trung"];
console.log(cast);

//object mix array
let movies = [
  {
    title: "mrbean",
    year: 2000,
    rate: 9.0,
    cast: ["atkinson", "bond", "miller"],
  },
  {
    title: "mind hunter",
    year: 2000,
    rate: 9.0,
    cast: ["holden", "bill", "bee"],
  },
  {
    title: "mrbean",
    year: 2000,
    rate: 9.0,
    cast: ["atkinson", "bond", "miller"],
  },
];
console.log(movies);

//object and for

{
    let results = [
        {
            popularity: 512.119,
            vote_count: 460,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            id: 475557,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
            original_language: "en",
            original_title: "Joker",
            genres: [80,18,53],
            title: "Joker",
            vote_average: 8.8,
            overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            release_date: "2019-10-04"
        },
        {
            popularity: 241.402,
            vote_count: 598,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
            id: 429203,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
            original_language: "en",
            original_title: "The Old Man & the Gun",
            genres: [35,80,18],
            title: "The Old Man & the Gun",
            vote_average: 6.3,
            overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
            release_date: "2018-09-28"
        },
        {
            popularity: 233.735,
            vote_count: 4139,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
            id: 429617,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
            original_language: "en",
            original_title: "Spider-Man: Far from Home",
            genres: [28,12,878],
            title: "Spider-Man: Far from Home",
            vote_average: 7.6,
            overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
            release_date: "2019-07-02"
        },
        {
            popularity: 158.333,
            vote_count: 323,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
            id: 522938,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
            original_language: "en",
            original_title: "Rambo: Last Blood",
            genres: [28,53],
            title: "Rambo: Last Blood",
            vote_average: 6.1,
            overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
            release_date: "2019-09-20"
        },
    ]
    console.log(results.length);
    console.log(results[0]);
    console.log(results[0].title);
    console.log(results[0].vote_average);
    console.log(results[0].genres);
    for (let i=0; i < results.length;i++) {
        console.log(results[i].title);
        console.log(results[i].vote_average);
        console.log(results[i].genres);
    }
    let x = prompt("What minimum rate do you want?")
    for (i = 0; i < results.length;i++){
        results[i].vote_average=x
    }
}

//HW CLASS
//Bài 1
{
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    };
    console.log("x receives from property");
    for (let x in product) {
    console.log(`${x} : ${product[x]}`);
    }
}

//Bài 2
{
    const task = {
        subject: 'Implement login feature',
        createdBy: 'Hoang Ngoc Duc',
        assignTo: 'Nguyen Phuong Nam',
        dueDate: '2019-10-08T18:00:24+0000',
        expectedHours: 0.5,
        };
    var{subject,dueDate,assignTo}=task;
}

//Bài 3
{
console.log("1. Is array");
console.log("2. Is object");
console.log("3. hits[vitriArr].property ");
}

//Bài 4
let dic = {
    debug:'The process of figuring out why your program has a certain error and how to fix it',
    done:'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect:'The formal word for ‘error’',
    pm:'The short version of Project Manager, the person in charge of the final result of a project',
    ui:'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}
let {debug,done,defect,pm,ui}=dic;
let x = prompt("enter a keyword");
if (x == "debug"){
    alert(debug);
}
else if (x == "done"){
    alert.log(done);
}
else if (x == "defect"){
    alert.log(defect);
}
else if (x == "pm"){
    alert.log(pm);
}
else if(x=="ui"){
    alert.log(ui);
}
else {
    let y = alert("We could not find your word: "+x);
    let z = prompt(y+" leave your explanation")
    alert(dic.y=z);
}

//Bài 5
let products = [
  {
    name: "Xiaomi portable",
    brand: "xiaomi",
    price: "428",
    color: "white",
    category: "charger",
  },
  {
    name: "vsmart1",
    brand: "vsmart",
    price: "5487",
    color: "black",
    category: "phone",
  },
  {
    name: "iphonex",
    brand: "apple",
    price: "21490",
    color: "gray",
    category: "phone",
  },
  {
    name: "samsung galaxy",
    brand: "samsung",
    price: "8490",
    color: "blue",
    category: "phone",
  },
];
console.log(products);
let { name, price } = products;
for (i = 0; i < products.length; i++) {
  console.log("\n-----------------------");
  console.log(products[i].name);
  console.log(products[i].price);
}
5.2
let x = parseInt(prompt("Enter product position"));
console.log(products[x - 1]);
5.3
5.4
products[0].provider="Phukienzero"
products[1].provider=["tgdd","ddghn","vhstore"]
products[2].provider="tgdd"
products[3].provider="tgdd"
console.log(products);
5.5

//Bài 6
console.log("Hi there, this is learning tasks to front-end developer career: ");
let tasks = [
    {
        subject: "HTML",
        complete: false,
    },
    {
        subject: "CSS",
        complete: false,
    },
    {
        subject: "Basic of Javascrip",
        complete: false,
    },
    {
        subject: "Node Packeage Manager",
        complete: false,
    },
    {
        subject: "Git",
        complete: false,
    }
];
for (let i = 0; i < tasks.length; i++) {
    console.log(i+1+" " +tasks[i].subject);
    console.log("  Complete: "+tasks[i].complete );
};

let x = prompt("Enter your command {new,delete,update,complete}")
if( x=="new"){
let y = prompt("Enter new task:")
let z = {
    subject: y,
    complete: false,

};
tasks.push(z)
for(let i =0;i<tasks.length;i++){
    console.log((i+1)+" "+tasks[i].subject);
    console.log("  Complete: "+tasks[i].complete);
}
}

{
let a = parseInt(prompt("Enter position:"))
let b = prompt("Enter new title:")
tasks[a].subject=b
console.log(tasks);
}
let a = parseInt(prompt("Enter position:"))
tasks[a].complete=true
console.log(tasks);
let c = parseInt(prompt("Enter position"))
tasks.splice(c,1)
console.log(tasks);

//Bài 7
const pos = {
    x: 200,
    y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);

//Bài 8
const square = {
  x: 100,
  y: 50,
  width: 20,
};
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (i = 0; i < 4; i++) {
  fd(square.width);
  rt(90);
}

//Bài 9
const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
    };
    penup()
    rt(90)
    fd(rect.x)
    lt(90)
    fd(rect.y)
    pendown()
    for(i=0;i<2;i++){
    fd(rect.height)
    rt(90)
    fd(rect.width)
    rt(90)
    }

//Bài 11
{
    const circle = {
        shape: 'circle',
        x: 100,
        y: 50,
        radius: 30,
    };
    penup();
    rt(90);
    fd(circle.x);
    lt(90);
    fd(circle.y);
    fd(circle.radius);
    pendown();
    rt(90);
    for (let i = 0; i < 600; i++) {
        fd(1);
        rt(1);
    }
}
    
//Bài 13
//Bài 14

//Bài 16
const oldData = {
    firedRice: {
        price: 30,
        vnName: 'Com rang dua bo',
    },
    noddle: {
        price: 20,
        vnName: 'My tom chanh',
    },
    pho: {
        price: 35,
        vnName: 'Pho bo tai chin',
    },
};
let {firedRice, pho} = oldData;
let newData = {firedRice, pho};
console.log(newData);