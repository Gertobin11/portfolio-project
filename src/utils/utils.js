import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const sendMail = async (values) => {
  await emailjs
    .send(
      "gertobindev",
      "portfolio123",
      { name: values.name, email: values.email, message: values.message },
      "user_t7Eqsr6kbYRM3u1cedtBW"
    )
    .then(
      (result) => {
        toast.success(`${values.name} your message has been successfully sent`);
        console.log(result);
      },
      (error) => {
        toast.error(
          `{${values.name}, sorry but an error occurred, please try again}`
        );
        console.log(error.text);
      }
    );
};
