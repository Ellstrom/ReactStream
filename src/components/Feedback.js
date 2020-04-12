import React from 'react'
import { Row, Col } from "react-bootstrap";

const Feedback = () => (
    <div id="Feedback">
        <Row>
            <Col>
                <h1 className="titleText">Feedback</h1>
                <p className="feedbackText">Send feedback or improvement suggestions to <a href="mailto:ellstream44@hotmail.com">ellstream44@hotmail.com</a></p>
                <p className="feedbackText">For example, about:</p>
                <p className="feedbackText">&bull; Website layout</p>
                <p className="feedbackText">&bull; Youtube layout</p>
                <p className="feedbackText">&bull; Video content</p>
            </Col>
        </Row>
    </div>
)

export default Feedback;