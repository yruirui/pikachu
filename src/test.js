import string from './css.js'
let n=0
let time=100
const demo=document.querySelector('#demo')
const dem2=document.querySelector('#dem2')
demo.innerText=string.substring(0,n)
demo2.innerHTML=string.substring(0,n)
const player={
    run:()=>{
        if(n>string.length){
            window.clearInterval(id)
            return
        }
        n+=1
        demo.innerText=string.substring(0,n)
        demo2.innerHTML=string.substring(0,n)
        demo.scrollTop=99999;
    },
    play:()=>{
        return id=setInterval(player.run,time)
    },
    pause:()=>{
        window.clearInterval(id)
    },
    Slow:()=>{
        player.pause()
        time=300
        player.play()
    },
    Normal:()=>{
        player.pause()
        time=50
        player.play()
    },
    Fast:()=>{
        player.pause()
        time=0
        player.play()
    }

}
let id = player.play()
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



document.querySelector('#buttonPause').onclick=()=>{player.pause()}
document.querySelector('#btnPlay').onclick=()=>{
    id=player.play()
}
document.querySelector('#btnSlow').onclick=()=>{
    player.pause()
    
}
document.querySelector('#btnNormal').onclick=()=>{
    player.pause()
    
}
document.querySelector('#btnFast').onclick=()=>{
    player.pause()
    
}
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