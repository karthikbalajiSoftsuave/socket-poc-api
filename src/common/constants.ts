export const CONSTANT_MESSAGE = {
    STATUS: {
        SUCCESS: 'success',
        ERROR: 'error'
    },
    MESSAGE: {
        SOMETHING_WENT_WRONG: 'Something went wrong',
        SUCCESSFULLY_FETCHED: 'Successfully fetched',
    },
    USER: {
        CREATE: "User Created successfully!"
    },
    THESIS:{
          CREATE: "Thesis Created successfully!",
          UPDATED: "Thesis Created successfully!",
    }

};
export const PATHS = {
    SOCKET: "/socket/review",
}

export const CUSTOM_EVENTS = {
    ADD_REVIEW_EVENT: "add-review",
    EDIT_REVIEW_EVENT: "edit-review",
    DELETE_REVIEW_EVENT: "delete-review",
    CREATE_ROOM: "create-room",

}

export const SOCKET_EVENTS = {
    CONNECTION: "connection",
    DISCONNECTION: "disconnect",
    JOIN_ROOM: "join-room",
    NEW_REVIEW: "new-review",
    ADD_REVIEW: "add-review"
}