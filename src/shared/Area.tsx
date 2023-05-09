import styled from 'styled-components';

interface AreaProps {
  mr?: string;
  mt?: string;
  margin?: string;
  pl?: string;
  pt?: string;
  mb?: string;
  width?: string;
  height?: string;
  ml?: string;
  bcolor?: string;
  bradius?: string;
  maxWidth?: string;
  minWidth?: string;
  border?: string;
  bbottom?: string;
  ta?: string;
  pb?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
const getMargin = (margin?: string): string => (margin === 'auto' ? margin : `${margin}px`);
const getPadding = (padding?: string): string => (padding === 'auto' ? padding : `${padding}px`);

function getNumber(num?: string) {
  if (typeof num === 'number') {
    return `${num}%`;
  }
  return num;
}

const Area = styled.div<AreaProps>`
  margin-top: ${(props) => props.mt}px;
  margin-right: ${(props) => props.mr}px;
  margin-left: ${(props) => props.ml}px;
  margin: ${(props) => props.margin}px;
  padding-left: ${(props) => props.pl}px;
  padding-top: ${(props) => props.pt}px;
  width: ${(props) => props.width}px;

  height: ${(props) => props.height}px;
  margin-bottom: ${(props) => props.mb}px;
  max-width: ${(props) => props.maxWidth}px;
  min-width: ${(props) => props.minWidth}px;
  background-color: ${(props) => props.bcolor};
  border-radius: ${(props) => props.bradius}px;
  margin-top: ${(props) => getMargin(props.mt)};
  margin-left: ${(props) => getMargin(props.ml)};
  margin-right: ${(props) => getMargin(props.mr)};
  padding-left: ${(props) => getPadding(props.pl)};
  width: ${(props) => getNumber(props.width)};
  height: ${(props) => getNumber(props.height)};
  text-align: ${(props) => props.ta};
  border-bottom: ${(props) => props.bbottom}px solid #e8e8e8;
  padding-bottom: ${(props) => props.pb}px;
  position: ${(props) => props.position};

  border: ${(props) => props.border}px solid #eee;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
`;

export default Area;
