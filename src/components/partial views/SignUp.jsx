import { Button, Form, Input, Typography } from "antd"

export const SignUp = ()=>{
    const {Title, Text} = Typography
    return (
        <>
            <Form>
                <Form.Item>
                    <Title level={4}>Please provide your email address and phone number. </Title>
                    <Text>We will contact you and then generate a key.</Text>
                </Form.Item>
                <Form.Item name="phone" rules={[{required: true}]}>
                    <Input placeholder="Input your phone number..."/>
                </Form.Item>
                <Form.Item name="email" rules={[{required: true}]}>
                    <Input placeholder="Input your email..."/>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                    >Sign Up</Button>
                </Form.Item>
            </Form>
        </>
    )
}