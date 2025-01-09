function loadHeader(currentPage){
    // const currentPage = window.location.href;
    fetch('header.html')
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
        })
}


function loadFooter(){
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            document.getElementById('footer').innerHTML = tempDiv.innerHTML;
        })
}