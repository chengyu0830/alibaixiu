$('#logout').on('click',function(){
    var isConfirm = confirm('您要退出？')
    if(isConfirm) {
      $.ajax({
        type:'post',
        url:'http://47.111.184.55:3000/logout',
        success:function(){
          location.href = 'login.html'
        },
        error:function(){
          alert('退出失败')
        }
      })
    }
  })