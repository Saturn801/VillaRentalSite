function inputFocus(i)
{
    if(i.value==i.defaultValue)
	{ 
		i.value=""; i.style.color="#000"; }
	}
	
function inputBlur(i)
{
    if(i.value=="")
	{ 
		i.value=i.defaultValue; i.style.color="#888";
	}
}

function check_form()
{
	var arrival_day = document.getElementById("arrivalday").value;
	var arrival_month = document.getElementById("arrivalmonth").value;
	var departure_day = document.getElementById("departureday").value;
	var departure_month = document.getElementById("departuremonth").value;
	var leader_name = document.getElementById("leadername").value;
	var city = document.getElementById("city").value;
	var country = document.getElementById("country").value;
	var phone_number = document.getElementById("phonenumber").value;
	var email = document.getElementById("emailaddress").value;
	var passport_number = document.getElementById("passportnumber").value;
	
	if (arrival_month == "February" && arrival_day>29)
	{
		alert("Invalid arrival date");
	}
	
	if (arrival_day>30 && (arrival_month == "April" || arrival_month == "June" || arrival_month == "September" || arrival_month == "November"))
	{
		alert("Invalid arrival date");
	}
	
	if (departure_month == "February" && departure_day>29)
	{
		alert("Invalid departure date");
	}
	
	if (departure_day>30 && (departure_month == "April" || departure_month == "June" || departure_month == "September" || departure_month == "November"))
	{
		alert("Invalid departure date");
	}
	
	if(!isNaN(leader_name))
	{
		alert("Invalid party leader name.");
	}
	
	if(!isNaN(city))
	{
		alert("Invalid city.");
	}
	
	if(!isNaN(country))
	{
		alert("Invalid country.");
	}
	
	if(isNaN(phone_number) || phone_number == '')
	{
		alert("Invalid phone number.");
	}
	
	if(!validateEmail(email))
	{
		alert("Invalid email address.");
	}
	
	if(isNaN(passport_number) || passport_number == '')
	{
		alert("Invalid passport number.");
	}
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}