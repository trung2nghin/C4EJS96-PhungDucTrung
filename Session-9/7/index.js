  
async function load() {
    const conn = await fetch('http://quotes.rest/qod.json');
    const data = await conn.json();
    console.log(data);
    let quote = data.contents.quotes[0].quote;
    let author = data.contents.quotes[0].author;
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}
load();