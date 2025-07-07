# App-Template
This repo is meant to provide a template for quickly building apps. It implements the standard authentication necessary and gets you started right away with making the content of your apps. I refer to the README for further instructions


# Dependencies
The dependencies that we will be using in this project are listed below. It is very important to thus check whether the documentation for these dependencies is still relative to the packages installed. In this README I will have a full guide to making this template so that you can repeat this process yourself. I will include all the relevant links to the documentation so that you can check it yourself

## Packages Used
- Node.js: https://nodejs.org/en
- React Native (JS framework that allows you to build mobile apps using React)
- Expo (EAS): https://docs.expo.dev/tutorial/eas/introduction/
- Tailwind / NativeWind: https://www.nativewind.dev/
- TypeScript
- Eslint: https://eslint.org/
- Prettier: https://prettier.io/
- GlueStack UI Library (optional): https://gluestack.io/
- Supabase User Management System (optional): https://supabase.com/


## Adviced additionals
- Expo Orbit (used to manage and run expo apps): https://expo.dev/orbit

! NOTE: Before we proceed you should know that this build is supported for both IOS and ANDROID but that Native Code is only explained in ANDROID since during the devlopment of this Repo, there was no access to the XCODE platform which would enable us to write native SWIFT code


# STEPS FOR MAKING THE APP

## Making the EXPO app
For making our expo app we will be going to the expo website to launch our project. Now here we have to make some considerations:
- Do we want to make an app that implements native code to get native functionality (such as retreiving screen time data)

If yes then we have to go with Expo EAS (Expo Application Service), if not we have to go with Expo Classic. For this app we will be using the EAS verion because EAS can do everthing that the Expo can do but more. Here are some functionalities that EAS had and Expo has not:
- Adding apps to the AppStore and PlayStore
- Build Custome native code
- Custom development clients

On the websit of the EAS tutorial they specifiy the first command to be downloading the dev-client for your project. The problem is that we actually first have to make our expo project and then we will enable EAS for it. So First we will make an actual EXPO project:

```cmd
npx create-expo-app@latest your-app-name
```

When we run this command we already have some things included in our download:
- Creates a new React Native project with expo package installed
- Includes recommended tools such as Expo CLI
- Includes a tab navigator from Expo Router to provide a basic navigation system
- Automatically configured to run a project on multiple platforms: Android, iOS, and web
- TypeScript configured by default (important)

So notice that we don't have to configure typescript anymore when we do this!

Now this created expo-app contains boiler plate code which we want to get rid of so we run the command:
```cmd
npm run reset-project
```

This removes the boiler plate code and puts it in the folder: app-example

