import { music_array } from "./music-array.js";

export const album_container_picture_name = document.querySelector('.album-container .album-name');
export const album_container_picture_change_to_prev = document.querySelector('.album-container .btn-container .prev');
export const album_container_picture_change_to_next = document.querySelector('.album-container .btn-container .next');

export const album_content_container_item_list = document.querySelector('.album-content-container .item-section .item-list');
export const album_content_container_title = document.querySelector('.album-content-container .artist-name');

export const audioPlayer = document.querySelector('.player');
export const audioOpenCloseBtn = document.querySelector('.player .close');

export let position = 0

let mrkitty_music_array = [], NEFFEX_music_array = [], Imagine_Dragons_array = [], BoyWithUke_array = [], Korean_array = [], Fall_Out_Boys_array = [], Eminem_array = [], FUJII_KAZE_array = [], GHOSTEMANE_array = [], JVKE_array = [], Khalid_array = [], NF_array = []

music_array.forEach(block => {
    if(block.artist === 'Mr.Kitty') {
        mrkitty_music_array.push(block);
    }
    if(block.artist === 'NEFFEX') {
        NEFFEX_music_array.push(block);
    }
    if(block.artist === 'Imagine Dragons') {
        Imagine_Dragons_array.push(block);
    }
    if(block.artist === 'BoyWithUke') {
        BoyWithUke_array.push(block);
    }
    if(block.artist === 'Korean') {
        Korean_array.push(block);
    }
    if(block.artist === 'Fall Out Boy') {
        Fall_Out_Boys_array.push(block);
    }
    if(block.artist === 'Eminem') {
        Eminem_array.push(block);
    }
    if(block.artist === 'FUJII KAZE') {
        FUJII_KAZE_array.push(block);
    }
    if(block.artist === 'GHOSTEMANE') {
        GHOSTEMANE_array.push(block);
    }
    if(block.artist === 'JVKE') {
        JVKE_array.push(block);
    }
    if(block.artist === 'Khalid') {
        Khalid_array.push(block);
    }
    if(block.artist === 'NF') {
        NF_array.push(block);
    }
});

export const album_array = [{
    albumName: "I Lost You",
    picPath: "pic/Mr.Kitty-album-cover.jpg",
    picName: "mrkittypic",
    mp3Array: mrkitty_music_array,
    artistName: "Mr.Kitty",
},{
    albumName: "Fight Back",
    picPath: "pic/NEFFEX-album-cover.jpg",
    picName: "NEFFEXpic",
    mp3Array: NEFFEX_music_array,
    artistName: "NEFFEX",
},{
    albumName: "Birds",
    picPath: "pic/Imagine-Dragons-album-cover.jpg",
    picName: "ImagineDragonspic",
    mp3Array: Imagine_Dragons_array,
    artistName: "Imagine Dragons",
},{
    albumName: "HaHa, Hi",
    picPath: "pic/BoyWithUke-album-cover.jpg",
    picName: "BoyWithUkepic",
    mp3Array: BoyWithUke_array,
    artistName: "BoyWithUke",
}]

import { album_content_create, playerPannelToggle, initial_item_adder } from "./functions.js";

album_content_create(0)

initial_item_adder()

audioOpenCloseBtn.onclick = playerPannelToggle;

const change_next_btn = document.querySelector('.album-container .btn-container .next')
const change_prev_btn = document.querySelector('.album-container .btn-container .prev')

export const variable0 = ''
export const variable1 = 'active'
export const variable2 = 'activated'

export const pic01 = document.querySelector(`.${album_array[0].picName}`)
export const pic02 = document.querySelector(`.${album_array[1].picName}`)
export const pic03 = document.querySelector(`.${album_array[2].picName}`)
export const pic04 = document.querySelector(`.${album_array[3].picName}`)

import { change_next_pannel, change_prev_pannel } from "./functions.js";

change_next_btn.onclick = () => {
    change_next_pannel()
    change_content_and_details()
}

change_next_btn.click()

change_prev_btn.onclick = () => {
    change_prev_pannel()
    change_content_and_details()
}

function change_content_and_details() {
    const active_position = checkForActive()
    album_content_create(active_position)
}

function checkForActive() {
    for (let i = 0; i < 4; i++) {
        const condition = document.querySelector(`.${album_array[i].picName}`).id
        if (condition === 'active') {
            return i
        }
    }
}

const interv = setInterval(() => {
    change_next_btn.click()
}, 6000);

export const header_slide_btn = document.querySelector('header .menu .menu-popup')

export const slider = document.querySelector('.slider')
export const slider_close_btn = document.querySelector('.slider .close')
export const side_pannel = document.querySelector('.slider .side-pannel')


import { header_slide, slider_Function } from "./functions.js";

header_slide_btn.onclick = header_slide

slider_close_btn.onclick = slider_Function



const block_music = music_array.slice()

block_music.sort(() => 0.5 - Math.random())
block_music.sort(() => 0.5 - Math.random())

let current_pannel = [0, 8] , old_pannel;

const container = document.querySelector('.recently-updated-section .item-list')

