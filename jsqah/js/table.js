function generateTxt (eventData) {
	var mydata = eventData.data
	mydata.forEach(function (event) {
		appendEvent(event)
	})
}

function appendEvent( event ) {
	var txt = "\n"+event.Question + "\n*" +	event["Option 1 (correct)"] +"\n"+   event["Option 2"] + "\n" ;
	if (event["Option 3"]!="") 
		txt+= event["Option 3"] + "\n" ;
	if (event["Option 4"]!="") 
		txt+= event["Option 4"] + "\n" ;
	if (event["Option 5"]!="") 
		txt+= event["Option 5"] + '\n';

  document.getElementById("jsqah").innerText += txt;
}