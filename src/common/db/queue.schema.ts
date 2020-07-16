import { Schema } from 'mongoose'

export const QueueSchema = new Schema(
  {
    /**
     * The user who requested a data change in the local server.
     *
     * @since 1.0.0
     */
    user: {
      type: String,
      ref: 'users',
      required: true
    },

    /**
     * The branch from which the request was sent.
     *
     * @since 1.0.0
     */
    branch: {
      type: String,
      ref: 'users',
      required: true
    },

    /**
     * It determines what action was requested on the database.
     * @values delete, update, insert
     *
     * @since 1.0.0
     */
    action: {
      type: String,
      required: true
    },

    /**
     * An additional message to elaborate the action
     * NOTE: All the messages are hardcoded by the developer.
     *
     * @since 1.0.0
     */
    message: {
      type: String,
      required: true
    },

    /**
     * The data that is sent to the server. It is non null in case the
     * `action` is `insert` or `update`
     *
     * @since 1.0.0
     */
    data: String,

    /**
     * The collection in which the change is to be made.
     *
     * @since 1.0.0
     */
    collectionName: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)
