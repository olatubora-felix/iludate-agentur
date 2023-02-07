import React, { Fragment } from 'react'
import { Header } from './Header'
import { HeadHtml } from '../head/Head'

const MainLayout = ({ content, children, title }) => {
  return (
    <Fragment>
      <HeadHtml content={content} title={title} />
      <Header />
      {children}
    </Fragment>
  )
}

export default MainLayout
