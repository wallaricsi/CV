const accordionItem = document.querySelectorAll(".parent");

accordionItem.forEach((parent) => {
    parent.addEventListener("click", (esemeny) => {
        parent.classList.toggle("active");
    });
});

function mail() {
    var x = document.getElementById("mail");
        x.innerHTML = "please login first!";    
  }
  function mobil() {
    var x = document.getElementById("mobil");
        x.innerHTML = "please login first!";    
  }

  let cdate = new Date().toISOString().replace('-', '_').split('T')[0].replace('-', '/');

  var opt = {
    margin:       1,
    filename:     'CV_Schved_Gabor_'+cdate+'.pdf'};

  function makePDF() {
    let main_tab = document.getElementById("main-tab")
    main_tab.parentNode.removeChild(main_tab);
    let reach = document.getElementById("reachable")
    reach.removeAttribute('aria-labelledby');
    reach.removeAttribute('role');
    reach.removeAttribute('class');
    reach.removeAttribute('id');
    let contact = document.getElementById("contact")
    contact.removeAttribute('aria-labelledby');
    contact.removeAttribute('role');
    contact.removeAttribute('class');
    contact.removeAttribute('id');
    let profile = document.getElementById("profile")
    profile.removeAttribute('aria-labelledby');
    profile.removeAttribute('role');
    profile.removeAttribute('class');
    profile.removeAttribute('id');
    let element = document.getElementById("pdf");
    html2pdf().set(opt).from(element).save()
    //document.location.reload();
    //window.location.reload();
    setTimeout(() => {
      document.location.reload();
    }, 2000);

  }




  


// DARK MODE 
const toggle = document.getElementById('toggleDark');
const toggle1 = document.getElementById('toggleDark2');
const body = document.querySelector('body');
const mail1 = document.getElementById('mail');
const mobil1 = document.getElementById('mobil');
const hometab = document.getElementById('home-tab');
const profiletab = document.getElementById('profile-tab');
const contacttab = document.getElementById('contact-tab');
const vmi = document.getElementById('vmi');

toggle.addEventListener('click', function(){
  toggle1.classList.toggle('bi-brightness-high-fill');
    if(toggle1.classList.toggle('bi-moon')){
      body.style.background = '#424242';
      body.style.color = 'white';
      // buttons
      hometab.style.background = 'white';
      profiletab.style.background = 'white';
      contacttab.style.background = 'white';
      vmi.style.background = 'white';
      mail1.style.color = 'white';
      mobil1.style.color = 'white';
      body.style.transition = '1s';
      

    }else{
      body.style.background = 'white';
      body.style.color = 'black';
       // buttons
      mail1.style.color = 'black';
      mobil1.style.color = 'black';
      body.style.transition = '1s';
    }
});