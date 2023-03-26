import styled from "styled-components";

const Search = () => {
    return ( 
    <Container>
        <Prompt>Search to find a forever pet</Prompt>
        <Fields>
            <FilterInput />
            <SearchInput />
        </Fields>
    </Container> );
}

// CONTAINER STYLE
const Container = styled.div`
display: flex;
flex-direction: column;
`;
const Fields = styled.div`
display: flex;
align-self: center;
`;
// TEXT STYLE
const Prompt = styled.p`
  text-align: center;
  font-size: 2em;
  color: white;
  padding: 150px 0px 50px 0px;
`;
// INPUT STYLE
const FilterInput = styled.input`
  border: none;
  height: 50px;
  width: 200px;
  font-size: 2em;
  text-align: center;
  border-radius: 15px;
  margin-right: 20px;
`;
const SearchInput = styled.input`
  border: none;
  height: 50px;
  width: 500px;
  font-size: 2em;
  text-align: center;
  border-radius: 15px;
`;
export default Search;