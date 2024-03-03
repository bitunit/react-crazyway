import Button from './Button'
import laptop from "../assets/laptop.png"

const About = () => {
  return (
    <div id="about">
      <h2>Who we are</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus tempore delectus amet enim quo nobis qui illum! Necessitatibus molestias cumque recusandae repudiandae repellat. Aspernatur perspiciatis doloribus sunt omnis ullam?</p>
      <Button />
      <img src={laptop} alt="laptop" />
    </div>
  )
}

export default About