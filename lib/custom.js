
// Static Data Sources
var dataEvent, dataResource;

//Setting static data sources
dataResource = [{ id: 'a', title: 'Room A' },
				{ id: 'b', title: 'Room B', eventColor: 'green' },
				{ id: 'c', title: 'Room C', eventColor: 'orange' },
				{ id: 'd', title: 'Room D', eventColor: 'red' }];
dataEvent = [
				{ id: '1', resourceId: 'a', start: '2017-05-06', end: '2017-05-08', title: 'event 1' },
				{ id: '2', resourceId: 'a', start: '2017-05-07T09:00:00', end: '2017-05-07T14:00:00', title: 'event 2' },
				{ id: '3', resourceId: 'b', start: '2017-05-07T12:00:00', end: '2017-05-08T06:00:00', title: 'event 3' },
				{ id: '4', resourceId: 'c', start: '2017-05-07T07:30:00', end: '2017-05-07T09:30:00', title: 'event 4' },
				{ id: '5', resourceId: 'd', start: '2017-05-07T10:00:00', end: '2017-05-07T15:00:00', title: 'event 5' }
			];


function loadCalenderData(){
    //Extract filtered dataResource and dataEvent;
    var randomNo = Math.random();
    dataResource[0].title = "Ravi";
    for(var i=0; i<dataResource.length; i++){
        dataResource[i].title = "Ravi"+i+"-"+randomNo;
    }  
}

function loadResourceDiv(){
    debugger; 
    //Fetch selected resource id
    var checkboxResourceIdArray = $("input:checkbox:checked").map(function() {
        return $(this).val();
    }).get();   
    
    if(checkboxResourceIdArray.length == 0){
        alert("Please select resource to view in calender");
        return 0;
    }
    
    //filter backend data for resourceID
    var filteredResourceIdArray = [{ id: 'a', title: 'Room A' },{ id: 'b', title: 'Room B', eventColor: 'green' }];
    
    showCalender(filteredResourceIdArray,dataEvent);
    
}
$(function() { // document ready
    var checkboxResourceIdArray;
    $("#resource ul ").on('click', "li", function(){
        debugger;
        checkboxResourceIdArray = $("input:checkbox:checked").map(function() {
            return $(this).val();
        }).get(); 
        
        
        //filter backend data for resourceID
        var filteredResourceIdArray = [{ id: 'a', title: 'Room A' },{ id: 'b', title: 'Room B', eventColor: 'green' }];
    
        showCalender(filteredResourceIdArray,dataEvent);
        
    });
});


//adding functions
function showCalender(dataResource){

    //Show Calender
    $('#calendar').fullCalendar({
			defaultView: 'agendaDay',
			defaultDate: '2017-05-07',
			editable: true,
			selectable: true,
			eventLimit: true, // allow "more" link when too many events
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'agendaDay,agendaWeek,month'
			},
			resources: dataResource,
			events: dataEvent,
		});
}