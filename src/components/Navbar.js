import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/whjd-cross-logo.png'
import styled from '@emotion/styled'
import { breakpoints } from '../assets/scripts/media-query'
import { useTheme } from 'emotion-theming'

import Constraint from './Constraint'

const Navbar = () => {
  const theme = useTheme()
  const { largeUp, mediumUp } = breakpoints;
  const smallHeight = 44;
  const mediumHeight = 67;
  const largeHeight = 88;

  const Navbar = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: ${smallHeight}px;
    padding: ${theme.padding} 0;
    background-color: ${theme.colors.primary};

    ${mediumUp} {
      height: ${mediumHeight}px;
    }

    ${largeUp} {
      height: ${largeHeight}px;
    }

    .wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .logo-wrapper {

      .logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.light};
        text-decoration: none;
      }

      .logo-text {
        font-size: 12px;

        ${mediumUp} {
          font-size: 18px;
        }

        ${largeUp} {
          font-size: 28px;
        }
      }
      
      img {
        width: 25px;
        max-width: 50px;
        min-width: 25px;
        height: auto;

        ${mediumUp} {
          width: 38px;
        }

        ${largeUp} {
          width: 50px;
        }
      }
    }

    nav {
      
    }
  `
  const TopSpacer = styled.div`
    width: 100%;
    height: ${smallHeight + (theme.paddingNum * 2)}px;

    ${mediumUp} {
      height: ${mediumHeight + (theme.paddingNum * 2)}px;
    }

    ${largeUp} {
      height: ${largeHeight + (theme.paddingNum * 2)}px;
    }
  `

  return (
    <>
      <Navbar
        role="navigation"
        aria-label="main-navigation"
      >
        <Constraint>
          <div className="wrapper">
            <div className="hamburger-menu-wrapper">

            </div>
            <div className="logo-wrapper">
              <Link to="/" title="Logo" className="logo">
                <span className="logo-text">What Has</span>
                <img src={logo} alt="What has Jesus done" />
                <span className="logo-text">Jesus Done</span>
              </Link>
            </div>
          </div>
          <nav>

          </nav>
        </Constraint>
      </Navbar>
      <TopSpacer/>
    </>
  )
}

export default Navbar
