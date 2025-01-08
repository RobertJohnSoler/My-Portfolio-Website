function loadHead(tn){
    fetch('head.html')
      .then(response => response.text())
      .then(data => {
        // Create a regular expression to find `{{key}}`
        const regex = new RegExp(`{{tabName}}`, 'g');
        data = data.replace(regex, tn);
      document.head.innerHTML = data;
      });
}

