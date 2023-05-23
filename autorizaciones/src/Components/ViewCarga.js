import {Input, Upload, Button} from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

export const ViewCarga = () => {
    return (
        <div>
            <div style={{paddingBottom:'0.2em', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <Paragraph style={{display:'inline',paddingRight:'0.5em'}}>Nombre afiliado:</Paragraph>
                <Input size = 'small' style={{display:'inline', width:'30vw', minWidth:'18em'}} />
            </div>
            <div style={{paddingBottom:'0.2em', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <Paragraph style={{display:'inline',paddingRight:'0.5em'}}>DNI:</Paragraph>
                <Input size = 'small' type = 'password' style={{display:'inline', width:'30vw', minWidth:'18em'}} />
            </div>
            <div style={{paddingBottom:'0.2em', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <Paragraph style={{display:'inline',paddingRight:'0.5em'}}>Nro de Historia clinica:</Paragraph>
                <Input size = 'small' type = 'password' style={{display:'inline', width:'30vw', minWidth:'18em'}} />
            </div>
            <div style={{paddingBottom:'0.2em', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <Paragraph style={{display:'inline',paddingRight:'0.5em'}}>Ordenes a autorizar:</Paragraph>
                <Upload size = 'small' style={{display:'inline', width:'30vw', minWidth:'18em'}} />
            </div>
            <div style={{paddingBottom:'0.2em', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <Paragraph style={{display:'inline',paddingRight:'0.5em'}}>Documentacion adicional:</Paragraph>
                <Upload size = 'small' style={{display:'inline', width:'30vw', minWidth:'18em'}} />
            </div>
            <div style={{paddingBottom:'0.2em'}}>

                <Button style={{float:'right'}} size= 'small' type='primary' onClick = {()=>{}}>Cargar</Button>

            </div>

        </div>
    );
}