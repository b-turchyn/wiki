#!/usr/bin/env bash

# Retrieve scc if not present
BIN_PATH=$(dirname $(readlink -f "$(dirname "${BASH_SOURCE[0]}")/../"))

if [[ ! -x "${BIN_PATH}/scc" ]]
then
  curl -L -o "${BIN_PATH}/scc.zip" https://github.com/boyter/scc/releases/download/v3.2.0/scc_Linux_x86_64.tar.gz
  unzip -d "${BIN_PATH}" "${BIN_PATH}/scc.zip"
  if [[ -f "${BIN_PATH}/scc" && ! -x "${BIN_PATH}/scc" ]]
  then
    chmod +x "${BIN_PATH}/scc"
  fi

  echo "scc retrieved"
else
  echo "scc good to go!"
fi

"${BIN_PATH}/scc" -f html-table "${BIN_PATH}/docs" | tr -d "\t\r\n" > "${BIN_PATH}/loc.txt"
