#!/bin/bash

# initialize express server
echo "[scratch] initializing express server ..."
cd api 
yarn start &
cd ..

# initialize react client
echo "[scratch] initializing react client ..."
cd client 
yarn start &
cd ..

echo "[scratch] finished!"