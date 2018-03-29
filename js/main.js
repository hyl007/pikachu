/**
 *
 */
!function(){
    var duration=50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function  writeCode(prefix,code,fn){
        let content = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n=0
        setTimeout(function run(){
            n+=1
            content.innerHTML=code.substring(0,n)
            styleTag.innerHTML=code.substring(0,n)
            content.scrollTop=content.scrollHeight
            if(n<code.length){
                setTimeout(run,duration)
                fn&&fn.call()
            }else {
                fn&&fn.call()
            }
        },duration)
    }

    let code=`
/*
 *先做画一个画板
 *画一个可爱的皮卡丘
 */
.preview{
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}
.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}
/*
 *首先画鼻子
 */
.nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-radius: 11px;
    border-color: black transparent transparent transparent;
    border-width: 12px;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}
/*
 *然后到画眼睛
 */
.eye{
    height: 49px;
    width: 49px;
    position: absolute;
    background: #2e2e2e;
    transform: translateX(-50%);
    border-radius: 50%;
    left: 50%;
    border: 2px solid #000000;
}
.eye.left{
    margin-left: -90px;

}
.eye.right{
    margin-left: 90px;
}
/*
 *画眼珠子
 */
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 2px;
    top: 2px;
    border: 2px solid black;
}
/*
 *接着画脸
 */
.face{
    width: 68px;
    height: 68px;
    transform: translateX(-50%);
    background: #fc0d1c;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    top: 85px;
}
.face.left{
    margin-left: 116px;
}
.face.right{
    margin-left: -116px;
}
/*
 *画两个小胡子
 */
.upperLip{
    position: absolute;
    height: 25px;
    width: 80px;
    border: 3px solid black;
    left: 50%;
    top: 65px;
    z-index:1;
    background: #fee433;

}
.upperLip.left{
    border-right: none;
    border-top: none;
    transform: translateX(-50%) rotate(-22deg);
    margin-left: -39px;
    border-bottom-left-radius: 45px 20px;
}
.upperLip.right{
    border-left: none;
    border-top: none;
    transform: translateX(-50%) rotate(22deg);
    margin-left: 39px;
    border-bottom-right-radius: 45px 20px;

}
.lowerLip-wrapper{
    position: absolute;
    height: 90px;
    width: 300px;
    bottom: 0px;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
}
/*
 *最后到画一个嘴
 */
.lowerLip{
    width: 120px;
    height: 1000px;
    background: #990513;
    border-radius:300px/1250px;
    border: 2px solid black;
    bottom: 0px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}
.lowerLip::before{
    content: '';
    display: block;
    bottom: -40px;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
}
    `
    writeCode('',code)

}.call()