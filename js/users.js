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
    </div>`).appendTo($('.info'))

    } else {
        location.href='login.html'
    }
    //注销
    $("#logout").click(function () {
        localStorage.removeItem('token')
        location.href = 'login.html'
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

    let userlist = []
    const res2 = await axios.get('http://localhost:3000/users')
    userlist = res2.data.data
    $('#table').append(userlist.map(item => `<tr>
        <td>${item._id}</td>
        <td>${item.username}</td>
        <td>${item.password}</td>
        <td>${item.email}</td>
        <td>${item.sex}</td>
        <td>${item.age}</td>
        <td ><button class='update'>修改</button></td>
        <td><button class='delete'>删除</button></td>
        </tr>`).join(' '))
    $("#back").click(() => {
        $("#tanchu").css('display', 'none')
        $("#table").css('display', 'inline-table')
    })
    $(".update").on("click", function () {

        // console.log($(this).parent().parent().children().eq(1).text())
        $('#username').val($(this).parent().parent().children().eq(1).text())
        $('#password').val($(this).parent().parent().children().eq(2).text())
        $('#email').val($(this).parent().parent().children().eq(3).text())
        $('#age').val($(this).parent().parent().children().eq(5).text())
        // console.log($(this).parent().parent().children().eq(4).text())
        if($(this).parent().parent().children().eq(4).text()==='女'){
            $("input[name='gender'][value='female']").prop("checked", true);
        }

        $("#tanchu").css('display', 'block')
        $("#table").css('display', 'none')

        var first = $(this).parent().parent()[0].firstElementChild
        // console.log(first.textContent)
        var id = first.textContent

        $("#mybutton").click((e) => {
            e.preventDefault()
            // console.log(111)
            var username = $('#username').val().trim()
            var password = $('#password').val().trim()
            var email = $('#email').val().trim()
            var sex
            if ($('#male').is(':checked')) {
                sex = '男'
            } else {
                sex = '女'
            }
            // var sex=$('#male').is(':checked')
            var age = $('#age').val().trim()
            if (username === '' || password === '' || email === '' || age === '') {
                alert('请输入所有信息！')
                return
            }

            axios.put(`http://localhost:3000/users/${id}`, {
                username, password, email, sex, age
            }).then(res => {
                if (res.data.ok === 1) {
                    // $("#tanchu").css('display', 'none')
                    // $("#tanchu").css('display', 'block')
                    // alert("修改成功")
                    location.reload()
                } else {
                    alert('修改失败')
                }

            })
        })
    });
    $(".delete").on("click", async function () {
        // 点击事件的处理程序
        // console.log("点击了按钮：" + $(this).text());
        // console.log($(this).parent().parent()[0].firstElementChild)
        var first = $(this).parent().parent()[0].firstElementChild
        // console.log(first.textContent)
        var id = first.textContent
        const res = await axios.delete(`http://localhost:3000/users/${id}`)
        if (res.data.ok === 1) {
            console.log('删除成功')
            location.reload()
        }
    });
})