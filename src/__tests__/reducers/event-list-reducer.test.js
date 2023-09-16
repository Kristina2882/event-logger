import eventListReducer from "../../reducers/event-list-reducer";

describe('eventListReducer', () => {

let action;
const newEventData = {
    name: 'Item1',
    description: 'I was getting the same warning',
    numberOfEvent: 0,
    id: 1
};
const updateEventData = {
    name: 'Item1UPD',
    description: 'I was getting the same warning again',
    numberOfEvent: 0,
    id: 1
};

const currentState = {
    1: {
        name: 'Item1',
    description: 'I was getting the same warning',
    numberOfEvent: 0,
    id: 1
    },
    2:  {
        name: 'Item2',
    description: 'You was getting the same warning',
    numberOfEvent: 0,
    id: 2
    }
}


    test ('should return default state if no action is passed into reducer', () => {
        expect(eventListReducer({}, {type: null})).toEqual({});

    });
    test ('should add the new event to the eventList', () => {
        const {name, description, numberOfEvent, id} = newEventData;
        action = {
            type: 'ADD_EVENT',
            name: name,
            description: description,
            numberOfEvent:numberOfEvent,
            id: id
        }
        expect(eventListReducer({}, action)).toEqual({
            [id] : {
                name:name,
                description: description,
                numberOfEvent: numberOfEvent,
                id: id

            }
    });

    });

    test('should update the event', () => {
        const {name, description, numberOfEvent, id} = updateEventData;
        action = {
            type: 'ADD_EVENT',
            name: name,
            description: description,
            numberOfEvent:numberOfEvent,
            id: id
        }
        expect(eventListReducer(currentState, action)).toEqual({
            [id] : {
                name:name,
                description: description,
                numberOfEvent: numberOfEvent,
                id: id
            },
            2:  {
                name: 'Item2',
            description: 'You was getting the same warning',
            numberOfEvent: 0,
            id: 2
            }
    });
});

    test ('should delete the event',() => {
        action = {
            type: 'DELETE_EVENT',
            id: 2
        }
        expect(eventListReducer(currentState, action)).toEqual({
          1: {
            name: 'Item1',
            description: 'I was getting the same warning',
            numberOfEvent: 0,
            id: 1
          }
        })
    });

});
