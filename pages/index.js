import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
`

export default function Home(props) {
  
  return (
    <div>
      <Title> Código Live</Title>
      <h1> {props.dadosDoGithub.login} </h1>
      <h2> {props.dadosDoGithub.name} </h2>
      <img src={props.dadosDoGithub.avatar_url} alt=""/>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const retornoDaAPIIncicial = await fetch('https://api.github.com/users/kaiqueyamamotoredblock')
    const retornoDaAPI = await retornoDaAPIIncicial.json()
    console.log(retornoDaAPI)
    return {
      props: {
        dadosViaStaticProps: 'Dado simples vindo do static props',
        dadosDoGithub: retornoDaAPI
      }
    }   
  } catch (err) {
    throw new Error('Deu ruim :(')
  }
}