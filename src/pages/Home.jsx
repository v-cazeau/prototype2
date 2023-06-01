import { Container, Row, Col } from "react-bootstrap"; 
import Gallery from "../components/Gallery"
import AppLayout from "../layout/AppLayout.jsx"; 

export default function Home() {
    return (
        <AppLayout>
            <Container className="my-5"> 
                <Row>
                    <Col>
                        <h2>Home</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md= {11} lg={9} xl={8}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, hic quod consequuntur optio aspernatur, sit voluptas quisquam possimus velit cumque eos eum. Illo, nesciunt cumque necessitatibus ad ullam repellendus placeat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, hic quod consequuntur optio aspernatur, sit voluptas quisquam possimus velit cumque eos eum. Illo, nesciunt cumque necessitatibus ad ullam repellendus placeat.</p>
                    </Col>
                </Row>
            </Container>
            <Gallery />
        </AppLayout>
    )
}