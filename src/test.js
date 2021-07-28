import string from './css.js'

let astring=string
const player={
    n:0,
    time:100,
    id:undefined,
    ui:{
        demo:document.querySelector('#demo'),
        demo2:document.querySelector('#demo2')
    },
    init:()=>{
        player.ui.demo.innerText=astring.substring(0,player.n)
        player.ui.demo2.innerHTML=astring.substring(0,player.n)
        player.play()
        player.bindEvents()
    },
    events:{
        '#buttonPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'Slow',
        '#btnNormal':'Normal',
        '#btnFast':'Fast'
    },
    bindEvents:()=>{
        for(let key in player.events){ 
            if(player.events.hasOwnProperty(key)){
                const value=player.events[key]
                document.querySelector(key).onclick=player[value]
            }           
        }
    },
    run:()=>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText=astring.substr(0,player.n)
        player.ui.demo2.innerHTML=astring.substr(0,player.n)
        player.ui.demo.scrollTop=99999;
    },
    play:()=>{
        player.id = setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    Slow:()=>{
        player.pause()
        player.time=300
        player.play()
    },
    Normal:()=>{
        player.pause()
        player.time=50
        player.play()
    },
    Fast:()=>{
        player.pause()
        player.time=0
        player.play()
    }

}

// const run=()=>{
//     if(n>string.length){
//         window.clearInterval(id)
//         return
//     }
//     n+=1
//     demo.innerText=string.substring(0,n)
//     demo2.innerHTML=string.substring(0,n)
//     demo.scrollTop=99999;
// }

// const play=()=>{
//     return id=setInterval(run,time)
// }

player.init()


    

// const pause=()=>{
//     window.clearInterval(id)
// }
// buttonPause.onclick =()=>{
//     pause()
// }
// btnPlay.onclick=()=>{
//     play()
// }
// btnSlow.onclick=()=>{
//     pause()
//     time=300
//     play()
// }
// btnNormal.onclick=()=>{
//     pause()
//     time=50
//     play()
// }
// btnFast.onclick=()=>{
//     pause()
//     time=0
//     play()
// }