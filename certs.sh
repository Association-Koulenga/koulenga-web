#!/usr/bin/env bash

set -x

CERTS_DIR="${PWD}/certs"
KEY_SIZE="4096"
DOMAIN="localhost"
CERT="${DOMAIN}.crt"
KEY="${DOMAIN}.key"

openssl req -x509 -days 3650 -out "${CERTS_DIR}/${CERT}" -keyout "${CERTS_DIR}/${KEY}" \
  -newkey rsa:"${KEY_SIZE}" -nodes -sha256 \
  -subj '/CN='"${DOMAIN}" -extensions EXT -config <(printf "[dn]\nCN=%s\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:%s\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth" "${DOMAIN}" "${DOMAIN}")
