import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Search = ({ pets, handleSelect }) => {
  const [value, setValue] = useState("");
  const [matchedSuggestions, setMatchedSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

  // Suggestions display based on input value
  useEffect(() => {
    if (pets) {
      const uniqueBreeds = pets
        .map((pet) => pet.breed)
        .filter((item, i, ar) => ar.indexOf(item) === i);

      console.log(uniqueBreeds);

      setMatchedSuggestions(
        uniqueBreeds
          .filter((breed) => {
            if(value.length > 0) {
              if (breed.toUpperCase().includes(value.toUpperCase())) {
                console.log(breed);
                return breed;
              }
            }
          })
          .map((breed) => {
            const key = breed;
            const index =
              breed.toUpperCase().indexOf(value.toUpperCase()) + value.length;
            const firstPart = breed.slice(0, index);
            const secondPart = breed.slice(index, breed.length);
            return {
              firstPart: firstPart,
              secondPart: secondPart,
              title: breed,
              key: key,
            };
          })
      );
    }
  }, [value]);

  const isSelected = (index) => {
    if (index === selectedSuggestionIndex) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container>
      <Prompt>Search to find a forever pet</Prompt>
      <Fields>
        <FilterInput type="text" placeholder="Species" />
        <SearchBar onSubmit={(e) => e.preventDefault()}>
          <SearchInput
            type="text"
            placeholder="Search for a breed"
            onChange={(e) => setValue(e.target.value)}
          />
          {matchedSuggestions.length > 0 && (
            <DropDown>
              {matchedSuggestions.map((suggestion, index) => {
                return (
                  <Result
                    onClick={() => handleSelect(suggestion.title)}
                    onMouseEnter={() => {
                      setSelectedSuggestionIndex(index);
                    }}
                    key={suggestion.key}
                    style={{
                      background: isSelected(index)
                        ? "hsla(50deg, 100%, 80%, 0.25)"
                        : "transparent",
                    }}
                  >
                    <span>
                      {suggestion.firstPart}
                      <Prediction>{suggestion.secondPart}</Prediction>
                    </span>
                  </Result>
                );
              })}
            </DropDown>
          )}
        </SearchBar>
        <Button
          type="reset"
          onClick={() => {
            handleSelect("");
            setValue("");
            setSelectedSuggestionIndex(0);
          }}
        >
          Reset
        </Button>
      </Fields>
    </Container>
  );
};

// CONTAINER STYLE
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Fields = styled.div`
  display: flex;
  align-self: center;
`;
const SearchBar = styled.form`
  display: flex;
  flex-direction: column;
`;
const DropDown = styled.ul`
  position: absolute;
  z-index: 100;
  top: 290px;
  width: 380px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 0px 2px 2px var(--blue-light);
  padding: 5px;
  margin-top: 10px;
`;
const Result = styled.li`
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
`;

// TEXT STYLE
const Prompt = styled.p`
  text-align: center;
  font-size: 2em;
  color: white;
  padding: 150px 0px 50px 0px;
`;
const Prediction = styled.span`
  font-weight: bold;
`;
// BUTTON STYLE
const Button = styled.button`
  margin-left: 20px;
  border-radius: 20px;
  padding: 10px 40px;
  color: white;
  background-color: var(--blue-mid);
  box-shadow: inset 1px 0px 10px grey;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
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
