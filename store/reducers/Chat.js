import { NEW_CHATMESSAGE } from "../actions/chat";
import { CHATROOM } from "../../data/dummy-data";

const initialState = {
  chatrooms: CHATROOM,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    // Call a new action creator, that you create, when clicking the button. Pass relevant info. in payload.
    // 1: find the right chatroom in the array and copy the chatmessages array.
    case NEW_CHATMESSAGE:
      const chatroom = state.chatrooms.find((room) => room.id === action.payload.chatroomId);
      const chatMessages = [...state.chatMessages, action.payload.message];

      // 2: Copy chatroom object and attach new chat array that you copied.
      const newChatroom = { ...chatroom };
      newChatroom.messages = chatMessages;
  }
};
