import { Client } from "pg";

const client = new Client({
  user: "temp_owner",
  password: "npg_3MGFWZAKN0uX",
  host: "ep-orange-mouse-a54rv947-pooler.us-east-2.aws.neon.tech",
  database: "temp",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect(function (err) {
  if (err) throw err;
  console.log("🎉 Database Connected!");
});

client.query(
  "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))",
  function (err, res) {
    if (err) throw err;
    console.log("🎉 Table created!");
  }
);

// const router = express.Router();

// router.post("/auth/register", async (req, res) => {
//     const { name, email, password } = req.body;
  
//     const response = await client.query(
//       "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
//       [name, email, password]
//     );
  
//     console.log(response);
  
//     res.send("✅ user registered successfully");
// });
  
// router.get("/u/:id", async (req, res) => {
// const { id } = req.params;
// const response = await client.query("SELECT * FROM users WHERE id = $1", [id]);
// res.send(response.rows);
// });

// router.delete("/db/drop/users", async (req, res) => {
// const response = await client.query("DROP TABLE users");
// res.send("🚨 users table dropped");
// });

module.exports = client;