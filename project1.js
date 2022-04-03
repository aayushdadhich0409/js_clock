// setInterval(() => {
taketime = () => {
        a = new Date();
        let date = a.toLocaleDateString();
        let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
        document.getElementById('time').innerHTML = time + ' on ' + date;
    }
    // }, 1000);
setInterval(taketime, 1000);