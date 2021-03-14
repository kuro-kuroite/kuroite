#!/usr/bin/env zsh

set -e

echo "eval \$($(brew --prefix)/bin/brew shellenv)" >> ~/.zshrc
# source ~/.zshrc

# install
brew install git

brew install nodebrew
nodebrew setup

echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
# source ~/.zshrc
nodebrew install stable
nodebrew use $_

brew install yarn

# for ubuntu

apt update -y && \
  apt install -y build-essential \
  && rm -rf /var/lib/apt/lists/*

# for Storybook

## install Chrome

### pre

# FYI: https://hnakamur.github.io/blog/2018/05/04/install-chrome-using-apt-on-ubuntu-18.04/
brew install wget
cd /tmp

apt update -y && \
  apt install -y gpg-agent \
  && rm -rf /var/lib/apt/lists/*
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

### install

apt update -y && \
  apt install -y google-chrome-stable \
  && rm -rf /var/lib/apt/lists/*

### post

cd -

## for storycap

# FYI: https://github.com/reg-viz/storycap#run-with-docker
apt update -y && \
  apt install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
  libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
  libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
  libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
  ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget \
  && rm -rf /var/lib/apt/lists/*

## font

### emoji, Japanese font

# FYI: https://qiita.com/tomoyamachi/items/9452aead012e749a36d6#cypress%E7%94%A8dockerfile
apt update -y && \
  apt install --no-install-recommends -y fonts-noto-color-emoji fonts-noto fonts-noto-cjk \
  && rm -rf /var/lib/apt/lists/*

### Helvetica Neue font

#### pre

# FYI: https://qiita.com/ponsuke0531/items/db06599f92b234fbd062#%E3%81%BE%E3%81%9A%E3%81%AFos%E3%81%AB%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B
rm -rf ~/.fonts
mkdir ~/.fonts
cd ~/.fonts

#### install

wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-bold.ttf
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-bold.woff
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-italic.ttf
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-italic.woff
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-light.ttf
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-light.woff
# HACK: for medium
wget http://lethuy.asia/public/fonts/HelveticaNeue-Medium.otf
npx sfnt2woff HelveticaNeue-Medium.otf
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-thin.ttf
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-thin.woff
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-ultralight.ttf
wget https://github.com/Vizzuality/growasia_calculator/raw/master/app/assets/fonts/helveticaneue-ultralight.woff
# HACK: for regular
wget http://lethuy.asia/public/fonts/HelveticaNeue.otf
npx sfnt2woff HelveticaNeue.otf

#### post

fc-cache -fv
cd -

# for Cypress

## install Chrome (Option)

### already (in Storybook)

## install

# FYI: https://docs.cypress.io/guides/getting-started/installing-cypress.html#Linux
apt-get update && \
  apt-get install --no-install-recommends -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libgbm-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  && rm -rf /var/lib/apt/lists/*

# post

brew cleanup
brew doctor
