import { Button, Card, Typography } from "antd"

const {Text} = Typography
export const ProjectItem = (props)=>{
  return (
    <Card className="item" size="small" title={props.title}>
      <p>{props.description}</p>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <Button
        type="primary"
        >Open</Button>
      </div>
    </Card>
  )
}