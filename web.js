
//LIST ALL FUNCTION FOR ALL CARDS
var allCards = [];

//0: 04 91 89 52 1A 4E 80
//1: 04 90 89 52 1A 4E 80
//2: 04 71 89 52 1A 4E 80
//3: 04 B2 89 52 1A 4E 80
//4: 04 4E 89 52 1A 4E 80
//5: 04 D5 89 52 1A 4E 80
//6: 04 39 89 52 1A 4E 81
//7: 04 59 89 52 1A 4E 81
//8: 04 3A 89 52 1A 4E 81
//9: 04 18 89 52 1A 4E 81


var images = [false, false, false, false, false];
var position = [0,0,0,0,0]
var count = 1;
var a1 = 0;
var imageArr = [];
var card0=true;
var card1=true;
var card2=true;
var card3=true;
var card4=true;
var card5=true;
var card6=true;
var card7=true;
var card8=true;
var card9=true;

//card0: #doudou

allCards[" 04 91 89 52 1A 4E 80"] = function(){

  if (card0==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
  
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image0"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('doudou') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });
   
    
  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image0"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('doudou') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     imageArr = [];
      var allImg2 = $(".image0");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();

  },
    });

      var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image0"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('doudou') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

   
  },
    });

      userFeed.run();
      userFeed1.run();
      userFeed2.run();

      card0=false;

      console.log(card0);
}

}



//card2 : #alps

allCards[" 04 71 89 52 1A 4E 80"] = function(){

if(card2==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image2"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('alps') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      
      imageArr = [];
      var allImg2 = $(".image2");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();


  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image2"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('alps') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image2"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('alps') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card2=false;

      
}
}


//card1 : #disneyland

allCards[" 04 90 89 52 1A 4E 80"] = function(){

if(card1==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image1"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('disneyland') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      

  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image1"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('disneyland') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      
      imageArr = [];
      var allImg2 = $(".image1");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();


  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image1"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('disneyland') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card1=false;

      
}
}


//card3 : #berlin

allCards[" 04 B2 89 52 1A 4E 80"] = function(){

if(card3==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image3"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('berlin') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      
      imageArr = [];
      var allImg2 = $(".image3");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();


  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image3"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('berlin') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image3"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('berlin') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card3=false;

      
}
}


//card4: #sea

allCards[" 04 4E 89 52 1A 4E 80"] = function(){

if(card4==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image4"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('sea') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      

  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image4"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('sea') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      
      imageArr = [];
      var allImg2 = $(".image4");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();


  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image4"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('sea') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card4=false;

      
}
}


//card5 : #beijing

allCards[" 04 D5 89 52 1A 4E 80"] = function(){

if(card5==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image5"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('beijing') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      
      imageArr = [];
      var allImg2 = $(".image5");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();


  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image5"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('beijing') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image5"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('beijing') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card5=false;

      
}
}


//card6 : #strasbourg

allCards[" 04 39 89 52 1A 4E 81"] = function(){

if(card6==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image6"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('strasbourg') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      

  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image6"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('strasbourg') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      
      imageArr = [];
      var allImg2 = $(".image6");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();


  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image6"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('strasbourg') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card6=false;

      
}
}



//card7 : #provins

allCards[" 04 59 89 52 1A 4E 81"] = function(){

if(card7==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image7"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('provins') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      

  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image7"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('provins') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      

  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image7"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('provins') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });
     imageArr = [];
      var allImg2 = $(".image7");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card7=false;

      
}
}


//card8 : #breakfast

allCards[" 04 3A 89 52 1A 4E 81"] = function(){

if(card8==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image8"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('breakfast') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      
      imageArr = [];
      var allImg2 = $(".image8");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();


  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image8"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('breakfast') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image8"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('breakfast') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card8=false;

      
}
}


//card9 : #lesartsdecoratifs

allCards[" 04 18 89 52 1A 4E 81"] = function(){

if(card9==true){
  var userFeed = new Instafeed({
        get: 'user',
        userId: 5423428306,
        accessToken: '5423428306.1677ed0.9f5e36d47d9c4ef5918a31b4027db62e', 
        clientId: 'adbf2b8a8a724d62b4e4201f7165e26f',
        resolution: 'standard_resolution',
        links: false,
        
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image9"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('lesartsdecoratifs') >= 0;
          },
     
     after: function () {

      
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      

  },
    });


      var userFeed1 = new Instafeed({
        get: 'user',
        userId: 5372803668,
        accessToken: '5372803668.1677ed0.4c36592c644144168ce583941893a6e1', 
        clientId: 'd335a211db4245929fbd7d1db695e0e7',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image9"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('lesartsdecoratifs') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });

      

  },
    });

var userFeed2 = new Instafeed({
        get: 'user',
        userId: 5431533258,
        accessToken: '5431533258.1677ed0.d4d6eb00b3b549fd9ea3270117fe7c30', 
        clientId: '6038c2f123a249359438505e836b3856',
        resolution: 'standard_resolution',
        links: false,
     template: '<a href="{{link}}"><div class="footer"><div class="caption">{{caption}}</div></div><div id="{{id}}" style="background:url({{image}});background-position: center; background-repeat: no-repeat; " class="image9"></div></a>',

     filter: function(image) {

            return image.tags.indexOf('lesartsdecoratifs') >= 0;
          },
     
     after: function () {

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');

    });
     imageArr = [];
      var allImg2 = $(".image9");

      console.log(allImg2);
     
      $.each(allImg2,function(index,element){
        var source = element.style.background.split("\"")[1];

        imageArr.push(source);

        element.addEventListener('click',function(){
          console.log(imageArr[index]);
          popUp(imageArr[index]);
        });

      });

   
    console.log(allImg2[0].style.background.split("\"")[1]);


      var show=function(){
        $("#popup")[0].style.display = "block";
        // var firstImg = allImg[0].style.background.split("\"")[1]

         var firstImg = allImg2[0].style.background.split("\"")[1]

        var imageLength=allImg2.length;
        console.log(imageLength);

        $("#pic")[0].src = firstImg;
        $("#pic").click(function(){
          close();
        }
          );
      }

      show();

     

  },
    });



      userFeed.run();
      userFeed1.run();
       userFeed2.run();

      card9=false;

      
}
}



