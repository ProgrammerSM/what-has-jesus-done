import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Constraint = ({ children }) => {
  const Constraint = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  `
  
  return (
    <Constraint>
      { children }
    </Constraint>
  )
}

Constraint.propTypes = {
  children: PropTypes.object,
}

export default Constraint
