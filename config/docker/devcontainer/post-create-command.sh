#!/usr/bin/env zsh

set -e

# install npm

yarn install --frozen-lockfile --no-cache

## clean cache for removing size of image

yarn cache clean

# gatsby

yarn gatsby telemetry --disable

# Netlify

yarn netlify --telemetry-disable
