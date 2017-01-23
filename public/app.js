var data = [
{name:"Boba", favouriteFood: "Sock Fluff", link: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, 
{name:"Barnaby", favouriteFood: "Tuna", link: "http://68.media.tumblr.com/tumblr_m5wv4xLp2T1rycpgto1_500.jpg"}, 
{name:"Max", favouriteFood: "Wisk", link: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}, 
{name: "Cagliari ", favouriteFood: "Football balls", link: "https://s-media-cache-ak0.pinimg.com/236x/69/5c/9b/695c9bd3dac521562c74a47466a3e219.jpg"}, 
{name: "Micio ", favouriteFood: "Cheese, just cheese", link: "https://i.ytimg.com/vi/lMoGvypnVog/hqdefault.jpg"} 
]

var createCat = function (name,food) {
  var catDetails = document.createElement('ul');
  catDetails.classList.add('cat');
  var catName = document.createElement('li');
  catName.innerText = ("Name: ") + name;
  var favouriteFood = document.createElement('li');
  favouriteFood.innerText = ("Favourite food: ")+food;
  catDetails.appendChild(catName);
  catDetails.appendChild(favouriteFood);
  return catDetails;
}

var catPict = function(link){
  var photo = document.createElement('img');
  photo.src = link;
  photo.width = 500
  return photo;
}

var appendElements = function(catInfo, catImage, cats){
  cats.appendChild(catInfo);
  catInfo.appendChild(catImage);
}

var addCat = function (name, food, link) {
  var catInfo = createCat(name,food);
  var catImage = catPict(link);
  var cats = document.getElementById("cats");
  appendElements(catInfo, catImage, cats);
}

var addAnArrayOfCats = function () {
  data.forEach(function(data){
    addCat(data.name, data.favouriteFood, data.link)
  })
}

var app = function () {

addAnArrayOfCats(data);
}

window.onload = app;
