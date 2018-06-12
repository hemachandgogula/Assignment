function addDetails() {
    console.log("Add button clicked");
    if (validateFirstName()) {
        if (validateFullname()) {
            postData();
        }
        else
        {
            displayErrormsgforFullname();
        }
    }
    else
    {
        displayErrormsgforFirstname();
    }
}
function displayErrormsgforFirstname() {
$('#errorforFirstName').show();
}
function displayErrormsgforFullname() {
    $('#errorforFullName').show();
}
function validateFirstName() {
    const firstname = $('.FirstName').val();
    if (firstname == '') {
        return false;
    }
    return true;

}
function validateFullname() {
    const fullname = $('.FullName').val();
    if (fullname == '') {
        return false;
    }
    return true;

}
function postData() {
    const data={
          firstname: $('#FirstName').val(),
          fullname: $('#FullName').val(),
          designation:$('#designation').val(),
          employeecode:$('#employeecode').val(),
           bloodgroup:$('#reason').val(),
          DateofEmployment:$('#date').val(),
          email:$('#Email').val(),
          mobileno:$('#emp_mobile').val(),
          emergencymobileno:$('#Emergency_mbl_no').val()

    }
    console.log(data);
    $.ajax({
        type: "POST",
        url: 'https://virtusa-id.firebaseio.com/application.json',
        data: JSON.stringify(data),
        success: function(data){
            console.log(data);
        },
        // dataType: dataType
        error :function(err){}
      });
}
// $('.document').ready(() => {

//     $('.spans-for-errors').hide();
// }
// );