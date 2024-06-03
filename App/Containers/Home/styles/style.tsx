import { Colors, Fonts, Metrics } from "@/Theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  filterButton: {
    borderRadius: 8,
    marginLeft: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  filterIcon: {
    marginLeft: Metrics.baseMargin,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginTop: Metrics.doubleBaseMargin,
    height: 40,
  },

  tabButton: {
    paddingHorizontal: Metrics.doubleBaseMargin,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
  },

  tabText: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
  },

  contentWrapper: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  contentContainer: {
    paddingVertical: Metrics.doubleBaseMargin,
  },

  noDataText: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: Fonts.size.regular,
  },
})