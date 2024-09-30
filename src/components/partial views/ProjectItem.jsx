import { Button, Card } from "antd"
export const ProjectItem = (props)=>{
  return (
    <Card className="item" size="small" title={props.title}>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <Button
        type="primary"
        >Open</Button>
      </div>
    </Card>
  )
}