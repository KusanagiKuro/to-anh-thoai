import { Colors, Fonts, Metrics } from "@/Theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  scrollContent: {
    padding: 20,
  },

  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: -40,
  },

  textField: {
    borderRadius: 8,
    marginBottom: Metrics.tripleBaseMargin,
    borderColor: Colors.primary,
    borderWidth: 1,
  },

  textFieldTitle: {
    marginBottom: Metrics.smallMargin,
    color: Colors.primary,
  },

  textFieldInput: {
    color: Colors.primary,
  },

  button: {
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },

  buttonText: {
    fontSize: 16,
    color: Colors.white,
  },

  versionText: {
    position: 'absolute',
    bottom: Metrics.doubleBaseMargin,
    right: Metrics.doubleBaseMargin,
    fontSize: Fonts.size.regular,
  }
})