import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export const Login = ({onLogin}) => {
    useState[datos, setDatos] = useState({mail:'', contraseña:''});
    return (
    <div >

        <div style={{padding:'1em'}}>
            <TextField style={{width:'50vw'}}id="standard-basic" label="Mail" variant="standard" />
            </div>
        <div style={{padding:'1em'}}>

            <TextField style={{width:'50vw'}}id="standard-basic" label="Contraseña" variant="standard" type='password'/>
        </div>
        <Button onClick = {()=>{onLogin(datos)}}>Iniciar Sesion</Button>
    </div>

    );
}