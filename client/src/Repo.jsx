import React, { useState } from 'react'
import Styled, { RepoStyled, DeleteButton, EditButton, EditInput, EditFormStyled, NoteStyled, BoneEmoji } from './Styles.js'
import lastUpdated from './lastUpdated.js'

const Repo = (props) => {
  const [note, setNote] = useState('')
  const onType = (e) => {
    setNote(e.target.value)
  }
  const handleEdit = (e) => {
    setNote('')
    props.onEdit(props.repo.repoId, note, e)
  }
  return (
    <RepoStyled>
      <DeleteButton onClick={()=>props.onDelete(props.repo.repoId)}>X</DeleteButton>
      <BoneEmoji>🦴 </BoneEmoji> Repo: <a href={props.repo.htmlUrl} target="_blank">{props.repo.repoName}</a> by <a href={props.repo.ownerUrl} target="_blank">{props.repo.owner}</a>
      {props.repo.description ? <span><br/>Description: {props.repo.description}</span> : <span></span>}
      <br/>Last updated: {lastUpdated(props.repo.updated)}
      <br/><NoteStyled>Custom note: {props.repo.note}</NoteStyled>

      <EditFormStyled>
      <EditInput type="text" name="note" value={note} onChange={(e)=>onType(e)}></EditInput>
      <EditButton onClick={(e)=>handleEdit(e)}>Edit Note</EditButton>
      </EditFormStyled>
  </RepoStyled>
  )
}

export default Repo