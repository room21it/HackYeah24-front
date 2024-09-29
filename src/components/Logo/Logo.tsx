import { forwardRef } from "react";
import * as S from "./styles";

const logoStyle = {
  width: "auto",
  height: "50px",
  cursor: "pointer",
};

export const Logo = forwardRef<HTMLDivElement>(function Stat(props, ref) {
  const { ...other } = props;

  return (
    <S.StatRoot ref={ref} {...other}>
      <img src={"/assets/logo.png"} style={logoStyle} alt="logo of sitemark" />
      <S.TextRoot>
        <S.TextBlack>Sprawne</S.TextBlack>
        <S.TextHighlight>gotowanie</S.TextHighlight>
      </S.TextRoot>
    </S.StatRoot>
  );
});
