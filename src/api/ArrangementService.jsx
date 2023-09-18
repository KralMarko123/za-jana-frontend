import { ARRANGEMENT_ENDPOINTS } from '../constants/ENDPOINTS';

const ArrangementService = {
  async saveNewArrangement(newArrangement, userId) {
    return await fetch(
      `${ARRANGEMENT_ENDPOINTS.SAVE_NEW_ARRANGEMENT}/${userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArrangement)
      }
    ).then(async (response) => {
      const arrangement = await response.json();
      return arrangement;
    });
  },

  async getAllArangementsForUser(userId) {
    return await fetch(
      `${ARRANGEMENT_ENDPOINTS.GET_ALL_ARRANGEMENTS_FOR_USER}/${userId}`,
      {
        method: 'GET'
      }
    ).then(async (response) => {
      const arrangements = await response.json();
      return arrangements;
    });
  },

  async addParticipantToArrangement(userId, arrangementId) {
    return await fetch(
      `${ARRANGEMENT_ENDPOINTS.ADD_PARTICIPANT_TO_ARRANGEMENT}/${userId}/${arrangementId}`,
      {
        method: 'POST'
      }
    ).then(async (response) => {
      const arrangement = await response.json();
      return arrangement;
    });
  },

  async removeParticipantToArrangement(userId, arrangementId) {
    return await fetch(
      `${ARRANGEMENT_ENDPOINTS.REMOVE_PARTICIPANT_TO_ARRANGEMENT}/${userId}/${arrangementId}`,
      {
        method: 'POST'
      }
    ).then(async (response) => {
      const arrangement = await response.json();
      return arrangement;
    });
  }
};

export default ArrangementService;
