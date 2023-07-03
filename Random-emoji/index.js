const btnE1 = document.getElementById('btn');
const emojiNameE1 = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji(){
    let response = await fetch('https://emoji-api.com/emojis?access_key=e2b9fb9603d62aa0f9cdccdad9e7f814170d773d')

    data = await response.json()

    for(let i = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}

getEmoji();

btnE1.addEventListener('click',()=>{
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnE1.innerText = emoji[randomNum].emojiName;
    emojiNameE1.innerText = emoji[randomNum].emojiCode;
})


