import { Button, Form, Input } from "antd";

export const SignIn = () =>{
    return (
        <>
            <Form>
                <Form.Item name="email" rules={[{required: true}]}>
                    <Input placeholder="Input your email..."/>
                </Form.Item>
                <Form.Item name="key" rules={[{required: true}]}>
                    <Input placeholder="Input your key..."/>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                    >Sign In</Button>
                </Form.Item>
            </Form>
        </>
    );
}