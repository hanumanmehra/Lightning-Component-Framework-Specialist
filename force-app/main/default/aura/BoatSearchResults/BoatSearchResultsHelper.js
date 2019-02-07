({
    onSearch : function(component, event, helper) {
        console.log('In Helper');
        var action=component.get('c.getBoats');
         action.setParam({"boatTypeId":''});
        action.setCallback(this,function(response) {
            if(response.getState() === 'SUCCESS')
            {
                var boatslist = response.getReturnValue();
                component.set("v.boats",boatslist);
            }
        });
        $A.enqueueAction(action);
    }
})