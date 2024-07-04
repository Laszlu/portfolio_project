import "./Contact.css"
import { Box, Typography } from "@mui/material"
import React, { FormEvent } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [stateMessage, setStateMessage] = React.useState("");

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    console.log(e)
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_portfolio_lny",
        "request_protfolio",
        "#contact-form",
        {publicKey: "0U7UwoPPlCjv2GSUi"}
      )
      .then(
        (result) => {
          console.log(`Result: ${result.text}`)
          setStateMessage("message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("");
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log(`Error: ${error}`)
          setStateMessage(error);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("");
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.currentTarget.reset()
  }

  return(
    <Box className={"contact-main"}>
      <Typography variant={"h3"}>
        Contact
      </Typography>
      <form id={"contact-form"} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="user_email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <div>
          <input type="submit" value="Submit" disabled={isSubmitting} />
          {<p>{stateMessage}</p>}
        </div>
      </form>
    </Box>
  )
}

export default Contact;