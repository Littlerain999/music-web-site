import { album_array, album_content_container_item_list, album_content_container_title, audioOpenCloseBtn, audioPlayer, album_container_picture_name, position, music_album_array } from "./js.js";

export const call_function = (name, artist, path) => {
    const container = document.querySelector('.player .content');
    container.innerHTML = '';
    container.innerHTML = `
        <h2>Now Playing ...<button class="album-contents-btn">Album</button></h2>
        <p><marquee>${name} - ${artist}</marquee></p>
        <audio src="${path}" autoplay controls loop></audio>
        <div class="album-contents">
            <div class="content"></div>
        </div>
    `;
    audioPlayer.classList.remove('active')
    forCloseBtn()
    document.querySelector('.album-contents-btn').addEventListener('click', fun)
    const music_array_for_content = check_for_artist(artist).mp3Array
    const content_container = document.querySelector('.album-contents .content')
    music_array_for_content.forEach(item => {
        const block = document.createElement('li');
        const playBtn = document.createElement('button');
        playBtn.setAttribute('class', 'play');
        playBtn.addEventListener('click', ()=>{
            call_function(item.name, item.artist, item.path)
        });
        playBtn.innerHTML = 'play'
        block.innerHTML = `${item.name}`;
        block.appendChild(playBtn);
        content_container.append(block)
    });
}

function fun() {
    document.querySelector('.album-contents').classList.toggle('active')
}

function check_for_artist(value) {
    let result
    music_album_array.forEach((album, index) => {
        if (album.artistName === value) {
            result = music_album_array[index]
        }
    })
    return result
}

export function album_content_create(position) {
    album_content_container_title.innerHTML = album_array[position].artistName;
    album_container_picture_name.innerHTML = album_array[position].albumName;
    album_content_container_item_list.innerHTML = '';
    album_array[position].mp3Array.forEach(item => {
        const block = document.createElement('li');
        const playBtn = document.createElement('button');
        playBtn.setAttribute('class', 'play');
        playBtn.addEventListener('click', ()=>{
            call_function(item.name, item.artist, item.path)
        });
        playBtn.innerHTML = 'play'
        block.innerHTML = `${item.name}`;
        block.appendChild(playBtn);
        album_content_container_item_list.append(block)
    });
}

function forCloseBtn() {
    if (audioPlayer.classList.contains('active')) {
        audioOpenCloseBtn.innerHTML = '<'
    } else {
        audioOpenCloseBtn.innerHTML = '>'
    }
}

export function playerPannelToggle() {
    audioPlayer.classList.toggle('active')
    forCloseBtn()
}

const item_container = document.querySelector('.album-container .picture-holder')

export function initial_item_adder() {
    album_array.forEach(item => {
        const block = document.createElement('img')
        block.setAttribute('class', item.picName)
        block.setAttribute('src', item.picPath)
        item_container.appendChild(block)
    });
}

import { variable0, variable1, variable2, pic01, pic02, pic03, pic04 } from "./js.js";

let clicks = 0

export function change_next_pannel() {
    clicks++
    let condition01, condition02
    if (clicks === 1) {
        pic01.setAttribute('id', variable1)       
        pic02.setAttribute('id', variable0)
        pic03.setAttribute('id', variable2)
        pic04.setAttribute('id', variable2)  
    }
    if (clicks === 2) {
        pic01.setAttribute('id', variable2)        
        pic02.setAttribute('id', variable1)
        pic03.setAttribute('id', variable0)
        pic04.setAttribute('id', variable2) 
    }
    if (clicks === 3) {
        pic01.setAttribute('id', variable2)        
        pic02.setAttribute('id', variable2)
        pic03.setAttribute('id', variable1)
        pic04.setAttribute('id', variable0)   
        condition01 = true
    }
    if (clicks === 0) {
        pic01.setAttribute('id', variable0)        
        pic02.setAttribute('id', variable2)
        pic03.setAttribute('id', variable2)
        pic04.setAttribute('id', variable1)
    }
    if (condition01) {
        clicks = -1
    }
}

export function change_prev_pannel() {
    clicks--
    let condition
    if (clicks === 0) {
        pic01.setAttribute('id', variable0)        
        pic02.setAttribute('id', variable2)
        pic03.setAttribute('id', variable2)
        pic04.setAttribute('id', variable1)
    }
    if (clicks === 1) {
        pic01.setAttribute('id', variable1)       
        pic02.setAttribute('id', variable0)
        pic03.setAttribute('id', variable2)
        pic04.setAttribute('id', variable2)  
    }
    if (clicks === -2) {
        pic01.setAttribute('id', variable2)        
        pic02.setAttribute('id', variable1)
        pic03.setAttribute('id', variable0)
        pic04.setAttribute('id', variable2) 
        condition = true
    }
    if (clicks === -1) {
        pic01.setAttribute('id', variable2)        
        pic02.setAttribute('id', variable2)
        pic03.setAttribute('id', variable1)
        pic04.setAttribute('id', variable0)   
    }

    if (condition) {
        clicks = 2
    }
}

import { slider, slider_close_btn, side_pannel } from "./js.js";

export const header_slide = () => {
    slider.classList.add('active')
    slider_close_btn.classList.add('active')
}

export const slider_Function = () => {
    slider.classList.remove('active')
    slider_close_btn.classList.remove('active')
}