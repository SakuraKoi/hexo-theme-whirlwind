function loadVisitCounter(key, endpoint, token, isPost) {
    fetch(`${endpoint}/${key}`, {
        headers: {
            "Sakura-Access-Token": token,
            "Counter-Action": isPost ? "hit" : "get"
        }
    }).then(result => {
        return result.json();
    }).then(data => {
       $("#visit-counter-"+key).text(data.counter);
    }).catch(e => {
        $("#visit-counter-"+key).text('--');
    });
}