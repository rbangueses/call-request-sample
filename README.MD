This is a sample project that walks through delivering call requests to Twilio Flex as custom tasks. Note that it does not add a call back button to Twilio Flex, it just creates a task with the desired metadata that can then be used by other plugins to present such buttons.

The serverless folder includes a function used to create tasks. This function is invoked by the form in the SampleForm HTML page.

Make sure you deploy a secure function that only accepts call requests from your domain, and consider adding some type of basic authentication as well.

The function will require the following:

ACCOUNT_SID=ACxxx    //twilio account sid
AUTH_TOKEN=xxxxxx   //twilio account token
WORKSPACE_SID=WSxxxx //flex workspace
WORKFLOW_SID=WWxxxx //desired workflow

If you want to test this sample, make sure you edit the index.hrml file to point it to your serverless function. It's currently using a sample url: var url = 'https://xxxx.twil.io/create-task';

Here's how the form looks:
(https://github.com/rbangueses/call-request-sample/blob/main/sample-form.png?raw=true)

Modal after sending request:
(https://github.com/rbangueses/call-request-sample/blob/main/sample-modal.png?raw=true)

How Flex receives the interaction by default and how the attributes show up as task attributes:
(https://github.com/rbangueses/call-request-sample/blob/main/ootb-flex-custom-task.png?raw=true)

A Flex environment presenting data and a call back button:
(https://github.com/rbangueses/call-request-sample/blob/main/custom-flex-click%20to%20call.png?raw=true)