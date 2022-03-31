import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { StyledLink } from './../../../styles/styles'

export default function KontaktForm({ data }) {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {

    }

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <Flex>
                <Label>
                    <InputName>Imię</InputName>
                    <Input {...register("firstName")} placeholder="Podaj imię" />
                </Label>
                <Label>
                    <InputName>Nazwisko</InputName>
                    <Input {...register("lastName")} placeholder="Podaj nazwisko" />
                </Label>
            </Flex>
            <Flex>
                <Label>
                    <InputName>Numer telefonu</InputName>
                    <Input {...register("phoneNumber")} placeholder="np. 500600700" />
                </Label>
                <Label>
                    <InputName>Adres e-mail</InputName>
                    <Input {...register("email")} placeholder="np. jan@gmail.com" />
                </Label>
            </Flex>
            <Label>
                <InputName>Imię</InputName>
                <TextArea {...register("message")} rows='5' placeholder="Jak możemy pomóc?" />
            </Label>

            <StyledLink as='button' type="submit" >Wyślij</StyledLink>
        </Wrapper >
    )
}


const Wrapper = styled.form`
    padding: 30px;
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
`


const Label = styled.label`
    width: 100%;

    @media (max-width: 640px) {
        margin-bottom: 24px;
        display: block;
        width: 100% !important;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;

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
    margin-bottom: 24px;

    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #394C71;

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