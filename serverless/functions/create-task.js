//sample get request for testing 
//https://xxx.twil.io/create-task?name=Richie&crmid=101&from=%2B447397321171&channel=webform&formOption=Renewal&formDetails=I%20want%20to%20talk%20about%20my%20renewal&timeToContact=Now


exports.handler = async function(context, event, callback) {
    
    //const client = context.getTwilioClient();
    const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

    const details = {
        name: event.name, 
        crmid: event.crmid, 
        from: event.from,
        channel: event.channel,
        formOption: event.formOption,
        formDetails: event.formDetails,
        timeToContact: event.timeToContact
    }

    const response = new Twilio.Response();

    // Set the CORS headers to allow Flex to make an error-free HTTP request to this Function
    response.appendHeader('Access-Control-Allow-Origin', '*');
    response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.appendHeader('Content-Type', 'application/json');
    
    const request = await createTask( client, process.env.WORKSPACE_SID, process.env.WORKFLOW_SID, details).then( function (resp) {
        response.setStatusCode(200);
        var data = resp;
        if(typeof data !== 'undefined'){
            response.setBody(data);
        }
        //handle error
        else response.setBody(JSON.parse(`{"result": "error"}`));    
        });
    callback(null, response);
};

async function createTask(client, workspaceSid, workflowSid, details) {
    const request = await client.taskrouter.v1.workspaces(workspaceSid)
                    .tasks
                    .create({attributes: JSON.stringify({
                    name: details.name,
                    crmid: details.crmid,
                    from: details.from,
                    channel: details.channel,
                    formOption: details.formOption,
                    formDetails: details.formDetails,
                    timeToContact: details.timeToContact
                    }), workflowSid: workflowSid})
                    .then(task => {
                        console.log(task.sid);
                        return task;
                    });
    return request;
}