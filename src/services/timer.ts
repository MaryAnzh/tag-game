const timer = (elem: HTMLElement, s: number, m: number, h: number): NodeJS.Timer => {
    let sec = s;
    let min = m;
    let hour = h;
    console.log('from timer');
    console.log(sec, min, hour);

    const time: NodeJS.Timer = setInterval(() => {
        sec += 1;
        if (sec === 60) {
            min += 1;
            sec = 0;
            elem.setAttribute('data-min', `${min}`);
        }
        if (min === 60) {
            hour += 1;
            min = 0;
            elem.setAttribute('data-min', `${min}`);
            elem.setAttribute('data-hour', `${hour}`);
        }
        elem.setAttribute('data-sec', `${sec}`);

        if (hour === 0) {
            let secView = sec < 10 ? `0${sec}` : sec.toString();
            let minView = min < 10 ? `0${min}` : min.toString();
            elem.innerHTML = `${minView}:${secView}`;
        }

        if (hour > 0) {
            if (hour < 10) {
                let secView = sec < 10 ? `0${sec}` : sec.toString();
                let minView = min < 10 ? `0${min}` : min.toString();
                let hourView = hour < 10 ? `0${hour}` : hour.toString();
                elem.innerHTML = `${hourView}:${minView}:${secView}`;
            } else {
                elem.innerHTML = 'Time out';
                clearInterval(time);
            }
        }
    }, 1000);

    return time;
}

export { timer };