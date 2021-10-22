function getData() {
  fetch(location.href)
    .then(response => response.text())
    .then(res => {
      const regex = /'areas': ([\s\S]*?)}] },/g;

      let match = regex.exec(res)
      let data = match[1] + '}]'
      data = data.replaceAll('oColor', '"oColor"')
      const copy = {date: new Date().toLocaleString('he').replace(',', ''), values: data};
      navigator.clipboard.writeText(JSON.stringify(copy));
      console.log(copy);
    })
}

getData();
