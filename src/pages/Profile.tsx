import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Face from '../images/Face.jpg';

function Profile() {
    return(
        <>
        <Container className='mt-5'>
            <Row className='align-items-center'>
                <Col md={7} className='text-center text-md-start'>

                <h1>HELLO! I'M SANDARA</h1>
                <h1>WED DESIGNER |</h1>
                <p>I am a passionate web designer who enjoys creating simple, clean, and responsive websites. I like learning new technologies and techniques to improve my skills.</p>
                
                </Col>

                <Col md={5} className='text-center mt-4 mt-md-0'>
                <Image src={Face} roundedCircle style={{ width: '231px', height: '240px' }} />
                </Col>
            </Row>
        
    </Container>
        </>
    )
}
export default Profile