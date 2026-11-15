#!/bin/sh
mkdir -p /tmp/triaggent-test-mail
mail_file="$(mktemp /tmp/triaggent-test-mail/message.XXXXXX)" || exit 1
cat > "$mail_file"
