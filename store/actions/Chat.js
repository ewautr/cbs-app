import User from "../../models/User";
import ChatMessage from "../../models/ChatMessage";

export const NEW_CHATMESSAGE = "NEW_CHATMESSAGE";

export const addToChats = (text, chatroomId) => {
  const tempUser = new User("1", "Felix Sandgren", "1234", "felix@sandgren.dk", "", "MSc in Medicine", true);
  const message = new ChatMessage(Math.random().toString(), new Date(), text, tempUser);

  return { type: NEW_CHATMESSAGE, payload: { message, chatroomId } };
};
