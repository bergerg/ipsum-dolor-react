# Ipsum - Dolor - React

By Gal Berger <galbac@gmail.com>

#### Quick intro

This client-server application was created with the Scala Play Framework and React.js.
Basic functionality is:
1. Backend fetches the comments depending on the _postId_ input.
2. Frontend displays and filters the comments according to inner state.

#### Prerequisites

* [Node.js](https://nodejs.org/)
* [scala](https://www.scala-lang.org/download/)
* [sbt](https://www.scala-sbt.org/download.html)

#### Bootstrap and run

1. Choose a directory in your system and clone into this repository.
2. Follow these commands:
```sh
$ cd ipsum-dolor-react/ && sbt compile
$ cd ui/ && npm install
$ cd ../ && sbt run
```
3. Your default web browser will open on http://localhost:3000

#### Closing

In terminal, where the `sbt run` command is running, stop the web-server by pressing `Ctrl-C`
