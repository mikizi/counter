const consoleData = [], res = [];
const areasData = {
  taken: [],
  name: [],
  free: [],

};
const sum = {
  capacity: 0,
  free: 0,
  counter: 0
};

const trend = {
  taken: [],
  date: []
}

const searchParams = new URLSearchParams(location.search);

const labels = ['שם היציע', 'תכולת כסאות ביציע', 'כמות כסאות פנויים', 'כמה כרטיסים נמכרו'];

function filterGates(gate) {
  return gate > 500
         || gate.indexOf('תא תקשורת') > -1
         || gate === 'E'

}

function setLastUpdate(lastUpdate){
  const [date, time] = lastUpdate.split(' ');

  const timeEl = document.querySelector('#last-update .time');
  const dateEl = document.querySelector('#last-update .date');

  dateEl.textContent = date;
  timeEl.textContent = time;
}

function handleData(index) {
  const {date} = data.areas[index];
  let {values} = data.areas[index];

  if(typeof values === 'string'){
    values = JSON.parse(values);
  }

  setLastUpdate(date);

  values.forEach(area => {
    const {capacity, name, free} = area;
    const taken = capacity - free;

    if(filterGates(name)){
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

  if(searchParams.get("debug")) {
    console.table(sum);
    console.table(consoleData);
  }
}

function printSummery(){
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

function isMobile(){
  return window.matchMedia("only screen and (max-width: 760px)").matches;
}

function printData(){
  /*const {capacity, counter, free} = sum;
  new gridjs.Grid({
                    columns: labels,
                    data: [
                      [capacity, counter, free]
                    ]
                  }).render(document.getElementById("table-total"));*/

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

function printCharts(data, container){
  var ctx = document.getElementById(container).getContext('2d');
  new Chart(ctx, data);
}

function setHeaderImage(device){
  const headerEl = document.querySelector('header');
  headerEl.style.backgroundImage = `url('${data.bg[device]}')`;
}

function takenOverTime(){
  data.areas.map(area => {
    let taken = 0;
    const values = typeof area.values === 'string' ?  JSON.parse(area.values) : area.values;
    values.forEach((gate) =>  {
      taken += (gate.capacity - gate.free)
    } )
    trend.date.push(area.date)
    trend.taken.push(taken)
  })
  console.log(trend);
}

function init(){
  const latestData = data.areas.length - 1;
  handleData(latestData);
  takenOverTime();
  printSummery();

  const device = isMobile() ? 'mobile' : 'desktop';
  setHeaderImage(device);

  printCharts({
                type: 'doughnut',
                data: {
                  labels: [ 'כמה כרטיסים נמכרו', 'כמות כסאות פנויים'],
                  datasets: [{
                    label: 'מידע לפי אתר לאן',
                    data: [sum.counter, sum.free],
                    backgroundColor: [
                      'rgba(255, 206, 86, 1)',
                      'rgb(16,14,7)',
                    ]
                  }]
                }
              },'total-chart');

  printCharts({
                type: 'line',
                data: {
                  labels: trend.date,
                  datasets: [{
                    label: 'קצב מכירת כרטיסים',
                    data: [...trend.taken, sum.capacity],
                    backgroundColor: [
                      'rgb(16,14,7)',
                    ]
                  }]
                }
              },'trend-chart');

  if(device === 'desktop'){
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
                },'gate-chart');
  }
}

function loadData(){
  const script = document.createElement('script');
  script.onload = function () {
    init();
  };

  const page = searchParams.get('p');

  script.src = `data/${page}.js`;

  document.head.appendChild(script);
}

loadData();







