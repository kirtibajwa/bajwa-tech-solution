import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("leads.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    project TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

export function createLead(lead) {
  const statement = db.prepare(`
    INSERT INTO leads (name, email, phone, message, project)
    VALUES (@name, @email, @phone, @message, @project)
  `);
  return statement.run(lead);
}

export default db;
