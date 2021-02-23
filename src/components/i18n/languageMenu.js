import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import React from 'react'

import BrLogo from '../../images/pt-BR.svg'
import EnLogo from '../../images/en.svg'
import usePersistedState from '../../core/usePersistedState'

const useStyles = makeStyles({
  selectFocus: {
    '&:focus': {
      background: 'transparent',
    },
    '&> img': {
      margin: 0,
    },
  },
})

const MenuItemUI = styled(MenuItem)`
  > img {
    margin: 0;
  }
`

const LanguageMenu = props => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()

  const [values, setValues] = usePersistedState('language', 'en')

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)
    setValues(event.target.value)
  }

  return (
    <Select
      value={values}
      onChange={e => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language',
        id: 'language-sel',
      }}
      classes={{
        select: classes.selectFocus,
      }}
      MenuProps={{
        disableScrollLock: true,
      }}
    >
      <MenuItemUI value={'en'}>
        <img src={EnLogo} alt="EN" width={25} height={25} />
      </MenuItemUI>
      <MenuItemUI value={'pt-BR'}>
        <img src={BrLogo} alt="pt-BR" width={25} height={25} />
      </MenuItemUI>
      <MenuItemUI value={'es'}>
        <img src={'https://hatscripts.github.io/circle-flags/flags/es.svg'} alt="es" width={25} height={25} />
      </MenuItemUI>
    </Select>
  )
}
export default LanguageMenu
