#!/bin/bash

# shutdown express server
echo "[scratch] shutting down express ..."
kill -9 $(lsof -t -i:9000)

# shutdown react client
echo "[scratch] shutting down react ..."
kill -9 $(lsof -t -i:3000)