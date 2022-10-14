// Anatytics Tag
let ga_id = "G-Y47FTTB2R6";
let ga_script = document.createElement('SCRIPT');

ga_script.type = 'text/javascript';
ga_script.src = `https://www.googletagmanager.com/gtag/js?id=${ga_id}`;
let script2 = document.createElement('SCRIPT');

script2.type = 'text/javascript';

script2.text = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${ga_id}');`;
  
  document.body.appendChild(ga_script)
  document.body.appendChild(script2)
