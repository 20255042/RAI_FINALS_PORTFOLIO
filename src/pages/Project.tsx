import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Proj1 from '../images/Proj1.png';
import Proj2 from '../images/Proj2.png';
function Project() {
    return(
        <>
        <h1>MY PROJECTS</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Proj1} />
      <Card.Body>
        <Card.Title>Gaming Adventure</Card.Title>
        <Card.Text>
          This is where I made a gaming wedsite introducing Genshin Impact. I used HTML, CSS, and JavaScript to create a visually appealing and interactive website that showcases the game's features, characters, and gameplay mechanics.
        </Card.Text>
      </Card.Body>
    </Card>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Proj2} />
      <Card.Body>
        <Card.Title>User Registration Form</Card.Title>
        <Card.Text>
          In this website, i created a user registration form using HTML, CSS, and JavaScript. The form includes fields for username, email, password, and confirm password. I implemented client-side validation to ensure that users enter valid information before submitting the form.
        </Card.Text>
      </Card.Body>
    </Card>
        </>
    )
}
export default Project