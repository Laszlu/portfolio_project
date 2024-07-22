import "./Contact.css"
import { Box, Typography } from "@mui/material"
import React, { FormEvent } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [stateMessage, setStateMessage] = React.useState("")

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    console.log(e)
    e.preventDefault()
    setIsSubmitting(true)
    emailjs
      .sendForm(
        "serv_leonardvictorluis",
        "request_protfolio",
        "#contact-form",
        { publicKey: "0U7UwoPPlCjv2GSUi" }
      )
      .then(
        (result) => {
          console.log(`Result: ${result.text}`)
          setStateMessage("Request sent ✓")
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage("")
          }, 5000) // hide message after 5 seconds
        },
        (error) => {
          console.log(`Error: ${error}`)
          setStateMessage(error)
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage("")
          }, 5000) // hide message after 5 seconds
        }
      )

    // Clears the form after sending the email
    e.currentTarget.reset()
  }

  return (
    <Box className={"contact-main"}>
      <Box className={"contact-center"}>
        <Typography variant={"h5"}>
          contact us here or at contact@leonardvictorluis.com
        </Typography>
        <Box>
          <form id={"contact-form"} onSubmit={sendEmail}>
            <div>
              <input type="text" name="user_name" placeholder={"name"} />
            </div>
            <div>
              <input type="text" name="user_email" placeholder={"email"} />
            </div>
            <div>
              <textarea name="message" placeholder={"message"} />
            </div>
            <div>
              <input type="submit" value="submit" disabled={isSubmitting} />
              {<p>{stateMessage}</p>}
            </div>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact