
import style from "../styles/editor.css"
import { Row, Col } from "antd"
import { ObjectHierarhy } from "./partial views/ObjectHierarhy";
export const Editor = ({projectId}) =>{
    return (
        <div>
            <Row>
                <Col span={24}>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <ObjectHierarhy />
                </Col>
                <Col span={12}>
                </Col>
                <Col span={6}>
                </Col>
            </Row>
            <Row>
                <Col span={24}></Col>
            </Row>
        </div>
    );
}