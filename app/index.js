const express = require('express');
const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");

const app = express();
const port = process.env.PORT || 3000;

const ssmClient = new SSMClient({ region: process.env.AWS_REGION || 'us-east-1' });

async function getSecret() {
  try {
    const command = new GetParameterCommand({
      Name: "/takehome/SECRET_MESSAGE",
      WithDecryption: true
    });
    const response = await ssmClient.send(command);
    return response.Parameter.Value;
  } catch (err) {
    console.error("Error fetching secret from SSM:", err);
    return "shh";
  }
}

app.get('/', async (req, res) => {
  const secret = await getSecret();
  res.send(`hello_world ${secret}\n`);
});

app.get('/healthz', (req, res) => {
  res.status(200).send('ok\n');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
