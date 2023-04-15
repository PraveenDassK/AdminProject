import React from "react";
import styled from "styled-components";
import { AutoComplete, Button, Drawer, Input, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const SearchContainer = styled.div`
  display: flex;
  position: relative;
  width: 70%;
  margin-left: 0px;
  @media (min-width: 1000px) and (max-width: 1300px) {
    width: 57%;
  }
`;
const StyledSearch = styled(Input)`
  min-width: 100%;
  border-radius: 40px;
  padding-left: 40px;
  height: 40px;
  background: #f0f8ff;
  border:none;
  .ant-select-selection-placeholder {
    color: #bdbdbd !important;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;
  }
`;
const SearchIcon = styled(SearchOutlined)`
  font-size: 20px;
  color: #4f4f4f;
  position: absolute;
  left: 10px;
  top: 13px;
`;
const SearchBar = () => {
  return (
    <SearchContainer>
      <StyledSearch
        // onChange={handleSearch}
        // onChange={}
        key='search'
        // value={enteredValue}
        autoFocus={true}
      />
      <SearchIcon />
    </SearchContainer>
  );
};

export default SearchBar;
