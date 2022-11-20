
let panels = document.querySelectorAll('.panel');

let open = null;

function openToogle() {
  if (open)
    open.classList.remove('active');

  this.classList.add('active');
  open = this;
}

panels.forEach(panel => panel.addEventListener('click', openToogle));


















// for (let i = 0; i < fotos.length; i++) {
//     fotos[i].addEventListener("click", function(){
//         this.classList.toggle("active")
//     })
    
// }



