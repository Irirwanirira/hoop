import {Client, Account , Databases} from "react-native-appwrite"


const client = new Client();
client
    // .setEndpoint('https://cloud.appwrite.io/v1')
    // .setProject('66267e925bd50045f82b');
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66267df155ecc331dbc8")
    


const databases = new Databases(client);

const account = new Account(client)

export { databases, account}