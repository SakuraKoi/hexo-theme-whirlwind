function loadVisitCounter(endpoint, token) {
    const key = MD5(window.location.pathname);
    fetch(`${endpoint}/${key}`, {
        headers: {
            "Sakura-Access-Token": token
        }
    }).then(result => {
        return result.json();
    }).then(data => {
       $("#visit-counter").text(data.counter);
    }).catch(e => {
        $("#visit-counter").text('--');
    });
}