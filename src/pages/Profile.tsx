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
                <h1>IDA4 |</h1>
                <p>I am a BSIT student who has a passion for designing and dreams of becoming a web designer or front-end developer. I may be struggling this semester but I am determined to keep going and achieve my goals in the future</p>
                
                </Col>

                <Col md={5} className='text-center mt-4 mt-md-0'>
                <Image src={Face} roundedCircle style={{ width: '291px', height: '300px' }} />
                </Col>
            </Row>
        
    </Container>
        </>
    )
}
export default Profile