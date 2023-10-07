# meme-generator-app
- a simple web app to generate meme from exteranl API
- langauge used: HTML, CSS, JavaScript
- API: https://github.com/D3vd/Meme_api
- built following the instructions of this Youtube video: https://www.youtube.com/watch?v=S0uU2vELiwA&list=PL9bD98LkBR7P16BndaNtP4x6Wf5Ib85Hm&index=2&ab_channel=Tech2etc

## things learnt:
### JavaScript mehtods:
```
memeImg.setAttribute('src', url);
// memeImg.src = url

memeTitle.innerHTML = title;
// .textContent: higher performance
// .innerText
// .innerHTML

fetch("https://meme-api.com/gimme")
        .then(response => response.json())
        .then((data) => {updateDetails(data.url, data.title, data.author)});
// const generateMeme = async () => {
//  const response = await fetch('https://meme-api.com/gimme');
//  const data = await response.json();
//  updateDetails(data.url, data.title, data.author);
// }
```
