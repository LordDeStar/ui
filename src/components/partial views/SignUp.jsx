import { Button, Form, Input, Typography } from "antd"
import { useDispatch } from "react-redux"
import { signUp } from "../../store/slices/userSlice"
export const SignUp = ()=>{
    const {Title, Text} = Typography
    const dispatch = useDispatch()
    const finish = (data)=>{
        dispatch(signUp(data))
    }
    return (
        <>
            <Form onFinish={finish}>
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
                        htmlType="submit"
                    >Sign Up</Button>
                </Form.Item>
            </Form>
        </>
    )
}