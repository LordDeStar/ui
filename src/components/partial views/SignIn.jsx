import { Button, Form, Input } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../../store/slices/userSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
export const SignIn = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.current)
    const finish = async (data)=>{
        dispatch(signIn(data))
    }
    useEffect(()=>{
        if (user){
            navigate('/projects')
        }
    }, [user])
    return (
        <>
            <Form onFinish={finish}>
                <Form.Item name="email" rules={[{required: true}]}>
                    <Input placeholder="Input your email..."/>
                </Form.Item>
                <Form.Item name="key" rules={[{required: true}]}>
                    <Input placeholder="Input your key..."/>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >Sign In</Button>
                </Form.Item>
            </Form>
        </>
    );
}