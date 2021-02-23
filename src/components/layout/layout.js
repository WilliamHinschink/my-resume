import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { motion } from 'framer-motion'
import { ResetCSS, GlobalStyle, themes } from '../styles'
import Header from '../header'
import Footer from '../footer'
import { useDarkMode } from './useDarkMode'
import { animateOnScroll } from '../../utils/isVisible'
import { withTranslate } from '../../i18n/withTranslate'

const variants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
`

const Layout = ({ children, location, t, i18n }) => {
  const [theme, setTheme] = useDarkMode()
  const defaultTheme = createMuiTheme()
  useEffect(() => {
    animateOnScroll()
  }, [])
  debugger
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={themes[theme || 'light']}>
        <ResetCSS />
        <GlobalStyle />
        <StyledContainer>
          <Header location={location} onChangeTheme={setTheme} theme={theme} />
          {children}
          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default withTranslate(Layout)
