({
    onBoatClick : function(component, event, helper) {
		var BoatSelectEvent = component.getEvent('BoatSelect');
        var boat = component.get('v.boat');
        BoatSelectEvent.setParams({
            "boatId" : boat.Id
        });
        BoatSelectEvent.fire(); 
        
        //var BoatSelectedEvt = component.getEvent('boatselected');
        var BoatSelectedEvt = $A.get('e.c:BoatSelected');
        BoatSelectedEvt.setParams({
            "boat" : boat
        });        
        BoatSelectedEvt.fire();
        //send geolocation to map.cmp through the PlotMapMarker Application event
        var lat = boat.Geolocation__Latitude__s;
        var long = boat.Geolocation__Longitude__s;
        var label = boat.Name;
        var sObjectId;
        var plotMapMarkerAppEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerAppEvent.setParams({
            "lat"   : lat,
            "long"  : long,
            "label" : label,
            "SObjectId" : boat.Id});
        plotMapMarkerAppEvent.fire();
        console.log('lat ',lat);
	}
})