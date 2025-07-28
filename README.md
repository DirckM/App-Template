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

Now you can find how to use the components in the website. In order to not have to specify each component on the imports like we are doing now, we will make an `index.tsx` file in the `components/ui` folder.

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
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const storage: StorageType = Platform.OS === "web" ? WebStorage : AsyncStorage;

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

Now we need to configure the other tables in the Supabase. Now you can choose your own ORM to define a schema that we can upload to Supabase. What we will be using for this app is Drizzle. In order to set up the Drizzle ORM we move to the next chapter

##### Setting up Drizzle

Now there are a view things to note here before we get started. During the making of this tutorial I choose the User Management QuickStart, which you should not do when you want a blank project. What this does it creates all these triggers and policies which are going to be dependent on the `auth` table. This will cause it to fail when sending requests to the database because these triggers and policies do not contain the fields that you need for your custom DB setup. So make sure you delete these first.

Now in order to set up Drizzle we go to our root and create a `db` folder. In this folder we will create the files

- `schema.ts` (Will define the DB schema and export the db types (yes this is possible))
- `drizzle.ts` (This will connect out Drizzle with Supabase)
- `drizzle.config.js` (setup the connection with the database, make this in the root of your project)

Now what Drizzle Basically does is it wraps Supabase. So since Supabase doesn't handle direct types from the DB and handle querues better. So what we want to do is define our schema in the schemma.ts. Then we want to connect the app with supabase in the drizzle.ts and then lastly in the drizzle.config.js we will configure drizzle preferences.

Now we have the following commands we need to run in order to get the right dependencies:

```bash
npm i drizzle-orm
npm i -D drizzle-kit
npm i postgres
```

##### Step 1: Create the Database Schema

First, let's create our database schema in `db/schema.ts`:

```typescript
import { pgTable, text, timestamp, date } from "drizzle-orm/pg-core";

// Profile table
export const profiles = pgTable("profiles", {
	id: uuid("id").primaryKey(),
	username: text("username").unique(),
	firstname: text("firstname"),
	lastname: text("lastname"),
	bio: text("bio"),
	profile_image_url: text("profile_image_url"),
	country: text("country"),
	date_of_birth: date("date_of_birth"),
	created_at: timestamp("created_at").defaultNow().notNull(),
	updated_at: timestamp("updated_at").defaultNow().notNull(),
});

// Export types
export type Profile = typeof profiles.$inferSelect;
```

Now as you can see we are exporting the `profiles` table and the `Profile` type. This will allow us to use the `Profile` type in our queries and ensure type safety.

**NOTE: The names of the columns should be snake_case, oitherwise it won't work**

##### Step 2: Create Database Connection

Next, create the database connection in `db/drizzle.ts`:

```typescript
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";

// For client-side usage, we'll use the public Supabase client
// The database URL is only needed for migrations and server-side operations
const databaseUrl = process.env.SUPABASE_DATABASE_URL || "";

const client = postgres(databaseUrl, {
	max: 1,
	idle_timeout: 20,
	connect_timeout: 10,
});

export const db = drizzle(client, { schema });
export * from "./schema";
```

##### Step 3: Configure Drizzle

Create the Drizzle configuration in `drizzle.config.js`:

```javascript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./db/schema.ts",
	out: "./db/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.SUPABASE_DATABASE_URL || "",
	},
});
```

##### Step 4: Set Up Environment Variables

Create a `.env` file in your project root with your Supabase database URL:

```env
# Supabase Configuration
EXPO_PUBLIC_REACT_NATIVE_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_REACT_NATIVE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Database URL for Drizzle ORM (for migrations and server-side operations)
# Format: postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
SUPABASE_DATABASE_URL='postgresql://postgres:your_password@db.your_project_ref.supabase.co:5432/postgres'
```

