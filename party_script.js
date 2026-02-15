//this is needed in order to validate if date and time are correct before going to other functions.v
var TimeValid = true;
var DateValid = true;

window.onload= function(){
	delivery_options();

}

//this function is used for validating the date.
function date(){
	var current_date = 	new Date(); //this is for getting the current date
	current_date.setHours(0, 0, 0, 0); //because current date have hours and minutes, which must be removed for time comparison.
	var current_date_str= Date.parse(current_date); //turning strings to values
	var inputted_date= Date.parse(document.getElementById('date_party').value);

	//
	if(document.getElementById("deliver_opt").checked){
		if (inputted_date<current_date_str){
			document.getElementById("temp_date").innerHTML="Provide a future Date!";
			DateValid = false;
		}
		else{
			document.getElementById("temp_date").innerHTML="";
			DateValid = true;
		}
	}
}

//this function is used for validating the time.
function time(){
	var Min_time="06:00";
	var Max_time="18:00";
	var inputted_time= document.getElementById('time_party').value; //getting the inputted time
	if(document.getElementById("deliver_opt").checked){ //if the delivery checked, then check the time.
		if(Min_time > inputted_time || inputted_time > Max_time){
			document.getElementById('temp2').innerHTML= "Delivery times are only from 6am to 6pm.";
			TimeValid = false; //return false if it doesn't fulfill or wrong
		}
		else{
			document.getElementById('temp2').innerHTML= "";
			TimeValid = true; //otherwise true
		}
	}
}

