let BASE_URL = 'http://localhost:7171';

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'http://localhost:7171';
    break;

  default:
    break;
}

const USER_BASE_PATH = 'users';
export const USER_ENDPOINTS = {
  AUTHENTICATE: `${BASE_URL}/${USER_BASE_PATH}/authenticate`,
  GET_USER: `${BASE_URL}/${USER_BASE_PATH}/simpleUser`,
  GET_USER_BY_USERNAME: `${BASE_URL}/${USER_BASE_PATH}/user`,
  GET_USER_WITH_SECTOR: `${BASE_URL}/${USER_BASE_PATH}`,
  GET_ALL_USERS: `${BASE_URL}/${USER_BASE_PATH}/all`,
  GET_ALL_USERS_IN_SECTOR: `${BASE_URL}/${USER_BASE_PATH}/all/sector`,
  GET_ALL_USERS_IN_COMPANY: `${BASE_URL}/${USER_BASE_PATH}/all/company`,
  SET_WORK_VISIBLE_FOR_USER: `${BASE_URL}/${USER_BASE_PATH}/setWorkVisible`,
  SAVE_USER: `${BASE_URL}/${USER_BASE_PATH}/save`
};

const ARRANGEMENT_BASE_PATH = 'arrangements';
export const ARRANGEMENT_ENDPOINTS = {
  SAVE_NEW_ARRANGEMENT: `${BASE_URL}/${ARRANGEMENT_BASE_PATH}`,
  GET_ALL_ARRANGEMENTS_FOR_USER: `${BASE_URL}/${ARRANGEMENT_BASE_PATH}/all`,
  ADD_PARTICIPANT_TO_ARRANGEMENT: `${BASE_URL}/${ARRANGEMENT_BASE_PATH}/addParticipant`,
  REMOVE_PARTICIPANT_TO_ARRANGEMENT: `${BASE_URL}/${ARRANGEMENT_BASE_PATH}/removeParticipant`
};
