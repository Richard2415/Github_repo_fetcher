import styled from 'styled-components';

// LAYOUT

export const Container = styled.div`
display: flex;
justify-content: center;
height: 100vh;
background-image: linear-gradient(honeydew, white);
font-family: 'Inter', sans-serif;
font-size: 18px;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.div`
font-size: 50px;
margin-top: 80px;
`;

export const HeadingStyled = styled.div`
margin-bottom: 20px;
`;

// SEARCH

export const SearchFormStyled = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
margin: 30px;
`;

export const SearchInput = styled.input`
width: 250px;
height: 35px;
background-color: white;
font-size: 16px;
border-style: solid;
border-color: lightgray;
border-width: 1px;
border-radius: 5px;
padding-left: 10px;
`;

export const SearchButton = styled.button`
width: 170px;
height: 40px;
background-color: #2ea44f;
font-family: Inter, sans-serif;
color: white;
font-size: 16px;
font-weight: 500;
border-style: solid;
border-color: dimgray;
border-width: 1px;
border-radius: 7px;
cursor: pointer;
`;

// REPOS

export const ReposColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const RepoStyled = styled.div`
min-width: 70vw;
max-width: 70vw;
background-color: white;
text-align: center;
border-style: solid;
border-color: darkgray;
border-width: 1px;
border-radius: 20px;
padding: 30px;
margin: 10px;
`;

export const DeleteButton = styled.button`
width: 35px;
height: 35px;
background-color: white;
color: darkslategray;
border-style: solid;
border-color: lightgray;
border-width: 1px;
border-radius: 20px;
float: right;
cursor: pointer;
`;

export const EditFormStyled = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
margin-top: 10px;
`;

export const EditInput = styled.input`
height: 25px;
background-color: whitesmoke;
font-size: 15px;
border-style: solid;
border-color: lightgray;
border-width: 1px;
border-radius: 5px;
padding-left: 5px;
`;

export const EditButton = styled.button`
width: 100px;
height: 30px;
background-color: rgb(46, 164, 79);
font-family: Inter, sans-serif;
color: white;
font-size: 14px;
font-weight: 500;
border-style: solid;
border-color: dimgray;
border-width: 1px;
border-radius: 7px;
cursor: pointer;
`;

export const NoteStyled = styled.div`
color: gray;
`;

// EMOJIS

export const DogEmoji = styled.span`
font-size: 70px;
`;

export const BoneEmoji = styled.span`
font-size: 30px;
`;