import { Container, Row } from "react-bootstrap";
import Panel from "./Panel.jsx"
import data from "../../data/gallery.json";

export default function List() {
    return (
        <Container>
            <Row className="cd-flex justify-content-center">
                {
                    data.map ((element, index) => {
                        return (
                            <Panel element={element}/> 
                      )
                    })
                };
            </Row>
        </Container>
    );
};