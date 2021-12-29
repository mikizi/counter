function getData() {
  return fetch(location.href)
    .then(response => response.text())
    .then(res => {
      const regex = /'areas': ([\s\S]*?)}] },/g;

      m = regex.exec(res)
      var data = m[1] + '}]'
      data = data.replaceAll('oColor', '"oColor"')
      var copy = {date: new Date().toLocaleString('he').replace(',' , ''), values: data};
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

    if(false && filterGates(name)){
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
  return gate > 500
         || gate.indexOf('תא תקשורת') > -1
         || gate === 'E'

}



getData();




