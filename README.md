# CodeMash2019-Ionic
Resources from my talk "Building Mobile Applications with the Ionic Framework" at CodeMash 2019

Have you wanted to start developing mobile applications, but have found that selecting the right technology, framework, and language is overwhelming? Ionic provides a framework that allows developers to build applications using familiar web technologies in order to produce a native application experience for iOS, Android and Windows Phone. Unlike other frameworks that can be extremely expensive, Ionic is completely free and backed by a vibrant community of millions of developers who have used Ionic to build more than 5 million apps. This talk will provide a brief introduction to Ionic and will look at how to get started developing, testing and deploying your apps. We will also look at how to take advantage of native phone services using Ionic.

Steps to Run: 

1. Install Project Dependencies.  This will generate the node_modules folder

    npm install

2. Build the app with ionic build.  This will generate the www folder

    ionic build

3. To test the application in a local dev server, use ionic serve.  

    ionic serve

4. For deploying to iOS devices:

    ionic cap add ios

5. Open XCode for the iOS Project

    ionic cap open ios

6. For deploying to Android Devices

    ionic cap add android

7. Open Android Studio for the Android Project

    ionic cap open android
