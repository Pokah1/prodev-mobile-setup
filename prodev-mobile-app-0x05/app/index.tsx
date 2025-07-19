import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { HEROLOGO, BACKGROUNDIMAGE } from "@/constants";
import { Link } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { Ionicons } from "@expo/vector-icons";

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
              <Text style={styles.titleText}>
                Find your favorite place here
              </Text>
              <Text style={styles.titleSubText}>
                The best prices for over 2{" "}
              </Text>
              <Text style={styles.titleSubText}>
                million properties worldwide
              </Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <Link href="/join" asChild>
                  <TouchableOpacity style={styles.buttonPrimary}>
                    <Text
                      style={{ ...styles.buttonPrimaryText, color: "black" }}
                    >
                      Join
                    </Text>
                  </TouchableOpacity>
                </Link>
                <Link href="/signin" asChild>
                  <TouchableOpacity style={styles.buttonSecondary}>
                    <Text style={styles.buttonSecondaryText}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
              <View>
                <Link href="/(home)" asChild>
                  <Pressable style={styles.continueArrowGroup}>
                    <Text style={styles.continueArrowColor}>
                      Continue to home
                    </Text>
                    <Ionicons
                      name="arrow-forward"
                      size={20}
                      style={styles.continueArrowColor}
                    />
                  </Pressable>
                </Link>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
