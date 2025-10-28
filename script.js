// Pequenas interações: preencher ano atual
(function(){
  document.querySelectorAll('footer .container p').forEach(p=>{
    p.innerHTML = p.innerHTML.replace('{{ANO_ATUAL}}', new Date().getFullYear());
  });
})();