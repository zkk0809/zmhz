/* var user1 = { username: 'zk', password: '123' }
localStorage.setItem('user1', JSON.stringify(user1)) */
/* if (JSON.parse(localStorage.getItem("user")) == null) {
    var userarr2 = []
    localStorage.setItem('user', JSON.stringify(userarr2))
}
var userarr=JSON.parse(localStorage.getItem("user"))
console.log(userarr) */

$(document).ready(function () {
    $('#mybutton').click(function (e) {
        e.preventDefault()
        // console.log($('#username').val())
        var username = $('#username').val().trim();
        var password = $('#password').val().trim();

        if (username === '' || password === '') {
            $("#sign").text("账号或密码为空！").css('color', 'red')
            $('#sign').animate({ marginLeft: '-20px' }, 100);
            $('#sign').animate({ marginLeft: '20px' }, 100);
            $('#sign').animate({ marginLeft: '-20px' }, 100);
            $('#sign').animate({ marginLeft: '0px' }, 100);
            return
        }
        axios.post('http://localhost:3000/login', {
            username, password
        }).then(res => {
            // console.log(res.data)
            if (res.data.ok === 1) {
                $("#sign").text("登陆成功！").css('fontWeight', 'bold')
                $('#sign').animate({ marginLeft: '-20px' }, 100);
                $('#sign').animate({ marginLeft: '20px' }, 100);
                $('#sign').animate({ marginLeft: '-20px' }, 100);
                $('#sign').animate({ marginLeft: '0px' }, 100);
                location.href = `./index.html`
            }
            else {
                $("#sign").text("账号或密码错误！").css('color', 'red')
                $('#sign').animate({ marginLeft: '-20px' }, 100);
                $('#sign').animate({ marginLeft: '20px' }, 100);
                $('#sign').animate({ marginLeft: '-20px' }, 100);
                $('#sign').animate({ marginLeft: '0px' }, 100);
            }
        })
        // console.log(22222)
        // var istrue = false
        /* for(i=0;i<userarr.length;i++){
            if($('#username').val() === userarr[i].username && $('#password').val() === userarr[i].password){
                istrue=true
                break
            }
        } */
        /* if (istrue) {
            $("#sign").text("登陆成功！").css('fontWeight', 'bold')
            $('#sign').animate({ marginLeft: '-20px' }, 100);
            $('#sign').animate({ marginLeft: '20px' }, 100);
            $('#sign').animate({ marginLeft: '-20px' }, 100);
            $('#sign').animate({ marginLeft: '0px' }, 100);
            location.href = `./index.html?username=${username}`

        }
        else {
            $("#sign").text("账号或密码错误！").css('color', 'red')
            $('#sign').animate({ marginLeft: '-20px' }, 100);
            $('#sign').animate({ marginLeft: '20px' }, 100);
            $('#sign').animate({ marginLeft: '-20px' }, 100);
            $('#sign').animate({ marginLeft: '0px' }, 100);
        } */
    })
})
