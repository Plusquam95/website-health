// Movimiento de barra cta

const cta = document.getElementById('cta');
const viewMed = document.getElementById('med');

const opcionObservador ={

    // rootMargin : '100px',
}

const observador = new IntersectionObserver(function(
    
    entries,
    observador
    ){

        entries.forEach(entry =>{

         if(entry.isIntersecting){
            cta.classList.add('positionUp');

         } else {
            
            cta.classList.remove('positionUp');
         }

        })
},
opcionObservador)

observador.observe(viewMed);



  // MODAL DE BOOK NOW

  const ctaSalud = document.getElementById('cta-salud');
  const ctaHangover = document.getElementById('cta-hangover')
  const ctaMed = document.getElementById('cta-med');
  const abrirModal = document.getElementsByClassName('purchase');
 
 
  for (var i=0; i< abrirModal.length; i++) {
         //Añades un evento a cada elemento
         abrirModal[i].addEventListener("click",function() {
             ctaSalud.classList.toggle('mostrar');
             ctaHangover.classList.toggle('mostrar')
             ctaMed.classList.toggle('mostrar')
         });
     }

     // NAV REPONSIVE

     const abrirMenu = document.getElementById('menuOpen');
     const menu = document.getElementById('nav-mob');
     const closeMenu = document.getElementById('menuClose');
     const bodyClick = document.getElementById('body');
     console.log(bodyClick);

     abrirMenu.addEventListener('click', () => {
    
        menu.classList.add('mostrarMenu');
        menu.style.display = 'block';
        abrirMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', ()=>{

        // menu.classList.add('cerrarMenu');
        closeMenu.style.display = 'none';
        abrirMenu.style.display='block';
        menu.style.display = 'none';

    });









