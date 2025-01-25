var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

// dets hame mouse ki details deta hai ....x and y access and bhut sari
main.addEventListener("mousemove",function(dets){
    //    console.log(dets.x)

    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})