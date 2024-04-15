import process from "node:process";
const { PangeaConfig, AuthN, AuthNService } = require("pangea-node-sdk");

console.log("hello");


const token = process.env.AUTHN_DEFAULT_TOKEN;
export const pangeaConfig = new PangeaConfig({ domain: process.env.PANGEA_DOMAIN });

 const authNService = new AuthNService(token as string, pangeaConfig);

 export default authNService;