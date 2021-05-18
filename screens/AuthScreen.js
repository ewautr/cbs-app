import React, { useState, useReducer, useCallback, useEffect } from "react";
import { ScrollView, View, KeyboardAvoidingView, StyleSheet, Button, ActivityIndicator, Alert } from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import Input from "../components/Input";
import * as authActions from "../store/actions/auth";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = (props) => {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const authHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      if (isSignup) {
        await dispatch(authActions.signup(formState.inputValues.email, formState.inputValues.password));
      } else {
        await dispatch(authActions.login(formState.inputValues.email, formState.inputValues.password));
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({ type: FORM_INPUT_UPDATE, value: inputValue, isValid: inputValidity, input: inputIdentifier });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.screen}>
      <ScrollView style={styles.authContainer}>
        <Input id="email" label="email" keyboardType="email-address" onInputChange={inputChangeHandler} email required autoCapitalize="none" errorText="Please enter a valid email address" />
        <Input
          id="password"
          label="password"
          secureTextEntry
          keyboardType="default"
          onInputChange={inputChangeHandler}
          minLength={5}
          required
          autoCapitalize="none"
          errorText="Please enter a valid password address"
          initialValue=""
        />
      </ScrollView>
      {isLoading ? <ActivityIndicator size="small" color={Colors.primary} /> : <Button title={isSignup ? "Signup" : "Login"} color={Colors.primary} onPress={authHandler} />}
      <Button
        title={`Switch to ${isSignup ? "Login" : "Signup"}`}
        color={Colors.accent}
        onPress={() => {
          setIsSignup((prevState) => !prevState);
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  authContainer: {
    width: "80%",
    padding: 20,
  },
});

export default AuthScreen;
