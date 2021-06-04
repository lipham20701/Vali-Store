$(document).ready(function(){
    function ktten(){
        var ten=$("#txtt").val();
        var regten=/^[A-Z]{1}[a-z]+$/;
        if(regten.test(ten)){
            $("#ert").html("(*)");
            return true;
        }
        else{
            $("#ert").html("Xin nhập đúng!");
            return false;
        }
    }
    $("#txtt").blur(ktten);
    function ktho(){
        var ho=$("#txth").val();
        var regho=/^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*){1}$/;
        if(regho.test(ho)){
            $("#erh").html("(*)");
            return true;
        }
        else{
            $("#erh").html("Xin nhập đúng");
            return false;
        }
    }
   
    $("#txth").blur(ktho);
    function ktemail(){
        var email=$("#email").val();
        var regemail=/^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
        if(regemail.test(email)){
            $("#ere").html("(*)");
            return true;
        }
        else{
            $("#ere").html("Xin nhập đúng");
            return false;
        }
    }
    
    
    $("#email").blur(ktemail);
    function ktpwd(){
        var pass=$("#pwd").val();
        var regpass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
        if(regpass.test(pass)){
            $("#ermk").html("(*)");
            return true;
        }
        else{
            $("#ermk").html("- Chứa ít nhất 8 ký tự\
            Chứa ít nhất 1 số \
           - Chứa ít nhất 1 ký tự viết thường (az)\
           - Chứa ít nhất 1 ký tự viết hoa (AZ)\
           - Chỉ chứa 0-9a-zA-Z");
           return false;
        }
    }
    $("#pwd").blur(ktpwd);

    
    
    
   
    $("#pwd").blur(function(){
        var pass=$(this).val();
        var regpass= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
        if(regpass.test(pass)){
            $("#ermk2").html("(*)");
            return true;
        }
        else{
            $("#ermk2").html("Mật khẩu không hợp lệ");
            return false;
        }
    })
    $("#btndk").click(function(){
        if(ktten()==false){
            $("#tb").html("Vui lòng nhập đầy đủ thông tin");
            return false;
        }
        if(ktho()==false){
            $("#tb").html("Vui lòng nhập đầy đủ thông tin");
            return false;
        }
        if(ktemail()==false){
            $("#tb").html("Vui lòng nhập đầy đủ thông tin");
            return false;
        }
        if(ktpwd()==false){
            $("#tb").html("Vui lòng nhập đầy đủ thông tin");
            return false;
        }



        var ten, ho, email,pass;

        ten=$("#txtt").val();
        ho=$("#txth").val();
        email=$("#email").val();
        pass=$("#pwd").val();
        gioitinh=$("input[type='radio']:checked").val();
        ngaysinh=$("input[type='date']:selected").val();

        var modal= "<tr></tr><td>"+ho+ten+"</td><td>"+email+"</td> <td>"+gioitinh+"</td><td>"+ngaysinh+"</td></tr>"
        $('#modal1').append(modal);
    })
   
})