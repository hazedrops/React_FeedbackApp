import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card className="about">
      <h1>About This Project</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, nihil odio doloremque voluptas voluptatum ullam ratione eos ea expedita velit.</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link 
        to="/">Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
