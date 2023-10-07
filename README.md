# meme-generator-app

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
