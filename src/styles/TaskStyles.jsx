import styled from "styled-components";

export const TaskContainer = styled.div`
  margin-top: 20px;
`;

export const TaskListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TaskCheckbox = styled.input`
  margin-right: 10px;
`;

const filteredProps = ["complete"];

export const TaskText = styled.span.withConfig({
  shouldForwardProp: (prop) => !filteredProps.includes(prop),
})`
  flex-grow: 1;
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;

export const TaskRemoveButton = styled.button`
  margin-left: 10px;
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const DueDate = styled.span`
  color: #666; 
  font-size: 0.85em; 
  margin-left: 10px;
`;
