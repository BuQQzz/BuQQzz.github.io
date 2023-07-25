const dialogflow = require('dialogflow');

const projectId = "shining-booth-393816";
const agentId = "ddcdabe6-710a-4e5d-a793-66cbec1cbedf";

const session = dialogflow.newSession({
  projectId: projectId,
  agentId: agentId
});

session.on('message', function(message) {
  console.log(message);
});

dialogflow.webhook({
  projectId: projectId,
  agentId: agentId,
  webhookPath: '/webhook'
});