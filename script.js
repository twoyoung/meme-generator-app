
const generateMemeBtn = document.querySelector('.meme-generator .generate-meme-btn');
const memeImg = document.querySelector('.meme-generator img');
const memeAuthor = document.querySelector('.meme-generator .meme-author');
const memeTitle = document.querySelector('.meme-generator .meme-title');

const generateMeme = async () => {
    const data = await fetch('https://meme-api.com/gimme');
    // console.log(data);
    const meme = await data.json();
    // console.log(meme);
    memeImg.src = meme.url;
    memeAuthor.textContent = `meme by: ${meme.author}`;
    memeTitle.textContent = meme.title;
};

generateMemeBtn.addEventListener('click', generateMeme);

generateMeme();
