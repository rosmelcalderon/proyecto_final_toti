import { useNavigate } from 'react-router-dom'
import { useForm } from '../hook/useForm'
import '../styles/card.css'

export const LoginPage = () => {
    
    const navigate = useNavigate()
    
    {/*Aqui llamaremos el Use Form y validaremos los campos del formulario */}
        const {name, email, password, onInputChange, onResetForm} = useForm({
            name:'',
            email: '',
            password: '',
        })

        const onLogin = (e) => {
            e.preventDefault()

            navigate('/compras', {
            replace: true,
            state:{
                logged: true,
                name
            } 
            })

            onResetForm()
        }

    return (
        <>
            <form class="formulario" onSubmit={onLogin}>
                <fieldset>
                    <legend>Iniciar Sesion</legend>

                    <div class="contenedor-campos">

                        <div class="campo">
                            <label htmlFor='name'>Nombre</label>
                            <input class="input-text" type="text" name='name' id='name' value={name} onChange={onInputChange} required autoComplete='off'/> 
                        </div>
                        <div class="campo">
                            <label htmlFor='email'>Correo</label>
                            <input class="input-text" type="email" name='email' id='email' value={email} onChange={onInputChange} required autoComplete='off' /> 
                        </div>
                
                        <div class="campo">
                            <label htmlFor='password'>Contraseña</label>
                            <input class="input-text" type="paassword" name='password' id='password' value={password} onChange={onInputChange} required autoComplete='off'  />
                        </div>
                    </div>

                    <div class="alinear-derecha flex">
                    <input class="boton w-sm-100" type="submit" value="Iniciar Sesion" />
                    </div>
                </fieldset>
            </form>

        </>
    )
}
