import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function App() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (chatInput.trim().length === 0) return;
    setMessages([...messages, chatInput]);
    setChatInput("");
  };

  return (
    <View style={styles.container} pointerEvents="box-none">
      {/* LEVEL BAR (TOP LEFT) */}
      <Image
        source={require("../../assets/images/level-bar.png")}
        style={styles.levelBar}
      />

      {/* SETTINGS BUTTON (TOP RIGHT) */}
      <TouchableOpacity
        onPress={() => console.log("Opened Settings")}
        style={styles.settingsButtonWrapper}
      >
        <Image
          source={require("../../assets/images/settings.png")}
          style={styles.settingsButton}
        />
      </TouchableOpacity>

      {/* HEART BUTTON (LEFT BELOW LEVEL BAR) */}
      <TouchableOpacity
        onPress={() => console.log("Heart")}
        style={styles.heartButtonWrapper}
      >
        <Image
          source={require("../../assets/images/heart.png")}
          style={styles.heartButton}
        />
      </TouchableOpacity>

      {/* HANGER BUTTON (LEFT BELOW HEART) */}
      <TouchableOpacity
        onPress={() => console.log("Hanger")}
        style={styles.hangerButtonWrapper}
      >
        <Image
          source={require("../../assets/images/hanger.png")}
          style={styles.hangerButton}
        />
      </TouchableOpacity>

      {/* MAIN CONTENT (CAT IMAGE) */}
      <View style={styles.topContent} pointerEvents="box-none">
        <Image
          source={require("../../assets/images/cat.png")}
          style={styles.petImage}
        />
      </View>

      {/* CHAT INPUT BAR (BOTTOM) */}
      <View style={styles.chatInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Talk to your pet..."
          value={chatInput}
          onChangeText={setChatInput}
        />

        <TouchableOpacity onPress={() => console.log("Fed Pet")}>
          <Image
            source={require("../../assets/images/feed.png")}
            style={styles.feedButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#008080",
    justifyContent: "space-between",
  },

  topContent: {
    flex: 1,
    justifyContent: "center",
  },

  /* LEVEL BAR */
  levelBar: {
    position: "absolute",
    top: 60,
    width: 220,
    height: 60,
    left: 20,
  },

  /* SETTINGS BUTTON */
  settingsButtonWrapper: {
    position: "absolute",
    top: 60,
    right: 20,
  },
  settingsButton: {
    width: 70,
    height: 70,
  },

  /* HEART BUTTON */
  heartButtonWrapper: {
    position: "absolute",
    top: 140,
    left: 20,
  },
  heartButton: {
    width: 70,
    height: 70,
  },

  /* HANGER BUTTON */
  hangerButtonWrapper: {
    position: "absolute",
    top: 220,
    left: 20,
  },
  hangerButton: {
    width: 70,
    height: 70,
  },

  /* CAT IMAGE */
  petImage: {
    width: 200,
    height: 260,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 250, // adjust if needed
  },

  /* CHAT INPUT */
  chatInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "#DDD",
    padding: 10,
    borderRadius: 10,
    height: 60,
  },

  /* FEED BUTTON */
  feedButton: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
});
