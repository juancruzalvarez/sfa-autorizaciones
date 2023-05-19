
const aut = [
    {   fechaCarga:'02/08/2023',
        estado:'pendiente',
    }
];

export const AttemptLogin = (mail, password) => {
    if(mail === 'doc@iosfa.gob.ar' && password === 'doc123') return {res:'success', role:'doctor'};
    if(mail === 'hernan.noya@iosfa.gob.ar' && password === '1234') return {res:'success', role:'carga'};
    return {res:'failure'};
}

export const GetAutorizacionesPendientes = () => {
    return aut.filter(auto.estado == 'pendiente');
}