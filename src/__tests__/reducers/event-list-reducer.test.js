import eventListReducer from "../../reducers/event-list-reducer";

describe('eventListReducer', () => {
    test ('should return default state if no action is passed into reducer', () => {
        expect(eventListReducer({}, {type: null})).toEqual({});

    });
});