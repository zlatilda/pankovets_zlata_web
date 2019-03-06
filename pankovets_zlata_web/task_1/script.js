function myFunction(imgs) {
		  var expandImg = document.getElementById("expandedImg");
		  expandImg.src = imgs.src;
		  expandImg.parentElement.style.display = "block";
		}
		
	//Gallery	
		var templateInfo = document.getElementById("img-template").innerHTML;
  var template = Handlebars.compile(templateInfo);
 
  var context = {
  pics:[
    {item: "1"},{item: "2"},{item: "3"}, {item: "4"}, {item: "5"}, {item: "6"}, {item: "7"}, {item: "8"}, {item: "9"}, {item: "10"}, {item: "11"}, {item: "12"}
	]
  }
  var templateData = template(context);
  document.getElementById('gallery').innerHTML += templateData;

//Benefits list
  const benefits_data = [
  {
	header:"Smaller prices",
    text: "We grow species mostly by ourselves or purchaise seadlings from Thailand, Malasia, China etc. and grow them to B/S or F/S size, therefore the actual price of an orchid is less than that ordered directly from far East.",
    pic: "one.png"
  }, 
  {
	header:"Fast delivery",
    text: "As the result of our location and a great range of species you probably won't wait for weeks from your orchid to be delivered to your house. We deliver orchids by New Post, so you'll receive them in range of 2 to 5 days. Even if you would like to order orchid from abroat, it will still be delivering less time due to our relations.",
    pic: "two.png"
  },
  {
	header:"Healthy plants",
    text: "We take good care about all of our plants, not only orchids. What's more, we also receive them in good, healthy conditions from other nurseries. The greenhouse is perfectly constructed for different species of plants to grow in, also responsible workers look after them to maintain their health.",
    pic: "three.png"
  },
  {
	header:"Diversity of choice",
    text: "We offer our clients more than 350 species of orchids, 170 species of cacti, and over 100 species of bromeliacae, also you can find here plants from amaryllis alliance, small and bigger kinds of palm trees, a lot of violets, begonias etc.",
    pic: "four.png"
  }
  ];
  const benefit_card_template = $("#benefits-template").html();
  const benefits_elements = Handlebars.compile(benefit_card_template)(benefits_data);
  $("#section3").append(benefits_elements);
 