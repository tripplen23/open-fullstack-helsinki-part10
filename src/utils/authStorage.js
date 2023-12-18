// eslint-disable-next-line no-unused-vars
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // TODO: Get the access token for the storage
    try {
      const accessToken = await AsyncStorage.getItem(
        `${this.namespace}:accessToken`
      );

      return accessToken ? JSON.parse(accessToken) : [];
    } catch (error) {
      console.error("Error with getAccessToken util: ", error);
    }
  }

  // eslint-disable-next-line no-unused-vars
  async setAccessToken(accessToken) {
    // TODO: Add the access token for the storage
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:accessToken`,
        JSON.stringify(accessToken)
      );

      return accessToken;
    } catch (error) {
      console.error("Error with setAccessToken util: ", error);
    }
  }

  async removeAccessToken() {
    // TODO: Remove the access token from the storage
    try {
      await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
    } catch (error) {
      console.error("Error with removeAccessToken util: ", error);
    }
  }
}

export default AuthStorage;
