import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { IoHomeOutline, IoDocumentTextOutline } from 'react-icons/io5'
import { GlobalContext } from '@/context/GlobalContext'
import { HeaderSection, Title, ImageContainer } from './styles'

const Header = () => {
  const router = useRouter()
  const { themeStyle, setThemeStyle } = useContext(GlobalContext)
  const [selected, setSelected] = useState(false)

  const themeToggler = () => {
    themeStyle === 'light' ? setThemeStyle('dark') : setThemeStyle('light')
  }

  const goHome = () => {
    router.push('/')
    toast.success('Welcome Home!')
  }

  const goToPage = (section) => {
    router.push(`/${section}`)
  }

  return (
    <HeaderSection className="HeaderSection">
      <ImageContainer className="burger">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          <a onClick={() => goHome()}>
            <IoHomeOutline />
            <li>Home</li>
          </a>
          <a onClick={() => goToPage('clothing-card')}>
            <IoDocumentTextOutline />
            <li>Clothing Card</li>
          </a>
          <a onClick={() => goToPage('recycle-bin')}>
            <IoDocumentTextOutline />
            <li>Recycle Bin</li>
          </a>
          <a onClick={() => goToPage('3')}>
            <IoDocumentTextOutline />
            <li>Page 3</li>
          </a>
        </ul>
      </ImageContainer>

      <Title onClick={() => goHome()}>Styled Tools</Title>

      <ImageContainer className="themeToogle" onClick={() => themeToggler()}>
        <Image
          src="/icon/themeToogle.png"
          alt="SearchIcon"
          width="45"
          height="45"
          className="themeToogle"
        />
      </ImageContainer>
    </HeaderSection>
  )
}

export default Header
