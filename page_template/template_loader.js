function loadHeader(currentPage){
    // const currentPage = window.location.href;
    fetch('page_template/header.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const links = tempDiv.querySelectorAll('a');
            for (let i=0; i<links.length; i++){
                // alert(links[i]);
                if (links[i].getAttribute('href') === currentPage){
                    links[i].classList.add('active');
                }
            }
            document.getElementById('header').innerHTML = tempDiv.innerHTML;
            document.getElementById('header').style.display = 'block';
            initMobileNav();
        })
}


function loadFooter(){
    fetch('page_template/footer.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            document.getElementById('footer').innerHTML = tempDiv.innerHTML;
        })
}

function initMobileNav() {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToggle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    }
  
    // Hide mobile nav on same-page/hash links
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });
  }
  