function popUp(imgSrc){

    var popup = document.getElementById("popup");
    var img = document.getElementById("pic");
    
    //make the popup div appear
    popup.style.zIndex = "1";
    popup.style.display = "block"

    //if click on the image in the popup, the popup will be closed
    img.addEventListener("click", function (e){
        close();
    });

    //put the address of the image in <img>
    img.src = imgSrc;
    
}

function close(){
  console.log("close");
    var popup = document.getElementById("popup");
    popup.style.zIndex = "-1";
    popup.style.display = "none"
}

var imgSwitch = 0;

//function for switching images
function change(direction){

    var numOfImg = imageArr.length;

    //A variable storing the index of next image
    var next = 0;
    var img = document.getElementById("pic");

    //if direction is 1, switch to the right. If it's -1, switch to the left
    if(direction==1){
        //should be imgSwitch+1>=numOfImg
        //don't use imgSwitch+1, it can be wrong. e.g. imgSwitch is 5, imgSwitch+1 is 51, not 6
        //Careful when using "+"

        //if the next index is larger than the array length, make the next index 0, else, next = imgSwitch+1
        if(imgSwitch>numOfImg-2){
            next = 0;
        }else{
            imgSwitch++;
            next = imgSwitch;
        }
    }else if(direction==-1){
        if(imgSwitch-1<0){
            next = numOfImg-1;
        }else{
            next = imgSwitch-1;
        }
    }

    //store the index of the showing image into imgSwitch
    img.src = imageArr[next];
    imgSwitch = next;
}


var lastGesture = -1;
var controllerOptions = {enableGestures: true};
Leap.loop(controllerOptions, function(frame) {
  var gesture = frame.gestures[0];

  // Display Gesture object data
  if (frame.gestures.length > 0) {

                  var myDate = new Date();
                  var t = myDate.getSeconds();
                  if(t-lastGesture>0){

      if(gesture.type == "swipe") {
          //Classify swipe as either horizontal or vertical
          var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
          //Classify as right-left or up-down
          if(isHorizontal){
              if(gesture.direction[0] > 0){
                  swipeDirection = "right";
                  change(1);
                  
              } else {
                  swipeDirection = "left";
                  change(-1);
              }
          } else { //vertical
              if(gesture.direction[1] > 0){
                  swipeDirection = "up";
                  close();
              } else {
                  swipeDirection = "down";
                  close();
              }                  
          }
          console.log(swipeDirection);
       }
  }
                  lastGesture = t;
}

});

allCards[" 11 81 24 61"] = function(){
  if(images[1]==false){
    $("#img"+count).html("<img src='images/moon.jpg'/>");
    count++;
    position[1] = count-1;
    images[1] = true;
  }
}
allCards[" 20 DC B8 45"] = function(){
  // if(images[2]==false){
  //   $("#img"+count).html("<img src='images/lili.jpg'/>");
  //   count++;
  //   position[2] = count-1;
  //   images[2] = true;
  // }
var feed = new Instafeed({
        get: 'user',
        userId: '1206423295',
        accessToken: '1206423295.0d29cfb.4a5630feb8554eed92e1bcefeb007014',

        filter: function(image) {
            return image.tags.indexOf('disneyland') >= 0;
        }
    });
    feed.run();

   var div = document.getElementById("textDiv2");  
    div.textContent = "#disneyland";  
    var text = div.textContent;  



}
allCards[" A4 FB DC E9"] = function(){
  if(images[3]==false){
    $("#img"+count).html("<img src='images/sea.jpg'/>");
    count++;
    position[3] = count-1;
    images[3] = true;
  }
}
allCards[" E4 7A A3 EB"] = function(){
  if(images[4]==false){
    $("#img"+count).html("<video src='videos/1.mp4' style='width:500px;' controls autoplay loop/>");
    count++;
    position[4] = count-1;
    images[4] = true;
  }else{
    for(var i = position[4]; i<5; i++){
      //if()
    }
    $("#img"+position[4]).html("<video src='videos/1.mp4' style='width:500px;' controls autoplay loop/>");
    count++;
    images[4] = true;
  }
}
//$(".img_div1").html("<img src='" + imgArr[0] + "' alt='图片' />"); //方法2：将图片插入到指定DIV

// var WebSocket = require('ws')

var connection = new WebSocket('ws://localhost:1337');
  connection.onopen = function(){
  console.log("open connection");
}

connection.onmessage = function(message){
  try {
       var json = JSON.parse(message.data);
       console.log(json);
   } catch (e) {
       alert("BAD JSON");
 return;
   }
   var cardID = json.message.replace(/(\r\n|\n|\r)/gm,"");
   console.log(allCards[cardID]);
   if(allCards[cardID]!=undefined){
     allCards[cardID]();
   }
}
connection.onerror = function(error){
  alert("PROBLEM WITH SERVER");
}

// var images = [];
// images[0]='<img src="images/gugong.jpg"/>';

//function showImage(){
//                document.getElementById('pic').innerHTML=image[0];
//           }

//function showImage(){
//                document.getElementById('pic').innerHTML='<img src="images/gugong.jpg"/>';
//            }