export const music_album_array = [{
    albumName: "I Lost You",
    picPath: "pic/Mr.Kitty-album-cover.jpg",
    picName: "mrkittypic",
    mp3Array: mrkitty_music_array,
    artistName: "Mr.Kitty",
},{
    albumName: "Fight Back",
    picPath: "pic/NEFFEX-album-cover.jpg",
    picName: "NEFFEXpic",
    mp3Array: NEFFEX_music_array,
    artistName: "NEFFEX",
},{
    albumName: "Birds",
    picPath: "pic/Imagine-Dragons-album-cover.jpg",
    picName: "ImagineDragonspic",
    mp3Array: Imagine_Dragons_array,
    artistName: "Imagine Dragons",
},{
    albumName: "HaHa, Hi",
    picPath: "pic/BoyWithUke-album-cover.jpg",
    picName: "BoyWithUkepic",
    mp3Array: BoyWithUke_array,
    artistName: "BoyWithUke",
},{
    albumName: "K-Pop",
    picPath: "pic/TBKU4p.webp",
    picName: "Koreanpic",
    mp3Array: Korean_array,
    artistName: "Korean",
},{
    albumName: "Immortals",
    picPath: "pic/fall-out-boy.jpg",
    picName: "Fall Out Boy pic",
    mp3Array: Fall_Out_Boys_array,
    artistName: "Fall Out Boy",
},{
    albumName: "Mockingbird",
    picPath: "pic/Emenim.webp",
    picName: "Eminempic",
    mp3Array: Eminem_array,
    artistName: "Eminem",
},{
    albumName: "Shinunoga E-wa",
    picPath: "pic/Fuji-Kaze.webp",
    picName: "FUJII KAZEpic",
    mp3Array: FUJII_KAZE_array,
    artistName: "FUJII KAZE",
},{
    albumName: "HYDROCHLORIDE",
    picPath: "pic/GhostMane.png",
    picName: "GHOSTEMANEpic",
    mp3Array: GHOSTEMANE_array,
    artistName: "GHOSTEMANE",
},{
    albumName: "Golden hour",
    picPath: "pic/gPRJorQy.jpg",
    picName: "JVKEpic",
    mp3Array: JVKE_array,
    artistName: "JVKE",
},{
    albumName: "Young Dumb & Broke",
    picPath: "pic/khalid-portrait-photoshoot-american-singer-blue-denim-jacket.jpg",
    picName: "Khalidpic",
    mp3Array: Khalid_array,
    artistName: "Khalid",
},{
    albumName: "The Search",
    picPath: "pic/NF.jpg",
    picName: "NFpic",
    mp3Array: NF_array,
    artistName: "NF",
}]

update_section()

function update_section() {
    let ind = 1
    block_music.forEach((item, index) => {
        if (index >= current_pannel[0] && index <= current_pannel[1]) {
            content_create(item, ind)
            ind++
        }
    })
}

const prev_btn = document.querySelector('.recently-updated-section .page-toggle-btns .prev')
const next_btn = document.querySelector('.recently-updated-section .page-toggle-btns .next')

const prev_btn_top = document.querySelector('.recently-updated-section .btn-section-top .prev_btn')
const next_btn_top = document.querySelector('.recently-updated-section .btn-section-top .next_btn')


let condition = false

prev_btn.addEventListener('click', prev_btn_fun)
next_btn.addEventListener('click', next_btn_fun)
prev_btn_top.addEventListener('click', prev_btn_fun)
next_btn_top.addEventListener('click', next_btn_fun)

function prev_btn_fun() {
    if (current_pannel[0] < 3 || current_pannel[1] < 6) {
        current_pannel = [0, 8]
    } else {
        container.innerHTML = ''
        old_pannel = current_pannel
        current_pannel[0] -= 9
        current_pannel[1] -= 9
        update_section()
        if (condition) {
            next_btn.addEventListener('click', next_btn_fun)
            next_btn_top.addEventListener('click', next_btn_fun)
            condition = false
        }
    }
}

function next_btn_fun() {
    if (current_pannel[1] > music_array.length) {
        next_btn.removeEventListener('click', next_btn_fun)
        next_btn_top.removeEventListener('click', next_btn_fun)
        condition = true
    } else {
        container.innerHTML = ''
        old_pannel = current_pannel
        current_pannel[0] += 9
        current_pannel[1] += 9
        update_section()
    }
}

import { call_function } from "./functions.js";

function content_create(item, ind) {
    const block = document.createElement('div')
    block.setAttribute('class', 'item')
    block.setAttribute('style', `--i:${ind}s`)
    const holder = document.createElement('div')
    holder.setAttribute('class', 'item-image0pannel')
    holder.addEventListener('click', () => {
        call_function(item.name, item.artist, item.path)
    })
    const music_name = document.createElement('p')
    music_name.innerHTML = item.name
    const pic_path = to_find_pic_path(item.artist)
    const music_image = document.createElement('img')
    music_image.setAttribute('src', pic_path)
    music_image.setAttribute('class', item.path)
    const play_btn = document.createElement('button')
    play_btn.setAttribute('class', 'play')
    play_btn.innerHTML = 'Ω'
    holder.appendChild(music_image)
    block.appendChild(holder)
    block.appendChild(music_name)
    holder.appendChild(play_btn)
    container.appendChild(block)
}

function to_find_pic_path(value) {
    let pic_path
    music_album_array.forEach((obj, index) => {
        if (obj.artistName === value) {
            pic_path = obj.picPath
        }
    })
    return pic_path
}
