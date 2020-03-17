const express = require('express')
const bodyParser = require("body-parser");

const Credentials = require("uport-credentials").Credentials; // const { Credentials } = require('uport-credentials');
const RPC_URL = "https://mainnet.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c";

const app = express()
app.use(bodyParser.json());
//console.log(Credentials.createIdentity()); 

//setup Credentials object with newly created application identity.
const credentialsDmeo = new Credentials({
    appName: 'Login Example',
    did: 'did:ethr:0x8bf97e8e7edc246454d89386e7bdcea5b091e775',
    privateKey: 'abfc7c3b671cd12c0e537f115838f0a7879014d6e4e46c734520ec2ea5adfcd9',
    ethrConfig: {
        rpcUrl: RPC_URL
    }
})
console.log('Credentials:', credentialsDmeo); 

//const ISSUERS = JSON.parse(process.env.ISSUERS);

// const getCredentials = (serviceId) => {
//   if(!ISSUERS[serviceId])
//     throw new Error("Invalid serviceId");
//   return new Credentials({
//     did: ISSUERS[serviceId].did,
//     privateKey: ISSUERS[serviceId].key,
//     ethrConfig: {
//       rpcUrl: RPC_URL
//     }
//   });
// }

app.get("/api/ping", (req, res) => {
    res.send("OK");
});

// app.post("/api/request_disclosure", async (req, res) => {
//     const {
//       serviceId,
//       requested=["name"],
//       verified=[],
//       notifications=false,
//       callbackUrl,
//       expiresIn=600
//     } = req.body;
//     const credentials = getCredentials(serviceId);
//     const jwt = await credentials.createDisclosureRequest({
//       requested,
//       verified,
//       notifications,
//       callbackUrl,
//       accountType: "none",
//       vc: ISSUERS[serviceId].vc
//     }, expiresIn);
//     res.json({ jwt });
// });

app.get('/', (req, res) => res.send('Hello world!'))

const port = process.env.PORT || 3000
app.listen(port, () => 
    console.log(`Server is listening on port ${port}.`)
)