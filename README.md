# NativeScript JW Player

This plugin is provides an interface to use native jwplayer android/ios sdks in nativescript.

Register at [jwplayer.com](jwplayer.com) and get JWPlayer License Key for android and ios.

For Android Set it in AndroidManifest.xml's application meta-data file:

````xml
	<application
		android:name="com.tns.NativeScriptApplication"
		android:allowBackup="true"
		android:icon="@drawable/icon"
		android:label="@string/app_name"
		android:theme="@style/AppTheme">

		<activity
			android:name="com.tns.NativeScriptActivity"
			android:label="@string/title_activity_kimera"
			android:configChanges="keyboard|keyboardHidden|orientation|screenSize|smallestScreenSize|screenLayout|locale|uiMode"
			android:screenOrientation="portrait"
			android:theme="@style/LaunchScreenTheme">

			<meta-data android:name="SET_THEME_ON_LAUNCH" android:resource="@style/AppTheme" />

			<intent-filter>
				<action android:name="android.intent.action.MAIN" />
				<category android:name="android.intent.category.LAUNCHER" />
			</intent-filter>
		</activity>
		<activity android:name="com.tns.ErrorReportActivity"/>

        <!--TODO Set your license key-->
        <meta-data
            android:name="JW_LICENSE_KEY"
            android:value="YOUR_JW_LICENSE_KEY" />

        <meta-data
            android:name="com.google.android.gms.version"
            android:value="@integer/google_play_services_version" />
	</application>
````

For iOS set JW_LICENSE_KEY
```xml
<key>JWPlayerKey</key>
	<string>YOUR_JW_LICENSE_KEY/cl6q2erGINTWdsP96HFLNh2FbMUujW</string>
```



## Installation

From the command prompt go to your app's root folder and execute:

```bash
tns plugin add nativescript-jwplayer
```

## Usage

Typescript/Javascript with XML

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:jw="nativescript-jwplayer">
   <GridLayout>
    <jw:JWPlayer src="{{src}}" VideoPlayerEventsOnPlayEvent="{{VideoPlayerEventsOnPlayEvent}}"
        VideoPlayerEventsOnPauseEvent="{{VideoPlayerEventsOnPauseEvent}}"></jw:JWPlayer>
</GridLayout>
</Page>
```

Angular

in app.module.ts

```js
import { registerElement } from "@nativescript/angular";
registerElement("JWPlayer", () => require("nativescript-jwplayer").JWPlayer);
```

```html
<GridLayout>
  <JWPlayer
    [src]="src"
    (VideoPlayerEventsOnPlayEvent)="VideoPlayerEventsOnPlayEvent($event)"
    (VideoPlayerEventsOnPauseEvent)="VideoPlayerEventsOnPauseEvent($event)"
  ></JWPlayer>
</GridLayout>
```

## Demo apps

### NativeScript-Core (XML)

This demo is the one with the most options, so it's a cool one to check out:

```bash
git clone https://github.com/EddyVerbruggen/nativescript-local-notifications
cd nativescript-local-notifications/src
npm run demo.ios # or demo.android
```

### NativeScript-Angular

This plugin is part of the [plugin showcase app](https://github.com/EddyVerbruggen/nativescript-pluginshowcase/tree/master/app/feedback) I built using Angular.

There's also a simple Angular [demo in this repo](https://github.com/EddyVerbruggen/nativescript-local-notifications/tree/master/demo-ng):

```bash
git clone https://github.com/EddyVerbruggen/nativescript-local-notifications
cd nativescript-local-notifications/src
npm run demo-ng.ios # or demo-ng.android
```

## Plugin API

You can pass src property for video link and other details:

| option        | description              |
| ------------- | ------------------------ |
| `url`         | Video url to be played   |
| `title`       | Title of the video       |
| `description` | Description of the video |

wrap these properties in an object and pass it to the src.
