export ANDROID_HOME=/opt/android-sdk
sudo sdkmanager --sdk_root=$ANDROID_HOME --licenses
sudo chown -R $(whoami) $ANDROID_HOME
yarn android