You can find the project reference URL in supabase under: Database -> connect (button in the header) -> ORM -> selecting the Drizzle tool -> Copy the URL and put it in your .env (and don't make it public)

**To find your Supabase database URL:**

1. Go to your Supabase Dashboard → Settings → Database
2. Copy the "Connection string" (URI format)
3. Replace `[YOUR-PASSWORD]` with your actual database password

##### Step 5: Add NPM Scripts

Add these scripts to your `package.json`:

```json
{
	"scripts": {
		"db:generate": "drizzle-kit generate --config=drizzle.config.js",
		"db:migrate": "drizzle-kit migrate",
		"db:push": "drizzle-kit push",
		"db:studio": "drizzle-kit studio"
	}
}
```

##### Step 6: Create Query Classes

Create a queries file for your database operations in `lib/queries/profile.ts`:

```typescript
import { db } from "@/db/drizzle";
import { profiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { Profile, NewProfile } from "@/db/schema";

export class ProfileQueries {
	// Get profile by user ID
	static async getProfile(
		userId: string
	): Promise<{ success: boolean; data?: Profile; error?: any }> {
		try {
			const result = await db
				.select()
				.from(profiles)
				.where(eq(profiles.id, userId));

			if (result.length === 0) {
				return { success: true, data: undefined };
			}

			return { success: true, data: result[0] };
		} catch (error) {
			console.error("Error fetching profile:", error);
			return { success: false, error };
		}
	}
```

##### Step 7: Generate Migrations

If you want to track schema changes with migrations:

```bash
npm run db:generate
```

This creates migration files in the `db/migrations` folder that you can version control. This will make sure to apply only the migrations that are not yet applied to the database.

Now in order to actually apply the migrations to the database you can run the following command:

```bash
npm run db:migrate
```

This will apply the migrations to the database. If you want to push the schema to the database without creating a migration file. This is useful for tracking the changes you made in the database schema throughout the development process.

Evert time you make changes to the `schema.ts` file, you can again generate and migrate to apply the changes to the database.

NOTE: It is good to notice that when running the migrations you get this green output, now this is not an error but output given by postgres. This looks somewhat like this:

```bash
[⣯] applying migrations...{
  severity_local: 'NOTICE',
  severity: 'NOTICE',
  code: '42P06',
  message: 'schema "drizzle" already exists, skipping',
  file: 'schemacmds.c',
Reading config file 'C:\Users\marin\Documents\10_Projecten\01_programmeer_projecten\TEMPLATES\APP_TEMPLATE\App-Template\expo-app-template\drizzle.config.js'
Using 'postgres' driver for database querying
[⣯] applying migrations...{
  severity_local: 'NOTICE',
  severity: 'NOTICE',
  code: '42P06',
  message: 'schema "drizzle" already exists, skipping',
  file: 'schemacmds.c',
Using 'postgres' driver for database querying
[⣯] applying migrations...{
  severity_local: 'NOTICE',
  severity: 'NOTICE',
  code: '42P06',
  message: 'schema "drizzle" already exists, skipping',
  file: 'schemacmds.c',
  severity_local: 'NOTICE',
  severity: 'NOTICE',
  code: '42P06',
  message: 'schema "drizzle" already exists, skipping',
  file: 'schemacmds.c',
  line: '132',
  message: 'schema "drizzle" already exists, skipping',
  file: 'schemacmds.c',
  line: '132',
  routine: 'CreateSchemaCommand'
}
  line: '132',
  routine: 'CreateSchemaCommand'
}
  routine: 'CreateSchemaCommand'
}
{
{
  severity_local: 'NOTICE',
  severity: 'NOTICE',
  code: '42P07',
  message: 'relation "__drizzle_migrations" already exists, skipping',
  file: 'parse_utilcmd.c',
  line: '207',
  routine: 'transformCreateStmt'
}
```

In order to display whay is looks like when we have actually applied a migration, mae changes to the DB again, and apply another migration. You can do this by adding a new column to the `profiles` table in the `schema.ts` file. For example, add a `test` column:

```typescript
export const profiles = pgTable("profiles", {
	id: text("id").primaryKey(), // This will reference Supabase auth.users.id
	username: text("username").unique().notNull(),
	firstname: text("firstname").notNull(),
	lastname: text("lastname").notNull(),
	bio: text("bio"),
	profileImageUrl: text("profile_image_url"),
	country: text("country"),
	dateOfBirth: date("date_of_birth"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	test: text("test").default("test"),
});
```

Then we ran the `generate` command again and after that we made the `migrate command`

Now we will be making a trigger that will automatically call a function to make an entry in the profiles table for every user created. This will make sure that every user has a profile entry in the database. We will do this by creating a function in the Supabase SQL editor;

```sql
-- inserts a row into public.profiles
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$;
-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

Also we need to create a policy that allows the user to update their own profile and see their own profile. We can do this by running the following SQL commands in the Supabase SQL editor:

```sql
CREATE POLICY "Users can read their own profile"
ON public.profiles
FOR SELECT
USING (id = auth.uid());
```

If you don't do this the user will continiously be redirected to the complete profile screen when they try to access their own profile. This is because the user does not have permission to read their own profile.

##### Step 9: Use in Your App

Now you can use your Drizzle queries in your components:

```typescript
import { ProfileQueries } from "@/lib/queries/profile";

// Example usage in a component
const handleCreateProfile = async () => {
	const result = await ProfileQueries.createProfile({
		id: userId,
		username: "john_doe",
		firstname: "John",
		lastname: "Doe",
		bio: "Hello world!",
	});

	if (result.success) {
		console.log("Profile created:", result.data);
	} else {
		console.error("Error:", result.error);
	}
};
```
##### 10. Creating normal functions and triggers
Now we might want to creat some triggers and functions that insert, delete or update data when a particulat action is happening. We define this with SQL and will do this in our drizzle schema. 

##### 11. Creating Edge functions (optional)
It is good to understand edge functions before you try to implement them. Basically what they are is the following:

Edge Functions are serverless functions written in JavaScript or TypeScript that run outside your database, at the network edge (close to users). They allow you to implement backend logic, APIs, or integrations that execute securely and with low latency.

We will provide an example with what edge functions can do. So let's have the situation where if a user signs up to your platform, you want to send them an email. Now this might go through a third party service wherefor you need to set a private API key which you don't want to expose to the client app. You can then use an edge function to send this email instead of doing it in the app.

Now you can manually do this but then they won't live in the codebase and are undocumented. So what you want is to have a these documented in your codebase. What we will do to keep this ordered is eventually have the following structure:

- creating a supabase folder -> here the edge functions will be stored

What we first will do is check for the presence of the Supabase CLI which we probably have not yet installed for the project:

```bash
nxp supabase --version
```

If this doesn't return a function than we need to download it first:

```bash
npm install supabase
```

(This installs it for the project)

Then what we do is check for the version to see if it again is installed (see the previous command)

Now we will create a `supabase.config.json` in which we will have to specify that we are using the folder `supabase/functions` folder as the place where we store the functions

```json
{
	"functions": {
		"root": "./supabase/functions"
	}
}
```

Then we need to create the `supabase` folder and the `functions` folder in which we will put the functions. We do this by running the following command:

```bash
mkdir -p supabase/functions
```

Now we can start by making our first functions here. How we make function goes as follows:

- We run the command:

```bash
npx supabase functions new <function name>
```

This will automatically create a config and .temp file in your supabase folder which supabase uses. Now for an example we will use the hello world example. So what you can do is type

```bash
npx supabase functions new hello-world
```

This will make a hello-world function which includes an index.ts file with the following code:

```typescript
Deno.serve(async (req) => {
	const { name } = await req.json();
	const data = {
		message: `Hello ${name}!`,
	};
	return new Response(JSON.stringify(data), {
		headers: { "Content-Type": "application/json" },
	});
});
```

As you can see we created a function in the supabase folder called `hello-world`. In this folder we created the index.ts and with the test function in it. Now in order to actually apply the changes to the DB we use the following command:

```bash
npx supabase functions deploy <name-of-function-folder>
```

so in the case of the `hello-world` we do:

```bash
npx supabase functions deploy hello-world
```

Now it will first prompt you to log into your supabase account but then you can atually do deploy the function. Now what you can do is you can call this function using your postman or just in your app. You do have to provide authentication so that is why in your postman you do have to verify the session, so you can do this if you are balls deep into testing or just test it in your app directly

**That's it!** Your Drizzle ORM is now fully set up and connected to your Supabase PostgreSQL database. You can now write type-safe database queries with full TypeScript support.

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

import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/context/authenticationContext";
import { ThemeProvider, useTheme } from "@/context/themeContext";
import { ThemeWrapper } from "@/components/ThemeWrapper";

import "@/global.css";

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
export interface TypeName {}
```

This will contain types that we can use globally in the app. Now note that when you need a DB type you can import it from the `db/schema.ts` file. For example, if you want to use the `Profile` type you can do the following. We saw this in the drizzle installation.

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
		"deepLinks": ["expoapptemplate://"]
	}
}
```

On the reset password page we will also define the `useAuth` hook to access the authentication functions. We will create a form that allows the user to enter their email. When the user submits the form, we will call the `resetPassword` function from the `AuthenticationContext.tsx` file to reset the user's password. This will send an email to the user with a link to reset their password.

Now the link that we are sending to our user contains the following:

- `"{{ .SiteURL }}/auth/reset-password?token_hash={{ .TokenHash }}&type=recovery"`

The code for generating this token hash is the following:

```typescript
const handleReset = async () => {
	// Check for valid email format
	if (!validateEmail(email)) {
		setErrorMsg("Please enter a valid email address.");
		return;
	}

	const redirectTo =
		"web" == "web"
			? "http://localhost:8081/auth/reset-password"
			: "expoapptemplate://reset-password";

	setErrorMsg("");
	const { success, error } = await resetPassword(email, {
		redirectTo: redirectTo,
	});

	if (success) {
		setSubmitted(true);
	} else {
		setErrorMsg(error?.message || "Something went wrong");
	}
};
```

As you can see we are not neccessarrily parsing any token but this does get put into the reset password when we are sending the supabase request to include this hash token into the request. Now in the reset password function we have the ability to verify the user session with this token throught th e following code:

```typescript
const { error } = await supabase.auth.verifyOtp({
	type: type as any,
	token_hash: token_hash as string,
});
```

**NOTE: Do not forget to modify the email template in supabase**

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

## Implementing the rest of your App

Now we have successfully done all the steps for you to implement the rest of your app. Things that you might do in the making of this app is the following:

- Implement other tables in Supabase
- Implement other pages

In the following chapter we will be discussing these

### Implementing New Tables

Now let's say you are building a social media platform. Currently, we have the `Authentication` table and the `Profile` table. What you want to do next is draw a thoughtful diagram of your database and then decide which tables to implement first.

In this case, we’ll add a `Following` table to simulate the "follow" feature common in social media apps.

Now notice that in UML (Unified Modeling Language) or object-oriented design terms, the `Following` table is an **association class**.

Why?

- It associates two instances of the same class (`Profile`) — one as the follower, and the other as the followed.
- It also contains additional data, like `followed_at`, which is metadata about the relationship itself.
- In object-oriented modeling, when a many-to-many relationship includes extra attributes, the connecting entity is called an **association class**.

---

### 🛠️ Creating a New Table in Supabase

In Supabase, go to the "Tables" section of your project and click **Create a New Table**. You'll see several fields and options. Let’s walk through each of them:

---

#### 🏷️ Name

This is the name of your table.  
For example: `following`.

> ⚠️ Table names should be lowercase and usually plural (`followings`) unless you prefer singular. Just be consistent.

---

#### 📝 Description

Add an optional description for your table.  
Example:

> Tracks the relationship between profiles where one user follows another.

---

#### 🔒 Enable Row Level Security (RLS)

This determines if access to individual rows in the table can be restricted based on policies.

**Recommendation**: ✅ Enable RLS  
This is crucial for user-level privacy and access control. You’ll write policies later to define who can read or write data.

---

#### 📡 Enable Realtime

This enables broadcasting changes (inserts, updates, deletes) to authorized clients in real-time.

**Recommendation**: ✅ Enable if your app uses live updates (e.g., follower count, notifications).

---

#### 📊 Columns

In this section, you define the fields of your table. For the `Following` table, your basic structure might look like this:

| Column Name   | Type      | Notes            |
| ------------- | --------- | ---------------- |
| `follower_id` | UUID      | FK → Profile ID  |
| `followed_id` | UUID      | FK → Profile ID  |
| `followed_at` | Timestamp | Default: `now()` |

##### 🔗 Link Icon Next to Column Name

Clicking this lets you define a **foreign key** relationship — useful when `follower_id` and `followed_id` should link to the `Profiles` table.

When you click the link icon next to a column name, a menu appears that walks you through setting up the relationship. The first step is:

---

###### 🔍 Select a Schema

This defines which schema your reference table lives in. Common schemas include:

- **public** – The default schema where most of your tables (like `profiles`) live.
- **realtime** – Used internally for broadcasting real-time updates via Supabase’s subscription features.
- **auth** – Contains user-related tables such as `users` for authentication.
- **storage** – Stores metadata about files in Supabase’s storage system.
- **graphql** – Used internally for Supabase's GraphQL API interface.
- **graphsql_public** – A variant schema used for exposing public GraphQL queries.
- **vault** – Stores encrypted or sensitive data.
- **pgbouncer** – A system schema related to database connection pooling.
- **extensions** – Contains installed PostgreSQL extensions.

> ✅ Since we created our `profiles` table in the **public** schema, we’ll select that one.

---

###### 📄 Select the Target Table

After choosing the schema, you'll pick the table that contains the rows you want to reference — in our case, the `profiles` table.

---

###### 📌 Select Column to Reference

Now choose the **column** in the target table you want to link to. Usually, this will be the `id` column from the `profiles` table, since `follower_id` and `followed_id` are meant to refer to user IDs.

---

###### 🔄 On Update & Delete Actions

Define what should happen to your row when the **referenced row** in the `profiles` table is updated or deleted:

- **No Action** – Do nothing.
- **Restrict** – Prevent deletion or update if it's still referenced.
- **Set Null** – Set the referencing column to `NULL`.
- **Set Default** – Set the referencing column to its default value.
- **Cascade** – Automatically delete or update referencing rows.

> 💡 For our `follows` table, we choose **CASCADE** for `ON DELETE`. That way, if a profile is deleted, any rows where it was a follower or being followed will also be cleaned up automatically.

##### 🔠 Type

Choose the appropriate data type (e.g., `UUID`, `Timestamp`, `Text`, etc.)

##### 🧩 Default Value

Use for auto-generated values.  
Example: `followed_at` might default to `now()`.

##### 🔑 Primary

Check this box to make the column a primary key.  
In this case, you’ll usually set a **composite primary key** on both `follower_id` and `followed_id`.

---

#### 🔗 Foreign Keys

This is where you define relationships between tables.

##### Add a Foreign Key Relation

For each of these:

- `follower_id` → references `profiles.id`
- `followed_id` → references `profiles.id`

> These links help Supabase maintain data integrity and enable advanced queries with joins.

Now what we can do is insert things into this table using the following typescript code:

```typescript
const handleFollow = async () => {
	const { data, error } = await supabase
		.from("follows")
		.insert([{ follower_id: followerId, followed_id: followedId }]);

	if (error) {
		Alert.alert("Error", error.message);
		console.error("Insert error:", error);
		return;
	}

	Alert.alert("Success", "You are now following this user!");
	console.log("Insert success:", data);
};
```
