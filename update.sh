#!/bin/bash
cd /Documents/appNode/
git checkout Deployment
git pull
sudo systemctl restart appNode.service