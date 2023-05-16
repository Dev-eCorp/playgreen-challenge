import { useState, useEffect } from "react";
import { auth } from "../../firebaseClient";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  StyledButton,
  StyledContainer,
  StyledFlexContainer,
  StyledTitle,
  StyledText,
  StyledLink,
  ThemeToggleButton,
} from "../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import FloatingLabelInput from "./FloatingLabelInput";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const log = await signInWithEmailAndPassword(auth, email, password);
      console.log(log);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledContainer>
          <ThemeToggleButton
            onClick={() => setIsLightTheme(!isLightTheme)}
            isLightTheme={isLightTheme}
          />
          <StyledTitle>Welcome</StyledTitle>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StyledText>
          <form onSubmit={handleSubmit}>
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
