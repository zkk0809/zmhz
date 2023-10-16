// var searchParams = new URLSearchParams(location.search)
// var username = searchParams.get('username')
var token = localStorage.getItem('token')
// console.log(token)
$(document).ready(async function () {
    //登录鉴权
    const res = await axios.post('http://localhost:3000/jwt', {
        token
    })
    if (res.data.ok === 1) {
        $(`<p> <span>${res.data.username}</span> 欢迎你</p>`).appendTo($('.info'))
        $(`<div>
        <button id="logout">注销</button>
        <button id="gaunli">用户管理</button>
    </div>`).appendTo($('.info'))

    } else {
        $(`<p>  欢迎你</p>`).appendTo($('.info'))
        $(`<button id="logout">去登录</button>`).appendTo($('.info'))
    }

    //渲染页面
    /* if (username !== null) {
        $(`<p> <span>${username}</span> 欢迎你</p>`).appendTo($('.info'))
        $(`<div>
        <button id="logout">注销</button>
        <button id="gaunli">用户管理</button>
    </div>`).appendTo($('.info'))
    }
    else {
        $(`<p>  欢迎你</p>`).appendTo($('.info'))
        $(`<button id="logout">去登录</button>`).appendTo($('.info'))
    } */

    //注销
    $("#logout").click(function () {
        localStorage.removeItem('token')
        location.href = 'login.html'
    })
    $("#gaunli").click(function () {
        location.href = 'users.html'
    })
    //导航栏点击跳转
    $('#index').click(function () {
        location.href = `index.html`
    })
    $('#culture').click(function () {
        location.href = `culture.html`
    })
    $('#travel').click(function () {
        location.href = `travel.html`
    })

    var ool = $(".section").find("ol li")
    var oul = $(".section").find("ul li")
    // ool.eq(0).addClass("active")
    // oul.eq(0).addClass("active")
    oul.click(function () {
        // console.log(this)
        $(this).addClass("active").siblings().removeClass("active")
        ool.eq($(this).index()).addClass('active').siblings().removeClass("active")

    })

})