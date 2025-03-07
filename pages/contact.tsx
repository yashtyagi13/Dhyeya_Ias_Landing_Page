"use client";

import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/Home.module.css"; // Using the same styles as UDAAN section

/** 
 * Adjust these field names to match your HubSpot form's internal property names.
 * For example, if your HubSpot form uses "highest_qualification" instead of "qualification", 
 * rename "qualification" here and in the fetch payload.
 */
type ContactFormType = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  qualification: string;
};

export default function Contact() {
  const [contactForm, setContactForm] = useState<ContactFormType>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    qualification: "",
  });

  // Optional: Track submitting state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form data to /api/hubspot
  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // POST to the same /api/hubspot route used by your Udaan form
      const response = await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
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
        qualification: "",
      });
    } catch (error: any) {
      console.error("Submission Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* CONTACT US SECTION (based on UDAAN style) */}
      <section className={styles.udaanSection}>
        <div className={styles.udaanContainer}>
          {/* Left Side: Contact Form */}
          <motion.div
            className={styles.udaanLeft}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            <h2>Contact Us</h2>
            <form onSubmit={handleContactSubmit} className={styles.udaanForm}>
              <div className={styles.formRow}>
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  value={contactForm.firstname}
                  onChange={handleContactChange}
                />
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  value={contactForm.lastname}
                  onChange={handleContactChange}
                />
              </div>
              <div className={styles.formRow}>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                />
                <input
                  required
                  type="text"
                  placeholder="City"
                  name="city"
                  value={contactForm.city}
                  onChange={handleContactChange}
                />
              </div>
              <div className={styles.formRow}>
                <input
                  required
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                />
                <input
                  required
                  type="text"
                  placeholder="Highest Qualification"
                  name="qualification"
                  value={contactForm.qualification}
                  onChange={handleContactChange}
                />
              </div>
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>

          {/* Right Side: Info/Prospectus */}
          <motion.div
            className={styles.udaanRight}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            <h2>Join UDAAN & Get A Headstart</h2>
            <h3>After 12<sup>th</sup> Class! Limited Seats, Enroll Now!</h3>
            <p>
              Start your IAS journey today with <b>structured coaching, expert mentors, and real exam preparation strategies.</b>
              <br /><br />
              <b>Key Highlights:</b>
            </p>
            <ul className={styles.udaanHighlights}>
              <li>Focused mentorship for young aspirants</li>
              <li>Interactive sessions with top faculty</li>
              <li>Early start on essential IAS/UPSC subjects</li>
              <li>Hands-on projects & group discussions</li>
            </ul>
            <a
              href="https://48862667.fs1.hubspotusercontent-na1.net/hubfs/48862667/udaan-prospectus-2024%20(1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              Download Our Prospectus
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
