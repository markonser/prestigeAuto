let csvData = '';
export function saveToCSV(data) {
  // Get the headers
  let headers = Object.keys(data[0]);
  console.log('=== headers AllOrdersTab.jsx [15] ===', headers);
  // Add headers to the CSV string
  csvData += headers.join('#') + '\n';

  // Loop through the JSON data
  for (let i = 0; i < data.length; i++) {
    let row = [];

    // Loop through the headers
    for (let j = 0; j < headers.length; j++) {
      row.push(data[i][headers[j]]);
    }

    // Add the row to the CSV string
    csvData += row.join('#') + '\n';
  }
  // Create a Blob object
  let blobData = new Blob([csvData], {type: 'text/csv;charset=utf-8;'});

  // Create a URL object
  let url = URL.createObjectURL(blobData);

  // Create a link element
  let link = document.createElement('a');
  link.href = url;
  link.download = 'data.csv';

  // Append the link element to the document body
  document.body.appendChild(link);

  // Click the link to download the CSV file
  link.click();
  // console.log(csvData);
}