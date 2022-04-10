import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { StyledLink } from './../../../styles/styles'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function KontaktForm({ data }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' })
    const [isSended, changeIsSended] = useState(false)

    const [sendedCount, changeSendedCount] = useState(0)

    const onSubmit = (data) => {
        axios.post('https://hook.eu1.make.com/3y60ipghbb8tzt2z13hl97ahn09mbui6', {
            name: data.firstName,
            surname: data.lastName,
            phone: data.phoneNumber,
            email: data.email,
            message: data.message,
        })
            .then((res) => {
                if (res.status === 200) {
                    changeIsSended('success')
                    changeSendedCount(sendedCount + 1)
                    reset()
                } else {
                    changeIsSended('error')
                    changeSendedCount(sendedCount + 1)
                }
            })
    }

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <Flex>
                <Label>
                    <InputName>Imię</InputName>
                    <Input className={errors.firstname ? 'error' : null} {...register("firstName", { maxLength: 60 })} placeholder="Podaj imię" />
                    {errors.firstName && (
                        <motion.p
                            initial={{ opacity: 0, bottom: -6 }}
                            animate={{ opacity: 1, bottom: 0 }}
                            exit={{ opacity: 1, bottom: -6 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="errorText"
                        >
                            Maksymalna długość 60 znaków.
                        </motion.p>
                    )}
                </Label>
                <Label>
                    <InputName>Nazwisko</InputName>
                    <Input className={errors.lastname ? 'error' : null} {...register("lastName", { maxLength: 60 })} placeholder="Podaj nazwisko" />
                    {errors.lastName && (
                        <motion.p
                            initial={{ opacity: 0, bottom: -6 }}
                            animate={{ opacity: 1, bottom: 0 }}
                            exit={{ opacity: 1, bottom: -6 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="errorText"
                        >
                            Maksymalna długość 60 znaków.
                        </motion.p>
                    )}
                </Label>
            </Flex>
            <Flex>
                <Label>
                    <InputName>Numer telefonu</InputName>
                    <Input className={errors.phoneNumber ? 'error' : null} {...register("phoneNumber", { pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g, minLength: 9 })} placeholder="np. 500600700" />
                    {errors.phoneNumber && (
                        <motion.p
                            initial={{ opacity: 0, bottom: -6 }}
                            animate={{ opacity: 1, bottom: 0 }}
                            exit={{ opacity: 1, bottom: -6 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="errorText"
                        >
                            Niepoprawny nr telefonu, podaj np. 500600700
                        </motion.p>
                    )}
                </Label>
                <Label>
                    <InputName>Adres e-mail*</InputName>
                    <Input className={errors.email ? 'error' : null} {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder="np. jan@gmail.com" />
                    {errors.email && (
                        <motion.p
                            initial={{ opacity: 0, bottom: -6 }}
                            animate={{ opacity: 1, bottom: 0 }}
                            exit={{ opacity: 1, bottom: -6 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="errorText"
                        >
                            Podaj poprawny adres e-mail
                            {/* {errors.email?.type === 'required' && ('Podaj adres e-mail')}
                            {errors.email?.type === 'pattern' && ('Podaj poprawny adres e-mail')} */}
                        </motion.p>
                    )}
                </Label>
            </Flex>
            <Label>
                <InputName>Wiadomość*</InputName>
                <TextArea className={errors.message ? 'error' : null} {...register("message", { required: true, minLength: 5 })} rows='5' placeholder="Jak możemy pomóc?" />
                {errors.message && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        Wpisz wiadomość
                        {/* {errors.message?.type === 'required' && ('Wpisz wiadomość')}
                        {errors.message?.type === 'minLength' && ('Minimalna długość wiadomości 5 znaków!')} */}
                    </motion.p>
                )}
            </Label>
            <ButtonAndAnswer>
                <StyledLink as='button' type="submit" >Wyślij</StyledLink>
                {isSended === 'success'
                    ? <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}>
                        Wiadomość pomyślnie wysłana!
                    </motion.p>
                    : null}
                {isSended === 'error'
                    ? <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className='error'>
                        Wiadomość nie wysłana, sprobuj póżniej!
                    </motion.p>
                    : null}
            </ButtonAndAnswer>
        </Wrapper >
    )
}


const Wrapper = styled.form`
    padding: 32px;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0px 20px 50px rgba(32, 31, 55, 0.08); 
    border: 1px solid #F3F5F8;
    position: relative;
    z-index: 3;

    @media (max-width: 640px){
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    @media (max-width: 400px) {
        padding: 32px 16px;
        
    }
`


const Label = styled.label`
    width: 100%;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 12px;


    .errorText{
        position: absolute;
        bottom: 0;
        left: 0;
        color:  #DC2626;
        font-size: 12px;
    }

    @media (max-width: 640px) {
        margin-bottom: 24px;
        display: block;
        width: 100% !important;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    ${Label}{
        width: calc(50% - 12px);
    }   

    @media (max-width: 640px) {
        display: block;
        margin-bottom: 0;
    }
`

const InputName = styled.span`
    margin-bottom: 8px;
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #203662;
`

const Input = styled.input`
    border-radius: 50px;
    padding: 13.5px 31px;
    border: 1px solid #F3F5F8;
    width: 100%;

    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #394C71;

    &.error{
        border-color:  #DC2626;
    }

    &::placeholder{
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #394C7180;
    }
`

const TextArea = styled.textarea`
    border-radius: 25px;
    padding: 13.5px 31px;
    border: 1px solid #F3F5F8;
    width: 100%;
    margin-bottom: -8px;

    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #394C71;

    &.error{
        border-color:  #DC2626;
    }

    &::placeholder{
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #394C7180;
    }

    @media (max-width: 640px){
        margin-bottom: 0;
    }
`

const ButtonAndAnswer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 32px;
    button{
        margin-right: 16px;
    }
    p{
        &.error{
            color:  #DC2626;
        }
    }

    @media (max-width: 500px) {
        flex-direction: column;
        padding-bottom: 32px;

        p{
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
        }

        button{
            margin-right: 0;
            width: 100%;
        }
    }
    
`