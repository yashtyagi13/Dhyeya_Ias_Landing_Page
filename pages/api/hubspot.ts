import { NextApiRequest, NextApiResponse } from "next";

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      city,
      qualification
    } = req.body;

    // Build HubSpot fields
    const payload = {
      fields: [
        { name: "firstname", value: firstname },
        { name: "lastname", value: lastname },
        { name: "email", value: email },
        { name: "phone", value: phone },
        { name: "city", value: city },
        { name: "qualification", value: qualification }
           ]
      // optional context, pageUri, pageName, etc.
    };

    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

    const hubspotResponse = await fetch(hubspotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await hubspotResponse.json();
    if (!hubspotResponse.ok) {
      return res.status(hubspotResponse.status).json({ message: "HubSpot API Error", error: data });
    }

    return res.status(200).json({ message: "Form submitted successfully!", data });
  } catch (error: any) {
    console.error("HubSpot error:", error);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
}
