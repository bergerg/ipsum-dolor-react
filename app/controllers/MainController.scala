package controllers

import scala.concurrent._
import scala.concurrent.duration._
import scala.util.{Success, Failure}

import play.api.libs.ws._
import play.api.http.HttpEntity

import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import akka.stream.scaladsl._
import akka.util.ByteString

import scala.concurrent.ExecutionContext
import scala.concurrent.ExecutionContext.Implicits.global

import javax.inject._
import play.api._
import play.api.mvc._
import play.api.libs.json._

@Singleton
class MainController @Inject()(ws: WSClient, ec: ExecutionContext, cc: ControllerComponents) extends AbstractController(cc) {

  def getComments(postId: String) = Action.async { implicit request: Request[AnyContent] =>
    val url = s"https://jsonplaceholder.typicode.com/comments"
    val request: WSRequest = ws.url(url)
      .addHttpHeaders("Accept" -> "application/json")
      .addQueryStringParameters("postId" -> postId)
      .withRequestTimeout(10000.millis)
    val futureResponse: Future[JsValue] = request.get().map {
      response => response.json
    }
    futureResponse.map {
      commentsJson => Ok(commentsJson)
    }
  }
}
