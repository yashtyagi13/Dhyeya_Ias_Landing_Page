"use client";

import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Contact from "./contact";

/** Floating WhatsApp Button (Optional) */
const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/917526006701?text=Hello%2C%20I%20want%20Information%20About%20Udaan%20Program"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <Image
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        width={50}
        height={50}
      />
    </a>
  );
};

/** Type for Form Data (Use 'highest_qualification' to match HubSpot) */
type UdaanFormType = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  qualification: string; // <-- Important for HubSpot
};

export default function Home() {
  /** ------------- STATE ------------- */
  const [udaanForm, setUdaanForm] = useState<UdaanFormType>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    qualification: "", // Field name must match your HubSpot required field
    
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /** ------------- HANDLERS ------------- */
  const handleUdaanChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUdaanForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form data to /api/hubspot
  const handleUdaanSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // disable submit button while sending

    try {
      // Send data to Next.js API route
      const response = await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(udaanForm),
      });

      const data = await response.json();
      console.log("HubSpot API Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      alert("Form submitted successfully!");

      // Reset form fields
      setUdaanForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        city:"",
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
      {/* ------------------------------------------------------------------
          1) HERO SECTION
      ------------------------------------------------------------------ */}
      <Contact/>
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <h1>Stop Dreaming, Start Achieving</h1>
          <h2>Crack UPSC & UPPSC with Us!</h2>
          <p>
            Join 5,000+ successful candidates who achieved their dreams
            with Dhyeya IAS. Your path to becoming an IAS or PCS officer
            begins here. This is the ultimate gateway to turn your aspirations
            into reality—backed by comprehensive study materials, expert
            mentorship, and proven results.
          </p>

          <div className="flex justify-center mt-6">
            <Link href="/contact">
              <button className={styles.ctaButton}>
                Book Your Free Counselling
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------
          2) UDAAN REGISTRATION SECTION
      ------------------------------------------------------------------ */}
     
      {/* ------------------------------------------------------------------
          3) 3-YEAR COURSE STRUCTURE
      ------------------------------------------------------------------ */}
      <section className={styles.courseStructure}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          3 - Year Course Structure
        </motion.h2>
        <motion.p
          className={styles.courseIntro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          Our unique 3-Year roadmap ensures that students progress from foundational
          concepts to specialized training—ideal for achieving top ranks in
          UPSC/State PSC exams.
        </motion.p>
        <motion.div
          className={styles.courseCards}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <div className={styles.courseCard}>
            <h3>1st Year – Foundation Level</h3>
            <p>
              Builds conceptual clarity in subjects like History, Geography,
              Economy, and Polity. Encourages critical thinking and reading habits.
              <br />
              <strong>Includes:</strong>
            </p>
            <ul>
              <li>NCERT-based modules</li>
              <li>Weekly quizzes & group discussions</li>
              <li>Mentorship sessions</li>
            </ul>
          </div>
          <div className={styles.courseCard}>
            <h3>2nd Year – Take Off Level</h3>
            <p>
              Deepens understanding of General Studies with a multi-dimensional
              approach. Prepares students for ICS, PCS, and Assistant Commandant.
              <br />
              <strong>Focus Areas:</strong>
            </p>
            <ul>
              <li>Advanced GS topics & optional subject selection</li>
              <li>Case studies & writing practice</li>
              <li>Personality development workshops</li>
            </ul>
          </div>
          <div className={styles.courseCard}>
            <h3>3rd Year – Selection Level</h3>
            <p>
              Final preparation for IAS with specialized focus on General Studies &
              optional subjects. Includes rigorous answer writing, interview training,
              and final assessments.
              <br />
              <strong>Highlights:</strong>
            </p>
            <ul>
              <li>Test series & peer review</li>
              <li>Interview panels with experts</li>
              <li>All-India mock exams</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------
          4) IAS OLYMPIAD & ENTRANCE EXAM
      ------------------------------------------------------------------ */}
      <section className={styles.examInstructions}>
        <motion.div
          className={styles.instructionBox}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <h3>IAS Olympiad: Exam Instructions General</h3>
          <p>
            A stepping stone for budding IAS aspirants! The IAS Olympiad tests your
            fundamental knowledge in key areas and offers scholarships for meritorious
            students.
          </p>
          <ul>
            <li>Qualify the IAS OLYMPIAD Exam to be eligible for our 3-Year Programme.</li>
            <li>Scholarships based on rank & score.</li>
            <li>Exam pattern: MCQs & short answers.</li>
          </ul>
        </motion.div>
        <motion.div
          className={styles.instructionBox}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <h3>About Entrance Exam</h3>
          <p>
            Our Entrance Exam is designed to assess your readiness and identify the
            best-suited courses for your level. Adherence to guidelines is mandatory.
          </p>
          <ul>
            <li>Arrive 30 minutes early for verification.</li>
            <li>Seats must be taken 25 minutes before the exam.</li>
            <li>No entry after the official start.</li>
            <li>Bring valid ID and admit card.</li>
          </ul>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------
          5) DHYEYA ACHIEVERS OF CSE
      ------------------------------------------------------------------ */}
      <section className={styles.achieversSection}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          Dhyeya Achievers Of CSE
        </motion.h2>
        <p className={styles.achieversIntro}>
          Our alumni consistently secure top ranks across UPSC and State PSC
          examinations. Meet a few of our proud achievers:
        </p>
        <div className={styles.achieversGrid}>
          <motion.div
            className={styles.achieverCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/shivani.jpg"
              alt="Shivani Goyal"
              className={styles.achieverImage}
            />
            <h3>Shivani Goyal</h3>
            <p className={styles.achieverRank}>AIR 9, UPSC</p>
            <p className={styles.achieverQuote}>
              “Dhyeya’s mentors guided me every step of the way!”
            </p>
          </motion.div>
          <motion.div
            className={styles.achieverCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/kanishak.jpg"
              alt="Kanishak Kataria"
              className={styles.achieverImage}
            />
            <h3>Kanishak Kataria</h3>
            <p className={styles.achieverRank}>AIR 1, UPSC</p>
            <p className={styles.achieverQuote}>
              “Their mock tests & answer reviews were a game-changer.”
            </p>
          </motion.div>
          <motion.div
            className={styles.achieverCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/saumya.jpg"
              alt="Saumya Pandey"
              className={styles.achieverImage}
            />
            <h3>Saumya Pandey</h3>
            <p className={styles.achieverRank}>AIR 4, UPSC</p>
            <p className={styles.achieverQuote}>
              “The structured approach & dynamic classes kept me motivated.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6) EMBEDDED VIDEO SECTION
      ------------------------------------------------------------------ */}
      <section className={styles.videoSection}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          Join UDAAN – Your Path to IAS Success!
        </motion.h2>
        <p className={styles.videoText}>
          Watch this short clip to understand how UDAAN can give you an early
          advantage in the UPSC race. Hear from our faculty and toppers on how
          they cracked the code.
        </p>
        <div className={styles.videoContainer}>
          <iframe
            width="500"
            height="283"
            src="https://www.youtube.com/embed/KQg-rKkP2e0"
            title="Join UDAAN – Your Path to IAS Success!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7) WHY DHYEYA IAS
      ------------------------------------------------------------------ */}
      <section className={styles.whyDhyeya}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          Why 5,000+ IAS & PCS Officers Trust Dhyeya IAS?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
          className={styles.whyDhyeyaText}
        >
          We provide personalized study plans, expert guidance, and proven track
          records of success. Live classes, recorded lectures, and in-depth study
          materials to help you crack your exams. Our approach emphasizes{" "}
          <strong>conceptual clarity</strong>, <strong>critical analysis</strong>,
          and <strong>real-world application</strong>—making sure you’re fully prepared 
          for every stage of the journey.
        </motion.p>
        <motion.ul
          className={styles.whyDhyeyaPoints}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <li>Flexible Schedules: Weekend & weekday batches</li>
          <li>Expert Mentors: 10+ years of teaching experience</li>
          <li>Exclusive Study Materials & Practice Tests</li>
          <li>1:1 Counselling & Career Guidance</li>
        </motion.ul>
        <a
          href="https://wa.me/917526006701?text=Sir%2FMa%27am%2C%20I%20want%20personalized%20guidance%20(Udaan Program)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            className={styles.guideButton}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            Get Personalized Guide From Experts
          </motion.button>
        </a>
      </section>

      {/* ------------------------------------------------------------------
          8) MEET OUR TOPPERS
      ------------------------------------------------------------------ */}
      <section className={styles.toppersSection}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          Meet Our Toppers
        </motion.h2>
        <p className={styles.toppersIntro}>
          Year after year, our students secure top ranks in UPSC & State PSC
          exams. Below are some of our proud toppers:
        </p>
        <div className={styles.toppersGrid}>
          <motion.div
            className={styles.topperCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/toppers/shivani.jpg"
              alt="Shivani Goyal"
              className={styles.topperImage}
            />
            <h3>Shivani Goyal</h3>
            <p className={styles.topperRank}>AIR 21, UPSC</p>
          </motion.div>
          <motion.div
            className={styles.topperCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/toppers/priyanka.jpg"
              alt="Priyanka Niranjan"
              className={styles.topperImage}
            />
            <h3>Priyanka Niranjan</h3>
            <p className={styles.topperRank}>AIR 42, UPSC</p>
          </motion.div>
          <motion.div
            className={styles.topperCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/toppers/anuraj.jpg"
              alt="Anuraj Jain"
              className={styles.topperImage}
            />
            <h3>Anuraj Jain</h3>
            <p className={styles.topperRank}>AIR 58, PCS</p>
          </motion.div>
          <motion.div
            className={styles.topperCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/toppers/pari.jpg"
              alt="Pari Bishnoi"
              className={styles.topperImage}
            />
            <h3>Pari Bishnoi</h3>
            <p className={styles.topperRank}>AIR 75, UPSC</p>
          </motion.div>
          <motion.div
            className={styles.topperCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/toppers/vipin.jpg"
              alt="Vipin Dubay"
              className={styles.topperImage}
            />
            <h3>Vipin Dubay</h3>
            <p className={styles.topperRank}>AIR 108, UPSC</p>
          </motion.div>
          <motion.div
            className={styles.topperCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/toppers/zufishan.jpg"
              alt="Zufishan Haque"
              className={styles.topperImage}
            />
            <h3>Zufishan Haque</h3>
            <p className={styles.topperRank}>AIR 193, UPSC</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Dhyeya Educational Services Pvt.
          Ltd. | All Rights Reserved
        </p>
        <p>
          Plot No. A/213, Flat No. 201, 2nd Floor, Ansal Building, Mukherjee
          Nagar, New Delhi 110009 | +91-7503009030, 7891993500
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
