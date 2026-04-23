import "./faq.css"
import { useState } from "react";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I place an order for my photobook?",
      answer:
        "Simply choose your preferred template, select the number of pages, upload your photos, fill in your details, and place your order. Our team will handle the rest professionally."
    },
    {
      question: "Can I upload multiple photos for one album?",
      answer:
        "Yes, you can upload multiple photos depending on your selected package and page count. We recommend uploading high-quality images for the best print results."
    },
    {
      question: "Do I get a preview before printing?",
      answer:
        "Yes, we provide a final design preview before printing so you can review and approve your photobook before production starts."
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 5 to 10 working days depending on customization, printing process, and delivery location."
    },
    {
      question: "Is payment fully secure?",
      answer:
        "Yes, all payments are securely processed and we provide trusted payment methods for a safe ordering experience."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Everything you need to know about your personalized Memora
          photobook experience.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;