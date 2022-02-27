let closedGates = ['כסף 105-R'];

function getData() {
  return fetch(location.href)
    .then(response => response.text())
    .then(res => {
      const regex = /'areas': ([\s\S]*?)}] },/g;

      m = regex.exec(res)
      let data = m[1] + '}]'
      data = data.replaceAll('oColor', '"oColor"');
      data = JSON.stringify(JSON.parse(data).filter(gate => (!filterGates(gate.name))));
      let copy = {date: new Date().toLocaleString('he').replace(',' , ''), values: data};
      navigator.clipboard.writeText(JSON.stringify(copy));
      console.log(copy)
      run(JSON.parse(data))

    })
}

function run(data) {

  var res = {};
  var sum = {
    capacity: 0,
    free: 0,
    counter: 0
  }
  data.forEach(area =>{
    const {capacity, name, free} = area;
    const taken = capacity - free;

    if(filterGates(name)){
      return;
    }


    res[name] = {capacity, free, taken}
    sum.capacity += capacity;
    sum.free += free;
    sum.counter +=  taken

  })

  console.table(sum);
  console.table(res);
}

function filterGates(gate){
  return  closedGates.indexOf(gate) > -1 ||
          gate > 500 || gate.indexOf('תא תקשורת') > -1

}

getData();
