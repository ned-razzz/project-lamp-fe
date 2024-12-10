import { google } from "googleapis";
import fs from "fs";

// google service account api key json file load
const serviceAccount = JSON.parse(fs.readFileSync("~/keys/api_key.json", "utf-8"));

const auth = new google.auth.JWT(
  serviceAccount.client_email,
  undefined,
  serviceAccount.private_key,
  ["https://www.googleapis.com/auth/calendar"]
);

export const calendar = google.calendar({ version: "v3", auth });
