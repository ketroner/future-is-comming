// Small interaction for demo purposes
document.addEventListener('DOMContentLoaded', ()=>{
  const btns = document.querySelectorAll('.btn');
  btns.forEach(b=>{
    b.addEventListener('mouseover', ()=> b.style.transform='translateY(-3px)');
    b.addEventListener('mouseout', ()=> b.style.transform='translateY(0)');
  });
});
