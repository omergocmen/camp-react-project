import React from 'react'
import { useNavigate } from 'react-router';
import { Dropdown, Image, Menu } from 'semantic-ui-react'





export default function SignedIn() {
  const navigate=useNavigate();
  const signedOut=()=>{
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  }

  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://picsum.photos/seed/picsum/200/300"/>
            <Dropdown pointing="top left" text='Ömer'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={()=>signedOut()}  text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
