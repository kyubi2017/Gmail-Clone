import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selecteMail: null,
    sendMessageIsOpen: true,
  },

  reducers: {
    selecteMail: (state, action) => {
      state.selecteMail = action.payload;
    },
    openSendMessage : state => {
      state.openMessageIsOpen = true;
    },
    closeSendMessage : state => {
      state.openMessageIsOpen = false;
    },
  },
});

export const {
  selecteMail,
  openSendMessage,
  closeSendMessage
} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selecteMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
