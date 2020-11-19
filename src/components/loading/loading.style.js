import styled from "styled-components";


export const LoadingWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
  width: 120px;
  height: 120px;
  animation: pulse 1s linear both infinite alternate;
  
  @keyframes pulse{
  from {
  transform: scale(.7);
  }
  to {
  transform: scale(1);
  }
  }

  }
`;