//向服务器端发送请求  获取文章列表数据
$.ajax({
    type:'get',
    url:'http://47.111.184.55:3000/posts',
    success:function(response){
        console.log(response);
        var html = template('postsTpl',response)
        console.log(html);
        $('#postsBox').html(html)
        var page = template('pageTpl',response)
        $('#page').html(page)
    }
})


//处理日期时间格式
function formateDate(date){
    //将日期时间字符串转换成日期对象
    date = new Date(date)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

function changePage(page) {
    $.ajax({
        type:'get',
        url:'http://47.111.184.55:3000/posts',
        data:{
            page:page
        },
        success:function(response){
            console.log(response);
            var html = template('postsTpl',response)
            console.log(html);
            $('#postsBox').html(html)
            var page = template('pageTpl',response)
            $('#page').html(page)
        }
    })
}