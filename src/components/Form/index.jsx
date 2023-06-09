import React, { useEffect } from 'react'
import './Form.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineInfoCircle} from 'react-icons/ai'

function Form() {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [dirtyEmail, setDirtyEmail] = useState(false)
    const [dirtyPassword, setDirtyPassword] = useState(false)
    const [emailError, setEmailError] = useState('Логин не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const navigate = useNavigate()

    const [loginRules, setLoginRules] = useState(false)
    const [passwordRules, setPasswordRules] = useState(false)


    useEffect(()=>{
        if(emailError || passwordError){
            setFormValid(false)
            sessionStorage.setItem('loggedIn', 'false')
        } else{
            setFormValid(true)
        }
    },[emailError,passwordError])

    const emailHandler = (e) => {
        setEmailValue(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный логин ( требуется email )')
        } else {
            setEmailError('')
        }
    }


    const passwordHandler = (e) =>{
        setPasswordValue(e.target.value)
        const re = new RegExp('^[a-zA-Z0-9]+$')
        if(e.target.value.length === 0){
            setPasswordError('Пароль не может быть пустым')
        } else if(!re.test(e.target.value)){
            setPasswordError('Некорректный пароль') 
        } else if(e.target.value.length < 8){
            setPasswordError(`Минимальная длина пароля 8 символов, сейчас ${e.target.value.length}`)
        } else {
            setPasswordError('')
        }
    }
    

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setDirtyEmail(true)
                break;
        
            case 'password':
                setDirtyPassword(true)
                break;
        }
    }

    const addEmailErrorClass = () => {
        return (dirtyEmail && emailError) ? 'form__error-color' : ''
    }
    const addPasswordErrorClass = () => {
        return (dirtyPassword && passwordError) ? 'form__error-color' : ''
    }


    const navigateHandler = () => {
        formValid ? sessionStorage.setItem('loggedIn','true') : sessionStorage.setItem('loggedIn','false')
        const loggedIn = sessionStorage.getItem('loggedIn')
        if(loggedIn === 'true'){
            navigate('/Hotels')
        }
    }

  return (
    <div className='form-container'>
        <h1>Simple Hotel Check</h1>
        <form onSubmit={()=>navigateHandler()} className='form'>
            <div className='form__login-container'>
                <label>
                    <span className={`form__label-text ${addEmailErrorClass()}`}>Логин <AiOutlineInfoCircle onMouseOver={()=>setLoginRules(true)} onMouseLeave={()=>setLoginRules(false)} style={{color:'#9c9c9c'}}/></span>
                    <input className={`${addEmailErrorClass()}`} onBlur={e => blurHandler(e)} type='email' name='email' value={emailValue} onChange={(e)=>emailHandler(e)} required/>  
                </label>
                {loginRules && <p className='form__rules login-rules'>Email</p>}
                {(dirtyEmail && emailError)&&<span className='form__errorText'>{emailError}</span>}
            </div>
            <div className='form__password-container'>
                <label>
                    <span className={`form__label-text ${addPasswordErrorClass()}`}>Пароль <AiOutlineInfoCircle onMouseOver={()=>setPasswordRules(true)} onMouseLeave={()=>setPasswordRules(false)} style={{color:'#9c9c9c'}}/></span>
                    <input className={`${addPasswordErrorClass()}`} onBlur={e => blurHandler(e)} type='password' name='password' value={passwordValue} onChange={(e)=>passwordHandler(e)}  autoComplete='off'/> 
                </label>
                {passwordRules && <p className='form__rules pass-rules'>от 8 символов; без кириллицы</p>}
                {(dirtyPassword && passwordError)&&<span className='form__errorText'>{passwordError}</span>}
            </div>
                <button disabled={formValid === false} type='submit' className='form__submit'>Войти</button>
        </form>
    </div>
  )
}

export default Form