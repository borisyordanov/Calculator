var total = "";
var fired_button;

$("button").click(function () {
    
    fired_button = $(this).val();

    if (fired_button === "del")
    {
    	$('#result').text(function (_,txt) {
    	return txt.slice(0, -1);
		});

	    total = total.slice(0, -1);
    }
    else if (fired_button == "ac")
    {
    	$('#result').text(function (_,txt) {
    	return txt = "";
		});
		total = "";
    }
    else if (fired_button == "=")
    {
    	$('#result').text(function (_,txt) {
    	return txt = eval(total);
		});
		total = "";
    }
    else
    {	
	    total+=fired_button;
	    $('#result').text(function (_,txt) {
    	return txt = total;
	    //$( "#result" ).append(fired_button);
    });
}
})