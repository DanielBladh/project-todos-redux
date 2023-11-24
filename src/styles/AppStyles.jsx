import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;

  form {
    display: flex;
    justify-content: space-between;
  }

  input {
    flex-grow: 1;
    margin-right: 10px;
  }

  button {
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
`;

export const CountContainer = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const CompleteAllButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  border: none;
`;
