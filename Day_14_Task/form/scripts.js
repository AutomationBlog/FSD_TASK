function onSubmit(){
    var form_data = new FormData(document.querySelector("form"));
if(form_data.getAll("choiceoffood").length < 2)
{
    //show error
}
else
{
    //no error
}
}