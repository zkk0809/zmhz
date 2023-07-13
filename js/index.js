var searchParams = new URLSearchParams(location.search)
var username = searchParams.get('username')

$(document).ready(function () {

    //渲染页面
    if (username !== null) {
        $(`<p> <span>${username}</span> 欢迎你</p>`).appendTo($('.info'))
        $(`<button id="logout">注销</button>`).appendTo($('.info'))
    }
    else{
        $(`<p>  欢迎你</p>`).appendTo($('.info'))
        $(`<button id="logout">去登录</button>`).appendTo($('.info'))
    }

    //注销
    $("#logout").click(function () {
        location.href = 'login.html'
    })
    //轮播
    function lunbo(){
        var box=document.querySelector(".section")

        var img = box.querySelectorAll("ul>li")
        var point = box.querySelectorAll("ol>li")
        var left=box.querySelector(".left")
        var right=box.querySelector(".right")
        // 定义函数
        var index = 0
        function changeone(type) {
            img[index].className = ""
            point[index].className = ""
            if (type === true) {
                index++
            }
            else if (type === false) {
                index--
            }
            else {
                index = type
            }

            if (index >= img.length) {
                index = 0
            }
            if (index < 0) {
                index = img.length - 1
            }

            img[index].className = "active"
            point[index].className = "active"
        }
        // 事件委托
        box.onclick=function(e){
            console.log(e.target)
            if(e.target.className==="left"){
                changeone(false)
            }
            if(e.target.className==="right"){
                changeone(true)
            }
            // 利用dataset获取属性值*****
            if(e.target.dataset.name==="point"){
                // var i=e.target.dataset.i-0
                changeone(e.target.dataset.i)
            }
        }
        setInterval(function(){
            changeone(true)
        },3000)
    }
    lunbo()

    //导航栏点击跳转
    $('#index').click(function(){
        location.href=`index.html?username=${username}`
    })
    $('#culture').click(function(){
        location.href=`culture.html?username=${username}`
    })
    $('#travel').click(function(){
        location.href=`travel.html?username=${username}`
    })

    //容器点击跳转
    $(".list").on('click','.item',function(){
        // console.log($(this).index())
        if($(this).index()===0){
            location.href='https://baike.baidu.com/item/%E6%9D%AD%E5%B7%9E%E5%B8%82/200167'
        }
        else if($(this).index()===1){
            location.href=`culture.html?username=${username}`
        }
        else{
            location.href=`travel.html?username=${username}`
        }
    })

    //容器hover变大
    $(".item").on('mouseover',function(){
        $(this).addClass('active')
    })
    $(".item").on('mouseout',function(){
        $(this).removeClass('active')
    })
})
