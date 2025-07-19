import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  searchContainer: {
    backgroundColor: "#00897b",
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  searchGroup: {
    paddingHorizontal: 16,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: "white",
    borderRadius: 50,
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },

  searchFormText: {
    fontSize: 14,
    color: "#555",
  },

  searchControl: {
    marginTop: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  searchButton: {
    backgroundColor: "orange",
    borderRadius: 20,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  filterGroup: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: "100%",
  },

  filterContainer: {
    width: 70,
    height: 60,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },

  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },

  paginationContainer: {
    marginVertical: 20,
    alignItems: "center",
  },

  showMoreButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
