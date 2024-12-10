import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://[YOUR_APPWRITE_ENDPOINT]") // replace with actual Appwrite endpoint
  .setProject("[YOUR_PROJECT_ID]"); // replace with actual project ID

const account = new Account(client);

async function testSession() {
  try {
    const session = await account.createEmailSession("test@example.com", "password123");
    console.log("Session created:", session);
  } catch (error) {
    console.error("Error creating session:", error.message);
  }
}

testSession();
