let newDate;
let intervalId;

function onStart(taskId) {
    if (localStorage[taskId]) {
        newDate = new Date(localStorage[taskId]);
        // timer();
        intervalId = setInterval(timer, 1000);
    }
    newDate = Date.now() + 24 * 60 * 60000;
    timer();
    if(!intervalId) intervalId = setInterval(timer, 1000);
    localStorage[taskId] = new Date(newDate).toISOString();
}

function timer(taskId) {
    if (localStorage[taskId]) {
        newDate = new Date(localStorage[taskId]);
        // timer();
        intervalId = setInterval(timer, 1000);
    }
    const now = Date.now();
    let rest = newDate >= now ? Math.round((newDate - now) / 1000) * 1000 : 0;
    if (!rest) {
        clearInterval(intervalId);
        intervalId = null;
        localStorage.removeItem(taskId);
    }

    let rest2 = rest % 60000;
    const hours = Math.floor(((rest - rest2) / 60000) / 60);
    const minutes = ((rest - rest2) / 60000) - hours * 60;
    console.log(minutes);
    rest = rest2;

    rest2 = rest % 1000;
    const seconds = (rest - rest2) / 1000;

    return (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ':' +
        (seconds < 10 ? "0" : "") + seconds;
}

export {
    timer,
    onStart
};