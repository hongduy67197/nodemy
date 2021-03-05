function send(){
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var age = arr[1].value;
    var address = arr[2].value;
    var check = arr[5].checked;
    var check1 = arr[6].checked;
    var check2 = arr[7].checked;
    var gender = "";
    var favorite = "";
    if(arr[3].checked){
        gender = "Male";
    }else{
        gender = "Female";
    }
    for(var i=5; i<=7; i++){
        if(arr[i].checked){
            favorite = favorite + arr[i].value + " ";
        }
    }
    if(name == "" || age == "" || address == ""){
        alert("please fill all fields");
        return;
    }
    if(isNaN(age)){//is not a number
        alert("age must be a number");
        return;
    }
    if(check||check1||check2){

    }else{
        alert("least one favorite must be checked");
        return;
    }
   var choice =  confirm('confirm your information\n'+name+"\n"+age+"\n"+address+"\n"+gender+"\n"+favorite);
    if(choice == 1){
        alert('information sent');
    }
}
function resetForm(){
    document.getElementsByTagName('form')[0].reset();
}
// do trong html được bao trong thẻ form nên ta có thể dùng được .reset()