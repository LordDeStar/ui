import { Button, Card, Typography } from "antd"
import { useNavigate } from "react-router-dom"
const {Text} = Typography
export const ProjectItem = (props)=>{
  const navigate = useNavigate()
  return (
    <Card className="item" size="small" title={props.title}>
      <p>{props.description}</p>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <Button
        type="primary"
        onClick={()=>{navigate('/editor')}}
        >Open</Button>
      </div>
    </Card>
  )
}