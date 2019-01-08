import React, { useContext } from "react";
import styled from "styled-components";

import { HeadersColorContext } from "../context/context";

type Styles = {
  titleColor: string;
};

const StyledTitle = styled.h1<Styles>`
  color: ${props => props.titleColor};
`;

const Title: React.FunctionComponent = () => {
  const HeadersColor = useContext(HeadersColorContext);

  return <StyledTitle titleColor={HeadersColor}>title test</StyledTitle>;
};

export default Title;
