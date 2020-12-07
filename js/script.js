window.addEventListener("load",function(){
   
    let conteudo=document.querySelector(".caixa-individual-noticia");    
   
    
    var url = 'https://newsapi.org/v2/everything?' +
    'q=ead-e-o-futuro&' +
    'apiKey=f3bd2143cba04424a31245ae208cccf7';
        var req = new Request(url);
        
    
    fetch(url,{
        method:'GET',
      
     
    }
       )
     
    .then(reponse =>reponse.json())
    .then(reponse=>{
        console.log(reponse);
         
        conteudo.innerHTML+="<a href='"+reponse.articles[0].url+"'><h2 class='noticia_link'>"+reponse.articles[0].title+"</h2></a>"+"<p>"+reponse.articles[0].description+"</p>";
        conteudo.innerHTML+="<a href='"+reponse.articles[5].url+"'><h2 class='noticia_linki'>"+reponse.articles[5].title+"</h2></a>"+"<p>"+reponse.articles[5].description+"</p>";
      
        document.querySelector(".noticia_link").style.color = "blue";  
        document.querySelector(".noticia_linki").style.color = "blue"; 
        }
        
    )
    
    })
    