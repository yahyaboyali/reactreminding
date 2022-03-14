import { Button } from 'react-bootstrap';
import React from 'react'

export default function SignedOut(props) {

  return (
    <div>
        <Button style={{marginRight:'1rem'}} onClick={props.signIn}>Giriş yap</Button>
        <Button>Kayıt ol</Button>
    </div>
  )
}
