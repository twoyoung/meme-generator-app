const generateMemeBtn = document.querySelector('.meme-generator .generate-meme-btn');
const memeImg = document.querySelector('.meme-generator img');
const memeAuthor = document.querySelector('.meme-generator .meme-author');
const memeTitle = document.querySelector('.meme-generator .meme-title');

const updateDetails = (url, title, author) => {
    memeImg.setAttribute('src', url);
    memeAuthor.innerHTML = `meme by: ${author}`;
    memeTitle.innerHTML = title;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
        .then(response => response.json())
        .then((data) => {updateDetails(data.url, data.title, data.author)});
}

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();