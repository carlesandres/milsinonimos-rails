#!/bin/bash

git add .
git commit -a -m 'More changes to schema.rb'
rake db:schema:dump
git diff master db/schema.rb > difs.txt
vim difs.txt
