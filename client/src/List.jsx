import React from 'react'
import Repo from './Repo.jsx'
import Styled, { ReposColumn } from './Styles.js'

const List = (props) => {
  return (
    <ReposColumn>
    {props.repos.map(repo => <Repo repo={repo} onEdit={props.onEdit} onDelete={props.onDelete}/>)}
  </ReposColumn>
  )
}

export default List