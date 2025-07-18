import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from "@/constants";
import { styles } from "@/styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Link href="/" asChild>
            <Pressable>
              <Ionicons name="arrow-back" size={25} />
            </Pressable>
          </Link>
          <Image source={HEROLOGOGREEN} />
        </View>
        <Text style={styles.largeText}>Create your account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to create an account.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.placeholderText}>Password</Text>
              <View style={styles.passwordGroup}>
                <TextInput style={{ flex: 1 }} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.placeholderText}>Confirm Password</Text>
              <View style={styles.passwordGroup}>
                <TextInput style={{ flex: 1 }} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={GOOGLELOGO} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={FACEBOOKLOGO} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don&apos;t have an account?</Text>
          <Link href="/signin">
            <Text style={styles.subTextJoin}>Sign in</Text>
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}