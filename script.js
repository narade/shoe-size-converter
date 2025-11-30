const sizeTables = {
  men: [
    {US:6, EU:39, UK:5, JP:24},
    {US:6.5, EU:39.5, UK:5.5, JP:24.5},
    {US:7, EU:40, UK:6, JP:25},
    {US:7.5, EU:40.5, UK:6.5, JP:25.5},
    {US:8, EU:41, UK:7, JP:26},
    {US:8.5, EU:42, UK:7.5, JP:26.5},
    {US:9, EU:42.5, UK:8, JP:27},
    {US:9.5, EU:43, UK:8.5, JP:27.5},
    {US:10, EU:44, UK:9, JP:28},
    {US:10.5, EU:44.5, UK:9.5, JP:28.5},
    {US:11, EU:45, UK:10, JP:29}
  ],
  women: [
    {US:5, EU:35, UK:3, JP:22},
    {US:5.5, EU:35.5, UK:3.5, JP:22.5},
    {US:6, EU:36, UK:4, JP:23},
    {US:6.5, EU:37, UK:4.5, JP:23.5},
    {US:7, EU:37.5, UK:5, JP:24},
    {US:7.5, EU:38, UK:5.5, JP:24.5},
    {US:8, EU:39, UK:6, JP:25},
    {US:8.5, EU:39.5, UK:6.5, JP:25.5},
    {US:9, EU:40, UK:7, JP:26},
    {US:9.5, EU:41, UK:7.5, JP:26.5},
    {US:10, EU:42, UK:8, JP:27}
  ],
  kids: [
    {US:0, EU:16, UK:0, JP:8},
    {US:1, EU:17, UK:0.5, JP:8.5},
    {US:2, EU:18, UK:1, JP:9},
    {US:3, EU:19, UK:2, JP:10},
    {US:4, EU:20, UK:3, JP:11},
    {US:5, EU:22, UK:4, JP:12},
    {US:6, EU:23, UK:5, JP:13},
    {US:7, EU:24, UK:6, JP:14},
    {US:8, EU:25, UK:7, JP:15}
  ]
};

function convertSize() {
  const category = document.getElementById('category').value;
  const input = parseFloat(document.getElementById('inputSize').value);
  if(isNaN(input)) { alert('Please enter a valid US size'); return; }

  const table = sizeTables[category];
  let closest = table.reduce((prev,curr)=>{
    return (Math.abs(curr.US-input)<Math.abs(prev.US-input)?curr:prev);
  });

  const tbody = document.getElementById('resultBody');
  tbody.innerHTML = `<tr>
    <td>${closest.US}</td>
    <td>${closest.EU}</td>
    <td>${closest.UK}</td>
    <td>${closest.JP}</td>
  </tr>`;
  document.getElementById('resultTable').style.display='table';
  document.getElementById('copyBtn').style.display='inline-block';
}

function copyResult() {
  const row = document.getElementById('resultBody').innerText;
  navigator.clipboard.writeText(row).then(()=>{
    alert('Shoe size copied to clipboard!');
  });
}
