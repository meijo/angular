
var app = angular.module('gemStore',[]);
(function() {

  var gems = [{
name: "Dodecahedron",
price: 2.95,
description: ". . .",
canPurchase: true,
images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ]
},
{
name: "Pentagonal Gem",
price: 5.95,
description: ". . .",
canPurchase: false,
images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ]
}
];



  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
   this.products = gems;
  
});


 app.controller('TabController', function(){
  this.tab = 1;
  this.bibi = 'baba';
  this.setTab = function(tab){
    this.tab = tab;
	
  };
  this.isSet = function(tab){
    return this.tab === tab;
  }; 
  });
  
  
  
   app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });
  
  
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product) {
product.reviews.push(this.review);
      this.review = {};
    };
  });
  
  
  
  
})();


