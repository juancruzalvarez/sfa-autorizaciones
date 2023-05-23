import {Input, Typography} from 'antd';
import {Button} from 'antd';
import { useState } from 'react';
import logo from './../descarga.png';
import Paragraph from 'antd/es/typography/Paragraph';
export const Login = ({onLogin}) => {
    const [datos, setDatos] = useState({mail:'', contraseña:''});
    return (
    <div >
        <img src={logo} style={{width:'30vw', minWidth:'18em', margin:0, padding:'1em', paddingBottom:'2em'}}/>
        <div style={{paddingBottom:'0.2em', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <Paragraph style={{display:'inline',paddingRight:'0.5em'}}>Email</Paragraph>
            <Input size = 'small' style={{display:'inline', width:'30vw', minWidth:'18em'}} />
        </div>
        <div style={{paddingBottom:'0.2em', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <Paragraph type = 'p'style={{display:'inline',paddingRight:'0.5em'}}>Contraseña</Paragraph>
            <Input size = 'small' type = 'password' style={{display:'inline', width:'30vw', minWidth:'18em'}} />
        </div>
        <div style={{paddingBottom:'0.2em'}}>

        <Button style={{float:'right'}} size= 'small' type='primary' onClick = {()=>{onLogin(datos)}}>Iniciar Sesion</Button>

        </div>
    </div>

    );
}