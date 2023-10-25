var x=document.getElementById("ado");
      var y=document.getElementById("adt");
      var z=document.getElementById("adth");
      var h1=document.getElementById("p1");
      var h2=document.getElementById("p2");
      var h3=document.getElementById("p3");
      function playone(){
        x.play();
        h1.innerHTML='<b style="color:rgb(20, 20, 34) ;font-size:20px">..now playing</b>'
      
      h2.innerHTML='2'
      h3.innerHTML='3'
      }
    
      function playtwo(){
       y.play();
       h2.innerHTML='<b style="color:rgb(20, 20, 34) ;font-size:20px">..now playing</b>'
       
       h1.innerHTML='1'
       h3.innerHTML='3'
      }
    
      function playthree(){
        z.play();
        h3.innerHTML='<b style="color:rgb(20, 20, 34) ;font-size:20px">..now playing</b>'
        h1.innerHTML='1'
        h2.innerHTML='2'
      }
    
    function unicheck(i) {
      if(i==2){
        x.pause();
        // y.play();
        z.pause();
      }
      else if(i==3){
        x.pause();
        y.pause();
        // z.play();
      }
      else if(i==1){
        // x.play();
        y.pause();
        z.pause();
      }
      
    }