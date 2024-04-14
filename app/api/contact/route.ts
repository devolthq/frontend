"use server";
import { google } from 'googleapis';
import { NextRequest, NextResponse } from "next/server";

const gmail = google.gmail({
    version: 'v1',
    auth: process.env.GMAIL_API_KEY
});

interface Data {
    name: string;
    email: string;
    message: string;
};

export async function POST(
  req: NextRequest,
  res: NextResponse
) {
  const data: Data = await req.json();
  console.log(data);

  const raw = Buffer.from(
    `Subject: ${data.name} - ${data.email}\r\n` +
    `To: marceloow147@gmail.com\r\n` +
    `From: devolt-email-service@driven-heading-420120.iam.gserviceaccount.com\r\n\r\n` + // ${data.email}
    `${data.message}`
  ).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');

  const response = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: raw
    }
  });

  console.log('Message Id: ', response.data.id);

  return Response.json({ message: "Message sent successfully!", data: data });
}