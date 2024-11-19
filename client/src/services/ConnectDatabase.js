// Include required dependencies
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";
import sql from "mssql";

// Authenticate to Azure
const credential = new DefaultAzureCredential();

// Create SecretClient
const vaultName = "abbas-sleiman-keyvault";
const url = `https://${vaultName}.vault.azure.net`;
const client = new SecretClient(url, credential);

async function connectToDatabase() {
  try {
    // Get connection string from Key Vault
    const secret = await client.getSecret("SqlConnectionStringMEntra");
    const connectionString = secret.value;

    // Connect to Azure SQL Database using mssql
    const pool = sql.connect(connectionString);

    console.log("Connected to Azure SQL Database successfully!");

    // Close the pool when done
    await pool.close();
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
}

connectToDatabase();

// Get secret
//const secret = await client.getSecret("sqlConnectionString");
