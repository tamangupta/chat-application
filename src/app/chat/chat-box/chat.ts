export interface ChatMessage{
    chatId?: string,
    senderName : string,
    senderId : string,
    message : string,
    receiverName : string,
    receiverId : string,
    createdOn : Date 
}
// ? =optional parameter