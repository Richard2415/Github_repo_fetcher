import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search.jsx'
import List from './List.jsx'
import Styles, { Container, Column, Title, DogEmoji, HeadingStyled } from './Styles.js'

const App = (props) => {
  const defaultHeading = 'Top 25 searched repos (by last updated):'
  const [repos, setRepos] = useState([])
  const [heading, setHeading] = useState(defaultHeading)

  const onSubmit = (user, e) => {
    e.preventDefault();
    axios.post('/add', {search: user})
    .then(res => {
      setHeading(`Repos by ${user}:`)
      setRepos(res.data)
    })
  }
  const onEdit = (repoId, note, e) => {
    console.log('test', repoId)
    e.preventDefault();
    axios.put('/update', {repoId, note})
    .then(res =>{
      setHeading(defaultHeading)
      setRepos(res.data)
    })
  }
  const onDelete = (repoId) => {
    axios.delete('/del', {
      auth: {user: 'root'},
      data: {repoId},
    })
    .then(res => {
      setHeading(defaultHeading)
      setRepos(res.data)
    })
  }
  useEffect(()=> {
    axios('/get')
    .then(res => setRepos(res.data))
  }, [])
  return (
    <Container>
      <Column>

      <Title>GitHub Repos Fetcher <DogEmoji>🐶</DogEmoji></Title>
      <Search onSubmit={onSubmit}/>

      <HeadingStyled>{heading}</HeadingStyled>
      {repos.length > 0 ? <List repos={repos} onEdit={onEdit} onDelete={onDelete}/> : <div><p></p>No repos saved.</div>}

    </Column>
  </Container>
  )
}

export default App;