let now = 1, address = "", barWidth = 4, adder = 4;
document.addEventListener("keydown", function(event){
  if(event.keyCode == 37) // left
  {
    if(now > 1){
      address = "#s"+now;
      document.querySelector(address).style.display = "none";
      now--;
      address = "#s" + now;
      document.querySelector(address).animate([
        {opacity: 0},
        {opacity: 1}],
      {duration: 500,
      iterations: 1});
      document.querySelector(address).style.display = "block";     
      barWidth -= adder;
      if(barWidth == 0)
      {
        document.querySelector(".goOn").animate([
          { width: 0 }
        ], {
            duration: 500,
            iterations: 1
          });
      }
      else{
        document.querySelector(".goOn").animate([
          { width: barWidth+adder+"%" },
          {width: barWidth+"%"}
        ], {
            duration: 500,
            iterations: 1
          });
      }

      document.querySelector(".goOn").style.width = barWidth + "%";
    }
  }
  if(event.keyCode == 39) // right
  {
    if (now < 26) {
      address = "#s" + now;
      document.querySelector(address).style.display = "none";
      now++;
      address = "#s" + now;
      document.querySelector(address).animate([
        { opacity: 0 },
        { opacity: 1 }],
        {
          duration: 500,
          iterations: 1
        });
      document.querySelector(address).style.display = "block";       
      barWidth+=adder;
      document.querySelector(".goOn").animate([
        { width: (barWidth - adder)+ "%" },
        { width: barWidth + "%" }
      ],{
        duration: 500,
        iterations: 1
      });
      document.querySelector(".goOn").style.width = barWidth+"%";
    }
  }
});