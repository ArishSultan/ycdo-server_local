/**
 * A Message that is sent from one of the local branch servers to
 * request the change in the global database.
 *
 * After committing the changes in the global database, this message
 * is then broadcasted over the websocket to all the connected
 * local servers
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export class IMessage {
  /**
   * The user who requested a data change in the local server.
   *
   * @since 1.0.0
   */
  user: string

  /**
   * The branch from which the request was sent.
   *
   * @since 1.0.0
   */
  branch: string

  /**
   * It determines what action was requested on the database.
   * @values delete, update, insert
   *
   * @since 1.0.0
   */
  action: string

  /**
   * An additional message to elaborate the action
   * NOTE: All the messages are hardcoded by the developer.
   *
   * @since 1.0.0
   */
  message: string

  /**
   * The data that is sent to the server. It is non null in case the
   * `action` is `insert` or `update`
   *
   * @since 1.0.0
   */
  data: any

  /**
   * The collection in which the change is to be made.
   *
   * @since 1.0.0
   */
  collectionName: string
}
