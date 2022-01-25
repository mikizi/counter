try {
  consoleData = [];
  res = [];
  areasData = {
    taken: [],
    name: [],
    free: [],

  };
  sum = {
    capacity: 0,
    free: 0,
    counter: 0
  };

  trend = {
    taken: [],
    date: []
  }

  let page;

  let searchParams = new URLSearchParams(location.search);

  const labels = ['שם היציע', 'תכולת כסאות ביציע', 'כמות כסאות פנויים', 'כמה כרטיסים נמכרו'];

  function handleHeader({style}, device) {
    const headerEl = document.querySelector('header');
    if (style && style[device]) {
      const deviceStyle = style[device];
      Object.keys(deviceStyle).forEach((prop) => {
        headerEl.style[prop] = deviceStyle[prop];
      })
    }
  }

  function setCountdown(countDownDate) {
    const countdownEl = document.querySelector('.countdown');
    const timerEl = countdownEl.querySelector('.timer');

    const clear = setInterval(function () {

      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = addLeadZero(Math.floor(distance / (1000 * 60 * 60 * 24)) || '');
      const hours = addLeadZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || '00');
      const minutes = addLeadZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) || '00');
      const seconds = addLeadZero(Math.floor((distance % (1000 * 60)) / 1000) || '00');

      // Display the result in the element with id="demo"
      timerEl.textContent = `${days ? days + ':': ''}${hours}:${minutes}:${seconds}`;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(clear);
        timerEl.textContent = '';
      } else {
        countdownEl.classList.remove('hide');
      }
    }, 1000);

  }

  function addLeadZero(number){
    return number < 10 && number > 0 ? '0' + number : number;
  }

  function filterGates(gate) {
    if (!data.closedGates) {
      return;
    }

    return (!data.awayMatch && gate > 500)
           || gate.indexOf('תא תקשורת') > -1
           || gate === 'E' || data.closedGates.some((cGate) => cGate == gate)

  }

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function setLastUpdate(lastUpdate) {
    if (!lastUpdate) {
      return;
    }

    const [date, time] = lastUpdate.split(' ');

    const layout = ` <span class="title"> עדכון אחרון :</span>
            <span class="time">${time}</span>
            <span class="date">${date}</span>`;

    const lastUpdateEl = document.querySelector('#last-update');
    lastUpdateEl.insertAdjacentHTML('afterbegin', layout);

  }

  function handleData(index) {
    const {date} = data.areas[index];
    let {values} = data.areas[index];

    if (!values) {
      values = data.areas;
    }

    if (typeof values === 'string') {
      values = JSON.parse(values);
    }

    setLastUpdate(date);

    values.forEach(area => {
      const {capacity, name, free} = area;
      const taken = capacity - free;

      if (filterGates(name)) {
        return;
      }

      consoleData.push({name, capacity, free, taken})
      res.push([name, capacity, free, taken].reverse())

      areasData.taken.push(taken);
      areasData.free.push(free);
      areasData.name.push(name);

      sum.capacity += capacity;
      sum.free += free;
      sum.counter += taken;
    })
  }

  function printSummery() {
    const el = document.querySelector('.data-total');
    el.insertAdjacentHTML('afterbegin',
                          `<div class="data-wrp">
                <div class="title">תכולת כסאות ביציע</div>
                <h2 class="capacity">${sum.capacity}</h2>
            </div>
            <div  class="data-wrp"> 
                <div class="title">כמה כרטיסים נמכרו</div>
                <h2 class="taken">${sum.counter}</h2>
            </div>
            <div class="data-wrp">
                <div class="title">כמות כסאות פנויים</div>
                <h2 class="free">${sum.free}</h2>
            </div>`)
  }

  function isMobile() {
    return window.matchMedia("only screen and (max-width: 760px)").matches;
  }

  function printData() {
    new gridjs.Grid({
                      columns: labels.reverse(),
                      data: res,
                      sort: true,
                      search: {
                        enabled: true
                      },
                      pagination: {
                        enabled: true,
                        limit: 10
                      }
                    }).render(document.getElementById("table-area"));
  }

  function printCharts(data, container) {
    var ctx = document.getElementById(container).getContext('2d');
    new Chart(ctx, data);
  }

  function setHeaderImage(device) {
    const headerEl = document.querySelector('header');

    headerEl.classList.add(page);
    if (data.bg) {
      headerEl.style.backgroundImage = `url('${data.bg[device]}')`;
    }
  }

  function takenOverTime() {
    data.areas.map(area => {
      let taken = 0;
      let values = typeof area.values === 'string' ? JSON.parse(area.values) : area.values;

      if (!values) {
        values = area.areas;
      }

      values.forEach((gate) => {
        if (filterGates(gate.name)) {
          return;
        }

        taken += (gate.capacity - gate.free)
      });

      trend.date.push(area.date)
      trend.taken.push(taken)
    })
    console.log(trend);
  }

  function init() {
    if (page === 'homepage') {
      initHp();
    } else {
      initPage();
    }

  }

  function initPage() {
    const latestData = data.areas.length - 1;
    /*const dataIndex = searchParams && searchParams.get('i');
    const index = dataIndex ? latestData - dataIndex : latestData;*/
    handleData(latestData);
    takenOverTime();
    printSummery();

    const device = isMobile() ? 'mobile' : 'desktop';
    if (data.header) {
      handleHeader(data.header, device);
    }

    setCountdown(data.date);
    setHeaderImage(device);

    printCharts({
                  type: 'doughnut',
                  data: {
                    labels: ['כמה כרטיסים נמכרו', 'כמות כסאות פנויים'],
                    datasets: [{
                      label: 'מידע לפי אתר לאן',
                      data: [sum.counter, sum.free],
                      backgroundColor: [
                        'rgba(255, 206, 86, 1)',
                        'rgb(16,14,7)',
                      ]
                    }]
                  }
                }, 'total-chart');

    printCharts({
                  type: 'line',
                  data: {
                    labels: trend.date,
                    datasets: [{
                      label: 'קצב מכירת כרטיסים',
                      data: [...trend.taken],
                      backgroundColor: [
                        'rgb(16,14,7)',
                      ]
                    }]
                  }
                }, 'trend-chart');

    if (device === 'desktop') {
      printData();
      printCharts({
                    type: 'bar',
                    data: {
                      labels: areasData.name,
                      datasets: [{
                        label: 'כמה כרטיסים נשארו לפי יציע',
                        data: areasData.free,
                        backgroundColor: [
                          'rgba(255, 206, 86, 1)',
                        ],
                      }]
                    }
                  }, 'gate-chart');
    }

    orderTicket(data)
  }

  function orderTicket({link}){
    const ticketEl = document.querySelector('.ticket');
    ticketEl.classList.remove('slide');

    ticketEl.addEventListener('click', ()=>{
      mixpanel.track('conversion', {page, link});
      window.location.href= link;
    });
  }

  function initHp() {
    document.body.classList.add('hp');
    const [nav] = document.getElementsByTagName('nav');
    nav.insertAdjacentHTML('afterbegin', getNavBarLayout());

  }

  function getNavBarLayout() {
    return data.map(page => {
      let dateHtml = '';
      if (page.date) {
        const dateStr = page.date.toLocaleDateString('he').replace(',', '');
        dateHtml = page.date ? ` <div class="date">(${dateStr})</div>` : '';
      }

      return `<a href="?p=${page.name}" class="game">
                <h2>${page.title}</h2>${dateHtml}
            </a>`
    }).join('');
  }

  function loadData() {
    const script = document.createElement('script');

    try {
      page = searchParams.get('p') || 'homepage';
    } catch (ex) {
      page = getParameterByName('p') || 'homepage';
    }
    script.src = `data/${page}.js`;

    script.onload = function () {
      init();
    };

    if (location.href.indexOf('localhost') < 0) {
      mixpanel.track('page view', {page});
    }

    document.head.appendChild(script);
  }

  loadData();
} catch (ex) {
  mixpanel.track('error', {error: ex.message, stack: ex.stack});
}







