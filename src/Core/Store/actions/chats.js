import { RSAA, getJSON } from 'redux-api-middleware';

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats/',
        method: 'GET',
        types: ['LOAD_CHATS_REQUEST', {
            type: 'LOAD_CHATS_SUCCESS', payload: async (action, state, response) => {
                const res = await getJSON(response);
                return { data: JSON.parse(res) }; //action.payload.data
            },
        }, 'LOAD_CHATS_FAILURE']
    }
})