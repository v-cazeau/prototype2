import { Container, Row, Col } from "react-bootstrap"; 
import AppLayout from "../layout/AppLayout.jsx"; 

export default function Error404() {
    return (
        <AppLayout>
            <Container> 
                <Row>
                    <Col>
                    <h2>Error</h2>
                    </Col>
                </Row>
            </Container>
        </AppLayout>
    )
}