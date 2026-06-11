// Fill in current year for PT and EN placeholders
(function(){
  const year = new Date().getFullYear();
  document.querySelectorAll('footer .container p').forEach(p=>{
    p.innerHTML = p.innerHTML.replace('{{ANO_ATUAL}}', year).replace('{{CURRENT_YEAR}}', year);
  });
})();
