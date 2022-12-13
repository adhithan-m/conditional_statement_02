//ask user to enter age,sex(m/f),martial status(y/n) and then using following rules print their place of service.
//.if employee is femlae,then she will work only in urban areas.
//.if employe is male and age is in between 20 to 40 then they may work in any where.
//.if the employee is male and age is in between 40 to 60 they only work in urban areas.
//.and if any other age should print "Error".

var age = prompt("Enter your age");
var sex = prompt("Enter your sex");
var maritalStatus = prompt("Say yes or no");
if(sex=="female")
{
alert ("Works only in urban area");
}
else if (sex=="male" && age>20 && age<40)
{
alert ("Works anywhere");
}
else if (sex=="male" && age>40 && age<60)
{
alert ("Works only in urban area");
}
else
{
alert ("ERROR");
}