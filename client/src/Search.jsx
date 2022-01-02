import React, { useState } from 'react'
import Styled, { SearchButton, SearchInput, SearchFormStyled } from './Styles.js'

const Search = (props) => {
  const [user, setUser] = useState('')
  const onType = (e) => {
    setUser(e.target.value)
  }
  return (
    <SearchFormStyled>
      <SearchInput type="text" name="search" placeholder="Search username..." onChange={(e)=>onType(e)}></SearchInput>
      <SearchButton onClick={(e)=>props.onSubmit(user,e)}>Submit</SearchButton>
  </SearchFormStyled>
  )
}

export default Search