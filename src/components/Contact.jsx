import Button from './Button'
import background from '../assets/background.png'

const Contact = () => {
  return (
    <div id="contact">
      <img src={background} alt="background" />
      <h2>How to find us</h2>
      <h3>Lorem ipsum dolor sit amet</h3>
      <h4>Email</h4>
      <p>email@gmail.com</p>
      <h4>Call Us!</h4>
      <p>+123 456 7890</p>
      <p>+123 456 7890</p>
      <h4>Address</h4>
      <p>123, Main Road, New City</p>
      <p>My Country 123456</p>
      <h3>Say hello!</h3>
      <section>
        <h2>Contact Us</h2>
        <form>
          <div>
            <label>Name</label>
            <input
              name="name"
              id="name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              id="email"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              name="phone"
              id="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
            ></textarea>
          </div>
          <Button />
        </form>
      </section>
    </div>
  )
}

export default Contact;