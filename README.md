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
- **Lucid-react-native**: An icon library for React Native. [Official Documentation](https://lucide.dev/)

### Recommended Additional Tools

- **Expo Orbit**: Tool for managing and running Expo apps. [Official Documentation](https://expo.dev/orbit)
- **Android Studio**: Emulator for Android development. [Official Documentation](https://developer.android.com/studio)
- **Visual Studio Code**: Recommended code editor with support for TypeScript, ESLint, and Prettier. [Official Documentation](https://code.visualstudio.com/)
- **Git**: Version control system for managing code changes. [Official Documentation](https://git-scm.com/doc)
- **GitHub**: Platform for hosting and sharing code repositories. [Official Documentation](https://docs.github.com/en)
- **Expo Go**: App for running and testing Expo projects on mobile devices. [Official Documentation](https://docs.expo.dev/get-started/installation/)
- **GlueStack VScode Extension**: Provides support for the GlueStack UI Library in Visual Studio Code. [Official Documentation](https://gluestack.io/ui/docs/home/getting-started/vscode-extensions)

> **Note**: This template supports both iOS and Android. However, native code instructions are provided only for Android, as Xcode (required for iOS native Swift code) was not available during development.

## Steps for Building the App

### 1. Creating the Expo App

### 2. Initializing EAS

### 3. Running the App

### 4. Configuring Prettier and ESLint

### 5. Configuring Tailwind CSS

### 6. Installing the GlueStack UI Library (optional)

### 7. Making Authentication with Supabase

Ensure you have the following installed:

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

\*\*NOTE:Before doing this first read Error 4 that is listed under this header. If you experience this error you need to:

- Delete Android folder again (if you already generated this using 'npx expo run:android')
- Delete Node_Modules
- run the command 'npm install'
- and then just run the app using 'npx expo start'\*\*

```bash
npx expo run:android
```

or, for iOS (if applicable):

```bash
npx expo run:ios
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
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
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
  "printWidth": 80,
  "endOfLine": "lf"
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

**NOTE:If you are going to make changes to the Eslint or Prettier you can do:npx prettier --write.**

### Configuring Tailwind CSS

Now we are going to configure Tailwind CSS. First we install the package:

```bash
npm install nativewind react-native-reanimated react-native-safe-area-context
npm install -D tailwindcss prettier-plugin-tailwindcss
```

Then we initialize Tailwind CSS by running:

```bash
npx tailwindcss init
```

This will create a `tailwind.config.js` file in the root of your project. Now in this file we need to include all the folders in which we want to use Tailwind CSS. So we edit the file like so:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"], // Put other paths here that contain Tailwind classes
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Then we need to create a Globals.css file in the root of your project with the following content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then we need to create a `babel.config.js` file in the root of your project with the following content:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

Then if not already existent we create/modify the `metro.config.js` file in the root of your project with the following content:

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

Then in our global `App.tsx` file we import the `Globals.css` file like so: (Now commonly you can import this global.css file in the \_layout.tsx file)

```javascript
import '@/global.css';

export default App() {
  /* Your App */
}
```

Then in the app.json we need to specify that we are using the metro bundler by adding the following contents:

```json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

Likely the expo -> web -> bundler is already there, so you just need to add the metro part.

Then lastly we need to configure the typescript part in the nativewind-env.d.ts file. If this file does not exist you can create it in the root of your project. Then we add the following content:

```typescript
/// <reference types="nativewind/types" />
```

Now what we can do is try this out making a simple component. So we create a new file in the components folder called 'ExampleComponent.tsx'. We create our components folder in the root of our project if it does not exist yet. The component contains the following code:

```javascript
import { View, Text } from "react-native";

export default function TestComponent() {
  return (
    <View className="bg-blue-500 p-4 rounded-xl">
      <Text className="text-white text-lg font-bold">
        NativeWind is working 🎉
      </Text>
    </View>
  );
}
```

Then we can import this component in our `app/index.tsx` file like so:

```javascript
import { Text, View } from "react-native";
import TestComponent from "@/components/TestComponent";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TestComponent />
    </View>
  );
}
```

Now start the app to see if the tailwind applies, using the command:

```bash
npx expo start
```

When opening the app you should see a blue box with the text "NativeWind is working 🎉" in white text.

### 6. Installing the GlueStack UI Library (optional)

NOTE: before doing this make sure you have committed all your changes because this might change some files in your project.

Now we can install the GlueStack Library which will help us in building our UI
Now this is optional, but if you want to use the GlueStack UI Library you can install it by running the following command:

```bash
npx gluestack-ui init
```

This command will install the GlueStack UI Library and create a `gluestack.config.js` file in the root of your project. This file contains the configuration for the GlueStack UI Library.

What you can see is that this changes the index.tsx file in the app folder. It adds the GlueStack UI Library provider to the app. So you can use the components from the GlueStack UI Library in your app.

We can see a UI library appearing in our components folder. This is the GlueStack UI Library which contains all the components that you can use in your app. You first have to download these so that you can use them. You do this by running the command:

```bash
npx gluestack-ui add <component-name>
```

You can import these components in your app like so:

```javascript
import { Button } from "@/components/ui/button";
```

They will then appear in your components folder. Now here we used the Box as an example but you can use any component from the GlueStack UI Library. You can find the list of components in the [GlueStack UI Library documentation](https://gluestack.io/ui/docs/components/all-components).

```bash
npx gluestack-ui add box
```

**NOTE: If you want to use the extension you should first type 'gs-<compenent-name>' because this will automcomplete the right component with the extension and insert it into your code.**

```javascript
import { Text, View } from "react-native";
import TestComponent from "@/components/TestComponent";
import { Box } from "@/components/ui/box";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TestComponent />
      <Box className="bg-blue-500 p-4 rounded"></Box>
    </View>
  );
}
```

Now you can find how to use the components in the website. In order to not have to specify each component on the imports like we are doing now, we will make an `index.tsx` file in the `components/ui` folder. This file will export all the components that you want to use in your app. So you can import them like so:

```javascript

```

Additionally we also install Lucide Icon library which is a library of icons that you can use in your app. You can install it by running the following command:

```bash
npx expo install lucide-react-native
```

**ERROR 6: Now in the Babel.config it could be that we are importing babel/nativewind twice, so delete on of them**

### Making Authentication with Supabase

Now we will be making authentication with Supabase. This is optional but recommended if you want to have a user management system in your app.
This will contain the following features:

- User registration
- User login
- User logout
- User profile management
- User password reset
- User email verification

To get started, you need to create a Supabase account and a new project. Follow these steps:

1. Go to [Supabase](https://supabase.com/) and create an account.
2. Create a new project and choose a name for your project.
3. Once your project is created, go to the "Authentication" tab and enable email authentication.
4. Go to the "Settings" tab and copy your `Project URL` and `ANON Key`. You will need these to connect your app to Supabase.

Now we will first install the suopabse package:

```bash
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage react-native-url-polyfill
```

Then we will create a new folder which is the utils folder. First we will make the lib folder. Then in the lib folder we create the utils folder. In this folder we create the file called `supabaseClient.ts`. This file will contain the configuration for the Supabase client. Add the following code to the file:

```typescript
import "react-native-url-polyfill/auto";
import storage from import storage from '@/lib/utils/storageMethod';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URL;
const supabaseAnonKey = YOUR_REACT_NATIVE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
```

Now as you can see we need the ANON Key and the URL. You can find these in the Supabase dashboard under the "Settings" tab. Replace `YOUR_REACT_NATIVE_SUPABASE_URL` and `YOUR_REACT_NATIVE_SUPABASE_ANON_KEY` with your actual values. We store these value's in our `.env` file. So we create a `.env` file in the root of our project and add the following content:

```env
REACT_NATIVE_SUPABASE_URL=YOUR_REACT_NATIVE_SUPABASE_URL
REACT_NATIVE_SUPABASE_ANON_KEY=YOUR_REACT_NATIVE_SUPABASE_ANON  _KEY
```

In order to use these values in our files we can do the following:

```typescript
const supabaseUrl = process.env.REACT_NATIVE_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_NATIVE_SUPABASE_ANON_KEY;
```

We display this by displaying the value's in out index.tsx file.
Now we will add the following files to our project which will contain our authentication logic:

- lib/utils/supabaseAuthoRefresh.ts
- context/AuthenticationContext.tsx

First in the utils folder we create the file called `supabaseAuthoRefresh.ts`. This file will contain the logic for refreshing the Supabase session. Add the following code to the file:

```typescript
// lib/supabaseAutoRefresh.ts
import { AppState } from "react-native";
import { supabase } from "./supabase";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
```

Additionally we need to create a file called `storageMethod.ts` in the lib/utils folder. This file will contain the storage method for the Supabase client. Add the following code to the file:

```typescript
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageType = {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
};

const WebStorage: StorageType = {
  getItem: (key) => Promise.resolve(window.localStorage.getItem(key)),
  setItem: (key, value) =>
    Promise.resolve(window.localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(window.localStorage.removeItem(key)),
};

const storage: StorageType = Platform.OS === 'web' ? WebStorage : AsyncStorage;

export default storage;
```
Now we do this because on web and on app there are different storage methods. On web we use the localStorage and on app we use the AsyncStorage. So we create a storage method that will work on both platforms.

Second you need to create a folder called `context` in the root of your project. In this folder we create the file called `AuthenticationContext.tsx`. This file will contain the context for the authentication state.
In this file we will create the functions that we need for our authentication logic. Thus this will be the following functions:

- `signUp`: for signing up a user
- `signIn`: for signing in a user
- `signOut`: for signing out a user
- `resetPassword`: for resetting a user's password

You can see the code for this in the authenticationContext.tsx file!

Now we need to configure some things in the Supabse dashboard:

1. Go to SQL Editor in the Supabase project dashboard.
2. Click on QuickStart in the side bar
3. Choose the User Management option

This will give you the following SQL code:

```sql
-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own profile." on profiles
  for update using ((select auth.uid()) = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');
```

Now as you can see this creates a profile for the user. We will make this profile when the user signs up. So we will use this in our `signUp` function in the `AuthenticationContext.tsx` file. We will also use the `auth.users` table to get the user information when the user signs in.

**NOTE: If you want to add extra fields to the profile you can do this by adding the fields to the `profiles` table in the SQL code.**

```SQL
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,
  // Add your extra fields here
```

Then you have to execute this query in the SQL editor in the Supabase dashboard. This will add the extra fields to the `profiles` table.

#### Using the Authentication Context

So Now we will be using the Authentication Context to wrap around the app so that you can only access the authentication functions in the app. We do this by wrapping the app in the `AuthenticationProvider` in the `app/_layout.tsx` file. This will make the authentication functions available in the whole app.

```javascript
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/context/authenticationContext";

import "@/global.css";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <AuthProvider>
        <Stack />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
```
##### Creating a Theme Context
While we are at it we will also create a theme for the app using a context. This will allow us to easily switch between light and dark mode in the app. We will create a `themeContext.tsx` file in the `context` folder. This file will contain the theme context and the functions to switch between light and dark mode.

We do this by creating a toggle function that will switch the theme between light and dark mode. We will also create a `ThemeProvider` that will wrap around the app in the `_layout.tsx` file. This will make the theme available in the whole app.

Now this is a tricky one because be will be using the `useColorScheme` hook to let nativewind handle dark and light mode. So meaning that the context provider will give us the functioanlity to change the theme with the toggle function. But we will not be using the context to change the theme. Instead we will be using the `useColorScheme` hook to let nativewind handle the dark and light mode. Now Nativewind automatically detect whether parent components of the app are dark or light mode. So we will be using the `useColorScheme` hook to detect the current theme and then apply the ThemeWrapper. We then wrap the ThemeWrapper around the app so that the nativewind will handle the dark and light mode automatically. We use the following code for this:

```javascript
// RootLayout.tsx

import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { AuthProvider } from '@/context/authenticationContext';
import { ThemeProvider, useTheme } from '@/context/themeContext';
import { ThemeWrapper } from '@/components/ThemeWrapper';

import '@/global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <InnerApp />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

// InnerApp is a child that consumes the theme context
function InnerApp() {
  const { colorScheme } = useTheme();

  return (
    // We still have to provide the light and dark mode to the GluestackUIProvider
    <GluestackUIProvider mode={colorScheme}>
      <AuthProvider>
        <Stack />
      </AuthProvider>
    </GluestackUIProvider>
  );
}

```

##### Creating Global types
Now we will create a global types file in the root of our project. This file will contain the types for the app. We will create a `global.d.ts` file in the `lib/utils/types` of our project. This file will contain the types for the app. We will also create a `globals.d.ts` file in the root of our project. This file will contain the global types for the app. In this file we will define all the types that we will use in the app. This will include the types for the user, profile, and theme. We will also create a `supabase.d.ts` file in the `lib/utils/types` folder. This file will contain the types for the Supabase client.

```typescript
export interface UserProfile {
  id: string; // UUID of the user
  updated_at: string; // Timestamp of the last update
  username: string; // Unique username for the user
  full_name?: string; // Full name of the user (optional)
  avatar_url?: string; // URL to the user's avatar image (optional)
  website?: string; // User's personal or professional website (optional)
}
```

This will be the profile type that we will use in the app. Now you can add more types just like this one in the `global.d.ts` file

##### Creating Protected Routes

In order to create the protected routes we will be creating two folders. One called: `àuth`, and one called `(app)`. The `auth` folder will contain the authentication routes and the `app` folder will contain the protected routes. We will be using the `useAuth` hook to check if the user is authenticated. If the user is not authenticated we will redirect the user to the login page.

In the `(app)/layout.tsx` file we will check if the user is authenticated by validating the session. If the user is not authenticated, we will redirect the user to the login page. We will also create a `DefaultHeader.tsx` file in the `components` folder which will be used as the default header for the app. This will be explained in a later section.

##### Pages

we will create all the pages that we need for the authentication. We will create the following pages in the `auth` folder:

- `login.tsx`: for the login page
- `register.tsx`: for the registration page
- `reset-password.tsx`: for the password reset page
- `verify-email.tsx`: for the email verification page
  We will also create a `components` folder in the `auth` folder which will contain the components for the authentication pages. This will contain the following components:
- `RegisterForm.tsx`: for the registration form
- `ProfileForm.tsx`: for the profile form

Now in these files we will be using the functions from the `AuthenticationContext.tsx` file to handle the authentication logic. For example, in the `login.tsx` file we will use the `signIn` function to sign in the user. Take a look in the `auth` folder to see how the files are structured and how the authentication logic is implemented.

##### Folders

we need to create the `(app)` folder in which will again create another `_layout.tsx`. This will check whether the user is authenticated by validating the session. If the user is not authenticated, it will redirect the user to the login page.

```javascript
import { useAuth } from "@/context/authenticationContext";

const { session, loading } = useAuth();

// Redirect to login if not authenticated
useEffect(() => {
  if (!loading && !session) {
    router.replace("../auth/login"); //You route might differ
  }
}, [loading, session]);
```

At the same time we also create the (tabs) filder in which we will create the tabs for the app. This will contain the following files:
- `index.tsx`: for the home page
- `profile.tsx`: for the profile page
- and any other additional pages that you want to add to the tabs.

In the `_layout` in the tabs you can see by the comment how you are able to add another tab to the. Now for any other additional other pages which you don't want to add to the tabs/ navigation bar, we can just put them in the (app) folder. This will make them accessible via the URL but not via the navigation bar.

##### Login Page
On the login page we will define the `useAUth` hook to access the authentication functions. We will create a form that allows the user to enter their email and password. When the user submits the form, we will call the `signIn` function from the `AuthenticationContext.tsx` file to sign in the user.

##### Sign Up Page
On the sign-up page we will also define the `useAuth` hook to access the authentication functions. We will create a form that allows the user to enter their email, password, and other profile information. When the user submits the form, we will call the `signUp` function from the `AuthenticationContext.tsx` file to sign up the user.

This is a little different from the login page because we will also create a profile for the user in the `profiles` table in the Supabase database. We will use the `supabase.from("profiles").insert()` function to insert the profile information into the `profiles` table. Because when the user signs up, we want to create a profile for the user in the `profiles` table. We will also use the `signIn` function to sign in the user after they have signed up.

If the user decides not to finish their registration, we will not create a profile for the user. We will also handle the case where the user already exists in the database. If the user already exists, we will show an error message to the user.

**NOTE: Now for the Connecting the Sign Up the flow is logic. We create an account first and then move to the additional profile info. If people anbandon this profile filling in details, you still have their email. We can use this to send emails about their account not being finished**

##### Forgot Password Page
On the forgot password page we will also define the `useAuth` hook to access the authentication functions. We will create a form that allows the user to enter their email. When the user submits the form, we will call the `resetPassword` function from the `AuthenticationContext.tsx` file to send a password reset email to the user. This will send an email to the user with a link to reset their password.

##### Reset Password Page
Now for the reset password page we need to define the route in our supabase project on the dashboard. We do this by going to the "Authentication" tab and then to the "URL Configuration" tab. Here we can set the redirect URL for the password reset page. This is the URL that the user will be redirected to when they click on the link in the password reset email. We will set this to the URL of our app's reset password page.

Then what we need to add to our `app.json` is enabling the deep link funtionality. This will allow us to handle the deep link when the user clicks on the link in the password reset email. Deep link is a way to link to a specific page in your app from an external source, such as an email or a website. We will add the following code to our `app.json` file:

```json
{
  "expo": {
    "scheme": "your-app-scheme",
    "platforms": ["android", "ios"],
    "deepLinking": true,
    "deepLinks": ["expoapptemplate://"],
  }
}
```

On the reset password page we will also define the `useAuth` hook to access the authentication functions. We will create a form that allows the user to enter their email. When the user submits the form, we will call the `resetPassword` function from the `AuthenticationContext.tsx` file to reset the user's password. This will send an email to the user with a link to reset their password.

##### Verify Email Page
On the verify email page we will also define the `useAuth` hook to access the authentication functions. We will create a form that allows the user to enter their email. When the user submits the form, we will call the `verifyEmail` function from the `AuthenticationContext.tsx` file to send a verification email to the user. This will send an email to the user with a link to verify their email address.

#### Default Header

We will create a default header component to replace the current header. This heade rlives in the component folder and will be used to replace the standard header in the app. You can customize this header to your liking. The header will contain the following features:

- A title for the app
- A button to navigate to the profile page
- Button to navigate to the Direct Messages page

And the file is called the `DefaultHeader.tsx`. We will specify this header in the `_layout.tsx` file in the `(app)` folder. This will make the header available in all the pages in the app.

```javascript
<Stack
  screenOptions={{
    header: () => <DefaultHeader />,
    headerShown: true,
  }}
>
```

