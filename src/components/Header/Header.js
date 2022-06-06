import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { TiHome } from "react-icons/ti";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Logo>Social Build</Logo>
          <SearchBox>
            <Icon />
            <SearchInput placeholder="Search" />
          </SearchBox>
        </Hold>
        <HomeIcon />
        <Image />
      </Wrapper>
    </Container>
  );
};

export default Header;

const Image = styled.div``;
const HomeIcon = styled.div``;
const SearchInput = styled.input`
  width: 200px;
  height: 33px;
  border: 0;
  background: none;
  outline: none;
  border-radius: 2px;
`;
const Icon = styled(FiSearch)`
  margin: 0 5px;
`;
const SearchBox = styled.div`
  width: 270px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  border: 0;
  background-color: rgba(0, 0, 0, 0.09);
`;
const Logo = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Hold = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