//this is my main function that does the calculation and display it on alert
function order(){

	//if the validation for time and date passes, then the form will be submitted and rest of the function works
	if(!DateValid || !TimeValid){ 
		var message_date_time= "Please check your inputted date and time."
		alert(message_date_time);
		return false;
	}

	//This function is for computing and returning delivery fee
	function num_fee(a){ 
		var group_people= Math.ceil(a/50); //this function is used to get the round up of the resulting quotient
		var delivery_fee = 1000 + (group_people - 1)*500;
		return delivery_fee;
	}

	//function for getting the total cost of chosen appetizer
	function appetizer_cost(a){
		if (a=="Salad"){
			return 100;
		}
		else if (a=="Bread w/Dip"){
			return 70;
		}
		else if (a=="Tomato Surprise"){
			return 120;
		}
		else if (a=="Mushroom Bites"){
			return 150;
		}
	}

	//function for getting the total cost of chosen main dish
	function main_dish_cost(a){ 
		main_dish_cost= 0; //added to the cost if a certain product is chosen
		for (e of a){
			if (e == "Roast Beef"){
				main_dish_cost+= 300;
			}
			if (e == "Beef Steak"){
				main_dish_cost+= 270;
			}
			if (e == "Pork Spareribs"){
				main_dish_cost+= 240;
			}
			if (e == "Pork Marbella"){
				main_dish_cost+= 250;
			}
			if (e == "Grilled Chicken"){
				main_dish_cost+= 190;;
			}
			if (e == "Roast Chicken"){
				main_dish_cost+= 190;
			}
			if (e == "Broiled Salmon"){
				main_dish_cost+= 170;
			}
			if (e == "Grilled Salmon"){
				main_dish_cost+= 180;
			}
		}
		return main_dish_cost;
	}

	//function for getting the total cost of chosen desert
	function desert_cost(a){ 
		desert_cost= 0;
		for (e of a){
			if (e == "Molten Chocolate Cake"){
				desert_cost+= 120;
			}
			if (e == "Red Velvet Cake"){
				desert_cost+= 90;
			}
			if (e == "Lemon Bars"){
				desert_cost+= 50;
			}
			if (e == "Peanut Butter Bars"){
				desert_cost+= 60;
			}
			if (e == "Buko Pie"){
				desert_cost+= 50;
			}
			if (e == "Lemon Meringue Pie"){
				desert_cost+= 70;
			}
		}
		return desert_cost;
	}

	//function for getting the total cost of chosen rice
	function rice_cost(a){ 
		rice_cost=0;
		for (e of a){
			if (e == "Plain"){
				rice_cost+= 30;
			}
			else if (e == "Garlic"){
				rice_cost+= 40;
			}
			else if (e == "Bagoong"){
				rice_cost+= 35;
			}
		}
		return rice_cost;
	}

	//function for getting the total cost of chosen drink
	function drink_cost(a) { 
		drink_cost=0;
		for (e of a){
			if (e == "Cucumber Lemonade"){
				drink_cost+= 60;
			}
			else if (e == "Red Iced Tea"){
				drink_cost+= 50;
			}
			else if (e == "Ripe Mango Juice"){
				drink_cost+= 70;
			}
		}
		return drink_cost;
	}

	//function for getting the user's order on appetizer section
	function appetizer_check(){ 
		var appetizer= []; //appends into array once items are checked by the user
		if(document.getElementById("salad_appet").checked){
			appetizer.push(document.getElementById("salad_appet").value);
		}
		else if(document.getElementById("bread_appet").checked){
			appetizer.push(document.getElementById("bread_appet").value);
		}
		else if(document.getElementById("tomato_appet").checked){
			appetizer.push(document.getElementById("tomato_appet").value);
		}
		else if(document.getElementById("mush_appet").checked){
			appetizer.push(document.getElementById("mush_appet").value);
		}
		return appetizer;
	}

	function main_dish_check(){ //function for getting the user's order on main dish section
		var main_dish=[];
		if(document.getElementById("beef_main").checked){
			main_dish.push(document.getElementById("beef_main").value)}
		if(document.getElementById("steak_main").checked){
			main_dish.push(document.getElementById("steak_main").value)}
		if(document.getElementById("ribs_main").checked){
			main_dish.push(document.getElementById("ribs_main").value)}
		if(document.getElementById("marbella_main").checked){
			main_dish.push(document.getElementById("marbella_main").value)}
		if(document.getElementById("grilled_main").checked){
			main_dish.push(document.getElementById("grilled_main").value)}
		if(document.getElementById("roast_main").checked){
			main_dish.push(document.getElementById("roast_main").value)}
		if(document.getElementById("broiled_main").checked){
			main_dish.push(document.getElementById("broiled_main").value)}
		if(document.getElementById("grilled_salmon_main").checked){
			main_dish.push(document.getElementById("grilled_salmon_main").value)
		}
		return main_dish;
	}
	function desert_check(){ //function for getting the user's order on desert section
		var desert=[];
		if(document.getElementById("molten_desert").checked){
			desert.push(document.getElementById("molten_desert").value)}
		if(document.getElementById("red_velvet_desert").checked){
			desert.push(document.getElementById("red_velvet_desert").value)}
		if(document.getElementById("lemon_desert").checked){
			desert.push(document.getElementById("lemon_desert").value)}
		if(document.getElementById("peanut_desert").checked){
			desert.push(document.getElementById("peanut_desert").value)}
		if(document.getElementById("buko_desert").checked){
			desert.push(document.getElementById("buko_desert").value)}
		if(document.getElementById("meringue_desert").checked){
			desert.push(document.getElementById("meringue_desert").value)}
		return desert;
	}

	function rice_check(){ //function for getting the user's order on rice section
		var rice=[];
		if(document.getElementById("plain_rice").checked){
			rice.push(document.getElementById("plain_rice").value)}
		else if(document.getElementById("garlic_rice").checked){
			rice.push(document.getElementById("garlic_rice").value)}
		else if(document.getElementById("bagoong_rice").checked){
			rice.push(document.getElementById("bagoong_rice").value)}
		return rice;
	}

	function drink_check(){ //function for getting the user's order on drink section
		var drink=[];
		if(document.getElementById("cucumber_drink").checked){
			drink.push(document.getElementById("cucumber_drink").value)}
		else if(document.getElementById("tea_drink").checked){
			drink.push(document.getElementById("tea_drink").value)}
		else if(document.getElementById("mango_drink").checked){
			drink.push(document.getElementById("mango_drink").value)}
		return drink;
	}
	//List of variables that contains what the user checked
	var appetizer = appetizer_check();
	var main_dish = main_dish_check();
	var desert = desert_check();
	var rice = rice_check();
	var drink = drink_check();

	var number_of_people = parseInt(document.getElementById("people").value);
	var delivery_fee = num_fee(number_of_people);
	
	var meal_cost = appetizer_cost(appetizer) + main_dish_cost(main_dish) +
	desert_cost(desert) + rice_cost(rice) + drink_cost(drink);
	
	var total_w_delivery = (number_of_people * meal_cost) + delivery_fee;
	var total= (number_of_people * meal_cost)
	var del_type = document.getElementById("deliver_opt").value;
	var del_type2 = document.getElementById("pick_opt").value;
	var address = document.getElementById("details_delivery").value;
	
	//variables for date
	var inputted_date = new Date(document.getElementById("date_party").value)
	var print_date = inputted_date.toLocaleDateString();
	
	//variables reserved for time
	var inputted_time= document.getElementById('time_party').value;
	var [hours, minutes]= inputted_time.split(":"); 
	
	//this is for knowing AM or PM
	var period;
	if(hours>= 12){
		period = "PM"}
	else{
		period = "AM"} 
	hours = hours % 12 || 12;
	
	//printing
	var printed_time = hours + ":" + minutes + " " + period; 
	
	//variables for messages
	var message1="Number of people:" + " " + number_of_people + "\n" +
			"Appetizer:" + "  " + appetizer + "\n"+
			"Main Dish:" + "  " + main_dish.join("\n") + "\n"+
			"Desert:" + "  " + desert.join("\n") + "\n"+
			"Rice:" + "  " + rice.join("\n") + "\n"+
			"Drink:" + "  " + drink.join("\n") + "\n"+
			"Delivery Details:" +"  "+ del_type  + "\n"+
			"                 " +address + "\n"+
			"                 " +print_date + "\n"+
			"                 " +printed_time + "\n" +
			"Meal Cost:" + "  " + meal_cost + "\n"+
			"Delivery Fee:" + "  " + delivery_fee + "\n"+
			"Total:" + "  " + total_w_delivery + "\n";
	var message2="Number of people:" + " " + number_of_people + "\n" +
			"Appetizer:" + "  " + appetizer + "\n"+
			"Main Dish:" + "  " + main_dish.join("\n") + "\n"+
			"Desert:" + "  " + desert.join("\n") + "\n"+
			"Rice:" + "  " + rice.join("\n") + "\n"+
			"Drink:" + "  " + drink.join("\n") + "\n"+
			"Delivery Details:" +"  "+ del_type2  + "\n"+
			"Meal Cost:" + "  " + meal_cost + "\n"+
			"Total:" + "  " + total + "\n";

	if(document.getElementById("deliver_opt").checked){
		alert (message1);
		}
	else{
		alert(message2);
	}
}


//this is for disabling either delivery options or store pickup depending on the user.
function delivery_options() {
	if (document.getElementById("pick_opt").checked){
		document.getElementById("details_delivery").disabled = true
		document.getElementById("date_party").disabled = true
		document.getElementById("time_party").disabled = true
	}
	else if(document.getElementById("deliver_opt").checked){
		document.getElementById("details_delivery").disabled = false
		document.getElementById("date_party").disabled = false
		document.getElementById("time_party").disabled = false
	}

}