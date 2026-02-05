import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { usePlantStore } from "@/store/plantsSrore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);
  return (
    //FlatList is a performant way to render a list of items in React Native, it only renders the items that are currently visible on the screen, and it also provides a lot of useful props for handling things like refreshing, pagination, etc.
    //we should never use style props for styling the items in the list, instead we should use contentContainerStyle for styling the container of the list, and we should use the renderItem prop to render the items in the list, this way we can avoid unnecessary re-renders and improve performance
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
