import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Footer from '../../commons/Footer'
import Menu from '../../commons/Menu'
import Modal from '../../commons/Modal'
import { Box } from '../../foundation/layout/Box'
import FormCadastro from '../../patterns/FormCadastro'
import SEO from '../../SEO'

export const WebsitePageContext = React.createContext({
  toggleModalCadatro: () => {}
})

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps
}) {
  const [ isModalOpen, setModalState ] = useState(false)

  return (
    <WebsitePageContext.Provider value={{
      toggleModalCadatro: () => {
        setModalState(!isModalOpen)
      }
    }}
    >
      <SEO {...seoProps} />
      <Box
        flex='1'
        display='flex'
        flexDirection='column'
        {...pageBoxProps}
      >
        <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
          { propsDoModal => <FormCadastro propsDoModal={propsDoModal} /> }
        </Modal>
        {menuProps.display && (
          <Menu onCadastrarClick={() => setModalState(true)} />
        )}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  )
}

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string
  })
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true
  }
}
