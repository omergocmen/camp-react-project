import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut() {
  return (
    <div>
        <Menu.Item>
        <Link to="/logIn">Giriş Yap</Link>
        <Link to="/signIn" style={{marginLeft:'0.5rem'}}>Kayıt Ol</Link>
        </Menu.Item>
    </div>
  )
}
