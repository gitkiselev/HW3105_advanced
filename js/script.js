window.onload = function(){
	let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	
	for (let i = 0; i < week.length; i++){
		
			
		
		


		if (i < 5){
			
			document.write(week[i] + '<br>');
		}else {
			
			document.write('<strong>' + week[i] + '</strong>'+ '<br>');
		}
		

}
/*var today = new Date().getDay();
switch (today){
case 0:
document.write('<em>' + Sunday + '</em>');
break;
case 1:
document.write('<em>' + Monday + '</em>');
break;
case 2:
document.write('<em>' + Tuesday + '</em>');
break;
case 3:
document.write('<em>' + Wednesday + '</em>');
break;
case 4:
document.write('<em>' + Thursday + '</em>');
break;
case 5:
document.write('<em>' + Friday + '</em>');
break;
case 6:
document.write('<em>' + Saturday + '</em>');
break;
default: 
console.log('error');
}*/

//Через switch не получилось. Также пытался сделать выше, где цикл for тоже не получилось.
document.write('Текущий день ' + '<em>' + week[new Date().getDay() - 1] + '</em>');
document.write('<hr>');
//document.write('<em>' + Date.now().getDay() + '</em>');
//document.write('<em>' + week[4] + '</em>');
var arr = ['1234567', '2345678', '345678', '5678', '7891011', '8910111213', '10222'];
for (let i = 0; i < arr.length; i++){
	let current = arr[i].charAt(0);
	if (current == 3 || current == 7){
		document.write(arr[i] + '<br>');
	}
}
}
