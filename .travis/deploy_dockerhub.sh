#!/bin/sh
docker login -u $DOCKER_USER -p $DOCKER_PASSWORD
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi
docker build -f Dockerfile -t $DOCKER_IMAGE:$TAG .
docker tag $DOCKER_IMAGE docker.io/$DOCKER_USER/$DOCKER_IMAGE:$TAG 
docker push docker.io/$DOCKER_USER/$DOCKER_IMAGE:$TAG