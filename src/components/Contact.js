import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    nameComplete: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    let formErrors = {};

    if (!formDetails.nameComplete.trim()) {
      formErrors.nameComplete = "Name is required.";
    }

    if (!formDetails.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(formDetails.email)) {
      formErrors.email = "Invalid email address.";
    }

    if (!formDetails.phone.trim()) {
      formErrors.phone = "Phone is required.";
    } else if (formDetails.phone.replace(/\D/g, "").length < 10) {
      formErrors.phone = "Phone number is too short.";
    }

    if (!formDetails.message.trim()) {
      formErrors.message = "Message is required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
    setErrors({ ...errors, [category]: null }); // limpa erro ao digitar
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    if (!validateForm()) {
      setStatus({ success: false, message: "Please fix the errors above." });
      setButtonText("Enviar");
      return;
    }

    const phoneNumber = "5551983117180"; // <- Altere aqui

    const messageText =
      `*Novo contato via formulário*\n\n` +
      `*Nome:* ${formDetails.nameComplete}\n` +
      `*Email:* ${formDetails.email}\n` +
      `*Telefone:* ${formDetails.phone}\n` +
      `*Mensagem:* ${formDetails.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setFormDetails(formInitialDetails);
    setStatus({ success: true, message: "Mensagem enviada via WhatsApp!" });
    setButtonText("Enviar");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col> */}
          <Col md={12}>
            <h2 className="text-center">Vamos Conversar!!</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12} className="px-1">
                  <input
                    type="text"
                    value={formDetails.nameComplete}
                    placeholder="Nome Completo"
                    onChange={(e) =>
                      onFormUpdate("nameComplete", e.target.value)
                    }
                    className={errors.nameComplete ? "is-invalid" : ""}
                  />
                  {errors.nameComplete && (
                    <small className="text-danger">{errors.nameComplete}</small>
                  )}
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Seu Melhor Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    className={errors.email ? "is-invalid" : ""}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="(xx) 98765-4321"
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length > 11) value = value.slice(0, 11);
                      let masked = value
                        .replace(/^(\d{2})(\d)/, "($1) $2")
                        .replace(/(\d{5})(\d)/, "$1-$2");
                      onFormUpdate("phone", masked);
                    }}
                    className={errors.phone ? "is-invalid" : ""}
                  />
                </Col>

                <Col sm={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Sua mensagem aqui..."
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className={errors.message ? "is-invalid" : ""}
                  ></textarea>
                  {errors.message && (
                    <small className="text-danger">{errors.message}</small>
                  )}
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success ? "text-success" : "text-danger"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
