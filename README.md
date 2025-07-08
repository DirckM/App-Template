# App Template

This repository provides a template for quickly building mobile applications with standard authentication, enabling you to focus on developing your app's core content. Refer to this README for detailed instructions.

## Dependencies

The following dependencies are used in this project. Always check the respective documentation to ensure compatibility with the installed package versions. This guide includes links to the official documentation for reference.

### Packages Used
- **Node.js**: [Official Documentation](https://nodejs.org/en)
- **React Native**: JavaScript framework for building mobile apps using React.
- **Expo (EAS)**: Platform for building and deploying apps. [Official Documentation](https://docs.expo.dev/tutorial/eas/introduction/)
- **Tailwind / NativeWind**: Styling framework for React Native. [Official Documentation](https://www.nativewind.dev/)
- **TypeScript**: Adds static typing to JavaScript.
- **ESLint**: Linting tool for identifying and fixing code issues. [Official Documentation](https://eslint.org/)
- **Prettier**: Code formatter for consistent style. [Official Documentation](https://prettier.io/)
- **GlueStack UI Library** (optional): Component library for building UI. [Official Documentation](https://gluestack.io/)
- **Supabase User Management System** (optional): Backend service for user authentication. [Official Documentation](https://supabase.com/)

### Recommended Additional Tools
- **Expo Orbit**: Tool for managing and running Expo apps. [Official Documentation](https://expo.dev/orbit)
- **Android Studio**: Emulator for Android development. [Official Documentation](https://developer.android.com/studio)

> **Note**: This template supports both iOS and Android. However, native code instructions are provided only for Android, as Xcode (required for iOS native Swift code) was not available during development.

## Steps for Building the App

### Creating the Expo App

To start, visit the Expo website to set up your project. Consider whether your app requires native code for features like accessing screen time data:

- **Expo Classic**: Suitable for apps without native code requirements.
- **Expo EAS (Expo Application Service)**: Recommended for this template, as it supports all Expo Classic features plus additional capabilities:
  - Publishing apps to the App Store and Play Store.
  - Custom native code integration.
  - Custom development clients.

To create an Expo project, run the following command:

```bash
npx create-expo-app@latest your-app-name
```

This command sets up a new React Native project with the following included:
- Expo package and CLI for development.
- Expo Router for basic tab navigation.
- Multi-platform support (Android, iOS, and web).
- TypeScript configured by default.

> **Note**: TypeScript is pre-configured, so no additional setup is required.

To remove the default boilerplate code and replace it with a minimal structure, navigate to your app folder and run:

```bash
npm run reset-project
```

This moves the boilerplate code to an `app-example` folder. Confirm by entering `y` when prompted.

### Initializing EAS

To enable EAS for native code support and advanced features, install the latest EAS CLI:

```bash
npm install -g eas-cli
```

Check for EAS CLI updates using the same command. Then, log in to your Expo account:

```bash
eas login
```

If you don’t have an Expo account, create one at [expo.dev](https://expo.dev/). A successful login will display a confirmation.

Configure the EAS build by running:

```bash
eas build:configure
```

This prompts:
- Whether to create an EAS project for `@username/app-name` (default: `Y`).
- Which platforms to configure for EAS Build (`All`, `iOS`, or `Android`).

This generates an `eas.json` file with your EAS configuration.

Next, install the Expo development client for custom builds:

```bash
npx expo install expo-dev-client
```

This module enables custom native code support, unlike the default Expo Go app.

### Running the App

Ensure Android Studio is installed for Android emulation. Run the app using:

```bash
expo run:android
```

or, for iOS (if applicable):

```bash
expo run:ios
```

When prompted, specify the Android package name (e.g., `com.username.your-app-name`). This command runs the Expo prebuild process, generating an `android` folder for native code if needed.

#### **Error 1**
Now during the running of this command we got an error that there was a similar theme name in the types. This was located at: 'expo-app_template/android/app/main/res/values/styles.xml' Here we could see to similar theme names: AppTheme, so we changed one to 'LightAppTheme'
After doing this you have to navigiate to the Android folder ( \expo-app-template\android )in the project and then run the following command:

```bash
.\gradlew.bat clean

```
Then we again 'cd ..' out of the Andorid folder and into the expo-app-template folder and run the 'expo run:android' again

#### **ERROR 2**
Then we got another error which says that we cann't have the '.webp' format and the '.png' in one folder. So what we do is we move to the file path:
- expo-app-template\android\app\src\main\res\
Here we see all kinds of folders with mipmap.... What we have to do is delete either one of them. So only the '.png' or the '.webp'.

#### **ERROR 3**
Then you might also have another error which indicated a fault in the 'AndroidManifest.xml'. When we do all this it lists the package like so:
- package="com.dirckmulder.expoapptemplate"
Delete this to get rid of the error.

#### **ERROR 4**
Now this error is really annoying. It has to do with the path lengths of Windows and CMake. So when I tried it, it kept complaining about the Paths that were to long when running the command 'npx expo run:android', Now it did work using 'npx expo start'. So the question is: how do we solve this. Well to that I still don't have an answer (what I did is continued the rest using expo go until I got a valid answer from somewehre on the internet)

### Configuring Prettier and Eslint
Now in order to use Elint which is used to detect errors in your JS or TS code we use the command:
```bash
npx expo lint
```

#### **ERROR 5**
Now when running this command you might run into an error that dictates that it cannot find the right folder. This is because you might have spaces in the folder path. So what you have to do is remove the spaces in the folder path. So for example if you have a folder called 'expo app template' you have to change it to 'expo-app-template'.

This also creates a 'eslint.config.js' in the root of your file where the configuration for eslint is stored.

Now in order to install prettier we will be using another command which is the following. First we install the package:
```bash
npx expo install prettier eslint-config-prettier eslint-plugin-prettier "--" --dev

```

Now additionally we have to update the 'eslint.config.js' file to include the following:
```javascript
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
]);
```
This configuration extends the Expo ESLint configuration and includes Prettier as a plugin, ensuring that your code is both linted and formatted according to Prettier's rules. Now when you run `npx expo lint`, it will also check for Prettier formatting issues. Additionally we should now make a '.prettierrc' file in the root of your project with the following content:
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "printWidth": 80
}
```

Now what we want is that is format on save automatically. Now we configure this by editing the settings of the workspace. In your VScode editor type:
```bash
Ctrl + Shift + P
```
Then type 'settings' and select 'Preferences: Open Workspace Settings (JSON)'. Then add the following lines:
```json 
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Configuring Tailwind CSS
Now we are going to configure Tailwind CSS. First we install the package:
```bash
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install -D tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

Then we initialize Tailwind CSS by running:
```bash
npx tailwindcss init
``` 

This will create a `tailwind.config.js` file in the root of your project. Now in this file we need to includ

```javascript