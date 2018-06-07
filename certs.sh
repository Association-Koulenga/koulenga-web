#!/usr/bin/env bash

CERTS_DIR="${PWD}/certs"
KEY_SIZE=4096

openssl req -x509 -out "${CERTS_DIR}"/localhost.crt -keyout "${CERTS_DIR}"/localhost.key \
  -newkey rsa:${KEY_SIZE} -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <(printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
