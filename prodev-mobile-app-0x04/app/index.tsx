import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, ImageBackground, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Find your favorite place here</Text>
              <Text style={styles.titleSubText}>The best prices for over 2 </Text>
              <Text style={styles.titleSubText}>million properties worldwide</Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <Link href="/join" asChild>
  <TouchableOpacity style={styles.buttonPrimary}>
    <Text style={{ ...styles.buttonPrimaryText, color: "black" }}>Join here</Text>
  </TouchableOpacity>
</Link>

                <Link href="/signin" asChild>
  <TouchableOpacity style={styles.buttonSecondary}>
    <Text style={styles.buttonSecondaryText}>Sign In</Text>
  </TouchableOpacity>
</Link>
              </View>
              <View style={styles.continueArrowGroup}>
                <Text style={styles.continueArrowColor}>Continue to home</Text>
                <Pressable>
                  <Ionicons
                  name="arrow-forward"
                  size={20}
                  style={styles.continueArrowColor}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

