const menuhamburguer = document.querySelector(".menu");
const listamenu = document.querySelector('.lista-menu');
const menucat = document.querySelectorAll('.opcoes__cat');
const listamenucat = document.querySelectorAll('.lista-menu-cat');

menuhamburguer.addEventListener('click', function(){
    listamenu.classList.toggle('active');
})


menucat.forEach(function(menucatunico, index){
    menucatunico.addEventListener('click', function(){
        listamenucat.forEach(function(listamenucatunico, i){
            if(i !== index){
                listamenucatunico.classList.remove('active');
            }
        });
        listamenucat[index].classList.toggle('active');
    });
});


menucat.forEach(function(menucatunico, index){
    menucatunico.addEventListener('click', function(){
        menucat.forEach(function(menucatunico, i){
            if(i !== index){
                menucatunico.classList.remove('active');
            }
        });
        menucat[index].classList.toggle('active');
    })
})