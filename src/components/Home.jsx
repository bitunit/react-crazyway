import Button from "./Button"
import phone from "../assets/phone.png"

const Home = () => {
  return (
    <div id="home" className="home">
      <h1>We are creative agency</h1>
      <img src={phone} alt="phone" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque reiciendis cum, sunt consequuntur voluptatibus incidunt neque minus repellendus fuga hic accusantium, tempora facilis vitae voluptatum totam magnam magni quisquam repellat!</p>
      <Button/>
    </div>
  )
}

export default Home