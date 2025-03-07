"use strict";
(() => {
var exports = {};
exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 6810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID;
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed"
        });
    }
    try {
        const { firstname , lastname , email , phone , city , qualification  } = req.body;
        // Build HubSpot fields
        const payload = {
            fields: [
                {
                    name: "firstname",
                    value: firstname
                },
                {
                    name: "lastname",
                    value: lastname
                },
                {
                    name: "email",
                    value: email
                },
                {
                    name: "phone",
                    value: phone
                },
                {
                    name: "city",
                    value: city
                },
                {
                    name: "qualification",
                    value: qualification
                }
            ]
        };
        const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
        const hubspotResponse = await fetch(hubspotUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`
            },
            body: JSON.stringify(payload)
        });
        const data = await hubspotResponse.json();
        if (!hubspotResponse.ok) {
            return res.status(hubspotResponse.status).json({
                message: "HubSpot API Error",
                error: data
            });
        }
        return res.status(200).json({
            message: "Form submitted successfully!",
            data
        });
    } catch (error) {
        console.error("HubSpot error:", error);
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6810));
module.exports = __webpack_exports__;

})();