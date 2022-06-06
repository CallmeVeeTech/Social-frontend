import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Logo>Social Build</Logo>
          <SeaxrcBar>
            <Icon />
            <SearchInput placeholder="Search" />
          </SeaxrcBar>
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
const SearchInput = styled.div``;
const Icon = styled.div``;
const SeaxrcBar = styled.div``;
const Logo = styled.div``;
const Hold = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div``;
