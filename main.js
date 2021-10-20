const res = [], res1 = [];
const   areasData = {
  taken: [],
  name: [],
  free: []
};
const sum = {
  capacity: 0,
  free: 0,
  counter: 0
}

function filterGates(gate) {
  return gate > 500
         || gate.indexOf('תא תקשורת') > -1
         || gate === 'E'

}

function handleData(index) {
  data[index].forEach(area => {
    const {capacity, name, free} = area;
    const taken = capacity - free;

    if(filterGates(name)){
      return;
    }

    res.push({name, capacity, free, taken})
    res1.push([name, capacity, free, taken])

    areasData.taken.push(taken);
    areasData.free.push(free);
    areasData.name.push(name);

    sum.capacity += capacity;
    sum.free += free;
    sum.counter += taken;
  })

  console.table(sum);
  console.table(res);
}



function printData(){
  const {capacity, counter, free} = sum;
  new gridjs.Grid({
                    columns: ['תכולת כסאות ביציע', 'כמה כרטיסים נמכרו', 'כמות כסאות פנויים'],
                    data: [
                      [capacity, counter, free]
                    ]
                  }).render(document.getElementById("table-total"));

/*  new gridjs.Grid({
                    columns: ['שם היציע', 'תכולת כסאות ביציע', 'כמות כסאות פנויים', 'כמה כרטיסים נמכרו'],
                    data: res1
                  }).render(document.getElementById("table-area"));*/
}

function printCharts(){
  const {capacity, counter, free} = sum;
  var ctx = document.getElementById('myChart').getContext('2d');
  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var total = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['תכולת כסאות ביציע', 'כמה כרטיסים נמכרו', 'כמות כסאות פנויים'],
      datasets: [{
        label: 'מידע לפי אתר לאן',
        data: [capacity, counter, free],
        backgroundColor: [
          'rgb(16,14,7)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgb(16,14,7)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)'
        ]
      }]
    }
  });

  var area = new Chart(ctx, {
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
  });
}

handleData(0);
printData();
printCharts();





