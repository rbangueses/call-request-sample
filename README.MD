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

Modal after sending request:

How Flex receives the interaction by default:

A Flex environment presenting data and a call back button: