window.addEventListener("load",function(){
   
    let conteudo=document.querySelector(".caixa-individual-noticia");    
   
    
    var url = 'http://newsapi.org/v2/everything?' +
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

    let logosParceiros = document.querySelectorAll('.parceiros-images img');
    let colabImages = document.querySelectorAll('.colab-images img');


    for(let i = 0; i < logosParceiros.length; i++){

        logosParceiros[i].onmouseover = function(){
            this.classList.remove('shrink');
            this.classList.add('grow');
        }
        logosParceiros[i].onmouseout = function(){
            this.classList.remove('grow');
            this.classList.add('shrink');
        }

    }

    for(let i = 0; i < colabImages.length; i++){

        colabImages[i].onmouseover = function(){
            this.style.opacity = 0.5;
            this.classList.remove('shrink2');
            this.classList.add('grow2');
        }
        colabImages[i].onmouseout = function(){
            this.style.opacity = 1;
            this.classList.remove('grow2');
            this.classList.add('shrink2');
        }

        colabImages[0].onclick = function(){
            window.open("https://www.linkedin.com/");
        }
        colabImages[1].onclick = function(){
            window.open("https://www.linkedin.com/");
        }
        colabImages[2].onclick = function(){
            window.open("https://www.linkedin.com/");
        }

    }