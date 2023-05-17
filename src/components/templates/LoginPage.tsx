import React, { useState, useEffect } from "react";
import {
  StyledButton,
  StyledContainer,
  StyledFlexContainer,
  StyledTitle,
  StyledText,
  StyledLink,
  ThemeToggleButton,
} from "../../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import FloatingLabelInput from "../organisms/FloatingLabelInput";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const { email, setEmail, password, setPassword, signIn } = useAuth();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledContainer style={{ justifyContent: "center" }}>
          <ThemeToggleButton
            onClick={() => setIsLightTheme(!isLightTheme)}
            isLightTheme={isLightTheme}
          />
          <StyledTitle>Welcome</StyledTitle>
          <StyledText style={{ padding: "0px 30px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StyledText>
          <form onSubmit={signIn}>
            <FloatingLabelInput
              id="user"
              label="User"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FloatingLabelInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledFlexContainer>
              <StyledLink href="/forgot-password">
                Forgot your password?
              </StyledLink>
              <StyledButton type="submit">Login</StyledButton>
            </StyledFlexContainer>
          </form>
        </StyledContainer>
      )}
    </ThemeProvider>
  );
};

export default LoginPage;
