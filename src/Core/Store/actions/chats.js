import { RSAA, getJSON } from 'redux-api-middleware';

export const loadChats = id => ({
    [RSAA]: {
        endpoint: `/api/chats/${id}/`,
        method: 'GET',
        types: ['LOAD_CHATS_REQUEST', {
            type: 'LOAD_CHATS_SUCCESS', payload: async (action, state, response) => {
                const res = await getJSON(response);
                return { data: JSON.parse(res) }; //action.payload.data
            },
        }, 'LOAD_CHATS_FAILURE']
    }
});

export const getActiveChat = url => ({
    type: 'GET_CHAT_ID',
    // payload: {id: url ? url.replace(/\/.+ \//i, '') : null}
    payload: {id: url ? url : null}
})