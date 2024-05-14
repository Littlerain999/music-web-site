const musicName = document.getElementById('music-name')
const artistName = document.getElementById('Artist-name')
const mp3Path = document.getElementById('mp3-path')

const addBtn = document.getElementById('add-to-array')

const container = document.querySelector('.printed')

addBtn.onclick = () => {
    const name = musicName.value
    const artist = artistName.value
    const mp3 = mp3Path.value
    const html = `
<pre>{
    name: "${name}",
    artist: "${artist}",
    path: "mp3/${mp3}.mp3",
},</pre>
    `
    container.innerHTML += html
}