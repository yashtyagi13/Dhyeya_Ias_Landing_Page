exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"hero": "Home_hero__cwxAA",
	"heroContent": "Home_heroContent__x6iHE",
	"ctaButton": "Home_ctaButton___lkHe",
	"udaanSection": "Home_udaanSection__fqErt",
	"udaanContainer": "Home_udaanContainer__1ZFS3",
	"udaanLeft": "Home_udaanLeft__2wNDU",
	"udaanRight": "Home_udaanRight__j7i68",
	"udaanHighlights": "Home_udaanHighlights__XXIf_",
	"whatsappButton": "Home_whatsappButton__n2pu0",
	"udaanForm": "Home_udaanForm__YLrxf",
	"formRow": "Home_formRow__sPsbR",
	"submitButton": "Home_submitButton__zVz66",
	"downloadButton": "Home_downloadButton__E5rjA",
	"courseStructure": "Home_courseStructure__Nx7Dt",
	"courseIntro": "Home_courseIntro___sDuI",
	"courseCards": "Home_courseCards__nugjf",
	"courseCard": "Home_courseCard__TP1wW",
	"examInstructions": "Home_examInstructions__VQP0J",
	"instructionBox": "Home_instructionBox__sl58y",
	"achieversSection": "Home_achieversSection__paRZT",
	"achieversIntro": "Home_achieversIntro__eWxHS",
	"achieversGrid": "Home_achieversGrid__PtAhd",
	"achieverCard": "Home_achieverCard__3G8cm",
	"achieverImage": "Home_achieverImage__q6j49",
	"achieverRank": "Home_achieverRank___37Sg",
	"achieverQuote": "Home_achieverQuote__Reuyx",
	"videoSection": "Home_videoSection__aBSnN",
	"videoText": "Home_videoText__HWA1I",
	"videoContainer": "Home_videoContainer__8PFB1",
	"whyDhyeya": "Home_whyDhyeya__IzYK7",
	"whyDhyeyaText": "Home_whyDhyeyaText__8f1_0",
	"whyDhyeyaPoints": "Home_whyDhyeyaPoints__UPjTV",
	"guideButton": "Home_guideButton__8PwZx",
	"toppersSection": "Home_toppersSection__ShvfK",
	"toppersIntro": "Home_toppersIntro__qwQpp",
	"toppersGrid": "Home_toppersGrid__uNn8n",
	"topperCard": "Home_topperCard__xbIWj",
	"topperImage": "Home_topperImage__9aWrT",
	"topperRank": "Home_topperRank__u3CVp",
	"footer": "Home_footer____T7K",
	"textArea": "Home_textArea__DGq1a"
};


/***/ }),

/***/ 9493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9399);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";



 // Using the same styles as UDAAN section
function Contact() {
    const [contactForm, setContactForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        city: "",
        qualification: ""
    });
    // Optional: Track submitting state
    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // Handle input changes
    const handleContactChange = (e)=>{
        const { name , value  } = e.target;
        setContactForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Submit form data to /api/hubspot
    const handleContactSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // POST to the same /api/hubspot route used by your Udaan form
            const response = await fetch("/api/hubspot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactForm)
            });
            const data = await response.json();
            console.log("HubSpot API Response:", data);
            if (!response.ok) {
                throw new Error(data.message || "Submission failed");
            }
            alert("Form submitted successfully!");
            // Reset form fields
            setContactForm({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                city: "",
                qualification: ""
            });
        } catch (error) {
            console.error("Submission Error:", error);
            alert(`Error: ${error.message}`);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().udaanSection),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().udaanContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().udaanLeft),
                        initial: {
                            opacity: 0,
                            x: -100
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1.2
                        },
                        viewport: {
                            once: false
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Contact Us"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleContactSubmit,
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().udaanForm),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                required: true,
                                                type: "text",
                                                placeholder: "First Name",
                                                name: "firstname",
                                                value: contactForm.firstname,
                                                onChange: handleContactChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                required: true,
                                                type: "text",
                                                placeholder: "Last Name",
                                                name: "lastname",
                                                value: contactForm.lastname,
                                                onChange: handleContactChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                required: true,
                                                type: "email",
                                                placeholder: "Email",
                                                name: "email",
                                                value: contactForm.email,
                                                onChange: handleContactChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                required: true,
                                                type: "text",
                                                placeholder: "City",
                                                name: "city",
                                                value: contactForm.city,
                                                onChange: handleContactChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                required: true,
                                                type: "text",
                                                placeholder: "Phone Number",
                                                name: "phone",
                                                value: contactForm.phone,
                                                onChange: handleContactChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                required: true,
                                                type: "text",
                                                placeholder: "Highest Qualification",
                                                name: "qualification",
                                                value: contactForm.qualification,
                                                onChange: handleContactChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().submitButton),
                                        disabled: isSubmitting,
                                        children: isSubmitting ? "Submitting..." : "Submit"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().udaanRight),
                        initial: {
                            opacity: 0,
                            x: 100
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1.2
                        },
                        viewport: {
                            once: false
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Join UDAAN & Get A Headstart"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                children: [
                                    "After 12",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                        children: "th"
                                    }),
                                    " Class! Limited Seats, Enroll Now!"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Start your IAS journey today with ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "structured coaching, expert mentors, and real exam preparation strategies."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Key Highlights:"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().udaanHighlights),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Focused mentorship for young aspirants"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Interactive sessions with top faculty"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Early start on essential IAS/UPSC subjects"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Hands-on projects & group discussions"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://48862667.fs1.hubspotusercontent-na1.net/hubfs/48862667/udaan-prospectus-2024%20(1).pdf",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().downloadButton),
                                children: "Download Our Prospectus"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;